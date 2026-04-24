import { Laptop, Settings, Database, Cpu, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import {
  AutoCADLogo,
  RevitLogo,
  Civil3DLogo,
  RobotLogo,
  MSProjectLogo,
  PlaxisLogo,
  SoftwareCard
} from './SoftwareLogos';
import { useT } from '../i18n';

export function Resources() {
  const t = useT();
  const software = [
    { name: "AutoCAD", category: t("Dessin technique", "Technical drawing"), Logo: AutoCADLogo },
    { name: "Revit", category: t("BIM & Modélisation", "BIM & Modeling"), Logo: RevitLogo },
    { name: "Civil 3D", category: t("Infrastructure civile", "Civil infrastructure"), Logo: Civil3DLogo },
    { name: "Robot Structural Analysis", category: t("Calcul de structures", "Structural analysis"), Logo: RobotLogo },
    { name: "MS Project", category: t("Gestion de projet", "Project management"), Logo: MSProjectLogo },
    { name: "Plaxis", category: t("Géotechnique", "Geotechnics"), Logo: PlaxisLogo }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100">
            <Code2 size={16} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">{t('Ressources & Outils', 'Resources & Tools')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-slate-900 via-blue-900 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
            {t('Technologies de pointe', 'Cutting-edge technology')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t(
              "Les meilleurs logiciels et équipements pour garantir l'excellence de nos prestations",
              "The best software and equipment to guarantee the excellence of our services"
            )}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-10 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

            <div className="relative flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <Settings className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white">{t('Logiciels professionnels', 'Professional software')}</h3>
            </div>
            <div className="relative grid sm:grid-cols-2 gap-4">
              {software.map((soft, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <SoftwareCard
                    Logo={soft.Logo}
                    name={soft.name}
                    category={soft.category}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                <Laptop className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{t('Matériel performant', 'High-performance hardware')}</h3>
            </div>
            <div className="space-y-5">
              {[
                {
                  icon: Cpu,
                  title: t("Stations haute performance", "High-performance workstations"),
                  desc: t("Ordinateurs optimisés pour le calcul et la modélisation 3D", "Computers optimized for calculation and 3D modeling"),
                  gradient: "from-blue-600 to-cyan-600"
                },
                {
                  icon: Database,
                  title: t("Sauvegarde sécurisée", "Secure backup"),
                  desc: t("Protection et archivage de vos données projet", "Protection and archiving of your project data"),
                  gradient: "from-emerald-600 to-teal-600"
                },
                {
                  icon: Settings,
                  title: t("Équipements de mesure", "Measurement equipment"),
                  desc: t("Matériel topographique et de contrôle qualité", "Topographic and quality control equipment"),
                  gradient: "from-purple-600 to-pink-600"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group flex items-start gap-5 bg-gradient-to-r from-slate-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1.5">{item.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
