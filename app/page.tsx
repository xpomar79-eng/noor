"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Timer,
  ShieldCheck,
  MoonStar,
  ArrowRight,
  CalendarDays,
  Clock3,
  Star,
  Globe2,
} from 'lucide-react';

// Prayer keys and display order
const PRAYER_ORDER = [
  { id: 'Fajr', labelAr: 'الفجر', labelEn: 'Fajr' },
  { id: 'Sunrise', labelAr: 'الشروق', labelEn: 'Sunrise' },
  { id: 'Dhuhr', labelAr: 'الظهر', labelEn: 'Dhuhr' },
  { id: 'Asr', labelAr: 'العصر', labelEn: 'Asr' },
  { id: 'Maghrib', labelAr: 'المغرب', labelEn: 'Maghrib' },
  { id: 'Isha', labelAr: 'العشاء', labelEn: 'Isha' },
];

// Helper: map some common countries to preferred calculation methods (AlAdhan API)
const COUNTRY_METHOD_OVERRIDES: Record<string, number> = {
  SA: 4, // Umm al-Qura
  EG: 5, // Egyptian General Authority
  TR: 13, // Turkey
  KW: 4,
  AE: 4,
  QA: 4,
  OM: 4,
  SD: 5,
};

// AlAdhan image count / files are handled separately in Mushaf; here we fetch timings

const reminders = [
  {
    titleAr: 'صوت القلب في الصلاة',
    titleEn: 'Quiet your heart in prayer',
    descriptionAr: 'خصص لحظات للنية والتدبر قبل كل صلاة.',
    descriptionEn: 'Pause, intend, and reflect before each prayer.',
  },
  {
    titleAr: 'سلسلة الذكر',
    titleEn: 'Remembrance rhythm',
    descriptionAr: 'اذكر الله في الصباح والمساء لتعزز ثباتك.',
    descriptionEn: 'Recite morning and evening remembrance for steadiness.',
  },
  {
    titleAr: 'نور اليوم',
    titleEn: 'Light of the day',
    descriptionAr: 'ابدأ اليوم بنية صافية وهدوء هادف.',
    descriptionEn: 'Start your day with calm intention and sacred focus.',
  },
];

const azkarList = [
  { textAr: 'سُبْحَانَ الله', textEn: 'Glory be to Allah' },
  { textAr: 'الْحَمْدُ لِلّٰهِ', textEn: 'All praise is due to Allah' },
  { textAr: 'اللّهُ أَكْبَر', textEn: 'Allah is the Greatest' },
  { textAr: 'لَا إِلٰهَ إِلَّا الله', textEn: 'There is no god but Allah' },
  { textAr: 'أَسْتَغْفِرُ اللهَ', textEn: 'I seek forgiveness from Allah' },
];

const prayerTips = [
  { textAr: 'الصلاة تجلب السكينة إلى القلب.', textEn: 'Prayer brings peace to the heart.' },
  { textAr: 'صلاة الفجر نور وبركة.', textEn: 'Fajr prayer is light and blessing.' },
  { textAr: 'احفظ صلاتك وإياك أن تنساها.', textEn: 'Maintain your prayers and Allah will protect you.' },
  { textAr: 'الصلاة سبب لتجدد القلب والنية.', textEn: 'Prayer renews the heart and intention.' },
  { textAr: 'كل صلاة نور يعم يومك.', textEn: 'Every prayer is a light for your day.' },
];

const prayerVirtues = [
  { textAr: 'قال رسول الله صلى الله عليه وسلم: «الصلاة عمود الدين».', textEn: 'The Prophet ﷺ said: “Prayer is the pillar of religion.”' },
  { textAr: 'قال عليه الصلاة والسلام: «من حافظ على الصلوات كان له نورًا».', textEn: 'He ﷺ said: “Whoever maintains the prayers will have a light.”' },
  { textAr: 'الصلاة تجعلك قريبًا من رحمة الله ورضاه.', textEn: 'Prayer draws you close to Allah’s mercy and pleasure.' },
  { textAr: 'في الصلاة طمأنينة وراحة للنفس.', textEn: 'In prayer there is calm and comfort for the soul.' },
  { textAr: 'الصلاة أول ما يحاسب عليه العبد يوم القيامة.', textEn: 'Prayer is the first thing for which a servant will be held accountable on the Day of Judgment.' },
];

