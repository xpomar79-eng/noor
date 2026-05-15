"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Moon,
  Sun,
  Sparkles,
} from 'lucide-react';

const FILE_START = 3;
const FILE_END = 625;
const PAGE_COUNT = FILE_END - FILE_START + 1;
const STORAGE_KEY = 'nour-mushaf-last-page';

const strings = {
  ar: {
    title: 'مصحف النور',
    subtitle: 'تجربة قراءة القرآن الفاخرة',
    description: 'تصفح صفحات المصحف المحلي بسلاسة، وادعم القراءة الليلية بنمط داكن، والتنقل بالمسات، والتكبير الكامل.',
    currentPage: 'الصفحة الحالية',
    directionHint: 'اتجاه القراءة',
    lastSaved: 'آخر صفحة محفوظة محلياً',
    prev: 'الصفحة السابقة',
    next: 'الصفحة التالية',
    zoomIn: 'تكبير',
    zoomOut: 'تصغير',
    resetZoom: 'إعادة الضبط',
    fullscreen: 'وضع ملء الشاشة',
    exitFullscreen: 'خروج من الشاشة',
    jumpLabel: 'الانتقال إلى الصفحة',
    goToPage: 'اذهب',
    startOver: 'ابدأ من البداية',
    controls: 'عناصر التحكم',
    controlsDescription: 'استخدم الأزرار أو تمرير الشاشة للتنقل بين صفحات المصحف سريعاً.',
    swipeTip: 'مرر لليسار/اليمين للتنقل بين الصفحات.',
    zoomTip: 'اضغط على أزرار التكبير لتكبير الصفحة.',
    fullscreenTip: 'اضغط لعرض الصفحة بتركيز كامل.',
    themeToggle: 'تبديل الوضع',
    savedHint: 'سيُحفظ موضعك تلقائياً.',
    inputPlaceholder: `1 - ${PAGE_COUNT}`,
  },
  en: {
    title: 'Nour Mushaf',
    subtitle: 'Premium Quran Reading Experience',
    description: 'Browse the local Mushaf images with smooth navigation, swipe gestures, zoom, fullscreen reading, and saved page state.',
    currentPage: 'Current page',
    directionHint: 'Reading direction',
    lastSaved: 'Last saved locally',
    prev: 'Previous',
    next: 'Next',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    resetZoom: 'Reset zoom',
    fullscreen: 'Fullscreen mode',
    exitFullscreen: 'Exit fullscreen',
    jumpLabel: 'Jump to page',
    goToPage: 'Go',
    startOver: 'Start over',
    controls: 'Controls',
    controlsDescription: 'Use the controls or swipe across the page to move through the Mushaf comfortably.',
    swipeTip: 'Swipe left/right to change pages.',
    zoomTip: 'Use zoom buttons to scale the page.',
    fullscreenTip: 'Open the page in focused fullscreen mode.',
    themeToggle: 'Toggle theme',
    savedHint: 'Your reading position is saved automatically.',
    inputPlaceholder: `1 - ${PAGE_COUNT}`,
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function MushafPage() {
  const [locale, setLocale] = useState<'ar' | 'en'>('ar');
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [inputValue, setInputValue] = useState('1');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const viewerRef = useRef<HTMLDivElement>(null);

  const direction = locale === 'ar' ? 'rtl' : 'ltr';
  const t = strings[locale];
  const currentFile = currentPage + FILE_START - 1;
  const paddedFile = String(currentFile).padStart(3, '0');
  const imagePath = `/mushaf/${paddedFile}.jpg`;
  const prevPage = clamp(currentPage - 1, 1, PAGE_COUNT);
  const nextPage = clamp(currentPage + 1, 1, PAGE_COUNT);

  useEffect(() => {
    setMounted(true);
    const savedLocale = window.localStorage.getItem('nour-home-locale');
    if (savedLocale === 'ar' || savedLocale === 'en') {
      setLocale(savedLocale);
    } else if (navigator.language?.startsWith('en')) {
      setLocale('en');
    }

    const savedPage = window.localStorage.getItem(STORAGE_KEY);
    const stablePage = savedPage ? Number(savedPage) : 1;
    if (!Number.isNaN(stablePage)) {
      setCurrentPage(clamp(stablePage, 1, PAGE_COUNT));
      setInputValue(String(clamp(stablePage, 1, PAGE_COUNT)));
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(STORAGE_KEY, String(currentPage));
    setInputValue(String(currentPage));
  }, [currentPage]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleNext = () => {
    setLoading(true);
    setCurrentPage((value) => clamp(value + 1, 1, PAGE_COUNT));
  };

  const handlePrev = () => {
    setLoading(true);
    setCurrentPage((value) => clamp(value - 1, 1, PAGE_COUNT));
  };

  const handleZoomIn = () => setZoom((value) => clamp(value + 0.15, 1, 2.4));
  const handleZoomOut = () => setZoom((value) => clamp(value - 0.15, 0.8, 2.4));
  const handleResetZoom = () => setZoom(1);

  const handleFullscreenToggle = async () => {
    if (!viewerRef.current) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await viewerRef.current.requestFullscreen();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const delta = touchEndX - touchStartX;
    const threshold = 55;

    if (delta > threshold) {
      if (direction === 'rtl') {
        handleNext();
      } else {
        handlePrev();
      }
    }

    if (delta < -threshold) {
      if (direction === 'rtl') {
        handlePrev();
      } else {
        handleNext();
      }
    }

    setTouchStartX(null);
  };

  const handleJump = () => {
    const target = clamp(Number(inputValue), 1, PAGE_COUNT);
    if (!Number.isNaN(target)) {
      setLoading(true);
      setCurrentPage(target);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const dirLabel = locale === 'ar' ? 'RTL' : 'LTR';

  return (
    <main dir={direction} className="min-h-screen bg-surface text-slate-950 transition-colors duration-500 dark:bg-navy dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="mb-8 grid gap-6 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-glow backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85 lg:grid-cols-[1.35fr_auto]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{t.title}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">{t.subtitle}</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t.description}</p>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-slate-200/75 bg-slate-50 p-5 text-sm text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200">
            <div className="flex items-center justify-between gap-3 rounded-3xl bg-white/90 p-4 dark:bg-slate-950/80">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{t.currentPage}</p>
                <p className="mt-2 text-xl font-semibold">{currentPage}</p>
              </div>
              <div className="rounded-3xl bg-slate-100 px-3 py-2 text-xs dark:bg-slate-800">{dirLabel}</div>
            </div>
            <div className="rounded-3xl bg-slate-950/5 p-4 dark:bg-slate-800/70">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{t.lastSaved}</p>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{t.savedHint}</p>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              disabled={!mounted}
              className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {t.themeToggle}
            </button>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{t.controls}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t.controlsDescription}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.53fr_0.9fr]">
          <section
            ref={viewerRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-5 shadow-[0_35px_80px_rgba(15,23,42,0.08)] dark:border-slate-700/70 dark:bg-slate-950/85"
          >
            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{t.currentPage}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{currentPage} / {PAGE_COUNT}</p>
              </div>
              <div className="inline-flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">{t.directionHint}: {dirLabel}</span>
                <span className="rounded-full bg-slate-100 px-3 py-2 dark:bg-slate-900">{locale === 'ar' ? 'عربي' : 'English'}</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 18, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[1.75rem] bg-slate-950/5 p-3 dark:bg-slate-900/70"
              >
                {loading ? (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[1.75rem] bg-slate-950/20 backdrop-blur-sm dark:bg-slate-950/50">
                    <Sparkles className="h-10 w-10 animate-pulse text-slate-700 dark:text-slate-200" />
                  </div>
                ) : null}

                <img
                  src={imagePath}
                  alt={locale === 'ar' ? `صفحة المصحف ${currentPage}` : `Mushaf page ${currentPage}`}
                  loading="lazy"
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)}
                  style={{ transform: `scale(${zoom})` }}
                  className="mx-auto block max-h-[72vh] w-full max-w-full rounded-[1.5rem] object-contain transition-transform duration-300"
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <ChevronLeft className="h-4 w-4" />
                {t.prev}
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={currentPage === PAGE_COUNT}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                {t.next}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= 0.8}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <ZoomOut className="h-4 w-4" />
                {t.zoomOut}
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= 2.4}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <ZoomIn className="h-4 w-4" />
                {t.zoomIn}
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
                {t.resetZoom}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleFullscreenToggle}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                {isFullscreen ? t.exitFullscreen : t.fullscreen}
              </button>
              <button
                type="button"
                onClick={() => setCurrentPage(1)}
                className="inline-flex items-center justify-center gap-2 rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                <RotateCcw className="h-4 w-4" />
                {t.startOver}
              </button>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_35px_80px_rgba(15,23,42,0.08)] dark:border-slate-700/70 dark:bg-slate-950/85">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{t.controls}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{t.jumpLabel}</h2>
                </div>

                <div className="grid gap-3">
                  <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <span>{t.jumpLabel}</span>
                    <input
                      type="number"
                      min={1}
                      max={PAGE_COUNT}
                      value={inputValue}
                      placeholder={t.inputPlaceholder}
                      onChange={(event) => setInputValue(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault();
                          handleJump();
                        }
                      }}
                      className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-gold/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={handleJump}
                    className="rounded-3xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    {t.goToPage}
                  </button>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/70 dark:bg-slate-900/80">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'نصيحة' : 'Tip'}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    <li>• {t.swipeTip}</li>
                    <li>• {t.zoomTip}</li>
                    <li>• {t.fullscreenTip}</li>
                  </ul>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/70 dark:bg-slate-900/80">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'الوضع' : 'Mode'}</p>
                  <div className="mt-3 flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                    <span className="rounded-full bg-white/90 px-3 py-2 dark:bg-slate-950/80">{theme === 'dark' ? (locale === 'ar' ? 'داكن' : 'Dark') : (locale === 'ar' ? 'فاتح' : 'Light')}</span>
                    <span className="rounded-full bg-white/90 px-3 py-2 dark:bg-slate-950/80">{direction}</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <img src={`/mushaf/${String(prevPage).padStart(3, '0')}.jpg`} className="hidden" alt="" loading="lazy" />
        <img src={`/mushaf/${String(nextPage).padStart(3, '0')}.jpg`} className="hidden" alt="" loading="lazy" />
      </div>
    </main>
  );
}
