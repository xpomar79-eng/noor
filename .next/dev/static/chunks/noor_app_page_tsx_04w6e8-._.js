(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/noor/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/noor/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/noor/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/noor/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/moon-star.js [app-client] (ecmascript) <export default as MoonStar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__ = __turbopack_context__.i("[project]/noor/node_modules/lucide-react/dist/esm/icons/earth.js [app-client] (ecmascript) <export default as Globe2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Prayer keys and display order
const PRAYER_ORDER = [
    {
        id: 'Fajr',
        labelAr: 'الفجر',
        labelEn: 'Fajr'
    },
    {
        id: 'Sunrise',
        labelAr: 'الشروق',
        labelEn: 'Sunrise'
    },
    {
        id: 'Dhuhr',
        labelAr: 'الظهر',
        labelEn: 'Dhuhr'
    },
    {
        id: 'Asr',
        labelAr: 'العصر',
        labelEn: 'Asr'
    },
    {
        id: 'Maghrib',
        labelAr: 'المغرب',
        labelEn: 'Maghrib'
    },
    {
        id: 'Isha',
        labelAr: 'العشاء',
        labelEn: 'Isha'
    }
];
// Helper: map some common countries to preferred calculation methods (AlAdhan API)
const COUNTRY_METHOD_OVERRIDES = {
    SA: 4,
    EG: 5,
    TR: 13,
    KW: 4,
    AE: 4,
    QA: 4,
    OM: 4,
    SD: 5
};
// AlAdhan image count / files are handled separately in Mushaf; here we fetch timings
const reminders = [
    {
        titleAr: 'صوت القلب في الصلاة',
        titleEn: 'Quiet your heart in prayer',
        descriptionAr: 'خصص لحظات للنية والتدبر قبل كل صلاة.',
        descriptionEn: 'Pause, intend, and reflect before each prayer.'
    },
    {
        titleAr: 'سلسلة الذكر',
        titleEn: 'Remembrance rhythm',
        descriptionAr: 'اذكر الله في الصباح والمساء لتعزز ثباتك.',
        descriptionEn: 'Recite morning and evening remembrance for steadiness.'
    },
    {
        titleAr: 'نور اليوم',
        titleEn: 'Light of the day',
        descriptionAr: 'ابدأ اليوم بنية صافية وهدوء هادف.',
        descriptionEn: 'Start your day with calm intention and sacred focus.'
    }
];
const azkarList = [
    {
        textAr: 'سُبْحَانَ الله',
        textEn: 'Glory be to Allah'
    },
    {
        textAr: 'الْحَمْدُ لِلّٰهِ',
        textEn: 'All praise is due to Allah'
    },
    {
        textAr: 'اللّهُ أَكْبَر',
        textEn: 'Allah is the Greatest'
    },
    {
        textAr: 'لَا إِلٰهَ إِلَّا الله',
        textEn: 'There is no god but Allah'
    },
    {
        textAr: 'أَسْتَغْفِرُ اللهَ',
        textEn: 'I seek forgiveness from Allah'
    }
];
const prayerTips = [
    {
        textAr: 'الصلاة تجلب السكينة إلى القلب.',
        textEn: 'Prayer brings peace to the heart.'
    },
    {
        textAr: 'صلاة الفجر نور وبركة.',
        textEn: 'Fajr prayer is light and blessing.'
    },
    {
        textAr: 'احفظ صلاتك وإياك أن تنساها.',
        textEn: 'Maintain your prayers and Allah will protect you.'
    },
    {
        textAr: 'الصلاة سبب لتجدد القلب والنية.',
        textEn: 'Prayer renews the heart and intention.'
    },
    {
        textAr: 'كل صلاة نور يعم يومك.',
        textEn: 'Every prayer is a light for your day.'
    }
];
const prayerVirtues = [
    {
        textAr: 'قال رسول الله صلى الله عليه وسلم: «الصلاة عمود الدين».',
        textEn: 'The Prophet ﷺ said: “Prayer is the pillar of religion.”'
    },
    {
        textAr: 'قال عليه الصلاة والسلام: «من حافظ على الصلوات كان له نورًا».',
        textEn: 'He ﷺ said: “Whoever maintains the prayers will have a light.”'
    },
    {
        textAr: 'الصلاة تجعلك قريبًا من رحمة الله ورضاه.',
        textEn: 'Prayer draws you close to Allah’s mercy and pleasure.'
    },
    {
        textAr: 'في الصلاة طمأنينة وراحة للنفس.',
        textEn: 'In prayer there is calm and comfort for the soul.'
    },
    {
        textAr: 'الصلاة أول ما يحاسب عليه العبد يوم القيامة.',
        textEn: 'Prayer is the first thing for which a servant will be held accountable on the Day of Judgment.'
    }
];
const dailyDhikrList = [
    {
        titleAr: 'اذكر الله في كل لحظة تنساب فيها أنفاسك.',
        titleEn: 'Remember Allah in every moment your breath flows.',
        descriptionAr: 'تجد السكينة في الذكر المتجدد.',
        descriptionEn: 'Find peace through renewed remembrance.'
    },
    {
        titleAr: 'ليكن قلبك رائقًا عند كل ذكر.',
        titleEn: 'Let your heart be serene at every remembrance.',
        descriptionAr: 'سحر الذكر يبقى معك طوال اليوم.',
        descriptionEn: 'Let the blessing of zikr stay with you all day.'
    },
    {
        titleAr: 'حتى في الصمت حافظ على ذكر الله.',
        titleEn: 'Even in silence, keep Allah in remembrance.',
        descriptionAr: 'ذكرٌ يومي يجعل لكل لحظة قدسيتها.',
        descriptionEn: 'Daily dhikr makes every moment sacred.'
    },
    {
        titleAr: 'ابدأ يومك بذكرٍ خفيفٍ وقلبٍ حاضر.',
        titleEn: 'Start your day with light remembrance and a present heart.',
        descriptionAr: 'راحة الروح تبدأ بذكر صادق.',
        descriptionEn: 'Soul comfort begins with sincere zikr.'
    },
    {
        titleAr: 'اللهم يادائم الخير، اجعل أذكارنا زادًا لنا.',
        titleEn: 'O Allah, Sustainer of good, make our dhikr nourishment for us.',
        descriptionAr: 'استمر في ذكر الله واعش حياة روحية.',
        descriptionEn: 'Continue remembrance and live a spiritual life.'
    }
];
const tasbeehPhrases = [
    'استغفر الله',
    'سبحان الله',
    'الله أكبر'
];
const reciterNames = {
    minshawi: {
        nameAr: 'الشيخ محمد صديق المنشاوي',
        nameEn: 'Sheikh Mohamed Siddiq Al-Minshawi'
    },
    abdulbasit: {
        nameAr: 'الشيخ عبدالباسط عبدالصمد',
        nameEn: 'Sheikh Abdul Basit Abdus Samad'
    },
    ahmad_nu: {
        nameAr: 'الشيخ أحمد نعينع',
        nameEn: 'Ahmed Naina'
    },
    yasser: {
        nameAr: 'الشيخ ياسر الدوسري',
        nameEn: 'Yasser Al-Dosari'
    }
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
        href: '/recitations'
    },
    {
        titleAr: 'مواعيد الصلاة',
        titleEn: 'Prayer Times',
        descriptionAr: 'راجع جدول الصلاة ومتابعة العد التنازلي.',
        descriptionEn: 'Review prayer schedule and countdown.',
        href: '#prayer-times'
    },
    {
        titleAr: 'الأذكار اليومية',
        titleEn: 'Daily Azkar',
        descriptionAr: 'افتح قسم الأذكار الكامل لكل يوم.',
        descriptionEn: 'Open the full Daily Azkar section for every day.',
        href: '/daily-azkar'
    }
];
const defaultCheckins = {
    fajr: false,
    dhuhr: false,
    asr: false,
    maghrib: false,
    isha: false
};
function formatDuration(milliseconds) {
    const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function buildPrayerTime(date, time) {
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
function recommendedAzkarType(hour) {
    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 18) return 'evening';
    return 'sleep';
}
const recommendedAzkarLabels = {
    morning: {
        titleAr: 'أذكار الصباح',
        titleEn: 'Morning Azkar',
        descriptionAr: 'ابدأ يومك بذكر ينير القلب.',
        descriptionEn: 'Start the day with remembrance that lights the heart.'
    },
    evening: {
        titleAr: 'أذكار المساء',
        titleEn: 'Evening Azkar',
        descriptionAr: 'اغلق يومك بذكر وطمأنينة.',
        descriptionEn: 'Close your day with peace and remembrance.'
    },
    sleep: {
        titleAr: 'أذكار النوم',
        titleEn: 'Sleep Azkar',
        descriptionAr: 'استعد لراحة هادئة بذكر قبل النوم.',
        descriptionEn: 'Prepare for a calm rest with bedtime remembrance.'
    }
};
function HomePage() {
    _s();
    const [locale, setLocale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('ar');
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>new Date()
    }["HomePage.useState"]);
    const [completedPrayers, setCompletedPrayers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCheckins);
    const [streak, setStreak] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [streakDate, setStreakDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notification, setNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toastVisible, setToastVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toastTitle, setToastTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toastBody, setToastBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Location & dynamic prayer time state
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [timezone, setTimezone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HomePage.useState": ()=>Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    }["HomePage.useState"]);
    const [prayerTimings, setPrayerTimings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hijriDateStr, setHijriDateStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [gregorianDateStr, setGregorianDateStr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [prayerLoading, setPrayerLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [prayerError, setPrayerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastMushafPage, setLastMushafPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastRecitation, setLastRecitation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dailyAzkarProgress, setDailyAzkarProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [dailyDhikr, setDailyDhikr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tasbeehTotalCount, setTasbeehTotalCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
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
                } catch  {
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
                        setLastRecitation({
                            surah: parsed.surah,
                            reciter: parsed.reciter
                        });
                    }
                } catch  {
                    setLastRecitation(null);
                }
            }
            const savedAzkar = window.localStorage.getItem('nour-daily-azkar-progress');
            if (savedAzkar) {
                try {
                    setDailyAzkarProgress(JSON.parse(savedAzkar));
                } catch  {
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
                        const nextDhikr = {
                            ...chooseDailyDhikr(),
                            date: todayDhikr
                        };
                        setDailyDhikr(nextDhikr);
                        window.localStorage.setItem(DAILY_DHIKR_KEY, JSON.stringify(nextDhikr));
                    }
                } catch  {
                    const nextDhikr = {
                        ...chooseDailyDhikr(),
                        date: todayDhikr
                    };
                    setDailyDhikr(nextDhikr);
                    window.localStorage.setItem(DAILY_DHIKR_KEY, JSON.stringify(nextDhikr));
                }
            } else {
                const nextDhikr = {
                    ...chooseDailyDhikr(),
                    date: todayDhikr
                };
                setDailyDhikr(nextDhikr);
                window.localStorage.setItem(DAILY_DHIKR_KEY, JSON.stringify(nextDhikr));
            }
            const savedTasbeeh = window.localStorage.getItem(TASBEEH_PROGRESS_KEY);
            if (savedTasbeeh) {
                try {
                    const parsed = JSON.parse(savedTasbeeh);
                    setTasbeehTotalCount(typeof parsed.totalCount === 'number' ? parsed.totalCount : 0);
                } catch  {
                    setTasbeehTotalCount(0);
                }
            }
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const interval = window.setInterval({
                "HomePage.useEffect.interval": ()=>{
                    setNow(new Date());
                }
            }["HomePage.useEffect.interval"], 1000);
            return ({
                "HomePage.useEffect": ()=>window.clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    // Fetch location and prayer times: try high-accuracy geolocation, then IP fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            let mounted = true;
            const getPosition = {
                "HomePage.useEffect.getPosition": ()=>new Promise({
                        "HomePage.useEffect.getPosition": (resolve, reject)=>{
                            if (!navigator.geolocation) return reject(new Error('Geolocation not supported'));
                            navigator.geolocation.getCurrentPosition(resolve, reject, {
                                enableHighAccuracy: true,
                                timeout: 10000
                            });
                        }
                    }["HomePage.useEffect.getPosition"])
            }["HomePage.useEffect.getPosition"];
            const fetchIPLocation = {
                "HomePage.useEffect.fetchIPLocation": async ()=>{
                    try {
                        const res = await fetch('https://ipapi.co/json/');
                        if (!res.ok) throw new Error('IP lookup failed');
                        return res.json();
                    } catch (err) {
                        return null;
                    }
                }
            }["HomePage.useEffect.fetchIPLocation"];
            const reverseGeocode = {
                "HomePage.useEffect.reverseGeocode": async (lat, lon)=>{
                    try {
                        const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=${locale === 'ar' ? 'ar' : 'en'}`;
                        const res = await fetch(url);
                        if (!res.ok) return null;
                        return res.json();
                    } catch  {
                        return null;
                    }
                }
            }["HomePage.useEffect.reverseGeocode"];
            const fetchPrayerTimesFor = {
                "HomePage.useEffect.fetchPrayerTimesFor": async (lat, lon, countryCode)=>{
                    try {
                        setPrayerLoading(true);
                        setPrayerError(null);
                        const method = countryCode && COUNTRY_METHOD_OVERRIDES[countryCode.toUpperCase()] || 2;
                        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || timezone;
                        const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=${method}&timezonestring=${encodeURIComponent(tz)}`;
                        const res = await fetch(url);
                        if (!res.ok) throw new Error('Prayer API failed');
                        const body = await res.json();
                        if (body.code !== 200) throw new Error(body.status || 'Prayer API error');
                        const timings = body.data.timings;
                        if (mounted) {
                            setPrayerTimings(timings);
                            const hijri = body.data.date?.hijri;
                            const greg = body.data.date?.gregorian;
                            setHijriDateStr(hijri ? `${hijri.day} ${hijri.month.en} ${hijri.year}` : '');
                            setGregorianDateStr(greg ? `${greg.weekday.en}, ${greg.day} ${greg.month.en} ${greg.year}` : '');
                        }
                    } catch (err) {
                        if (mounted) setPrayerError(err.message ?? 'Failed to load prayer times');
                    } finally{
                        if (mounted) setPrayerLoading(false);
                    }
                }
            }["HomePage.useEffect.fetchPrayerTimesFor"];
            ({
                "HomePage.useEffect": async ()=>{
                    try {
                        try {
                            const pos = await getPosition();
                            const lat = pos.coords.latitude;
                            const lon = pos.coords.longitude;
                            const geo = await reverseGeocode(lat, lon);
                            if (!mounted) return;
                            setLocation({
                                lat,
                                lon,
                                city: geo?.city || geo?.locality || geo?.principalSubdivision,
                                country: geo?.countryName,
                                countryCode: geo?.countryCode
                            });
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
                            setLocation({
                                lat,
                                lon,
                                city: ip.city,
                                country: ip.country_name,
                                countryCode: ip.country
                            });
                            setTimezone(ip.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || timezone);
                            await fetchPrayerTimesFor(lat, lon, ip.country);
                        } else {
                            setPrayerError('Location unavailable');
                            setPrayerLoading(false);
                        }
                    } catch (err) {
                        if (mounted) setPrayerError(err.message ?? 'Failed to determine location');
                        if (mounted) setPrayerLoading(false);
                    }
                }
            })["HomePage.useEffect"]();
            return ({
                "HomePage.useEffect": ()=>{
                    mounted = false;
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        locale
    ]);
    // Derived prayerTimes array from fetched timings
    const prayerTimes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[prayerTimes]": ()=>{
            if (!prayerTimings) return PRAYER_ORDER.map({
                "HomePage.useMemo[prayerTimes]": (p)=>({
                        ...p,
                        date: null
                    })
            }["HomePage.useMemo[prayerTimes]"]);
            const today = new Date(now);
            return PRAYER_ORDER.map({
                "HomePage.useMemo[prayerTimes]": (p)=>{
                    const timeStr = prayerTimings[p.id] ?? prayerTimings[p.id.toUpperCase()] ?? '';
                    if (!timeStr) return {
                        ...p,
                        date: null
                    };
                    // timeStr may contain offsets or (DST); keep hh:mm
                    const match = timeStr.match(/(\d{1,2}:\d{2})/);
                    const hhmm = match ? match[1] : timeStr;
                    const [hh, mm] = hhmm.split(':').map(Number);
                    const d = new Date(today);
                    d.setHours(hh, mm, 0, 0);
                    return {
                        ...p,
                        date: d
                    };
                }
            }["HomePage.useMemo[prayerTimes]"]);
        }
    }["HomePage.useMemo[prayerTimes]"], [
        prayerTimings,
        now
    ]);
    const nextPrayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HomePage.useMemo[nextPrayer]": ()=>{
            const upcoming = prayerTimes.find({
                "HomePage.useMemo[nextPrayer].upcoming": (prayer)=>prayer.date && prayer.date.getTime() > now.getTime()
            }["HomePage.useMemo[nextPrayer].upcoming"]);
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
            return {
                ...first,
                date: d
            };
        }
    }["HomePage.useMemo[nextPrayer]"], [
        prayerTimes,
        now,
        prayerTimings
    ]);
    const timeToNextPrayer = Math.max(0, (nextPrayer.date ? nextPrayer.date.getTime() : 0) - now.getTime());
    const completedCount = Object.values(completedPrayers).filter(Boolean).length;
    const tasbeehCycleCount = Math.floor(tasbeehTotalCount / 99) + 1;
    const tasbeehIndex = tasbeehTotalCount % 99;
    const currentTasbeehPhrase = tasbeehPhrases[Math.floor(tasbeehIndex / 33) % 3];
    const tasbeehProgressPercent = Math.round(tasbeehIndex / 99 * 100);
    const allComplete = completedCount === Object.keys(defaultCheckins).length;
    const azkarItemsDone = Object.values(dailyAzkarProgress).filter((count)=>count > 0).length;
    const azkarProgressPercent = Math.round(azkarItemsDone / 21 * 100);
    const spiritualProgressPercent = Math.round((completedCount / 5 * 0.5 + azkarProgressPercent / 100 * 0.5) * 100);
    const recommendedType = recommendedAzkarType(now.getHours());
    const recommendedAzkar = recommendedAzkarLabels[recommendedType];
    const direction = locale === 'ar' ? 'rtl' : 'ltr';
    const formattedLocalTime = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZoneName: 'short'
    }).format(now);
    const formattedGregorian = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);
    const formattedHijri = new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA-u-ca-islamic' : 'en-US-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(now);
    const handleTasbeehTap = ()=>{
        const nextCount = tasbeehTotalCount + 1;
        setTasbeehTotalCount(nextCount);
        window.localStorage.setItem(TASBEEH_PROGRESS_KEY, JSON.stringify({
            totalCount: nextCount
        }));
    };
    const handleLocaleChange = (value)=>{
        setLocale(value);
        window.localStorage.setItem('nour-home-locale', value);
    };
    const saveCheckins = (value)=>{
        const today = todayKey();
        const existing = JSON.parse(window.localStorage.getItem('nour-prayer-checkins') || '{}');
        existing[today] = value;
        window.localStorage.setItem('nour-prayer-checkins', JSON.stringify(existing));
    };
    const saveStreak = (value, date)=>{
        window.localStorage.setItem('nour-prayer-streak', JSON.stringify({
            streak: value,
            date
        }));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!toastVisible) return;
            const timer = window.setTimeout({
                "HomePage.useEffect.timer": ()=>setToastVisible(false)
            }["HomePage.useEffect.timer"], 6500);
            return ({
                "HomePage.useEffect": ()=>window.clearTimeout(timer)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], [
        toastVisible
    ]);
    const handlePrayerToggle = (id)=>{
        const key = id.toLowerCase();
        const nextState = {
            ...completedPrayers,
            [key]: !completedPrayers[key]
        };
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
            setNotification(locale === 'ar' ? 'مبارك! أكملت الصلاة اليوم وحافظت على streak روحاني.' : 'Blessed! You completed prayer today and kept your spiritual streak.');
            window.setTimeout(()=>setNotification(''), 7000);
            return;
        }
        if (!Object.values(nextState).every(Boolean) && allComplete) {
            setNotification('');
        }
    };
    const sectionTitle = locale === 'ar' ? 'رحلة روحية متجددة' : 'Renewed Spiritual Journey';
    const sectionSubtitle = locale === 'ar' ? 'تتبع الوقت والذكر والتقدم في يومك الروحي.' : 'Track time, remembrance, and progress in your spiritual day.';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        dir: direction,
        className: "min-h-screen bg-surface text-slate-950 antialiased transition-colors duration-500 dark:bg-navy dark:text-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed ${direction === 'rtl' ? 'left-6' : 'right-6'} bottom-6 z-50 transition-all duration-500 ${toastVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-sm rounded-[2rem] border border-emerald-300/30 bg-emerald-50/95 p-5 shadow-2xl backdrop-blur-xl text-slate-950 dark:border-emerald-500/40 dark:bg-emerald-950/90 dark:text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 flex h-11 w-11 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/noor/app/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-slate-950 dark:text-white",
                                        children: toastTitle
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-sm text-slate-700 dark:text-slate-300",
                                        children: toastBody
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 551,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 547,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/noor/app/page.tsx",
                    lineNumber: 546,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/noor/app/page.tsx",
                lineNumber: 545,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 max-w-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/80 dark:text-slate-200",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
                                            className: "h-4 w-4 text-gold"
                                        }, void 0, false, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl",
                                        children: locale === 'ar' ? 'صفاء روحي مع وقت الصلاة والتأمل' : 'A calm spiritual experience with prayer time and reflection'
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300",
                                        children: locale === 'ar' ? 'تابع الوقت المحلي، التاريخ الهجري والميلادي، واحفظ تقدمك الروحي في كل صلاة.' : 'Follow your local time, Hijri and Gregorian dates, and preserve your spiritual progress each prayer.'
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleLocaleChange('ar'),
                                                className: `rounded-full px-4 py-2 text-sm font-semibold transition ${locale === 'ar' ? 'bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950' : 'border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'}`,
                                                children: "العربية"
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleLocaleChange('en'),
                                                className: `rounded-full px-4 py-2 text-sm font-semibold transition ${locale === 'en' ? 'bg-slate-950 text-white shadow-lg dark:bg-white dark:text-slate-950' : 'border border-slate-300 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'}`,
                                                children: "English"
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 577,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'الوقت المحلي' : 'Local Time'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-4 text-3xl font-semibold text-slate-950 dark:text-white",
                                                        children: formattedLocalTime
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-slate-600 dark:text-slate-400",
                                                        children: gregorianDateStr || formattedGregorian
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 603,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'التاريخ الهجري' : 'Hijri Date'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-4 text-3xl font-semibold text-slate-950 dark:text-white",
                                                        children: hijriDateStr || formattedHijri
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-slate-600 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'تقويم إسلامي' : 'Islamic calendar'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 615,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'عدد الأيام المتتالية' : 'Streak'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-4 text-3xl font-semibold text-slate-950 dark:text-white",
                                                        children: streak
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm text-slate-600 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'يوم روحي متواصل' : 'spiritual days in a row'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 617,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                                        children: locale === 'ar' ? 'متابعة القراءة' : 'Continue Reading'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 632,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "mt-3 text-xl font-semibold text-slate-950 dark:text-white",
                                                                        children: locale === 'ar' ? 'استأنف من حيث توقفت' : 'Pick up where you left off'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 631,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 640,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 630,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: lastMushafPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: locale === 'ar' ? `مصحف الصفحة ${lastMushafPage}` : `Mushaf page ${lastMushafPage}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 647,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: locale === 'ar' ? 'ابدأ قراءة المصحف' : 'Start the Mushaf reading'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 649,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 645,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: lastRecitation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: locale === 'ar' ? `سورة ${lastRecitation.surah} - ${reciterNames[lastRecitation.reciter]?.nameAr || lastRecitation.reciter}` : `Surah ${lastRecitation.surah} - ${reciterNames[lastRecitation.reciter]?.nameEn || lastRecitation.reciter}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 654,
                                                                    columnNumber: 23
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: locale === 'ar' ? 'استمع لتلاوة جديدة' : 'Resume a recitation'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 656,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 644,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 grid gap-3 sm:grid-cols-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/mushaf",
                                                                className: "rounded-2xl border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:border-slate-700 dark:bg-white dark:text-slate-950",
                                                                children: locale === 'ar' ? 'تابع المصحف' : 'Continue Mushaf'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 662,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/recitations",
                                                                className: "rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
                                                                children: locale === 'ar' ? 'استأنف التلاوة' : 'Resume Recitation'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 629,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                                        children: locale === 'ar' ? 'وردة يومية' : 'Daily Wird'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 679,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "mt-3 text-xl font-semibold text-slate-950 dark:text-white",
                                                                        children: locale === 'ar' ? 'تقدمك في الذكر والقراءة' : 'Your reading and listening progress'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 682,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 678,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gold/10 text-gold",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 687,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-6 space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between text-sm text-slate-600 dark:text-slate-300",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: locale === 'ar' ? 'نسبة التقدم الروحي' : 'Spiritual progress'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 693,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-slate-950 dark:text-white",
                                                                        children: [
                                                                            spiritualProgressPercent,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 694,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 692,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-3 rounded-full bg-gradient-to-r from-gold via-slate-900 to-slate-950 dark:from-gold dark:via-white",
                                                                    style: {
                                                                        width: `${spiritualProgressPercent}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 697,
                                                                    columnNumber: 21
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 696,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm leading-6 text-slate-600 dark:text-slate-300",
                                                                children: locale === 'ar' ? 'تابع قراءتك وأذكارك اليومية مع لمسة روحية أنيقة.' : 'Track your daily Quran reading and remembrance with a premium feel.'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 691,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 676,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 560,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-[2.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'الصلاة التالية' : 'Next Prayer'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 712,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "mt-3 text-2xl font-semibold text-slate-950 dark:text-white",
                                                        children: prayerLoading ? locale === 'ar' ? 'جارٍ التحميل...' : 'Loading...' : locale === 'ar' ? nextPrayer.labelAr : nextPrayer.labelEn
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 711,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/10 text-gold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 719,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 710,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2rem] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-slate-700/70 dark:bg-slate-900/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'يبقى حتى الصلاة التالية' : 'Time until next prayer'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white",
                                                        children: prayerLoading ? locale === 'ar' ? '...' : '...' : formatDuration(timeToNextPrayer)
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 729,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 725,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-3xl border border-slate-200/70 bg-white/85 p-4 dark:border-slate-700/70 dark:bg-slate-950/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-500 dark:text-slate-400",
                                                                children: locale === 'ar' ? 'الساعة التالية' : 'Prayer time'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xl font-semibold text-slate-950 dark:text-white",
                                                                children: new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
                                                                    hour: '2-digit',
                                                                    minute: '2-digit',
                                                                    hour12: true
                                                                }).format(nextPrayer.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 736,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-3xl border border-slate-200/70 bg-white/85 p-4 dark:border-slate-700/70 dark:bg-slate-950/80",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-slate-500 dark:text-slate-400",
                                                                children: locale === 'ar' ? 'المنطقة الزمنية' : 'Timezone'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 739,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-xl font-semibold text-slate-950 dark:text-white",
                                                                children: Intl.DateTimeFormat('en-US', {
                                                                    timeZoneName: 'short'
                                                                }).format(now).split(' ').pop()
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 740,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 738,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 733,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 724,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 709,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 559,
                        columnNumber: 9
                    }, this),
                    notification ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 rounded-[2rem] border border-gold/30 bg-gold/10 p-5 text-slate-950 shadow-lg dark:border-gold/40 dark:bg-gold/20 dark:text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: notification
                        }, void 0, false, {
                            fileName: "[project]/noor/app/page.tsx",
                            lineNumber: 749,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 748,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "prayer-times",
                        className: "mt-12 space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                children: sectionTitle
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-2 text-3xl font-semibold text-slate-950 dark:text-white",
                                                children: sectionSubtitle
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 757,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 755,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/80 dark:text-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "h-4 w-4 text-gold"
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 760,
                                                columnNumber: 15
                                            }, this),
                                            locale === 'ar' ? 'نموذج إسلامي فاخر' : 'Premium Islamic style'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-5 xl:grid-cols-[1.2fr_0.8fr]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 sm:grid-cols-2",
                                            children: prayerLoading ? PRAYER_ORDER.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-pulse rounded-3xl border p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-4 w-32 rounded bg-slate-200 dark:bg-slate-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/noor/app/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 h-8 w-40 rounded bg-slate-200 dark:bg-slate-800"
                                                        }, void 0, false, {
                                                            fileName: "[project]/noor/app/page.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 23
                                                }, this)) : prayerTimes.map((prayer)=>{
                                                const key = prayer.id?.toLowerCase();
                                                const isToggleable = key ? Object.prototype.hasOwnProperty.call(defaultCheckins, key) : false;
                                                const isDone = isToggleable ? completedPrayers[key] : false;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>isToggleable ? handlePrayerToggle(prayer.id) : undefined,
                                                    className: `group flex flex-col items-start justify-between gap-3 rounded-3xl border p-5 text-left transition duration-300 focus:outline-none ${isDone ? 'border-emerald-300/70 bg-emerald-50/85 text-slate-950 shadow-[0_20px_60px_rgba(16,185,129,0.12)] ring-1 ring-emerald-300/40 dark:bg-emerald-950/80 dark:text-white' : 'border-slate-200/70 bg-slate-50/90 hover:-translate-y-0.5 hover:border-slate-300 dark:border-slate-700/70 dark:bg-slate-900/75'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between w-full gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                                            children: locale === 'ar' ? prayer.labelAr : prayer.labelEn
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/noor/app/page.tsx",
                                                                            lineNumber: 792,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "mt-2 text-2xl font-semibold text-slate-950 dark:text-white",
                                                                            children: prayer.date ? new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
                                                                                hour: '2-digit',
                                                                                minute: '2-digit',
                                                                                hour12: true
                                                                            }).format(prayer.date) : '--:--'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/noor/app/page.tsx",
                                                                            lineNumber: 795,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 791,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950",
                                                                    children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 806,
                                                                        columnNumber: 41
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 806,
                                                                        columnNumber: 79
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/noor/app/page.tsx",
                                                                    lineNumber: 805,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/noor/app/page.tsx",
                                                            lineNumber: 790,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-2xl bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:bg-slate-900 dark:text-slate-300",
                                                            children: isToggleable ? isDone ? locale === 'ar' ? 'تمت' : 'Completed' : locale === 'ar' ? 'لم تُقم' : 'Pending' : locale === 'ar' ? 'غير متاح' : 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/noor/app/page.tsx",
                                                            lineNumber: 809,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, prayer.id, true, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 780,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 767,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 766,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/85",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'متابعة الصلاة' : 'Prayer progress'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 830,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-3xl bg-slate-50 p-4 dark:bg-slate-900/80",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-500 dark:text-slate-400",
                                                                        children: locale === 'ar' ? 'الصلوات المكتملة' : 'Completed prayers'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 835,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-3xl font-semibold text-slate-950 dark:text-white",
                                                                        children: [
                                                                            completedCount,
                                                                            " / 5"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 836,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-3xl border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-slate-500 dark:text-slate-400",
                                                                        children: locale === 'ar' ? 'ترتيبك الروحي' : 'Spiritual flow'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 839,
                                                                        columnNumber: 21
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-full rounded-full bg-gradient-to-r from-gold via-slate-900 to-slate-950 dark:from-gold dark:via-white",
                                                                            style: {
                                                                                width: `${completedCount / 5 * 100}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/noor/app/page.tsx",
                                                                            lineNumber: 841,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 840,
                                                                        columnNumber: 21
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 838,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 829,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2.5rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/85",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'بطاقة التذكير' : 'Reminder card'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 space-y-4",
                                                        children: reminders.slice(0, 2).map((reminder)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "rounded-3xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/80",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold text-slate-950 dark:text-white",
                                                                        children: locale === 'ar' ? reminder.titleAr : reminder.titleEn
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400",
                                                                        children: locale === 'ar' ? reminder.descriptionAr : reminder.descriptionEn
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/noor/app/page.tsx",
                                                                        lineNumber: 856,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, reminder.titleEn, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 850,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 828,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 765,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 753,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-12 grid gap-5 xl:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'التسبيح اليومي' : 'Daily Dhikr'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 868,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-xl font-semibold text-slate-950 dark:text-white",
                                                        children: locale === 'ar' ? 'ذكر اليوم العابر' : 'Today’s reminder'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 871,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 867,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white dark:bg-white dark:text-slate-950",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 876,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 875,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 866,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 space-y-4 text-slate-700 dark:text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-semibold text-slate-950 dark:text-white",
                                                children: dailyDhikr ? locale === 'ar' ? dailyDhikr.titleAr : dailyDhikr.titleEn : locale === 'ar' ? 'جارٍ التحميل...' : 'Loading...'
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 880,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-6",
                                                children: dailyDhikr ? locale === 'ar' ? dailyDhikr.descriptionAr : dailyDhikr.descriptionEn : ''
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 883,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                children: locale === 'ar' ? 'مجدد يومياً' : 'Refreshed daily'
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 879,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 865,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'عداد التسبيح' : 'Tasbeeh Counter'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 894,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-xl font-semibold text-slate-950 dark:text-white",
                                                        children: locale === 'ar' ? 'سلسلة الذكر' : 'Dhikr Sequence'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 897,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 893,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 902,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 901,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 892,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 space-y-5 text-slate-700 dark:text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[2rem] border border-slate-200/70 bg-slate-50 p-5 dark:border-slate-700/70 dark:bg-slate-900/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'الذكر الحالي' : 'Current Dhikr'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-3 text-2xl font-semibold text-slate-950 dark:text-white",
                                                        children: currentTasbeehPhrase
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 906,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-3 sm:grid-cols-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                                children: locale === 'ar' ? 'دورة التسبيح' : 'Cycle'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 915,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white",
                                                                children: tasbeehCycleCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 918,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 914,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700/70 dark:bg-slate-950/85",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                                children: locale === 'ar' ? 'عدد التسبيحات' : 'Total count'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 921,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-3 text-3xl font-semibold text-slate-950 dark:text-white",
                                                                children: tasbeehTotalCount
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 924,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 913,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-sm text-slate-500 dark:text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: locale === 'ar' ? 'تقدم الدورة' : 'Cycle progress'
                                                            }, void 0, false, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 930,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-slate-950 dark:text-white",
                                                                children: [
                                                                    tasbeehProgressPercent,
                                                                    "%"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/noor/app/page.tsx",
                                                                lineNumber: 931,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full rounded-full bg-gradient-to-r from-gold via-slate-900 to-slate-950 dark:from-gold dark:via-white",
                                                            style: {
                                                                width: `${tasbeehProgressPercent}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/noor/app/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 933,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 928,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleTasbeehTap,
                                                className: "w-full rounded-2xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200",
                                                children: locale === 'ar' ? 'اضغط للتسبيح' : 'Tap to Tasbeeh'
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 938,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 905,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 891,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'أذكار مقترحة' : 'Recommended Azkar'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 950,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-xl font-semibold text-slate-950 dark:text-white",
                                                        children: locale === 'ar' ? recommendedAzkar.titleAr : recommendedAzkar.titleEn
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 953,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 949,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2d$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoonStar$3e$__["MoonStar"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 958,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 957,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 948,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 text-sm leading-6 text-slate-700 dark:text-slate-300",
                                        children: locale === 'ar' ? recommendedAzkar.descriptionAr : recommendedAzkar.descriptionEn
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/daily-azkar",
                                            className: "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
                                            children: locale === 'ar' ? 'عرض الأذكار' : 'View Azkar'
                                        }, void 0, false, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 965,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 964,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: "rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-xl backdrop-blur-xl transition hover:-translate-y-0.5 dark:border-slate-700/80 dark:bg-slate-950/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                        children: locale === 'ar' ? 'مقترحات القراءة' : 'Recommended Reading'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 976,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "mt-3 text-xl font-semibold text-slate-950 dark:text-white",
                                                        children: locale === 'ar' ? 'استمر في الوصول إلى المصحف' : 'Keep your Mushaf momentum'
                                                    }, void 0, false, {
                                                        fileName: "[project]/noor/app/page.tsx",
                                                        lineNumber: 979,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 975,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 984,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 983,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 974,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-6 text-sm leading-6 text-slate-700 dark:text-slate-300",
                                        children: locale === 'ar' ? 'تابع تقدمك في قراءة المصحف واستفد من مسار روحاني يومي.' : 'Continue your Quran reading journey with a premium daily focus.'
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 987,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/mushaf",
                                            className: "inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100",
                                            children: locale === 'ar' ? 'افتح المصحف' : 'Open Mushaf'
                                        }, void 0, false, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 993,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 992,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 973,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 864,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "reminders",
                        className: "mt-12 space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-slate-700/70 dark:bg-slate-950/85",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                children: locale === 'ar' ? 'أذكار أفقية' : 'Azkar slider'
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mt-2 text-2xl font-semibold text-slate-950 dark:text-white",
                                                children: locale === 'ar' ? 'أذكار يومية متحركة' : 'Daily zikr in motion'
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 1006,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$earth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe2$3e$__["Globe2"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 15
                                            }, this),
                                            locale === 'ar' ? 'اذكر الله الآن' : 'Remember Allah now'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/noor/app/page.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 1003,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-50/70 p-4 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/70",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide",
                                    children: azkarList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-[260px] snap-center rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-xl backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/85",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl font-semibold text-slate-950 dark:text-white",
                                                    children: item.textAr
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 1021,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400",
                                                    children: item.textEn
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 1022,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.textEn, true, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 1017,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/noor/app/page.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 1014,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 1002,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "mt-12 grid gap-5 md:grid-cols-3",
                        children: navCards.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: item.href,
                                className: "group rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-300 dark:border-slate-700/70 dark:bg-slate-950/85",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400",
                                                    children: locale === 'ar' ? item.titleAr : item.titleEn
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-base leading-6 text-slate-600 dark:text-slate-400",
                                                    children: locale === 'ar' ? item.descriptionAr : item.descriptionEn
                                                }, void 0, false, {
                                                    fileName: "[project]/noor/app/page.tsx",
                                                    lineNumber: 1039,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-950 text-white transition group-hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:group-hover:bg-slate-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/noor/app/page.tsx",
                                                lineNumber: 1042,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/noor/app/page.tsx",
                                            lineNumber: 1041,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/noor/app/page.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 15
                                }, this)
                            }, item.titleEn, false, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 1031,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 1029,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "about",
                        className: "mt-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-[2rem] border border-white/80 bg-white/85 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/85",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto max-w-2xl text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$noor$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line",
                                    children: locale === 'ar' ? `برمجة عمر هشام\nصدقة جارية له ولوالديه ولجميع المسلمين إن شاء الله.\n\nنسأل الله أن ينفع بهذا العمل ويجعله في ميزان الحسنات.` : `Developed by Omar Hisham\nA continuing charity for him, his parents, and all Muslims, insha’Allah.\n\nMay Allah make this work beneficial and place it in the scale of good deeds.`
                                }, void 0, false, {
                                    fileName: "[project]/noor/app/page.tsx",
                                    lineNumber: 1051,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/noor/app/page.tsx",
                                lineNumber: 1050,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/noor/app/page.tsx",
                            lineNumber: 1049,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/noor/app/page.tsx",
                        lineNumber: 1048,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/noor/app/page.tsx",
                lineNumber: 558,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/noor/app/page.tsx",
        lineNumber: 544,
        columnNumber: 5
    }, this);
}
_s(HomePage, "O/uJd5qBfwl0ShG/obFXrv3XFOU=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=noor_app_page_tsx_04w6e8-._.js.map