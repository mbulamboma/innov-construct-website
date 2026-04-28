<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Methode non autorisee.']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    $data = $_POST;
}

$name = trim((string) ($data['name'] ?? ''));
$email = trim((string) ($data['email'] ?? ''));
$phone = trim((string) ($data['phone'] ?? ''));
$subject = trim((string) ($data['subject'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs obligatoires.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
    exit;
}

$smtpHost = 'smtp.hostinger.com';
$smtpPort = 587;
$smtpUsername = 'contact@innovconst.com';
$smtpPassword = 'Innov@243';

$fromEmail = 'contact@innovconst.com';
$fromName = 'INNOV CONSTRUCT - Site Web';
$toEmail = 'contact@innovconst.com';

$emailSubject = 'Nouveau message du formulaire de contact - ' . $subject;

$bodyText = "Nouveau message recu depuis le site INNOV CONSTRUCT\r\n\r\n";
$bodyText .= "Nom: {$name}\r\n";
$bodyText .= "Email: {$email}\r\n";
$bodyText .= "Telephone: " . ($phone !== '' ? $phone : 'Non renseigne') . "\r\n";
$bodyText .= "Sujet: {$subject}\r\n\r\n";
$bodyText .= "Message:\r\n{$message}\r\n";

function smtpRead($socket): string
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;
        if (preg_match('/^\d{3} /', $line) === 1) {
            break;
        }
    }

    return $response;
}

function smtpExpect($socket, array $expectedCodes): string
{
    $response = smtpRead($socket);
    $code = (int) substr($response, 0, 3);

    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('SMTP error: ' . trim($response));
    }

    return $response;
}

function smtpCommand($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    return smtpExpect($socket, $expectedCodes);
}

try {
    $socket = stream_socket_client(
        "tcp://{$smtpHost}:{$smtpPort}",
        $errno,
        $errstr,
        15,
        STREAM_CLIENT_CONNECT
    );

    if ($socket === false) {
        throw new RuntimeException("Connexion SMTP impossible ({$errno}): {$errstr}");
    }

    stream_set_timeout($socket, 15);

    smtpExpect($socket, [220]);
    smtpCommand($socket, 'EHLO innovconst.com', [250]);
    smtpCommand($socket, 'STARTTLS', [220]);

    if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
        throw new RuntimeException('Activation TLS impossible.');
    }

    smtpCommand($socket, 'EHLO innovconst.com', [250]);
    smtpCommand($socket, 'AUTH LOGIN', [334]);
    smtpCommand($socket, base64_encode($smtpUsername), [334]);
    smtpCommand($socket, base64_encode($smtpPassword), [235]);

    smtpCommand($socket, 'MAIL FROM:<' . $fromEmail . '>', [250]);
    smtpCommand($socket, 'RCPT TO:<' . $toEmail . '>', [250, 251]);
    smtpCommand($socket, 'DATA', [354]);

    $headers = [];
    $headers[] = 'From: ' . $fromName . ' <' . $fromEmail . '>';
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
    $headers[] = 'To: <' . $toEmail . '>';
    $headers[] = 'Subject: ' . mb_encode_mimeheader($emailSubject, 'UTF-8');
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=UTF-8';
    $headers[] = 'Content-Transfer-Encoding: 8bit';

    $safeBody = str_replace("\n.", "\n..", str_replace(["\r\n", "\r"], "\n", $bodyText));
    $safeBody = str_replace("\n", "\r\n", $safeBody);

    $payload = implode("\r\n", $headers) . "\r\n\r\n" . $safeBody . "\r\n.";
    fwrite($socket, $payload . "\r\n");
    smtpExpect($socket, [250]);

    smtpCommand($socket, 'QUIT', [221]);
    fclose($socket);

    echo json_encode(['success' => true, 'message' => 'Message envoye avec succes.']);
} catch (Throwable $e) {
    if (isset($socket) && is_resource($socket)) {
        @fwrite($socket, "QUIT\r\n");
        @fclose($socket);
    }

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur lors de l envoi du message.',
        'error' => $e->getMessage(),
    ]);
}
