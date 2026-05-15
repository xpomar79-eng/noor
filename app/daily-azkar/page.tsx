"use client";

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, BookOpen, Star, Moon, Sun, Bed, Heart, Globe2 } from 'lucide-react';

const categories = [
  { id: 'morning', labelAr: 'أذكار الصباح', labelEn: 'Morning Azkar', icon: Sun },
  { id: 'evening', labelAr: 'أذكار المساء', labelEn: 'Evening Azkar', icon: Moon },
  { id: 'sleep', labelAr: 'أذكار النوم', labelEn: 'Sleep Azkar', icon: Bed },
  { id: 'prayer', labelAr: 'أذكار الصلاة', labelEn: 'Prayer Azkar', icon: ShieldCheck },
  { id: 'reminders', labelAr: 'تذكيرات يومية', labelEn: 'Daily Reminders', icon: Sparkles },
  { id: 'duas', labelAr: 'أدعية قصيرة', labelEn: 'Short Duas', icon: Heart },
  { id: 'quranic', labelAr: 'أدعية قرآنية', labelEn: 'Quranic Duas', icon: BookOpen },
];

const azkarData: Record<string, Array<any>> = {
  morning: [
    { id: 'morning-1', titleAr: 'اللهم بك أصبحنا وبك أمسينا', titleEn: 'O Allah, by You we enter the morning and by You we enter the evening.', descriptionAr: 'ذكر صباحي خفيف للبركة.', descriptionEn: 'A light morning dhikr for blessing.', repetitions: 1 },
    { id: 'morning-2', titleAr: 'أصبحنا وأصبح الملك لله', titleEn: 'We have entered the morning and all dominion belongs to Allah.', descriptionAr: 'ذكر للتسليم والاستسلام.', descriptionEn: 'Dhikr for surrender and devotion.', repetitions: 3 },
    { id: 'morning-3', titleAr: 'اللهم إني أسألك خير هذا اليوم', titleEn: 'O Allah, I ask You for the good of this day.', descriptionAr: 'طلب الخير والتوفيق في صباح اليوم.', descriptionEn: 'Seeking good and success for the day.', repetitions: 1 },
  ],
  evening: [
    { id: 'evening-1', titleAr: 'أمسينا على فطرة الإسلام', titleEn: 'We have entered the evening on the natural disposition of Islam.', descriptionAr: 'ذكر لحفظ القلب في المساء.', descriptionEn: 'A reminder to protect the heart in the evening.', repetitions: 1 },
    { id: 'evening-2', titleAr: 'اللهم بك أمسينا وبك أصبحنا', titleEn: 'O Allah, by You we enter the evening and by You we enter the morning.', descriptionAr: 'ذكر لطمأنينة المساء.', descriptionEn: 'Evening dhikr for calm and peace.', repetitions: 3 },
    { id: 'evening-3', titleAr: 'اللهم إني أعوذ بك من شر هذا المساء', titleEn: 'O Allah, I seek refuge in You from the evil of this evening.', descriptionAr: 'دعاء للحماية قبل النوم.', descriptionEn: 'Supplication for protection before sleep.', repetitions: 1 },
  ],
  sleep: [
    { id: 'sleep-1', titleAr: 'اللهم باسمك أموت وأحيا', titleEn: 'O Allah, in Your name I die and live.', descriptionAr: 'دعاء النوم بنية الأمان.', descriptionEn: 'A bedtime prayer for safety.', repetitions: 1 },
    { id: 'sleep-2', titleAr: 'رضيت بالله رباً', titleEn: 'I am pleased with Allah as Lord.', descriptionAr: 'ذكر للقلب قبل النوم.', descriptionEn: 'Words of contentment before sleep.', repetitions: 3 },
    { id: 'sleep-3', titleAr: 'اللهم أحفظني وأحفظ من أحب', titleEn: 'O Allah, protect me and those I love.', descriptionAr: 'دعاء للحماية الليلية.', descriptionEn: 'A night prayer for protection.', repetitions: 1 },
  ],
  prayer: [
    { id: 'prayer-1', titleAr: 'اللهم اجعلني من المصلين', titleEn: 'O Allah, make me among those who pray.', descriptionAr: 'دعاء بعد الصلاة.', descriptionEn: 'A prayer after salah for consistency.', repetitions: 1 },
    { id: 'prayer-2', titleAr: 'اللهم تقبل صلاتي', titleEn: 'O Allah, accept my prayer.', descriptionAr: 'طلب قبول من الله.', descriptionEn: 'A short dua for acceptance.', repetitions: 3 },
    { id: 'prayer-3', titleAr: 'اللهم اجعل صلاتي نوراً', titleEn: 'O Allah, make my prayer a light.', descriptionAr: 'دعاء لتنوير القلب بعد الصلاة.', descriptionEn: 'A prayer for light after worship.', repetitions: 1 },
  ],
  reminders: [
    { id: 'reminder-1', titleAr: 'استمر في ذكر الله طول اليوم', titleEn: 'Keep Allah in remembrance throughout the day.', descriptionAr: 'تذكر أن الدعاء يبقي القلب رطباً.', descriptionEn: 'Remind yourself that dhikr keeps the heart moist.', repetitions: 1 },
    { id: 'reminder-2', titleAr: 'اجعل قلبك مستعداً لكل صلاة', titleEn: 'Keep your heart ready for every prayer.', descriptionAr: 'النية تقوي حضور الصلاة.', descriptionEn: 'Intention strengthens prayer presence.', repetitions: 1 },
    { id: 'reminder-3', titleAr: 'اخلق عادة الصباح والمساء', titleEn: 'Build the morning and evening routine.', descriptionAr: 'العادات الروحية تثمر في الحياة.', descriptionEn: 'Spiritual habits bear fruit over time.', repetitions: 1 },
  ],
  duas: [
    { id: 'dua-1', titleAr: 'ربنا آتنا في الدنيا حسنة', titleEn: 'Our Lord, give us good in this world.', descriptionAr: 'دعاء يومي بسيط.', descriptionEn: 'A gentle daily dua.', repetitions: 1 },
    { id: 'dua-2', titleAr: 'اللهم إني أسألك العافية', titleEn: 'O Allah, I ask You for wellbeing.', descriptionAr: 'دعاء بالصحة والطمأنينة.', descriptionEn: 'A supplication for wellness.', repetitions: 3 },
    { id: 'dua-3', titleAr: 'اللهم ثبتني على دينك', titleEn: 'O Allah, keep me firm on Your religion.', descriptionAr: 'دعاء للإستمرار في الطريق الصحيح.', descriptionEn: 'A dua for steadfastness.', repetitions: 1 },
  ],
  quranic: [
    { id: 'quranic-1', titleAr: 'رب اشرح لي صدري', titleEn: 'My Lord, expand for me my breast.', descriptionAr: 'دعاء من سورة طه.', descriptionEn: 'A dua from Surah Taha.', repetitions: 1 },
    { id: 'quranic-2', titleAr: 'رب هب لي حكماً', titleEn: 'My Lord, grant me wisdom.', descriptionAr: 'دعاء من سورة الشعراء.', descriptionEn: 'A dua from Surah Ash-Shuara.', repetitions: 3 },
    { id: 'quranic-3', titleAr: 'ربنا آتنا من لدنك رحمة', titleEn: 'Our Lord, grant us mercy from Yourself.', descriptionAr: 'دعاء من سورة الكهف.', descriptionEn: 'A dua from Surah Al-Kahf.', repetitions: 1 },
  ],
};

