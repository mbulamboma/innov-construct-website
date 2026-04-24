import { Mail } from 'lucide-react';
import { Contact } from '../components/Contact';
import { MapSection } from '../components/MapSection';
import { PageHero } from './PageHero';
import { useT } from '../i18n';

export default function ContactPage() {
  const t = useT();
  return (
    <>
      <PageHero
        title={t('Contactez-nous', 'Contact us')}
        subtitle={t(
          'Parlons de votre projet. Notre équipe vous répond sous 24 h.',
          "Let's talk about your project. Our team responds within 24 hours."
        )}
        icon={<Mail className="text-white" size={28} />}
      />
      <Contact />
      <MapSection />
    </>
  );
}
