import { Wrench } from 'lucide-react';
import { Services } from '../components/Services';
import { Resources } from '../components/Resources';
import { PageHero } from './PageHero';
import { useT } from '../i18n';

export default function ServicesPage() {
  const t = useT();
  return (
    <>
      <PageHero
        title={t('Nos Services', 'Our Services')}
        subtitle={t(
          "De l'étude à la livraison : une offre d'ingénierie et de construction complète pour vos projets en RDC.",
          "From design to delivery: a complete engineering and construction offering for your projects in the DRC."
        )}
        icon={<Wrench className="text-white" size={28} />}
      />
      <Services />
      <Resources />
    </>
  );
}
