'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, Minimize2, Maximize2, Loader2 } from 'lucide-react';

const surahList = [
  { number: 1, nameAr: 'الفاتحة', nameEn: 'Al-Fatihah', ayahs: 7 },
  { number: 2, nameAr: 'البقرة', nameEn: 'Al-Baqarah', ayahs: 286 },
  { number: 3, nameAr: 'آل عمران', nameEn: 'Aal-E-Imran', ayahs: 200 },
  { number: 4, nameAr: 'النساء', nameEn: 'An-Nisa', ayahs: 176 },
  { number: 5, nameAr: 'المائدة', nameEn: 'Al-Ma\'idah', ayahs: 120 },
  { number: 6, nameAr: 'الأنعام', nameEn: 'Al-An\'am', ayahs: 165 },
  { number: 7, nameAr: 'الأعراف', nameEn: 'Al-A\'raf', ayahs: 206 },
  { number: 8, nameAr: 'الأنفال', nameEn: 'Al-Anfal', ayahs: 75 },
  { number: 9, nameAr: 'التوبة', nameEn: 'At-Taubah', ayahs: 129 },
  { number: 10, nameAr: 'يونس', nameEn: 'Yunus', ayahs: 109 },
  { number: 11, nameAr: 'هود', nameEn: 'Hud', ayahs: 123 },
  { number: 12, nameAr: 'يوسف', nameEn: 'Yusuf', ayahs: 111 },
  { number: 13, nameAr: 'الرعد', nameEn: 'Ar-Ra\'d', ayahs: 43 },
  { number: 14, nameAr: 'إبراهيم', nameEn: 'Ibrahim', ayahs: 52 },
  { number: 15, nameAr: 'الحجر', nameEn: 'Al-Hijr', ayahs: 99 },
  { number: 16, nameAr: 'النحل', nameEn: 'An-Nahl', ayahs: 128 },
  { number: 17, nameAr: 'الإسراء', nameEn: 'Al-Isra', ayahs: 111 },
  { number: 18, nameAr: 'الكهف', nameEn: 'Al-Kahf', ayahs: 110 },
  { number: 19, nameAr: 'مريم', nameEn: 'Maryam', ayahs: 98 },
  { number: 20, nameAr: 'طه', nameEn: 'Ta-Ha', ayahs: 135 },
  { number: 21, nameAr: 'الأنبياء', nameEn: 'Al-Anbiya', ayahs: 112 },
  { number: 22, nameAr: 'الحج', nameEn: 'Al-Hajj', ayahs: 78 },
  { number: 23, nameAr: 'المؤمنون', nameEn: 'Al-Mu\'minun', ayahs: 118 },
  { number: 24, nameAr: 'النور', nameEn: 'An-Nur', ayahs: 64 },
  { number: 25, nameAr: 'الفرقان', nameEn: 'Al-Furqan', ayahs: 77 },
  { number: 26, nameAr: 'الشعراء', nameEn: 'Ash-Shu\'ara', ayahs: 227 },
  { number: 27, nameAr: 'النمل', nameEn: 'An-Naml', ayahs: 93 },
  { number: 28, nameAr: 'القصص', nameEn: 'Al-Qasas', ayahs: 88 },
  { number: 29, nameAr: 'العنكبوت', nameEn: 'Al-Ankabut', ayahs: 69 },
  { number: 30, nameAr: 'الروم', nameEn: 'Ar-Rum', ayahs: 60 },
  { number: 31, nameAr: 'لقمان', nameEn: 'Luqman', ayahs: 34 },
  { number: 32, nameAr: 'السجدة', nameEn: 'As-Sajdah', ayahs: 30 },
  { number: 33, nameAr: 'الأحزاب', nameEn: 'Al-Ahzab', ayahs: 73 },
  { number: 34, nameAr: 'سبأ', nameEn: 'Saba', ayahs: 54 },
  { number: 35, nameAr: 'فاطر', nameEn: 'Fatir', ayahs: 45 },
  { number: 36, nameAr: 'يس', nameEn: 'Ya-Sin', ayahs: 83 },
  { number: 37, nameAr: 'الصافات', nameEn: 'As-Saffat', ayahs: 182 },
  { number: 38, nameAr: 'ص', nameEn: 'Sad', ayahs: 88 },
  { number: 39, nameAr: 'الزمر', nameEn: 'Az-Zumar', ayahs: 75 },
  { number: 40, nameAr: 'غافر', nameEn: 'Ghafir', ayahs: 85 },
  { number: 41, nameAr: 'فصلت', nameEn: 'Fussilat', ayahs: 54 },
  { number: 42, nameAr: 'الشورى', nameEn: 'Ash-Shura', ayahs: 53 },
  { number: 43, nameAr: 'الزخرف', nameEn: 'Az-Zukhruf', ayahs: 89 },
  { number: 44, nameAr: 'الدخان', nameEn: 'Ad-Dukhan', ayahs: 59 },
  { number: 45, nameAr: 'الجاثية', nameEn: 'Al-Jathiyah', ayahs: 37 },
  { number: 46, nameAr: 'الأحقاف', nameEn: 'Al-Ahqaf', ayahs: 35 },
  { number: 47, nameAr: 'محمد', nameEn: 'Muhammad', ayahs: 38 },
  { number: 48, nameAr: 'الفتح', nameEn: 'Al-Fath', ayahs: 29 },
  { number: 49, nameAr: 'الحجرات', nameEn: 'Al-Hujurat', ayahs: 18 },
  { number: 50, nameAr: 'ق', nameEn: 'Qaf', ayahs: 45 },
  { number: 51, nameAr: 'الذاريات', nameEn: 'Adh-Dhariyat', ayahs: 60 },
  { number: 52, nameAr: 'الطور', nameEn: 'At-Tur', ayahs: 49 },
  { number: 53, nameAr: 'النجم', nameEn: 'An-Najm', ayahs: 62 },
  { number: 54, nameAr: 'القمر', nameEn: 'Al-Qamar', ayahs: 55 },
  { number: 55, nameAr: 'الرحمن', nameEn: 'Ar-Rahman', ayahs: 78 },
  { number: 56, nameAr: 'الواقعة', nameEn: 'Al-Waqi\'ah', ayahs: 96 },
  { number: 57, nameAr: 'الحديد', nameEn: 'Al-Hadid', ayahs: 29 },
  { number: 58, nameAr: 'المجادلة', nameEn: 'Al-Mujadilah', ayahs: 22 },
  { number: 59, nameAr: 'الحشر', nameEn: 'Al-Hashr', ayahs: 24 },
  { number: 60, nameAr: 'الممتحنة', nameEn: 'Al-Mumtahanah', ayahs: 13 },
  { number: 61, nameAr: 'الصف', nameEn: 'As-Saff', ayahs: 14 },
  { number: 62, nameAr: 'الجمعة', nameEn: 'Al-Jumu\'ah', ayahs: 11 },
  { number: 63, nameAr: 'المنافقون', nameEn: 'Al-Munafiqun', ayahs: 11 },
  { number: 64, nameAr: 'التغابن', nameEn: 'At-Taghabun', ayahs: 18 },
  { number: 65, nameAr: 'الطلاق', nameEn: 'At-Talaq', ayahs: 12 },
  { number: 66, nameAr: 'التحريم', nameEn: 'At-Tahrim', ayahs: 12 },
  { number: 67, nameAr: 'الملك', nameEn: 'Al-Mulk', ayahs: 30 },
  { number: 68, nameAr: 'القلم', nameEn: 'Al-Qalam', ayahs: 52 },
  { number: 69, nameAr: 'الحاقة', nameEn: 'Al-Haqah', ayahs: 52 },
  { number: 70, nameAr: 'المعارج', nameEn: 'Al-Ma\'arij', ayahs: 44 },
  { number: 71, nameAr: 'نوح', nameEn: 'Nuh', ayahs: 28 },
  { number: 72, nameAr: 'الجن', nameEn: 'Al-Jinn', ayahs: 28 },
  { number: 73, nameAr: 'المزمل', nameEn: 'Al-Muzzammil', ayahs: 20 },
  { number: 74, nameAr: 'المدثر', nameEn: 'Al-Muddathir', ayahs: 56 },
  { number: 75, nameAr: 'القيامة', nameEn: 'Al-Qiyamah', ayahs: 40 },
  { number: 76, nameAr: 'الإنسان', nameEn: 'Al-Insan', ayahs: 31 },
  { number: 77, nameAr: 'المرسلات', nameEn: 'Al-Mursalat', ayahs: 50 },
  { number: 78, nameAr: 'النبأ', nameEn: 'An-Naba', ayahs: 40 },
  { number: 79, nameAr: 'النازعات', nameEn: 'An-Nazi\'at', ayahs: 46 },
  { number: 80, nameAr: 'عبس', nameEn: 'Abasa', ayahs: 42 },
  { number: 81, nameAr: 'التكوير', nameEn: 'At-Takwir', ayahs: 29 },
  { number: 82, nameAr: 'الإنفطار', nameEn: 'Al-Infitar', ayahs: 19 },
  { number: 83, nameAr: 'المطففين', nameEn: 'Al-Mutaffifin', ayahs: 36 },
  { number: 84, nameAr: 'الإنشقاق', nameEn: 'Al-Inshiqaq', ayahs: 25 },
  { number: 85, nameAr: 'البروج', nameEn: 'Al-Buruj', ayahs: 22 },
  { number: 86, nameAr: 'الطارق', nameEn: 'At-Tariq', ayahs: 17 },
  { number: 87, nameAr: 'الأعلى', nameEn: 'Al-A\'la', ayahs: 19 },
  { number: 88, nameAr: 'الغاشية', nameEn: 'Al-Ghashiyah', ayahs: 26 },
  { number: 89, nameAr: 'الفجر', nameEn: 'Al-Fajr', ayahs: 30 },
  { number: 90, nameAr: 'البلد', nameEn: 'Al-Balad', ayahs: 20 },
  { number: 91, nameAr: 'الشمس', nameEn: 'Ash-Shams', ayahs: 15 },
  { number: 92, nameAr: 'الليل', nameEn: 'Al-Layl', ayahs: 21 },
  { number: 93, nameAr: 'الضحى', nameEn: 'Ad-Duha', ayahs: 11 },
  { number: 94, nameAr: 'الشرح', nameEn: 'Ash-Sharh', ayahs: 8 },
  { number: 95, nameAr: 'التين', nameEn: 'At-Tin', ayahs: 8 },
  { number: 96, nameAr: 'العلق', nameEn: 'Al-Alaq', ayahs: 19 },
  { number: 97, nameAr: 'القدر', nameEn: 'Al-Qadr', ayahs: 5 },
  { number: 98, nameAr: 'البينة', nameEn: 'Al-Bayyinah', ayahs: 8 },
  { number: 99, nameAr: 'الزلزلة', nameEn: 'Az-Zalzalah', ayahs: 8 },
  { number: 100, nameAr: 'العاديات', nameEn: 'Al-Adiyat', ayahs: 11 },
  { number: 101, nameAr: 'القارعة', nameEn: 'Al-Qari\'ah', ayahs: 11 },
  { number: 102, nameAr: 'التكاثر', nameEn: 'At-Takathur', ayahs: 8 },
  { number: 103, nameAr: 'العصر', nameEn: 'Al-Asr', ayahs: 3 },
  { number: 104, nameAr: 'الهمزة', nameEn: 'Al-Humazah', ayahs: 9 },
  { number: 105, nameAr: 'الفيل', nameEn: 'Al-Fil', ayahs: 5 },
  { number: 106, nameAr: 'قريش', nameEn: 'Quraysh', ayahs: 4 },
  { number: 107, nameAr: 'الماعون', nameEn: 'Al-Ma\'un', ayahs: 7 },
  { number: 108, nameAr: 'الكوثر', nameEn: 'Al-Kawthar', ayahs: 3 },
  { number: 109, nameAr: 'الكافرون', nameEn: 'Al-Kafirun', ayahs: 6 },
  { number: 110, nameAr: 'النصر', nameEn: 'An-Nasr', ayahs: 3 },
  { number: 111, nameAr: 'المسد', nameEn: 'Al-Masad', ayahs: 5 },
  { number: 112, nameAr: 'الإخلاص', nameEn: 'Al-Ikhlas', ayahs: 4 },
  { number: 113, nameAr: 'الفلق', nameEn: 'Al-Falaq', ayahs: 5 },
  { number: 114, nameAr: 'الناس', nameEn: 'An-Nas', ayahs: 6 },
];