const randomDaily = [
  { id: 'random-1', titleAr: 'اذكر الله كثيراً في هذا اليوم.', titleEn: 'Remember Allah often throughout the day.' },
  { id: 'random-2', titleAr: 'ابدأ صباحك بنية صافية ودعاء خاشع.', titleEn: 'Begin your morning with pure intention and humble dua.' },
  { id: 'random-3', titleAr: 'الاستمرارية في الأذكار طريق للطمأنينة.', titleEn: 'Consistency in dhikr is the path to tranquility.' },
  { id: 'random-4', titleAr: 'اجعل قلبك حاضراً في كل ذكر.', titleEn: 'Keep your heart present in every remembrance.' },
  { id: 'random-5', titleAr: 'صلاتك نور، وأذكارك سكينة.', titleEn: 'Your prayer is light, and your dhikr is serenity.' },
];

const storageKey = 'nour-daily-azkar-progress';

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getRandomItem<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)];
}

export default function DailyAzkarPage() {
  const [locale, setLocale] = useState<'ar' | 'en'>('ar');
  const [activeCategory, setActiveCategory] = useState('morning');
  const [progress, setProgress] = useState<Record<string, number>>({});
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [dailyZikr, setDailyZikr] = useState(randomDaily[0]);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('nour-home-locale');
    if (savedLocale === 'ar' || savedLocale === 'en') {
      setLocale(savedLocale);
    } else if (navigator.language?.startsWith('en')) {
      setLocale('en');
    }

    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch {
        setProgress({});
      }
    }

    setDailyZikr(getRandomItem(randomDaily));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress]);

  const categoryItems = useMemo(() => azkarData[activeCategory] || [], [activeCategory]);

  const handleIncrement = (item: any) => {
    const current = progress[item.id] ?? 0;
    const target = item.repetitions ?? 1;
    if (current >= target) return;
    setProgress({ ...progress, [item.id]: current + 1 });
  };

  const handleReset = (item: any) => {
    setProgress({ ...progress, [item.id]: 0 });
  };

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <main dir={direction} className="min-h-screen bg-surface text-slate-950 antialiased transition-colors duration-500 dark:bg-navy dark:text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'الأذكار اليومية' : 'Daily Azkar'}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              {locale === 'ar' ? 'أذكار وزيارات روحانية لكل يوم' : 'Daily spiritual Azkar for every moment'}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {locale === 'ar'
                ? 'اختر الفئة، افتح الذكر، وتتبع التكرار واحفظ تقدمك محلياً.'
                : 'Choose a category, expand a zikr, track repetitions, and save your progress locally.'}
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            {locale === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </Link>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.9fr_0.6fr]">
          <section className="space-y-5 rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const active = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex min-w-[140px] items-center gap-2 rounded-3xl border px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? 'border-slate-900 bg-slate-950 text-white shadow-lg dark:border-white dark:bg-white dark:text-slate-950'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {locale === 'ar' ? category.labelAr : category.labelEn}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-[2rem] border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/70 dark:bg-slate-900/80">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'ذكر يومي عشوائي' : 'Random Daily Zikr'}</p>
              <p className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? dailyZikr.titleAr : dailyZikr.titleEn}</p>
            </div>

            <div className="grid gap-4">
              <AnimatePresence mode="wait">
                {categoryItems.map((item) => {
                  const count = progress[item.id] ?? 0;
                  const completed = count >= (item.repetitions ?? 1);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 16 }}
                      transition={{ duration: 0.35 }}
                      className={`overflow-hidden rounded-[2rem] border p-5 shadow-sm transition ${
                        completed
                          ? 'border-emerald-300/70 bg-emerald-50/90 dark:border-emerald-500/40 dark:bg-emerald-950/80'
                          : 'border-slate-200/70 bg-white/85 dark:border-slate-700/70 dark:bg-slate-950/80'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        className="flex w-full items-start justify-between gap-4 text-left"
                      >
                        <div>
                          <p className="text-base font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? item.titleAr : item.titleEn}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{locale === 'ar' ? item.descriptionAr : item.descriptionEn}</p>
                        </div>
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 transition hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-100">
                          <ArrowRight className={`h-4 w-4 transition-transform ${expandedId === item.id ? 'rotate-90' : ''}`} />
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {expandedId === item.id ? (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 overflow-hidden"
                          >
                            <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80">
                              <p className="text-sm text-slate-600 dark:text-slate-400">{locale === 'ar' ? 'التكرار' : 'Repetitions'}: {count} / {item.repetitions}</p>
                              <div className="mt-4 flex flex-wrap gap-3">
                                <button
                                  type="button"
                                  onClick={() => handleIncrement(item)}
                                  className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                >
                                  {locale === 'ar' ? 'أضف تكرار' : 'Add repetition'}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleReset(item)}
                                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:text-slate-200"
                                >
                                  {locale === 'ar' ? 'إعادة تعيين' : 'Reset'}
                                </button>
                              </div>
                              {completed ? (
                                <div className="mt-4 rounded-3xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200">
                                  {locale === 'ar' ? 'اكتملت هذه الذكر' : 'This zikr is completed'}
                                </div>
                              ) : null}
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'التقدم العام' : 'Overall progress'}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? 'حفظ تلقائي' : 'Saved locally'}</h2>
                </div>
                <Star className="h-6 w-6 text-gold" />
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'عدد الأذكار المكتملة' : 'Completed azkar'}</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{Object.entries(progress).filter(([key, value]) => {
                    const item = Object.values(azkarData).flat().find((a) => a.id === key);
                    return item && value >= item.repetitions;
                  }).length}</p>
                </div>
                <div className="rounded-3xl border border-slate-200/70 bg-white/85 p-4 dark:border-slate-700/70 dark:bg-slate-950/85">
                  <p className="text-sm text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'الفئة الحالية' : 'Current category'}</p>
                  <p className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? categories.find((item) => item.id === activeCategory)?.labelAr : categories.find((item) => item.id === activeCategory)?.labelEn}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/85">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">{locale === 'ar' ? 'قسم اليوم العشوائي' : 'Random Today'}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{locale === 'ar' ? 'تأمل جديد' : 'Fresh reflection'}</h2>
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <Globe2 className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">{locale === 'ar' ? dailyZikr.titleAr : dailyZikr.titleEn}</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
