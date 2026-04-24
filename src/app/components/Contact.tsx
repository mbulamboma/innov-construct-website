import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useT } from '../i18n';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const t = useT();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(json.message || t('Une erreur est survenue.', 'An error occurred.'));
      }
    } catch {
      setStatus('error');
      setErrorMsg(t('Impossible de joindre le serveur.', 'Unable to reach the server.'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <MessageSquare size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Contact</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            {t('Démarrons votre projet', "Let's start your project")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Notre équipe d'experts est à votre écoute pour concrétiser vos ambitions",
              "Our team of experts is here to bring your ambitions to life"
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10">{t('Nos coordonnées', 'Our contact info')}</h3>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: MapPin,
                  title: t("Adresse", "Address"),
                  content: ["5390 Avenue Tabu Ley", t("Gombe, Kinshasa", "Gombe, Kinshasa"), t("République Démocratique du Congo", "Democratic Republic of Congo")],
                  gradient: "from-blue-600 to-blue-700"
                },
                {
                  icon: Phone,
                  title: t("Téléphones", "Phones"),
                  content: ["+243 828 449 460", "+243 824 250 750", "+243 995 060 699"],
                  gradient: "from-emerald-600 to-teal-700"
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: ["contact@innovconst.com"],
                  gradient: "from-purple-600 to-purple-700",
                  link: "mailto:contact@innovconst.com"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-5 p-7 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={26} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    {item.content.map((line, i) => (
                      item.link && i === 0 ? (
                        <a key={i} href={item.link} className="text-blue-600 hover:text-blue-700 hover:underline transition-colors block">
                          {line}
                        </a>
                      ) : (
                        <p key={i} className="text-gray-600 leading-relaxed">{line}</p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <h4 className="text-xl font-bold mb-4">{t('Informations légales', 'Legal information')}</h4>
                <div className="space-y-2.5 text-blue-100/90">
                  <p><span className="font-semibold text-white">RCCM:</span> CD/KNG/RCCM/25-B-02557</p>
                  <p><span className="font-semibold text-white">ID NAT:</span> 01-F4200-N78104Z</p>
                  <p><span className="font-semibold text-white">{t('N° Impôt', 'Tax ID')}:</span> A2548853E</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">{t('Envoyez-nous un message', 'Send us a message')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-semibold">{t('Nom complet', 'Full name')} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all duration-300"
                  placeholder={t("Votre nom", "Your name")}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-semibold">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all duration-300"
                  placeholder={t("votre@email.com", "your@email.com")}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-semibold">{t('Téléphone', 'Phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all duration-300"
                  placeholder="+243 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2 font-semibold">{t('Sujet', 'Subject')} *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none transition-all duration-300"
                >
                  <option value="">{t('Sélectionnez un sujet', 'Select a subject')}</option>
                  <option value="assistance">{t('Assistance terrain', 'Field assistance')}</option>
                  <option value="suivi">{t('Suivi et contrôle', 'Monitoring & control')}</option>
                  <option value="etudes">{t('Études techniques', 'Technical studies')}</option>
                  <option value="execution">{t('Exécution de travaux de génie civil', 'Civil engineering works execution')}</option>
                  <option value="devis">{t('Demande de devis', 'Quote request')}</option>
                  <option value="autre">{t('Autre', 'Other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-semibold">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white outline-none resize-none transition-all duration-300"
                  placeholder={t("Décrivez votre projet ou votre besoin...", "Describe your project or need...")}
                ></textarea>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl px-5 py-4 font-medium"
                  >
                    <CheckCircle size={20} className="text-emerald-600 flex-shrink-0" />
                    {t('Message envoyé ! Nous vous contacterons bientôt.', 'Message sent! We will contact you soon.')}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 rounded-2xl px-5 py-4 font-medium"
                  >
                    <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-5 rounded-2xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                {status === 'loading' ? (
                  <><Loader2 size={20} className="animate-spin" />{t('Envoi en cours...', 'Sending...')}</>
                ) : (
                  <>{t('Envoyer le message', 'Send message')}<Send size={20} /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
