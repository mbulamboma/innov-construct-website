import { Award } from 'lucide-react';
import { Certificats } from '../components/Certificats';
import { PageHero } from './PageHero';
import { useT } from '../i18n';

export default function CertificatsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        title={t('Certificats & Attestations', 'Certificates & Attestations')}
        subtitle={t(
          'Attestations de bonne exécution délivrées par nos partenaires et clients.',
          'Certificates of good execution issued by our partners and clients.',
        )}
        icon={<Award className="text-white" size={28} />}
      />
      <Certificats />
    </>
  );
}
