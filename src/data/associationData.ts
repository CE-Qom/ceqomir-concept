export interface MemberProfile {
  id: string;
  name: string;
  role: string;
  committee: string;
  isCentralCouncil: boolean;
  councilOrder?: string;
  entryYear: string;
  focus: string;
  bio: string;
  github: string;
  telegram: string;
  image: string;
}

export interface UsefulLinkItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'university' | 'programming' | 'association';
  categoryLabel: string;
  url: string;
  domain: string;
}

export interface ActivityPillar {
  index: string;
  title: string;
  summary: string;
  metric: string;
}

export const IMAGES = {
  associationLogo: '/assets/aistudio/image_da3fbc79.png',
  sponsor9craftIcon: '/assets/aistudio/image_ea06aded.png',
  sponsor9craftWordmark: '/assets/aistudio/image_9f53c85d.png',
  heroLab: '/src/assets/images/hero_qom_ce_lab_1795109035315.jpg',
  sponsor9craft: '/src/assets/images/sponsor_9craft_brand_showcase_1795117505380.jpg',
};

export const ASSOCIATION_INFO = {
  brandShort: 'انجمن کامپیوتر قم',
  brandFull: 'انجمن علمی مهندسی کامپیوتر دانشگاه قم',
  englishCode: 'QOM UNIVERSITY · COMPUTER ENGINEERING ASSOCIATION',
  term: 'دوره چهاردهم · سال تحصیلی ۱۴۰۴–۱۴۰۵',
  location: 'دانشگاه قم · دانشکده فنی و مهندسی · طبقه دوم',
  website: 'https://ceqom.ir',
  siteDisplay: 'ceqom.ir',
  channelHandle: '@ceqom',
  telegramUrl: 'https://t.me/ceqom',
  eitaaUrl: 'https://eitaa.com/ceqom',
  heroHeadline: 'محل تلاقی دانش، کد و تجربه در مهندسی کامپیوتر دانشگاه قم',
  heroLead:
    'انجمن علمی مهندسی کامپیوتر دانشگاه قم با هدف پیوند آموزش دانشگاهی با مهارت‌های واقعی صنعت نرم‌افزار، بستر برگزاری کارگاه‌های تخصصی، مسابقات برنامه‌نویسی، حلقه‌های پژوهش و تولید ابزارهای کاربردی دانشجویی است.',
  introNarrative:
    'ما در انجمن علمی مهندسی کامپیوتر دانشگاه قم باور داریم یادگیری مهندسی نرم‌افزار، هوش مصنوعی و سیستم‌های رایانه‌ای در کلاس درس متوقف نمی‌شود. شورای مرکزی و اعضای فعال انجمن در طول هر نیم‌سال تحصیلی، مسیرهای آموزشی ساختاریافته، جلسات حل تمرین الگوریتم، بازدیدهای صنعتی و رویدادهای تیمی را برای تمام ورودی‌های کارشناسی و تحصیلات تکمیلی طراحی و اجرا می‌کنند.',
  stats: [
    { value: '۴۸+', label: 'کارگاه و دوره تخصصی برگزارشده در ۲ سال اخیر' },
    { value: '۶۵۰+', label: 'دانشجوی عضو و مخاطب فعال دانشکده فنی' },
    { value: '۱۲', label: 'مسابقه الگوریتم، ICPC داخلی و رویداد تیمی' },
    { value: '۵ نفر', label: 'اعضای منتخب شورای مرکزی دوره چهاردهم' },
  ],
};

