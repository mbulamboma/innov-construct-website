import { Users } from 'lucide-react';
import { About } from '../components/About';
import { Team } from '../components/Team';
import { ImpactSection } from '../components/ImpactSection';
import { PageHero } from './PageHero';
import { useT } from '../i18n';

export default function AboutPage() {
  const t = useT();
  return (
    <>
      <PageHero
        title={t("À propos d'INCO", 'About INCO')}
        subtitle={t(
          "INNOV CONSTRUCT SARL — votre partenaire technique pour les infrastructures d'excellence.",
          "INNOV CONSTRUCT SARL — your technical partner for infrastructure excellence."
        )}
        icon={<Users className="text-white" size={28} />}
      />
      <About />
      <ImpactSection />
      <Team />
    </>
  );
}