const dailyDhikrList = [
  { titleAr: 'اذكر الله في كل لحظة تنساب فيها أنفاسك.', titleEn: 'Remember Allah in every moment your breath flows.', descriptionAr: 'تجد السكينة في الذكر المتجدد.', descriptionEn: 'Find peace through renewed remembrance.' },
  { titleAr: 'ليكن قلبك رائقًا عند كل ذكر.', titleEn: 'Let your heart be serene at every remembrance.', descriptionAr: 'سحر الذكر يبقى معك طوال اليوم.', descriptionEn: 'Let the blessing of zikr stay with you all day.' },
  { titleAr: 'حتى في الصمت حافظ على ذكر الله.', titleEn: 'Even in silence, keep Allah in remembrance.', descriptionAr: 'ذكرٌ يومي يجعل لكل لحظة قدسيتها.', descriptionEn: 'Daily dhikr makes every moment sacred.' },
  { titleAr: 'ابدأ يومك بذكرٍ خفيفٍ وقلبٍ حاضر.', titleEn: 'Start your day with light remembrance and a present heart.', descriptionAr: 'راحة الروح تبدأ بذكر صادق.', descriptionEn: 'Soul comfort begins with sincere zikr.' },
  { titleAr: 'اللهم يادائم الخير، اجعل أذكارنا زادًا لنا.', titleEn: 'O Allah, Sustainer of good, make our dhikr nourishment for us.', descriptionAr: 'استمر في ذكر الله واعش حياة روحية.', descriptionEn: 'Continue remembrance and live a spiritual life.' },
];

const tasbeehPhrases = ['استغفر الله', 'سبحان الله', 'الله أكبر'];

const reciterNames: Record<string, { nameAr: string; nameEn: string }> = {
  minshawi: { nameAr: 'الشيخ محمد صديق المنشاوي', nameEn: 'Sheikh Mohamed Siddiq Al-Minshawi' },
  abdulbasit: { nameAr: 'الشيخ عبدالباسط عبدالصمد', nameEn: 'Sheikh Abdul Basit Abdus Samad' },
  ahmad_nu: { nameAr: 'الشيخ أحمد نعينع', nameEn: 'Ahmed Naina' },
  yasser: { nameAr: 'الشيخ ياسر الدوسري', nameEn: 'Yasser Al-Dosari' },
};

const RECITATION_PROGRESS_KEY = 'nour-recitation-progress';
const DAILY_DHIKR_KEY = 'nour-home-daily-dhikr';
const TASBEEH_PROGRESS_KEY = 'nour-tasbeeh-progress';

const navCards = [
  {
    titleAr: 'التلاوات',
    titleEn: 'Recitations',
    descriptionAr: 'الوصول السريع إلى صفحة التلاوات.',
    descriptionEn: 'Open the dedicated recitations page.',
    href: '/recitations',
  },
  {
    titleAr: 'مواعيد الصلاة',
    titleEn: 'Prayer Times',
    descriptionAr: 'راجع جدول الصلاة ومتابعة العد التنازلي.',
    descriptionEn: 'Review prayer schedule and countdown.',
    href: '#prayer-times',
  },
  {
    titleAr: 'الأذكار اليومية',
    titleEn: 'Daily Azkar',
    descriptionAr: 'افتح قسم الأذكار الكامل لكل يوم.',
    descriptionEn: 'Open the full Daily Azkar section for every day.',
    href: '/daily-azkar',
  },
];

const defaultCheckins = {
  fajr: false,
  dhuhr: false,
  asr: false,
  maghrib: false,
  isha: false,
};

function formatDuration(milliseconds: number) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
}

