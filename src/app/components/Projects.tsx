import { Building2, MapPin, Droplet, Layers, TrendingUp, Home } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pontLowaImage from '../../imports/Participation_aux_études_du_pont_Lowa-1.jpeg';
import appartementImage from '../../imports/Appartement_VisionGreen-1.png';
import bureauImage from '../../imports/Bureaux_Vision_Green-1.png';
import dalotImage from '../../imports/WhatsApp Image 2026-04-22 at 6.10.54 PM (2).jpeg';
import bumbuImage from '../../imports/conc-2.jpeg';
import { useT } from '../i18n';

export function Projects() {
  const t = useT();
  const projects = [
    {
      title: t('Immeuble R+2 - Bumbu', 'R+2 Building - Bumbu'),
      category: t('Batiment residentiel collectif', 'Collective residential building'),
      description: t(
        "Projet de conception d'un immeuble R+2 dans la commune de BUMBU.",
        'Design project for an R+2 building in BUMBU district.'
      ),
      icon: Building2,
      image: bumbuImage,
      location: t('Kinshasa - Bumbu', 'Kinshasa - Bumbu'),
      featured: true
    },
    {
      title: t('Dalot 60 tonnes - Terre Jaune', '60-ton Culvert - Terre Jaune'),
      category: t('Ouvrage hydraulique', 'Hydraulic structure'),
      description: t(
        'Conception, dimensionnement et suivi des travaux de construction d\'un dalot 60 tonnes a Kinshasa / Terre Jaune pour la Ville de Kinshasa.',
        'Design, structural sizing and construction supervision for a 60-ton culvert in Kinshasa / Terre Jaune for the City of Kinshasa.'
      ),
      icon: Droplet,
      image: dalotImage,
      location: t('Kinshasa - Terre Jaune', 'Kinshasa - Terre Jaune'),
      featured: true
    },
    {
      title: t("Pont Lowa", "Lowa Bridge"),
      category: t("Ouvrages d'art", "Engineering structures"),
      description: t(
        "Participation aux études techniques du pont - Infrastructure majeure connectant les communautés",
        "Participation in technical studies of the bridge — major infrastructure connecting communities"
      ),
      icon: Building2,
      image: pontLowaImage,
      location: t("RDC, Haut Uélé / Durba", "DRC, Haut Uélé / Durba"),
      featured: true
    },
    {
      title: t("Vision Green - Bureaux", "Vision Green - Offices"),
      category: t("Bâtiment commercial", "Commercial building"),
      description: t(
        "Conception et études structurelles pour bureaux modernes - Architecture contemporaine",
        "Design and structural studies for modern offices — contemporary architecture"
      ),
      icon: Building2,
      image: bureauImage,
      location: t("RDC, Haut Uélé / Durba", "DRC, Haut Uélé / Durba"),
      featured: true
    },
    {
      title: t("Vision Green - Appartements", "Vision Green - Apartments"),
      category: t("Bâtiment résidentiel", "Residential building"),
      description: t(
        "Études structurelles et calcul béton armé - Complexe résidentiel haut standing",
        "Structural studies and reinforced concrete calculations — upscale residential complex"
      ),
      icon: Home,
      image: appartementImage,
      location: t("RDC, Haut Uélé / Durba", "DRC, Haut Uélé / Durba"),
      featured: true
    },
    {
      title: t("Route Likasi – Borne 32", "Likasi Road – Marker 32"),
      category: t("Infrastructure routière", "Road infrastructure"),
      description: t("Études de faisabilité et conception routière", "Feasibility studies and road design"),
      icon: MapPin,
      image: null,
      location: "Likasi",
      featured: false
    },
    {
      title: t("Rocades de Kinshasa", "Kinshasa Ring Roads"),
      category: t("Réseaux urbains", "Urban networks"),
      description: t("Études techniques et coordination des travaux", "Technical studies and works coordination"),
      icon: Layers,
      image: null,
      location: "Kinshasa",
      featured: false
    },
    {
      title: t("Projet hydroélectrique Kalumba", "Kalumba Hydropower Project"),
      category: t("Hydraulique", "Hydraulics"),
      description: t("Études d'impact et dimensionnement hydraulique", "Impact studies and hydraulic sizing"),
      icon: Droplet,
      image: null,
      location: "Kalumba",
      featured: false
    }
  ];

  return (
    <section id="projets" className="py-32 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.08),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <TrendingUp size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">{t('Nos Réalisations', 'Our Projects')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            {t("Portfolio d'excellence", "Portfolio of excellence")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Découvrez nos contributions majeures aux infrastructures stratégiques de la RDC",
              "Discover our major contributions to the DRC's strategic infrastructure"
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                {project.image ? (
                  <>
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="w-full h-full">
                      <ImageWithFallback src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <motion.div initial={{ scale: 0.5, opacity: 0 }} whileHover={{ scale: 1, opacity: 1 }} className="text-center text-white p-6">
                        <MapPin className="mx-auto mb-3" size={40} />
                        <p className="text-lg font-bold">{project.location}</p>
                        <p className="text-sm text-blue-100 mt-2">{project.category}</p>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>
                    <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }}>
                      <project.icon className="text-white/50 relative z-10" size={90} />
                    </motion.div>
                  </div>
                )}

                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <span className="text-xs font-bold">{project.category}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors leading-tight">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed line-clamp-2">{project.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('Autres projets', 'Other projects')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-40 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-5 left-5 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-5 right-5 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                  </div>
                  <motion.div whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.8 }}>
                    <project.icon className="text-white/50 relative z-10" size={64} />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                    <span className="text-xs font-bold text-gray-700">{project.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
                      <MapPin size={12} className="text-blue-600" />
                    </div>
                    <span className="font-medium">{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
