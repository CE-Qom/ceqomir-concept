import { useState } from 'react';
import { ArrowUpLeft } from 'lucide-react';
import {
  ACTIVITY_PILLARS,
  ASSOCIATION_INFO,
  IMAGES,
  MEMBERS,
  SPONSOR_9CRAFT,
  USEFUL_LINKS,
  type MemberProfile,
} from './data/associationData';
import { ResilientImage } from './components/ResilientImage';
import { NineCraftLogo } from './components/NineCraftLogo';
import { StudentToolsWorkbench } from './components/StudentToolsWorkbench';
import { JoinModal, MemberDetailModal, SponsorInfoModal } from './components/Modals';

const GROUPED_LINKS = [
  {
    key: 'university',
    title: 'سامانه‌های دانشگاه قم',
    items: USEFUL_LINKS.filter((l) => l.category === 'university'),
  },
  {
    key: 'programming',
    title: 'برنامه‌نویسی و الگوریتم',
    items: USEFUL_LINKS.filter((l) => l.category === 'programming'),
  },
  {
    key: 'association',
    title: 'منابع و کانال‌های انجمن',
    items: USEFUL_LINKS.filter((l) => l.category === 'association'),
  },
];

export default function App() {
  const [featuredId, setFeaturedId] = useState(MEMBERS[0].id);
  const [joinOpen, setJoinOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<MemberProfile | null>(null);
  const [sponsorOpen, setSponsorOpen] = useState(false);

  const featuredMember = MEMBERS.find((m) => m.id === featuredId) || MEMBERS[0];

  return (
    <div className="min-h-screen bg-[#F3F4F0] text-[#111827] pb-12">
      {/* Top Blinking Demo Notice Bar */}
      <div
        role="status"
        className="bg-[#064E3B] text-emerald-50 border-b border-emerald-900/40"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-2 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-center">
          <span className="demo-blink font-extrabold text-amber-300 tracking-wide">
            نسخه دمو
          </span>
          <span aria-hidden="true" className="text-emerald-400">·</span>
          <span className="demo-blink text-emerald-50 font-medium">
            این سایت پیش‌نمایش است و به‌زودی جایگزین می‌شود
          </span>
        </div>
      </div>

      {/* Top Bar: 3 clean zones */}
      <header className="sticky top-0 z-30 bg-[#F3F4F0]/95 backdrop-blur-md border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="inline-flex items-center gap-2.5 text-base sm:text-lg font-extrabold tracking-tight text-[#065F46] whitespace-nowrap shrink-0"
          >
            <img
              src={IMAGES.associationLogo}
              alt="لوگوی انجمن علمی مهندسی کامپیوتر دانشگاه قم"
              className="w-9 h-9 object-contain shrink-0"
            />
            <span>{ASSOCIATION_INFO.brandShort}</span>
          </a>

          <nav
            aria-label="ناوبری اصلی"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600"
          >
            <a
              href="#about"
              className="hover:text-[#065F46] transition-colors whitespace-nowrap shrink-0"
            >
              معرفی
            </a>
            <a
              href="#council"
              className="hover:text-[#065F46] transition-colors whitespace-nowrap shrink-0"
            >
              شورای مرکزی
            </a>
            <a
              href="#sponsor"
              className="hover:text-[#065F46] transition-colors whitespace-nowrap shrink-0"
            >
              حامی 9Craft
            </a>
            <a
              href="#tools"
              className="hover:text-[#065F46] transition-colors whitespace-nowrap shrink-0"
            >
              ابزارها
            </a>
            <a
              href="#links"
              className="hover:text-[#065F46] transition-colors whitespace-nowrap shrink-0"
            >
              لینک‌های مفید
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setJoinOpen(true)}
            className="px-4 py-2 text-xs sm:text-sm font-semibold bg-[#065F46] text-white hover:bg-[#064E3B] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            عضویت در انجمن
          </button>
        </div>
      </header>

      <main id="top" className="max-w-7xl mx-auto px-5 sm:px-8 space-y-20 pt-8">
        {/* Hero Section */}
        <section>
          <div className="relative rounded-xl overflow-hidden min-h-[470px] lg:min-h-[540px] flex items-end bg-stone-900">
            <ResilientImage
              src={IMAGES.heroLab}
              alt="محیط علمی و کارگاهی انجمن مهندسی کامپیوتر دانشگاه قم"
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover"
              darkFallback
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20"
            />

            <div className="relative z-10 w-full p-7 sm:p-11 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end text-white">
              <div className="lg:col-span-8 space-y-4">
                <div className="text-xs sm:text-sm text-emerald-300 font-medium">
                  {ASSOCIATION_INFO.brandFull} · {ASSOCIATION_INFO.term}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[3.1rem] font-extrabold leading-[1.22]">
                  {ASSOCIATION_INFO.heroHeadline}
                </h1>
                <p className="text-sm sm:text-base text-stone-200 leading-[1.8] max-w-2xl">
                  {ASSOCIATION_INFO.heroLead}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
                <a
                  href="#council"
                  className="px-6 py-3 bg-[#065F46] hover:bg-[#047857] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  شورای مرکزی انجمن
                </a>
                <a
                  href="#sponsor"
                  className="px-5 py-3 bg-white/15 hover:bg-white/25 text-white text-sm font-medium rounded-lg backdrop-blur-xs transition-colors whitespace-nowrap"
                >
                  اسپانسر: 9Craft
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ASSOCIATION_INFO.stats.map((st) => (
              <div
                key={st.label}
                className="bg-white border border-stone-200/80 rounded-lg p-5 space-y-1"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#065F46] tabular-fa">
                  {st.value}
                </div>
                <div className="text-xs sm:text-sm text-stone-600">{st.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 01. Introduction */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold text-[#065F46]">۰۱. معرفی انجمن علمی</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              خانه‌ای پویا برای یادگیری عمیق و ساخت پروژه‌های واقعی
            </h2>
            <p className="text-sm sm:text-base text-stone-600 leading-[1.85]">
              {ASSOCIATION_INFO.introNarrative}
            </p>
            <div className="pt-3 text-xs text-stone-500">{ASSOCIATION_INFO.location}</div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACTIVITY_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-stone-200/80 rounded-lg p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-[#065F46] tabular-fa">
                    فصل {pillar.index}
                  </div>
                  <h3 className="text-base font-bold">{pillar.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{pillar.summary}</p>
                </div>
                <div className="pt-3 border-t border-stone-100 text-xs font-medium text-stone-500">
                  {pillar.metric}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 02. Central Council & Members Spotlight */}
        <section id="council" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-semibold text-[#065F46]">
                ۰۲. اعضای انجمن و شورای مرکزی
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                آشنایی با اعضای شورای مرکزی دوره چهاردهم
              </h2>
            </div>
            <div className="text-xs text-stone-500">
              روی هر عضو کلیک کنید تا اطلاعات کامل او در پنل معرفی نمایش داده شود.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Master Featured Member Card */}
            <div className="lg:col-span-5 bg-white border border-stone-200/90 rounded-xl overflow-hidden flex flex-col">
              <div className="aspect-[4/4] bg-stone-200 overflow-hidden">
                <ResilientImage
                  src={featuredMember.image}
                  alt={featuredMember.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#065F46]">
                    {featuredMember.isCentralCouncil
                      ? `عضو شورای مرکزی · جایگاه ${featuredMember.councilOrder}`
                      : 'کادر اجرایی انجمن'}{' '}
                    · {featuredMember.entryYear}
                  </div>
                  <h3 className="text-xl font-extrabold">{featuredMember.name}</h3>
                  <div className="text-sm font-medium text-stone-700">{featuredMember.role}</div>
                  <p className="text-sm text-stone-600 leading-relaxed pt-2">
                    {featuredMember.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-stone-500">{featuredMember.focus}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedMember(featuredMember)}
                    className="font-semibold text-[#065F46] hover:underline cursor-pointer shrink-0 mr-2"
                  >
                    راه‌های ارتباطی
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Member Roster Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MEMBERS.map((member) => {
                const isSelected = member.id === featuredMember.id;
                return (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => setFeaturedId(member.id)}
                    className={`text-right p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? 'bg-[#065F46] text-white border-[#065F46]'
                        : 'bg-white text-stone-900 border-stone-200/90 hover:border-[#065F46]/50'
                    }`}
                  >
                    <div className="w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-stone-200">
                      <ResilientImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="min-w-0 space-y-1">
                      <div
                        className={`text-xs font-semibold ${
                          isSelected
                            ? 'text-emerald-200'
                            : member.isCentralCouncil
                              ? 'text-[#065F46]'
                              : 'text-stone-500'
                        }`}
                      >
                        {member.isCentralCouncil ? 'شورای مرکزی' : 'کادر اجرایی'} ·{' '}
                        {member.entryYear}
                      </div>
                      <div className="text-base font-bold truncate">{member.name}</div>
                      <div
                        className={`text-xs truncate ${
                          isSelected ? 'text-emerald-50' : 'text-stone-600'
                        }`}
                      >
                        {member.role}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* 03. Dedicated 9craft Sponsor Showcase */}
        <section id="sponsor">
          <div className="bg-white border border-stone-200/90 rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-7 sm:p-11 flex flex-col justify-between gap-7">
              <div className="space-y-4">
                <div className="text-xs font-semibold text-[#065F46]">
                  ۰۳. {SPONSOR_9CRAFT.roleLabel}
                </div>
                <NineCraftLogo variant="emerald" size="lg" />
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                  {SPONSOR_9CRAFT.headline}
                </h2>
                <p className="text-sm sm:text-base text-stone-600 leading-[1.85]">
                  {SPONSOR_9CRAFT.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-stone-200">
                {SPONSOR_9CRAFT.highlights.map((h) => (
                  <div key={h.title} className="space-y-1">
                    <div className="text-sm font-bold text-stone-900">{h.title}</div>
                    <p className="text-xs text-stone-600 leading-relaxed">{h.detail}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setSponsorOpen(true)}
                  className="px-5 py-2.5 text-sm font-semibold bg-[#065F46] text-white hover:bg-[#064E3B] rounded-lg transition-colors cursor-pointer"
                >
                  بیشتر درباره همکاری 9Craft
                </button>
                <a
                  href={SPONSOR_9CRAFT.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#065F46] hover:underline"
                >
                  <span dir="ltr" className="font-mono-num">
                    {SPONSOR_9CRAFT.domainDisplay}
                  </span>
                  <ArrowUpLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 min-h-[280px] bg-[#06092B]">
              <ResilientImage
                src={IMAGES.sponsor9craft}
                alt="حامی ویژه انجمن علمی: 9Craft"
                className="w-full h-full object-cover"
                darkFallback
              />
            </div>
          </div>
        </section>

        {/* 04. Interactive Student Tools */}
        <section id="tools" className="space-y-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-semibold text-[#065F46]">۰۴. ابزارهای دانشجویی</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              مجموعه ابزارهای آنلاین مهندسی کامپیوتر
            </h2>
          </div>
          <StudentToolsWorkbench />
        </section>

        {/* 05. Useful Links */}
        <section id="links" className="space-y-8">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-[#065F46]">۰۵. لینک‌های مفید</div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              دسترسی سریع به سامانه‌ها و منابع ضروری
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GROUPED_LINKS.map((group) => (
              <div
                key={group.key}
                className="bg-white border border-stone-200/90 rounded-xl p-6 space-y-4"
              >
                <h3 className="text-base font-extrabold text-[#065F46] pb-3 border-b border-stone-200">
                  {group.title}
                </h3>
                <div className="divide-y divide-stone-100">
                  {group.items.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group py-3.5 block"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-sm font-bold text-stone-900 group-hover:text-[#065F46] transition-colors">
                          {link.title}
                        </span>
                        <ArrowUpLeft className="w-4 h-4 text-stone-400 group-hover:text-[#065F46] shrink-0 mt-0.5" />
                      </div>
                      <p className="text-xs text-stone-500 mt-1 leading-relaxed">{link.subtitle}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-5 sm:px-8 mt-20 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-600">
        <div className="flex items-center gap-3">
          <img
            src={IMAGES.associationLogo}
            alt="لوگوی انجمن"
            className="w-8 h-8 object-contain shrink-0"
          />
          <div>
            <span className="font-bold text-stone-900">{ASSOCIATION_INFO.brandFull}</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span>
              حامی رسمی:{' '}
              <a
                href={SPONSOR_9CRAFT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#065F46] hover:underline"
              >
                9Craft
              </a>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={ASSOCIATION_INFO.website}
            target="_blank"
            rel="noopener noreferrer"
            dir="ltr"
            className="font-mono-num text-stone-700 hover:text-[#065F46]"
          >
            {ASSOCIATION_INFO.siteDisplay}
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={ASSOCIATION_INFO.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#065F46]"
          >
            تلگرام: <span dir="ltr" className="font-mono-num">{ASSOCIATION_INFO.channelHandle}</span>
          </a>
          <span aria-hidden="true">·</span>
          <a
            href={ASSOCIATION_INFO.eitaaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#065F46]"
          >
            ایتا: <span dir="ltr" className="font-mono-num">{ASSOCIATION_INFO.channelHandle}</span>
          </a>
        </div>
      </footer>

      <JoinModal open={joinOpen} onClose={() => setJoinOpen(false)} />
      <MemberDetailModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      <SponsorInfoModal open={sponsorOpen} onClose={() => setSponsorOpen(false)} />
    </div>
  );
}
