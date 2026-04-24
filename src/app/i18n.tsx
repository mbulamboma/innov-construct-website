import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from 'react';

export type Lang = 'fr' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (fr: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr';
    return (localStorage.getItem('inco-lang') as Lang) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('inco-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useCallback((fr: string, en: string) => (lang === 'en' ? en : fr), [lang]);

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be inside LanguageProvider');
  return ctx;
}

export function useT() {
  return useLang().t;
}
