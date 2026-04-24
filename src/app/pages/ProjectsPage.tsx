import { Building2 } from 'lucide-react';
import { BumbuProjectShowcase } from '../components/BumbuProjectShowcase';
import { DalotProjectShowcase } from '../components/DalotProjectShowcase';
import { Projects } from '../components/Projects';
import { PontLowaParallax } from '../components/PontLowaParallax';
import { SplitImageSection } from '../components/SplitImageSection';
import { PageHero } from './PageHero';
import { useT } from '../i18n';

export default function ProjectsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        title={t('Nos Réalisations', 'Our Projects')}
        subtitle={t(
          "Des projets d'envergure à travers la République Démocratique du Congo.",
          "Major projects across the Democratic Republic of Congo."
        )}
        icon={<Building2 className="text-white" size={28} />}
      />
      <Projects />
      <BumbuProjectShowcase />
      <DalotProjectShowcase />
      <PontLowaParallax />
      <SplitImageSection />
    </>
  );
}