export default function AlMinshawiPage() {
  const [currentSurah, setCurrentSurah] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const getSurahUrl = (surahNumber: number) => {
    const paddedNumber = surahNumber.toString().padStart(3, '0');
    return `https://server8.mp3quran.net/minsh/${paddedNumber}.mp3`;
  };

  const handlePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        setIsLoading(true);
        await audioRef.current.play();
        setIsPlaying(true);
        setIsLoading(false);
      }
    } catch (err) {
      setError('Failed to play audio');
      setIsLoading(false);
    }
  };

  const handleNext = () => {
    const nextSurah = currentSurah < 114 ? currentSurah + 1 : 1;
    setCurrentSurah(nextSurah);
    setProgress(0);
    setDuration(0);
    setError(null);
    if (audioRef.current) {
      audioRef.current.src = getSurahUrl(nextSurah);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const handlePrev = () => {
    const prevSurah = currentSurah > 1 ? currentSurah - 1 : 114;
    setCurrentSurah(prevSurah);
    setProgress(0);
    setDuration(0);
    setError(null);
    if (audioRef.current) {
      audioRef.current.src = getSurahUrl(prevSurah);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (newProgress: number) => {
    if (audioRef.current && duration) {
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const dur = audioRef.current.duration;
      if (dur) {
        setProgress((current / dur) * 100);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleEnded = () => {
    handleNext();
  };

  const handleError = () => {
    setError('Failed to load audio');
    setIsLoading(false);
    setIsPlaying(false);
  };

  const handleSurahClick = (surahNumber: number) => {
    setCurrentSurah(surahNumber);
    setProgress(0);
    setDuration(0);
    setError(null);
    setIsLoading(true);
    if (audioRef.current) {
      audioRef.current.src = getSurahUrl(surahNumber);
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setIsLoading(false);
      }).catch(() => {
        setError('Failed to play audio');
        setIsLoading(false);
      });
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.src = getSurahUrl(currentSurah);
    }
  }, [currentSurah, volume]);

  const currentSurahData = surahList.find(s => s.number === currentSurah);

  return (
    <div className="min-h-screen bg-surface text-slate-900 antialiased transition-colors duration-500 dark:bg-navy dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-slate-950 dark:text-white mb-4">
            الشيخ محمد صديق المنشاوي
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Sheikh Mohamed Siddiq Al-Minshawi
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
          {surahList.map((surah) => (
            <motion.button
              key={surah.number}
              onClick={() => handleSurahClick(surah.number)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: surah.number * 0.01 }}
              className={`rounded-2xl border p-4 text-left transition hover:-translate-y-1 ${
                currentSurah === surah.number
                  ? 'border-gold bg-gold/10 dark:border-gold dark:bg-gold/10'
                  : 'border-slate-200/70 bg-white/80 dark:border-slate-700/70 dark:bg-slate-950/70'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-950 dark:text-white">
                  {surah.number}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {surah.ayahs} آيات
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-950 dark:text-white mb-1">
                {surah.nameAr}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {surah.nameEn}
              </p>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {!isMiniPlayer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200/70 dark:bg-slate-950/95 dark:border-slate-700/70 p-4"
            >
              <div className="mx-auto max-w-4xl">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      {currentSurahData?.nameAr} - سورة {currentSurah}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {currentSurahData?.nameEn} - Surah {currentSurah}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMiniPlayer(true)}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <Minimize2 className="h-4 w-4" />
                  </button>
                </div>

                {error && (
                  <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                    {error}
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePrev}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <SkipBack className="h-5 w-5" />
                  </button>

                  <button
                    onClick={handlePlayPause}
                    disabled={isLoading}
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition hover:bg-slate-800 disabled:opacity-50 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                  >
                    {isLoading ? (
                      <Loader2 className="h-6 w-6 animate-spin" />
                    ) : isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 ml-1" />
                    )}
                  </button>

                  <button
                    onClick={handleNext}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                  >
                    <SkipForward className="h-5 w-5" />
                  </button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={progress}
                      onChange={(e) => handleProgressChange(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                    />
                    <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                      <span>{Math.floor((progress / 100) * duration / 60) || 0}:{String(Math.floor(((progress / 100) * duration) % 60)).padStart(2, '0')}</span>
                      <span>{Math.floor(duration / 60) || 0}:{String(Math.floor(duration % 60)).padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleVolumeChange(volume > 0 ? 0 : 0.8)}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-800"
                    >
                      {volume > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => handleVolumeChange(Number(e.target.value))}
                      className="w-20 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {isMiniPlayer && (
          <div className="fixed bottom-4 right-4 z-50">
            <button
              onClick={() => setIsMiniPlayer(false)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950 text-white shadow-lg transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        )}

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onError={handleError}
          preload="metadata"
        />
      </div>
    </div>
  );
}