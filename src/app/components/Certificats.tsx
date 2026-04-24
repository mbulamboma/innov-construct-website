import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useT } from '../i18n';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const PDF_URL = '/certificats-visiongreen.pdf';

export function Certificats() {
  const t = useT();
  const [numPages, setNumPages] = useState<number>(0);
  const [selectedPage, setSelectedPage] = useState<number | null>(null);
  const [loadError, setLoadError] = useState(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const goToPrev = () => {
    if (selectedPage !== null && selectedPage > 1) setSelectedPage(selectedPage - 1);
  };
  const goToNext = () => {
    if (selectedPage !== null && selectedPage < numPages) setSelectedPage(selectedPage + 1);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Award size={16} />
            {t('Attestations officielles', 'Official certificates')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            {t('Nos Certificats', 'Our Certificates')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {t(
              'Attestations de bonne exécution délivrées par nos clients partenaires.',
              'Certificates of good execution issued by our partner clients.',
            )}
          </motion.p>
        </div>

        {/* PDF grid */}
        {loadError ? (
          <div className="text-center py-16 text-slate-500">
            {t('Impossible de charger les certificats.', 'Unable to load certificates.')}
          </div>
        ) : (
          <Document
            file={PDF_URL}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={() => setLoadError(true)}
            loading={
              <div className="flex justify-center py-16">
                <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
                <motion.div
                  key={pageNum}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: pageNum * 0.08 }}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 cursor-pointer"
                  onClick={() => setSelectedPage(pageNum)}
                >
                  {/* Certificate number badge */}
                  <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                    {t('Attestation', 'Certificate')} {pageNum}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 z-10 bg-blue-900/0 group-hover:bg-blue-900/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3 shadow-xl">
                      <ZoomIn className="text-blue-700" size={28} />
                    </div>
                  </div>

                  {/* PDF page thumbnail */}
                  <div className="flex items-center justify-center bg-slate-50 p-4 select-none">
                    <Page
                      pageNumber={pageNum}
                      width={340}
                      renderAnnotationLayer={false}
                      renderTextLayer={false}
                      loading={
                        <div className="w-[340px] h-[460px] flex items-center justify-center">
                          <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        </div>
                      }
                    />
                  </div>

                  <div className="px-5 py-4 border-t border-slate-100 bg-white">
                    <p className="text-sm font-semibold text-slate-700">
                      {t('Attestation de bonne exécution', 'Certificate of good execution')} — {pageNum}/{numPages}
                    </p>
                    <p className="text-xs text-blue-600 mt-0.5 font-medium">
                      {t('Cliquer pour agrandir', 'Click to enlarge')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Document>
        )}
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selectedPage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="relative bg-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white border-b border-slate-100">
                <span className="font-bold text-slate-800 flex items-center gap-2">
                  <Award size={18} className="text-blue-600" />
                  {t('Attestation', 'Certificate')} {selectedPage} / {numPages}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={goToPrev}
                    disabled={selectedPage <= 1}
                    className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label={t('Précédent', 'Previous')}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={goToNext}
                    disabled={selectedPage >= numPages}
                    className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label={t('Suivant', 'Next')}
                  >
                    <ChevronRight size={20} />
                  </button>
                  <button
                    onClick={() => setSelectedPage(null)}
                    className="p-2 rounded-lg hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors"
                    aria-label={t('Fermer', 'Close')}
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Full-size page */}
              <div className="p-6 flex justify-center">
                <Document file={PDF_URL}>
                  <Page
                    pageNumber={selectedPage}
                    width={Math.min(window.innerWidth * 0.8, 900)}
                    renderAnnotationLayer={false}
                    renderTextLayer={true}
                    loading={
                      <div className="w-full h-64 flex items-center justify-center">
                        <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      </div>
                    }
                  />
                </Document>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
