import { MapPin, ClipboardCheck, FileText, HardHat, Zap, BarChart3, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useT } from '../i18n';
import suiviControleImg from '../../imports/illust.jpeg';

export function Services() {
  const t = useT();
  const services = [
    {
      icon: MapPin,
      title: t("Assistance terrain", "Field assistance"),
      color: "from-blue-500 to-blue-600",
      photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
      features: [
        t("Collecte de données sur site", "On-site data collection"),
        t("Coordination avec les équipes locales", "Coordination with local teams"),
        t("Mobilisation rapide d'équipes", "Rapid team mobilization"),
        t("Support logistique", "Logistics support")
      ]
    },
    {
      icon: ClipboardCheck,
      title: t("Suivi et contrôle", "Monitoring & control"),
      color: "from-emerald-500 to-emerald-600",
      photo: suiviControleImg,
      features: [
        t("Contrôle qualité des travaux", "Works quality control"),
        t("Suivi de planning et délais", "Schedule and deadline tracking"),
        t("Rapports d'avancement détaillés", "Detailed progress reports"),
        t("Assistance maîtrise d'ouvrage", "Project owner assistance")
      ]
    },
    {
      icon: FileText,
      title: t("Études techniques", "Technical studies"),
      color: "from-purple-500 to-purple-600",
      photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
      features: [
        t("Études de faisabilité", "Feasibility studies"),
        t("Calculs des structures des bâtiments et ouvrages d'art", "Structural calculations for buildings and civil works"),
        t("Études routières et géotechniques", "Road and geotechnical studies"),
        t("Évaluation financière de projets", "Project financial evaluation")
      ]
    },
    {
      icon: HardHat,
      title: t("Exécution des travaux", "Works execution"),
      color: "from-orange-500 to-amber-600",
      photo: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=80",
      features: [
        t("Construction de bâtiments", "Building construction"),
        t("Travaux de génie civil et routier", "Civil and road engineering works"),
        t("Ouvrages hydrauliques", "Hydraulic structures"),
        t("Pilotage complet de chantier", "Complete site management")
      ]
    }
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-10"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <Zap size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">{t('Nos Services', 'Our Services')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            {t("L'excellence à chaque étape", "Excellence at every step")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "De l'assistance terrain aux études techniques et à l'exécution des travaux de génie civil, nous déployons notre expertise pour garantir le succès de vos projets",
              "From field assistance to technical studies and civil engineering works execution, we deploy our expertise to ensure the success of your projects"
            )}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.photo}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                  <service.icon className="text-white" size={22} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-emerald-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-[2.5rem] p-12 md:p-16 text-white overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('Pourquoi nous choisir ?', 'Why choose us?')}</h3>
              <p className="text-blue-100/90 text-lg mb-8 leading-relaxed">
                {t(
                  "Notre expertise locale combinée au respect des standards internationaux fait de nous le partenaire privilégié pour vos projets d'infrastructure en RDC.",
                  "Our local expertise combined with our international standards makes us the preferred partner for your infrastructure projects in the DRC."
                )}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                  <Zap className="text-yellow-400" size={24} />
                  <span className="font-semibold">{t('Réactivité optimale', 'Optimal responsiveness')}</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                  <BarChart3 className="text-yellow-400" size={24} />
                  <span className="font-semibold">{t('Excellence garantie', 'Guaranteed excellence')}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { value: "15+", label: t("Experts qualifiés", "Qualified experts"), gradient: "from-blue-500 to-cyan-500" },
                { value: "100%", label: t("Satisfaction client", "Client satisfaction"), gradient: "from-emerald-500 to-teal-500" },
                { value: "Lun-Ven", label: t("8h30 - 16h00", "Mon-Fri 8:30am - 4:00pm"), gradient: "from-purple-500 to-pink-500" },
                { value: "3+", label: t("Années d'expérience", "Years of experience"), gradient: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent break-words">{stat.value}</p>
                    <p className="text-sm text-blue-200/80 leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