export const ACTIVITY_PILLARS: ActivityPillar[] = [
  {
    index: '۰۱',
    title: 'کارگاه‌های عملی و مسیرهای مهارتی',
    summary:
      'برگزاری دوره‌های کاربردی گیت و لینوکس، توسعه وب مدرن، یادگیری ماشین و مهندسی سیستم با تدریس دانشجویان برتر و متخصصان صنعت.',
    metric: 'بیش از ۱۴۰ ساعت آموزش عملی در هر سال تحصیلی',
  },
  {
    index: '۰۲',
    title: 'مسابقات برنامه‌نویسی و ICPC دانشگاه قم',
    summary:
      'طراحی سوال، داوری آنلاین و برگزاری تمرین‌های هفتگی الگوریتم برای آماده‌سازی تیم‌های دانشگاه قم جهت حضور در رقابت‌های کشوری.',
    metric: 'اعزام و پشتیبانی تیم‌های الگوریتم دانشکده',
  },
  {
    index: '۰۳',
    title: 'هسته‌های پژوهشی و پروژه‌های متن‌باز',
    summary:
      'شکل‌گیری تیم‌های کوچک دانشجویی برای توسعه ابزارهای متن‌باز، پیاده‌سازی مقالات هوش مصنوعی و ارائه سمینارهای تخصصی.',
    metric: '۸ مخزن متن‌باز فعال و آرشیو پروژه‌های درسی',
  },
  {
    index: '۰۴',
    title: 'منتورینگ ورودی‌های جدید و نشریه علمی',
    summary:
      'همراهی دانشجویان جدیدالورود در انتخاب واحد، نقشه راه یادگیری و انتشار نشریه تخصصی دانشجویی با تمرکز بر فناوری‌های روز.',
    metric: 'پوشش کامل راهنمای تحصیلی ورودی‌های جدید',
  },
];

export const SPONSOR_9CRAFT = {
  name: '9Craft',
  roleLabel: 'اسپانسر رسمی و حامی اصلی انجمن علمی',
  headline: 'حمایت 9Craft از نسل تازه مهندسان نرم‌افزار در دانشگاه قم',
  description:
    'مجموعه 9Craft به عنوان حامی رسمی انجمن علمی مهندسی کامپیوتر دانشگاه قم، در کنار دانشجویان ایستاده است تا فاصله میان فضای آکادمیک و استانداردهای واقعی ساخت محصولات دیجیتال و مهندسی نرم‌افزار کوتاه‌تر شود.',
  extendedStory:
    'همکاری انجمن علمی با 9Craft تنها محدود به حمایت مالی نیست؛ از پشتیبانی زیرساختی رویدادها و جوایز مسابقات برنامه‌نویسی گرفته تا برگزاری نشست‌های انتقال تجربه، بررسی رزومه و معرفی مسیرهای کارآموزی برای دانشجویان مستعد دانشکده فنی و مهندسی دانشگاه قم در این شراکت جریان دارد.',
  highlights: [
    {
      title: 'حمایت از مسابقات و هکاتون‌ها',
      detail: 'تامین جوایز نقدی و پشتیبانی اجرایی رقابت‌های الگوریتم و پروژه‌محور دانشگاه قم',
    },
    {
      title: 'نشست‌های تخصصی و منتورینگ',
      detail: 'حضور مهندسان و طراحان 9Craft در کارگاه‌های معماری نرم‌افزار و محصول',
    },
    {
      title: 'فرصت‌های کارآموزی و رشد',
      detail: 'مسیر مستقیم آشنایی دانشجویان مستعد انجمن با محیط کار واقعی و پروژه‌های عملی',
    },
  ],
  website: 'https://9craft.ir/',
  domainDisplay: '9craft.ir',
  partnershipTerm: 'همکاری رسمی سال تحصیلی ۱۴۰۴–۱۴۰۵',
};