function buildPrayerTime(date: Date, time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  const result = new Date(date);
  result.setHours(hours, minutes, 0, 0);
  return result;
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function chooseDailyDhikr() {
  return dailyDhikrList[Math.floor(Math.random() * dailyDhikrList.length)];
}

function recommendedAzkarType(hour: number) {
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'evening';
  return 'sleep';
}

const recommendedAzkarLabels: Record<string, { titleAr: string; titleEn: string; descriptionAr: string; descriptionEn: string }> = {
  morning: {
    titleAr: 'أذكار الصباح',
    titleEn: 'Morning Azkar',
    descriptionAr: 'ابدأ يومك بذكر ينير القلب.',
    descriptionEn: 'Start the day with remembrance that lights the heart.',
  },
  evening: {
    titleAr: 'أذكار المساء',
    titleEn: 'Evening Azkar',
    descriptionAr: 'اغلق يومك بذكر وطمأنينة.',
    descriptionEn: 'Close your day with peace and remembrance.',
  },
  sleep: {
    titleAr: 'أذكار النوم',
    titleEn: 'Sleep Azkar',
    descriptionAr: 'استعد لراحة هادئة بذكر قبل النوم.',
    descriptionEn: 'Prepare for a calm rest with bedtime remembrance.',
  },
};

export default function HomePage() {
  const [locale, setLocale] = useState<'ar' | 'en'>('ar');
  const [now, setNow] = useState(() => new Date());
  const [completedPrayers, setCompletedPrayers] = useState<Record<string, boolean>>(defaultCheckins);
  const [streak, setStreak] = useState(0);
  const [streakDate, setStreakDate] = useState('');
  const [notification, setNotification] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [toastTitle, setToastTitle] = useState('');
  const [toastBody, setToastBody] = useState('');

  // Location & dynamic prayer time state
  const [location, setLocation] = useState<{ lat: number; lon: number; city?: string; country?: string; countryCode?: string } | null>(null);
  const [timezone, setTimezone] = useState<string>(() => Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
  const [prayerTimings, setPrayerTimings] = useState<Record<string, string> | null>(null);
  const [hijriDateStr, setHijriDateStr] = useState<string>('');
  const [gregorianDateStr, setGregorianDateStr] = useState<string>('');
  const [prayerLoading, setPrayerLoading] = useState(true);
  const [prayerError, setPrayerError] = useState<string | null>(null);
  const [lastMushafPage, setLastMushafPage] = useState<number | null>(null);
  const [lastRecitation, setLastRecitation] = useState<{ surah: number; reciter: string } | null>(null);
  const [dailyAzkarProgress, setDailyAzkarProgress] = useState<Record<string, number>>({});
  const [dailyDhikr, setDailyDhikr] = useState<{ titleAr: string; titleEn: string; descriptionAr: string; descriptionEn: string } | null>(null);
  const [tasbeehTotalCount, setTasbeehTotalCount] = useState(0);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('nour-home-locale');
    if (savedLocale === 'en' || savedLocale === 'ar') {
      setLocale(savedLocale);
    } else if (navigator.language?.startsWith('en')) {
      setLocale('en');
    }

    const today = todayKey();
    const rawCheckins = window.localStorage.getItem('nour-prayer-checkins');
    const parsedCheckins = rawCheckins ? JSON.parse(rawCheckins) : {};
    setCompletedPrayers(parsedCheckins[today] ?? defaultCheckins);

    const rawStreak = window.localStorage.getItem('nour-prayer-streak');
    if (rawStreak) {
      try {
        const parsed = JSON.parse(rawStreak);
        if (typeof parsed.streak === 'number') {
          setStreak(parsed.streak);
          setStreakDate(parsed.date || '');
        }
      } catch {
        setStreak(0);
      }
    }

    const savedMushaf = window.localStorage.getItem('nour-mushaf-last-page');
    if (savedMushaf) {
      const pageValue = Number(savedMushaf);
      if (!Number.isNaN(pageValue)) setLastMushafPage(pageValue);
    }

    const savedRecitation = window.localStorage.getItem(RECITATION_PROGRESS_KEY);
    if (savedRecitation) {
      try {
        const parsed = JSON.parse(savedRecitation);
        if (typeof parsed.surah === 'number' && typeof parsed.reciter === 'string') {
          setLastRecitation({ surah: parsed.surah, reciter: parsed.reciter });
        }
      } catch {
        setLastRecitation(null);
      }
    }

    const savedAzkar = window.localStorage.getItem('nour-daily-azkar-progress');
    if (savedAzkar) {
      try {
        setDailyAzkarProgress(JSON.parse(savedAzkar));
      } catch {
        setDailyAzkarProgress({});
      }
    }

    const todayDhikr = todayKey();
    const savedDailyDhikr = window.localStorage.getItem(DAILY_DHIKR_KEY);
    if (savedDailyDhikr) {
      try {
        const parsed = JSON.parse(savedDailyDhikr);
        if (parsed?.date === todayDhikr && parsed.titleAr && parsed.titleEn) {
          setDailyDhikr(parsed);
        } else {
          const nextDhikr = { ...chooseDailyDhikr(), date: todayDhikr };
          setDailyDhikr(nextDhikr);
          window.localStorage.setItem(DAILY_DHIKR_KEY, JSON.stringify(nextDhikr));
        }
      } catch {
        const nextDhikr = { ...chooseDailyDhikr(), date: todayDhikr };
        setDailyDhikr(nextDhikr);
        window.localStorage.setItem(DAILY_DHIKR_KEY, JSON.stringify(nextDhikr));
      }
    } else {
      const nextDhikr = { ...chooseDailyDhikr(), date: todayDhikr };
      setDailyDhikr(nextDhikr);
      window.localStorage.setItem(DAILY_DHIKR_KEY, JSON.stringify(nextDhikr));
    }

    const savedTasbeeh = window.localStorage.getItem(TASBEEH_PROGRESS_KEY);
    if (savedTasbeeh) {
      try {
        const parsed = JSON.parse(savedTasbeeh);
        setTasbeehTotalCount(typeof parsed.totalCount === 'number' ? parsed.totalCount : 0);
      } catch {
        setTasbeehTotalCount(0);
      }
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  // Fetch location and prayer times: try high-accuracy geolocation, then IP fallback
  useEffect(() => {
    let mounted = true;

    const getPosition = (): Promise<GeolocationPosition> =>
      new Promise((resolve, reject) => {
        if (!navigator.geolocation) return reject(new Error('Geolocation not supported'));
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, timeout: 10000 });
      });

    const fetchIPLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('IP lookup failed');
        return res.json();
      } catch (err) {
        return null;
      }
    };

    const reverseGeocode = async (lat: number, lon: number) => {
      try {
        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=${locale === 'ar' ? 'ar' : 'en'}`;
        const res = await fetch(url);
        if (!res.ok) return null;
        return res.json();
      } catch {
        return null;
      }
    };

    const fetchPrayerTimesFor = async (lat: number, lon: number, countryCode?: string) => {
      try {
        setPrayerLoading(true);
        setPrayerError(null);
        const method = (countryCode && COUNTRY_METHOD_OVERRIDES[countryCode.toUpperCase()]) || 2;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || timezone;
        const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}&timezonestring=${encodeURIComponent(
          tz
        )}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Prayer API failed');
        const body = await res.json();
        if (body.code !== 200) throw new Error(body.status || 'Prayer API error');
        const timings = body.data.timings as Record<string, string>;
        if (mounted) {
          setPrayerTimings(timings);
          const hijri = body.data.date?.hijri;
          const greg = body.data.date?.gregorian;
          setHijriDateStr(hijri ? `${hijri.day} ${hijri.month.en} ${hijri.year}` : '');
          setGregorianDateStr(greg ? `${greg.weekday.en}, ${greg.day} ${greg.month.en} ${greg.year}` : '');
        }
      } catch (err: any) {
        if (mounted) setPrayerError(err.message ?? 'Failed to load prayer times');
      } finally {
        if (mounted) setPrayerLoading(false);
      }
    };

    (async () => {
      try {
        try {
          const pos = await getPosition();
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const geo = await reverseGeocode(lat, lon);
          if (!mounted) return;
          setLocation({ lat, lon, city: geo?.city || geo?.locality || geo?.principalSubdivision, country: geo?.countryName, countryCode: geo?.countryCode });
          setTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone || timezone);
          await fetchPrayerTimesFor(lat, lon, geo?.countryCode);
          return;
        } catch (e) {
          // Geolocation failed or denied - fallback to IP-based
        }

        const ip = await fetchIPLocation();
        if (ip && ip.latitude && ip.longitude) {
          const lat = Number(ip.latitude);
          const lon = Number(ip.longitude);
          setLocation({ lat, lon, city: ip.city, country: ip.country_name, countryCode: ip.country });
          setTimezone(ip.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || timezone);
          await fetchPrayerTimesFor(lat, lon, ip.country);
        } else {
          setPrayerError('Location unavailable');
          setPrayerLoading(false);
        }
      } catch (err: any) {
        if (mounted) setPrayerError(err.message ?? 'Failed to determine location');
        if (mounted) setPrayerLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [locale]);

  // Derived prayerTimes array from fetched timings
  const prayerTimes = useMemo(() => {
    if (!prayerTimings) return PRAYER_ORDER.map((p) => ({ ...p, date: null }));
    const today = new Date(now);
    return PRAYER_ORDER.map((p) => {
      const timeStr = prayerTimings[p.id] ?? prayerTimings[p.id.toUpperCase()] ?? '';
      if (!timeStr) return { ...p, date: null };
      // timeStr may contain offsets or (DST); keep hh:mm
      const match = timeStr.match(/(\d{1,2}:\d{2})/);
      const hhmm = match ? match[1] : timeStr;
      const [hh, mm] = hhmm.split(':').map(Number);
      const d = new Date(today);
      d.setHours(hh, mm, 0, 0);
      return { ...p, date: d };
    });
  }, [prayerTimings, now]);

  const nextPrayer = useMemo(() => {
    const upcoming = prayerTimes.find((prayer) => prayer.date && prayer.date.getTime() > now.getTime());
    if (upcoming && upcoming.date) return upcoming;
    // If none remaining, pick tomorrow's first prayer (Fajr)
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const first = PRAYER_ORDER[0];
    const timeStr = prayerTimings?.[first.id] ?? prayerTimings?.[first.id.toUpperCase()] ?? '';
    const match = timeStr ? timeStr.match(/(\d{1,2}:\d{2})/) : null;
    const hhmm = match ? match[1] : '00:00';
    const [hh, mm] = hhmm.split(':').map(Number);
    const d = new Date(tomorrow);
    d.setHours(hh, mm, 0, 0);
    return { ...first, date: d };
  }, [prayerTimes, now, prayerTimings]);

  const timeToNextPrayer = Math.max(0, (nextPrayer.date ? nextPrayer.date.getTime() : 0) - now.getTime());
  const completedCount = Object.values(completedPrayers).filter(Boolean).length;
  const tasbeehCycleCount = Math.floor(tasbeehTotalCount / 99) + 1;
  const tasbeehIndex = tasbeehTotalCount % 99;
  const currentTasbeehPhrase = tasbeehPhrases[Math.floor(tasbeehIndex / 33) % 3];
  const tasbeehProgressPercent = Math.round((tasbeehIndex / 99) * 100);
  const allComplete = completedCount === Object.keys(defaultCheckins).length;
  const azkarItemsDone = Object.values(dailyAzkarProgress).filter((count) => count > 0).length;
  const azkarProgressPercent = Math.round((azkarItemsDone / 21) * 100);
  const spiritualProgressPercent = Math.round(((completedCount / 5) * 0.5 + (azkarProgressPercent / 100) * 0.5) * 100);
  const recommendedType = recommendedAzkarType(now.getHours());
  const recommendedAzkar = recommendedAzkarLabels[recommendedType];
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const formattedLocalTime = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  }).format(now);

  const formattedGregorian = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(now);

  const formattedHijri = new Intl.DateTimeFormat(
    locale === 'ar' ? 'ar-SA-u-ca-islamic' : 'en-US-u-ca-islamic',
    { day: 'numeric', month: 'long', year: 'numeric' }
  ).format(now);

  const handleTasbeehTap = () => {
    const nextCount = tasbeehTotalCount + 1;
    setTasbeehTotalCount(nextCount);
    window.localStorage.setItem(TASBEEH_PROGRESS_KEY, JSON.stringify({ totalCount: nextCount }));
  };

  const handleLocaleChange = (value: 'ar' | 'en') => {
    setLocale(value);
    window.localStorage.setItem('nour-home-locale', value);
  };

  const saveCheckins = (value: Record<string, boolean>) => {
    const today = todayKey();
    const existing = JSON.parse(window.localStorage.getItem('nour-prayer-checkins') || '{}');
    existing[today] = value;
    window.localStorage.setItem('nour-prayer-checkins', JSON.stringify(existing));
  };

  const saveStreak = (value: number, date: string) => {
    window.localStorage.setItem('nour-prayer-streak', JSON.stringify({ streak: value, date }));
  };

  useEffect(() => {
    if (!toastVisible) return;
    const timer = window.setTimeout(() => setToastVisible(false), 6500);
    return () => window.clearTimeout(timer);
  }, [toastVisible]);

  const handlePrayerToggle = (id: string) => {
    const key = id.toLowerCase();
    const nextState = { ...completedPrayers, [key]: !completedPrayers[key] };
    const markedComplete = !completedPrayers[key];
    setCompletedPrayers(nextState);
    saveCheckins(nextState);

    if (markedComplete) {
      const tip = prayerTips[Math.floor(Math.random() * prayerTips.length)];
      const virtue = prayerVirtues[Math.floor(Math.random() * prayerVirtues.length)];
      setToastTitle(locale === 'ar' ? tip.textAr : tip.textEn);
      setToastBody(locale === 'ar' ? virtue.textAr : virtue.textEn);
      setToastVisible(true);
    }

    if (Object.values(nextState).every(Boolean) && streakDate !== todayKey()) {
      const nextStreak = streak + 1;
      setStreak(nextStreak);
      setStreakDate(todayKey());
      saveStreak(nextStreak, todayKey());
      setNotification(
        locale === 'ar'
          ? 'مبارك! أكملت الصلاة اليوم وحافظت على streak روحاني.'
          : 'Blessed! You completed prayer today and kept your spiritual streak.'
      );
      window.setTimeout(() => setNotification(''), 7000);
      return;
    }

    if (!Object.values(nextState).every(Boolean) && allComplete) {
      setNotification('');
    }
  };

  const sectionTitle = locale === 'ar' ? 'رحلة روحية متجددة' : 'Renewed Spiritual Journey';
  const sectionSubtitle =
    locale === 'ar'
      ? 'تتبع الوقت والذكر والتقدم في يومك الروحي.'
      : 'Track time, remembrance, and progress in your spiritual day.';

  return (
    <main dir={direction} className="min-h-screen bg-surface text-slate-950 antialiased transition-colors duration-500 dark:bg-navy dark:text-slate-100">
      <div className={`fixed ${direction === 'rtl' ? 'left-6' : 'right-6'} bottom-6 z-50 transition-all duration-500 ${toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="max-w-sm rounded-[2rem] border border-emerald-300/30 bg-emerald-50/95 p-5 shadow-2xl backdrop-blur-xl text-slate-950 dark:border-emerald-500/40 dark:bg-emerald-950/90 dark:text-white">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">{toastTitle}</p>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{toastBody}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-5 max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/80 dark:text-slate-200">
                <MoonStar className="h-4 w-4 text-gold" />
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {locale === 'ar'
                ? 'صفاء روحي مع وقت الصلاة والتأمل'
                : 'A calm spiritual experience with prayer time and reflection'}
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {locale === 'ar'
                ? 'تابع الوقت المحلي، التاريخ الهجري والميلادي، واحفظ تقدمك الروحي في كل صلاة.'
                : 'Follow your local time, Hijri and Gregorian dates, and preserve your spiritual progress each prayer.'}
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleLocaleChange('ar')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  locale === 'ar'
                    ? 'bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950'
                    : 'border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                }`}
              >
                العربية
              </button>
              <button
                type="button"
                onClick={() => handleLocaleChange('en')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  locale === 'en'
                    ? 'bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950'
                    : 'border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                }`}
              >
                English
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'الوقت المحلي' : 'Local Time'}
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{formattedLocalTime}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{gregorianDateStr || formattedGregorian}</p>
              </div>
              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'التاريخ الهجري' : 'Hijri Date'}
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{hijriDateStr || formattedHijri}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{locale === 'ar' ? 'تقويم إسلامي' : 'Islamic calendar'}</p>
              </div>
              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'عدد الأيام المتتالية' : 'Streak'}
                </p>
                <p className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{streak}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {locale === 'ar' ? 'يوم روحي متواصل' : 'spiritual days in a row'}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                      {locale === 'ar' ? 'متابعة القراءة' : 'Continue Reading'}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                      {locale === 'ar' ? 'استأنف من حيث توقفت' : 'Pick up where you left off'}
                    </h3>
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>
                    {lastMushafPage ? (
                      <span>{locale === 'ar' ? `مصحف الصفحة ${lastMushafPage}` : `Mushaf page ${lastMushafPage}`}</span>
                    ) : (
                      <span>{locale === 'ar' ? 'ابدأ قراءة المصحف' : 'Start the Mushaf reading'}</span>
                    )}
                  </p>
                  <p>
                    {lastRecitation ? (
                      <span>{locale === 'ar' ? `سورة ${lastRecitation.surah} - ${reciterNames[lastRecitation.reciter]?.nameAr || lastRecitation.reciter}` : `Surah ${lastRecitation.surah} - ${reciterNames[lastRecitation.reciter]?.nameEn || lastRecitation.reciter}`}</span>
                    ) : (
                      <span>{locale === 'ar' ? 'استمع لتلاوة جديدة' : 'Resume a recitation'}</span>
                    )}
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <Link
                    href="/mushaf"
                    className="rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-slate-700 dark:bg-white dark:text-slate-950"
                  >
                    {locale === 'ar' ? 'تابع المصحف' : 'Continue Mushaf'}
                  </Link>
                  <Link
                    href="/recitations"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                  >
                    {locale === 'ar' ? 'استأنف التلاوة' : 'Resume Recitation'}
                  </Link>
                </div>
              </article>
              <article className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                      {locale === 'ar' ? 'وردة يومية' : 'Daily Wird'}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                      {locale === 'ar' ? 'تقدمك في الذكر والقراءة' : 'Your reading and listening progress'}
                    </h3>
                  </div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gold/10 text-gold">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                    <span>{locale === 'ar' ? 'نسبة التقدم الروحي' : 'Spiritual progress'}</span>
                    <span className="font-semibold text-slate-950 dark:text-white">{spiritualProgressPercent}%</span>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-3 rounded-full bg-gradient-to-r from-gold via-slate-900 to-slate-950 dark:from-gold dark:via-white" style={{ width: `${spiritualProgressPercent}%` }} />
                  </div>
                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {locale === 'ar'
                      ? 'تابع قراءتك وأذكارك اليومية مع لمسة روحية أنيقة.'
                      : 'Track your daily Quran reading and remembrance with a premium feel.'}
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'الصلاة التالية' : 'Next Prayer'}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                  {prayerLoading ? (locale === 'ar' ? 'جارٍ التحميل...' : 'Loading...') : (locale === 'ar' ? nextPrayer.labelAr : nextPrayer.labelEn)}
                </h2>
              </div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/10 text-gold">
                <Clock3 className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'يبقى حتى الصلاة التالية' : 'Time until next prayer'}
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">
                  {prayerLoading ? (locale === 'ar' ? '...' : '...') : formatDuration(timeToNextPrayer)}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-4 dark:border-slate-700/70 dark:bg-slate-950/80">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'الساعة التالية' : 'Prayer time'}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(nextPrayer.date)}</p>
                </div>
                <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-4 dark:border-slate-700/70 dark:bg-slate-950/80">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'المنطقة الزمنية' : 'Timezone'}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).format(now).split(' ').pop()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {notification ? (
          <div className="mt-8 rounded-[2rem] border border-gold/30 bg-gold/10 p-5 text-slate-950 shadow-lg dark:border-gold/40 dark:bg-gold/20 dark:text-white">
            <p className="text-sm font-semibold">{notification}</p>
          </div>
        ) : null}

        <section id="prayer-times" className="mt-12 space-y-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{sectionTitle}</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{sectionSubtitle}</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/80 dark:text-slate-200">
              <Star className="h-4 w-4 text-gold" />
              {locale === 'ar' ? 'نموذج إسلامي فاخر' : 'Premium Islamic style'}
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85">
              <div className="grid gap-4 sm:grid-cols-2">
                {prayerLoading
                  ? PRAYER_ORDER.map((p) => (
                      <div key={p.id} className="animate-pulse rounded-3xl border p-5">
                        <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-800" />
                        <div className="mt-3 h-8 w-40 rounded bg-slate-200 dark:bg-slate-800" />
                      </div>
                    ))
                  : prayerTimes.map((prayer) => {
                      const key = prayer.id?.toLowerCase();
                      const isToggleable = key ? Object.prototype.hasOwnProperty.call(defaultCheckins, key) : false;
                      const isDone = isToggleable ? completedPrayers[key] : false;
                      return (
                        <button
                          key={prayer.id}
                          type="button"
                          onClick={() => (isToggleable ? handlePrayerToggle(prayer.id) : undefined)}
                          className={`group flex flex-col items-start justify-between gap-3 rounded-3xl border p-5 text-left transition duration-300 focus:outline-none ${
                            isDone
                              ? 'border-emerald-300/70 bg-emerald-50/85 text-slate-950 shadow-[0_20px_60px_rgba(16,185,129,0.12)] ring-1 ring-emerald-300/40 dark:bg-emerald-950/80 dark:text-white'
                              : 'border-slate-200/70 bg-slate-50/90 hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-700/70 dark:bg-slate-900/75'
                          }`}
                        >
                          <div className="flex items-center justify-between w-full gap-3">
                            <div>
                              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                                {locale === 'ar' ? prayer.labelAr : prayer.labelEn}
                              </p>
                              <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">
                                {prayer.date
                                  ? new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                      hour12: true,
                                    }).format(prayer.date)
                                  : '--:--'}
                              </p>
                            </div>
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950">
                              {isDone ? <ShieldCheck className="h-5 w-5" /> : <Clock3 className="h-5 w-5" />}
                            </span>
                          </div>
                          <span className="rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:bg-slate-900 dark:text-slate-300">
                            {isToggleable
                              ? isDone
                                ? locale === 'ar'
                                  ? 'تمت'
                                  : 'Completed'
                                : locale === 'ar'
                                ? 'لم تُقم'
                                : 'Pending'
                              : locale === 'ar'
                              ? 'غير متاح'
                              : 'N/A'}
                          </span>
                        </button>
                      );
                    })}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/85">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'متابعة الصلاة' : 'Prayer progress'}
                </p>
                <div className="mt-5 space-y-4">
                  <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'الصلوات المكتملة' : 'Completed prayers'}</p>
                    <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{completedCount} / 5</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'ترتيبك الروحي' : 'Spiritual flow'}</p>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold via-slate-900 to-slate-950 dark:from-gold dark:via-white"
                        style={{ width: `${(completedCount / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/85">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'بطاقة التذكير' : 'Reminder card'}</p>
                <div className="mt-5 space-y-4">
                  {reminders.slice(0, 2).map((reminder) => (
                    <div key={reminder.titleEn} className="rounded-3xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                      <p className="font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? reminder.titleAr : reminder.titleEn}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{locale === 'ar' ? reminder.descriptionAr : reminder.descriptionEn}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 grid gap-5 xl:grid-cols-2">
          <article className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'التسبيح اليومي' : 'Daily Dhikr'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  {locale === 'ar' ? 'ذكر اليوم العابر' : 'Today’s reminder'}
                </h3>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300">
              <p className="text-lg font-semibold text-slate-950 dark:text-white">
                {dailyDhikr ? (locale === 'ar' ? dailyDhikr.titleAr : dailyDhikr.titleEn) : locale === 'ar' ? 'جارٍ التحميل...' : 'Loading...'}
              </p>
              <p className="text-sm leading-6">
                {dailyDhikr ? (locale === 'ar' ? dailyDhikr.descriptionAr : dailyDhikr.descriptionEn) : ''}
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                {locale === 'ar' ? 'مجدد يومياً' : 'Refreshed daily'}
              </p>
            </div>
          </article>
          <article className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'عداد التسبيح' : 'Tasbeeh Counter'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  {locale === 'ar' ? 'سلسلة الذكر' : 'Dhikr Sequence'}
                </h3>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                <MoonStar className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-6 space-y-5 text-slate-700 dark:text-slate-300">
              <div className="rounded-[2rem] border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/70 dark:bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'الذكر الحالي' : 'Current Dhikr'}
                </p>
                <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{currentTasbeehPhrase}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    {locale === 'ar' ? 'دورة التسبيح' : 'Cycle'}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{tasbeehCycleCount}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                    {locale === 'ar' ? 'عدد التسبيحات' : 'Total count'}
                  </p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{tasbeehTotalCount}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>{locale === 'ar' ? 'تقدم الدورة' : 'Cycle progress'}</span>
                  <span className="font-semibold text-slate-950 dark:text-white">{tasbeehProgressPercent}%</span>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-gold via-slate-900 to-slate-950 dark:from-gold dark:via-white" style={{ width: `${tasbeehProgressPercent}%` }} />
                </div>
              </div>

              <button
                type="button"
                onClick={handleTasbeehTap}
                className="w-full rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                {locale === 'ar' ? 'اضغط للتسبيح' : 'Tap to Tasbeeh'}
              </button>
            </div>
          </article>
          <article className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'أذكار مقترحة' : 'Recommended Azkar'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  {locale === 'ar' ? recommendedAzkar.titleAr : recommendedAzkar.titleEn}
                </h3>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                <MoonStar className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {locale === 'ar' ? recommendedAzkar.descriptionAr : recommendedAzkar.descriptionEn}
            </p>
            <div className="mt-6">
              <Link
                href="/daily-azkar"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {locale === 'ar' ? 'عرض الأذكار' : 'View Azkar'}
              </Link>
            </div>
          </article>
          <article className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
                  {locale === 'ar' ? 'مقترحات القراءة' : 'Recommended Reading'}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">
                  {locale === 'ar' ? 'استمر في الوصول إلى المصحف' : 'Keep your Mushaf momentum'}
                </h3>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                <BookOpen className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {locale === 'ar'
                ? 'تابع تقدمك في قراءة المصحف واستفد من مسار روحاني يومي.'
                : 'Continue your Quran reading journey with a premium daily focus.'}
            </p>
            <div className="mt-6">
              <Link
                href="/mushaf"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                {locale === 'ar' ? 'افتح المصحف' : 'Open Mushaf'}
              </Link>
            </div>
          </article>
        </section>
        <section id="reminders" className="mt-12 space-y-5">
          <div className="flex items-center justify-between gap-4 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'أذكار أفقية' : 'Azkar slider'}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? 'أذكار يومية متحركة' : 'Daily zikr in motion'}</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">
              <Globe2 className="h-4 w-4" />
              {locale === 'ar' ? 'اذكر الله الآن' : 'Remember Allah now'}
            </div>
          </div>

          <div className="space-y-4 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50/70 p-4 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/70">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {azkarList.map((item) => (
                <div
                  key={item.textEn}
                  className="min-w-[260px] snap-center rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/85"
                >
                  <p className="text-xl font-semibold text-slate-950 dark:text-white">{item.textAr}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.textEn}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {navCards.map((item) => (
            <Link
              key={item.titleEn}
              href={item.href}
              className="group rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-700/70 dark:bg-slate-950/85"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? item.titleAr : item.titleEn}</p>
                  <p className="mt-3 text-base leading-6 text-slate-600 dark:text-slate-400">{locale === 'ar' ? item.descriptionAr : item.descriptionEn}</p>
                </div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-950 text-white transition group-hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:group-hover:bg-slate-200">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          ))}
        </section>
        <section id="about" className="mt-12">
          <div className="rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/85">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                {locale === 'ar' ? (
                  `برمجة عمر هشام\nصدقة جارية له ولوالديه ولجميع المسلمين إن شاء الله.\n\nنسأل الله أن ينفع بهذا العمل ويجعله في ميزان الحسنات.`
                ) : (
                  `Developed by Omar Hisham\nA continuing charity for him, his parents, and all Muslims, insha’Allah.\n\nMay Allah make this work beneficial and place it in the scale of good deeds.`
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
