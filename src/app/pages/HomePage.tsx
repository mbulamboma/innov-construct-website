import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { VisualStrip } from '../components/VisualStrip';
import { Services } from '../components/Services';
import { ImpactSection } from '../components/ImpactSection';
import { SplitImageSection } from '../components/SplitImageSection';
import { Projects } from '../components/Projects';
import { PontLowaParallax } from '../components/PontLowaParallax';
import { Team } from '../components/Team';
import { Resources } from '../components/Resources';
import { Contact } from '../components/Contact';
import { Partners } from '../components/Partners';
import { SiteOverlay } from '../components/SiteOverlay';

function Chantier({ children, variant = 'light' }: { children: React.ReactNode; variant?: 'light' | 'dark' }) {
  return (
    <div className="relative" style={{ position: 'relative' }}>
      {children}
      <SiteOverlay variant={variant} />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Chantier variant="dark"><ImpactSection /></Chantier>
      <Chantier><About /></Chantier>
      <VisualStrip />
      <Chantier><Services /></Chantier>
      <Chantier><SplitImageSection /></Chantier>
      <Chantier><Projects /></Chantier>
      <Chantier variant="dark"><PontLowaParallax /></Chantier>
      <Chantier><Team /></Chantier>
      <Chantier><Resources /></Chantier>
      <Chantier><Partners /></Chantier>
      <Chantier><Contact /></Chantier>
    </>
  );
}