export const MEMBERS: MemberProfile[] = [
  {
    id: 'amir-hosein',
    name: 'امیرحسین رضایی',
    role: 'دبیر انجمن علمی',
    committee: 'شورای مرکزی',
    isCentralCouncil: true,
    councilOrder: '۰۱',
    entryYear: 'ورودی ۱۴۰۱',
    focus: 'معماری سیستم‌های توزیع‌شده و Go',
    bio: 'هماهنگی راهبردی برنامه‌های انجمن، تعامل با معاونت پژوهشی دانشکده فنی و مدیریت کلان رویدادهای سالانه مهندسی کامپیوتر دانشگاه قم.',
    github: 'github.com/ah-rezaei',
    telegram: '@ah_rezaei_ce',
    image: '/src/assets/images/member_chair_male_1795109036293.jpg',
  },
  {
    id: 'zahra-karimi',
    name: 'زهرا کریمی',
    role: 'نائب دبیر و مسئول آموزش',
    committee: 'شورای مرکزی',
    isCentralCouncil: true,
    councilOrder: '۰۲',
    entryYear: 'ورودی ۱۴۰۱',
    focus: 'هوش مصنوعی و یادگیری عمیق',
    bio: 'طراحی تقویم کارگاه‌های تخصصی، مدیریت تیم مدرسین دانشجویی و برنامه‌ریزی دوره‌های مهارت‌افزایی برای تمام ورودی‌ها.',
    github: 'github.com/z-karimi-ai',
    telegram: '@z_karimi_ce',
    image: '/src/assets/images/member_vice_female_1795109036477.jpg',
  },
  {
    id: 'mohammad-mahdi',
    name: 'محمدمهدی شریفی',
    role: 'مسئول پژوهش و مسابقات',
    committee: 'شورای مرکزی',
    isCentralCouncil: true,
    councilOrder: '۰۳',
    entryYear: 'ورودی ۱۴۰۰',
    focus: 'الگوریتم، ساختمان داده و C++',
    bio: 'هدایت تمرین‌های هفتگی ICPC، طراحی سوالات مسابقات داخلی دانشگاه قم و سرپرستی هسته‌های پژوهشی دانشکده.',
    github: 'github.com/mm-sharifi',
    telegram: '@mm_sharifi_icpc',
    image: '/src/assets/images/member_research_male_1795109036538.jpg',
  },
  {
    id: 'fatemeh-hosseini',
    name: 'فاطمه حسینی',
    role: 'مسئول روابط عمومی و اسپانسرشیپ',
    committee: 'شورای مرکزی',
    isCentralCouncil: true,
    councilOrder: '۰۴',
    entryYear: 'ورودی ۱۴۰۲',
    focus: 'طراحی محصول و تجربه کاربری',
    bio: 'مدیریت ارتباط با حامیان مالی از جمله 9craft، هدایت هویت بصری رویدادها و اطلاع‌رسانی رسمی کانال‌های انجمن.',
    github: 'github.com/f-hosseini-ux',
    telegram: '@f_hosseini_pr',
    image: '/src/assets/images/member_pr_female_1795109036469.jpg',
  },
  {
    id: 'ali-mohammadi',
    name: 'علی محمدی',
    role: 'مسئول فناوری، وب و زیرساخت',
    committee: 'شورای مرکزی',
    isCentralCouncil: true,
    councilOrder: '۰۵',
    entryYear: 'ورودی ۱۴۰۱',
    focus: 'توسعه فول‌استک، لینوکس و DevOps',
    bio: 'توسعه و نگهداری وب‌سایت رسمی، ابزارهای آنلاین دانشجویی، سرور داوری مسابقات و مخازن متن‌باز انجمن علمی.',
    github: 'github.com/ali-mohammadi-dev',
    telegram: '@ali_dev_qom',
    image: '/src/assets/images/member_tech_male_1795109036469.jpg',
  },
  {
    id: 'parsa-noori',
    name: 'پارسا نوری',
    role: 'دبیر اجرایی رویدادها و کارگاه‌ها',
    committee: 'کادر اجرایی',
    isCentralCouncil: false,
    entryYear: 'ورودی ۱۴۰۲',
    focus: 'توسعه بک‌اند و امنیت شبکه',
    bio: 'برنامه‌ریزی میدانی سمینارها، ثبت‌نام شرکت‌کنندگان، هماهنگی سالن‌های دانشکده و پشتیبانی اجرایی برنامه‌های هفتگی.',
    github: 'github.com/parsa-noori',
    telegram: '@parsa_noori_ce',
    image: '/src/assets/images/member_events_male_1795109035313.jpg',
  },
];

