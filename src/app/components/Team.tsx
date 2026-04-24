import { GraduationCap, Ruler, Droplets, HardHat, Users, Sparkles, Zap, Route } from 'lucide-react';
import { motion } from 'motion/react';
import { useT } from '../i18n';


export function Team() {
  const t = useT();
  const expertise = [
    {
      icon: GraduationCap,
      title: t("Ingénieurs civils", "Civil engineers"),
      speciality: t("Structures & Ouvrages d'art", "Structures & engineering works"),
      color: "from-blue-500 to-blue-600",
      photo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: Droplets,
      title: t("Ingénieurs civils", "Civil engineers"),
      speciality: t("Hydraulique & Constructions hydrauliques", "Hydraulics & hydraulic constructions"),
      color: "from-cyan-500 to-cyan-600",
      photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: Zap,
      title: t("Ingénieurs électriciens", "Electrical engineers"),
      speciality: t("Électricité du bâtiment & Courants faibles", "Building electricity & low voltage"),
      color: "from-yellow-500 to-amber-600",
      photo: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: Route,
      title: t("Experts routiers", "Road experts"),
      speciality: t("Conception & Dimensionnement routier", "Road design & sizing"),
      color: "from-emerald-500 to-teal-600",
      photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: Ruler,
      title: t("Topographes", "Surveyors"),
      speciality: t("Relevés & Implantations", "Surveys & layouts"),
      color: "from-purple-500 to-purple-600",
      photo: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=700&q=80",
    },
    {
      icon: HardHat,
      title: t("Experts BTP", "Construction experts"),
      speciality: t("Suivi de chantiers & Contrôle qualité", "Site monitoring & quality control"),
      color: "from-orange-500 to-orange-600",
      photo: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80",
    }
  ];

  const skills = [
    t("Calcul de structures", "Structural calculations"),
    t("Géotechnique", "Geotechnics"),
    t("Hydraulique", "Hydraulics"),
    t("Topographie", "Topography"),
    t("Management", "Management")
  ];

  return (
    <section id="equipe" className="py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-full border border-purple-100">
            <Users size={16} className="text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm">{t('Notre Équipe', 'Our Team')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 via-purple-900 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            {t("Talents d'exception", "Exceptional talent")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Plus de 15 experts qualifiés et passionnés qui transforment vos ambitions en réalité",
              "More than 15 qualified and passionate experts turning your ambitions into reality"
            )}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {expertise.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${expert.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>

              <motion.div
                whileHover={{ y: -12 }}
                className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={expert.photo}
                    alt={expert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent`}></div>
                  <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${expert.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    <expert.icon className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{expert.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{expert.speciality}</p>
                </div>

                <div className={`h-1.5 bg-gradient-to-r ${expert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 rounded-[2.5rem] p-12 md:p-16 text-white overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30"
              >
                <Sparkles className="text-white" size={48} />
              </motion.div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">{t('15+ Experts', '15+ Experts')}</h3>
                <p className="text-blue-100/90 text-lg leading-relaxed max-w-md">
                  {t(
                    "Une équipe dédiée à l'excellence, l'innovation et la réussite de vos projets",
                    "A team dedicated to excellence, innovation and the success of your projects"
                  )}
                </p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-blue-200/80 mb-4 font-semibold">{t('Compétences clés', 'Key skills')}</p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-end">
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-sm font-medium border border-white/10 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
