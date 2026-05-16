"use client";

import './globals.css';
import Script from 'next/script';
import { ThemeProvider, useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';

// Initialize theme script - runs synchronously before React hydration
const themeScript = `
(function() {
  try {
    const theme = localStorage.getItem('nour-theme');
    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.remove('dark');
      html.style.colorScheme = 'light';
    } else {
      html.classList.add('dark');
      html.style.colorScheme = 'dark';
    }
  } catch (e) {}
})();
`;

const translations = {
  ar: {
    title: 'نور',
    description: 'تجربة عربية نظيفة للقراءة والتركيز.',
    home: 'الرئيسية',
    recitations: 'التلاوات',
    quran: 'القرآن',
    about: 'حول',
  },
  en: {
    title: 'Nour',
    description: 'A calm Quran experience designed for focus.',
    home: 'Home',
    recitations: 'Recitations',
    quran: 'Quran',
    about: 'About',
  },
};

const navLinks = {
  ar: [
    { label: 'الرئيسية', href: '/' },
    { label: 'المصحف', href: '/mushaf' },
    { label: 'التلاوات', href: '/recitations' },
    { label: 'حول', href: '#about' },
  ],
  en: [
    { label: 'Home', href: '/' },
    { label: 'Mushaf', href: '/mushaf' },
    { label: 'Recitations', href: '/recitations' },
    { label: 'About', href: '#about' },
  ],
};

function ThemeToggle({ locale }: { locale: 'ar' | 'en' }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900/85 dark:text-slate-100"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{theme === 'dark' ? translations[locale].title : translations[locale].description}</span>
    </button>
  );
}

function LanguageSwitcher({ locale, setLocale }: { locale: 'ar' | 'en'; setLocale: (value: 'ar' | 'en') => void }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 p-1 text-sm dark:border-slate-700 dark:bg-slate-900/85">
      {(['ar', 'en'] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`rounded-full px-3 py-2 transition ${locale === lang ? 'bg-slate-950 text-white shadow-lg dark:bg-white/10 dark:text-white' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`}
        >
          {lang === 'ar' ? 'العربية' : 'English'}
        </button>
      ))}
    </div>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'ar' | 'en'>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLocale = window.localStorage.getItem('nour-language');
    if (savedLocale === 'en' || savedLocale === 'ar') {
      setLocale(savedLocale);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem('nour-language', locale);
  }, [locale, mounted]);

  const nav = navLinks[locale];

  return (
    <html lang={locale === 'ar' ? 'ar' : 'en'} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className="min-h-screen bg-surface text-slate-900 antialiased transition-colors duration-500 dark:bg-navy dark:text-slate-100">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="nour-theme" disableTransitionOnChange>
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-6 sm:px-6 lg:px-10">
            <header className="mb-8 flex flex-col gap-6 rounded-[2rem] border border-slate-200/60 bg-white/80 p-6 shadow-glow backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-950/75 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{translations[locale].title}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{translations[locale].description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 justify-end">
                <LanguageSwitcher locale={locale} setLocale={setLocale} />
                <ThemeToggle locale={locale} />
                <nav aria-label="Primary navigation">
                  <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                    {nav.map((item) => (
                      <li key={item.label}>
                        <a href={item.href} className="transition hover:text-slate-900 dark:hover:text-white">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </header>

            <main className="flex-1">{children}</main>

            <footer className="mt-10 border-t border-slate-200/60 pt-6 text-sm text-slate-500 dark:border-slate-700/60 dark:text-slate-400">
              <p>{locale === 'ar' ? '© 2026 Nour — تصميم هادئ للقرآن والتأمل.' : '© 2026 Nour — Calm Quran experience for focus.'}</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