export const USEFUL_LINKS: UsefulLinkItem[] = [
  {
    id: 'golestan',
    title: 'سامانه آموزشی گلستان دانشگاه قم',
    subtitle: 'انتخاب واحد، مشاهده نمرات، برنامه هفتگی و امور آموزشی دانشجویان',
    category: 'university',
    categoryLabel: 'دانشگاهی',
    url: 'https://golestan.qom.ac.ir',
    domain: 'golestan.qom.ac.ir',
  },
  {
    id: 'qom-main',
    title: 'پورتال اصلی و دانشکده فنی و مهندسی دانشگاه قم',
    subtitle: 'اطلاعیه‌های رسمی گروه مهندسی کامپیوتر، فرم‌ها و اخبار دانشکده',
    category: 'university',
    categoryLabel: 'دانشگاهی',
    url: 'https://qom.ac.ir',
    domain: 'qom.ac.ir',
  },
  {
    id: 'lms',
    title: 'سامانه آموزش الکترونیکی (LMS)',
    subtitle: 'دسترسی به فایل جلسات درسی، ارسال تکالیف و آزمون‌های آنلاین',
    category: 'university',
    categoryLabel: 'دانشگاهی',
    url: 'https://lms.qom.ac.ir',
    domain: 'lms.qom.ac.ir',
  },
  {
    id: 'curriculum',
    title: 'چارت درسی و پیشنیازهای مهندسی کامپیوتر',
    subtitle: 'جدول کامل دروس پایه، اصلی، تخصصی و اختیاری دوره کارشناسی',
    category: 'university',
    categoryLabel: 'دانشگاهی',
    url: 'https://qom.ac.ir/engineering',
    domain: 'qom.ac.ir/ce-chart',
  },
  {
    id: 'quera',
    title: 'کوئرا (Quera) — تمرین و مسابقات برنامه‌نویسی',
    subtitle: 'بانک سوالات الگوریتمی، مسابقات فارسی و کلاس‌های تمرین دانشگاهی',
    category: 'programming',
    categoryLabel: 'برنامه‌نویسی',
    url: 'https://quera.org',
    domain: 'quera.org',
  },
  {
    id: 'codeforces',
    title: 'کدفورسز (Codeforces)',
    subtitle: 'مرجع تمرین مسابقات بین‌المللی الگوریتم و آماده‌سازی تیم‌های ICPC',
    category: 'programming',
    categoryLabel: 'برنامه‌نویسی',
    url: 'https://codeforces.com',
    domain: 'codeforces.com',
  },
  {
    id: 'roadmap',
    title: 'نقشه‌های راه مهندسی نرم‌افزار (Roadmap.sh)',
    subtitle: 'مسیرهای یادگیری ساختاریافته برای فرانت‌اند، بک‌اند، هوش مصنوعی و DevOps',
    category: 'programming',
    categoryLabel: 'برنامه‌نویسی',
    url: 'https://roadmap.sh',
    domain: 'roadmap.sh',
  },
  {
    id: 'github-pack',
    title: 'بسته دانشجویی گیت‌هاب (GitHub Education)',
    subtitle: 'دسترسی رایگان به ابزارهای حرفه‌ای، دامنه و سرویس‌های ابری با ایمیل دانشگاهی',
    category: 'programming',
    categoryLabel: 'برنامه‌نویسی',
    url: 'https://education.github.com/pack',
    domain: 'education.github.com',
  },
  {
    id: 'ce-telegram',
    title: 'کانال رسمی تلگرام انجمن (@ceqom)',
    subtitle: 'اطلاع‌رسانی کارگاه‌ها، ثبت‌نام مسابقات، فراخوان‌ها و اخبار دانشکده',
    category: 'association',
    categoryLabel: 'انجمن علمی',
    url: 'https://t.me/ceqom',
    domain: 't.me/ceqom',
  },
  {
    id: 'ce-eitaa',
    title: 'کانال رسمی ایتا انجمن (@ceqom)',
    subtitle: 'دسترسی سریع به اطلاعیه‌ها، فایل‌های آموزشی و اخبار رسمی انجمن در ایتا',
    category: 'association',
    categoryLabel: 'انجمن علمی',
    url: 'https://eitaa.com/ceqom',
    domain: 'eitaa.com/ceqom',
  },
  {
    id: 'ce-site',
    title: 'وب‌سایت رسمی انجمن علمی (ceqom.ir)',
    subtitle: 'پایگاه رسمی معرفی، ابزارهای دانشجویی و اطلاعیه‌های مهندسی کامپیوتر قم',
    category: 'association',
    categoryLabel: 'انجمن علمی',
    url: 'https://ceqom.ir',
    domain: 'ceqom.ir',
  },
  {
    id: 'sponsor-link',
    title: 'وب‌سایت حامی ویژه انجمن: 9Craft',
    subtitle: 'آشنایی با پروژه‌ها، خدمات و فرصت‌های همکاری مجموعه 9Craft',
    category: 'association',
    categoryLabel: 'انجمن علمی',
    url: 'https://9craft.ir/',
    domain: '9craft.ir',
  },
];
