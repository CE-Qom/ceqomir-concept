import { useState } from 'react';
import { X, Check, Copy, ExternalLink } from 'lucide-react';
import { SPONSOR_9CRAFT, type MemberProfile } from '../data/associationData';
import { ResilientImage } from './ResilientImage';
import { NineCraftLogo } from './NineCraftLogo';

interface JoinModalProps {
  open: boolean;
  onClose: () => void;
}

export function JoinModal({ open, onClose }: JoinModalProps) {
  const [fullName, setFullName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [contactHandle, setContactHandle] = useState('');
  const [interest, setInterest] = useState('کارگاه‌ها و آموزش');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !studentId.trim() || !contactHandle.trim()) {
      setError('لطفاً نام کامل، شماره دانشجویی و آیدی تلگرام یا ایتا را وارد کنید.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setError('');
    setFullName('');
    setStudentId('');
    setContactHandle('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="join-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
      onClick={resetAndClose}
    >
      <div
        className="w-full max-w-lg bg-white text-stone-900 border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-200">
          <h2 id="join-modal-title" className="text-lg font-bold">
            درخواست عضویت در انجمن علمی کامپیوتر دانشگاه قم
          </h2>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="بستن پنجره"
            className="p-2 text-stone-500 hover:text-stone-900 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-lg bg-emerald-50 text-[#065F46] border border-emerald-200 flex items-center justify-center">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold">درخواست شما ثبت شد</h3>
            <p className="text-sm text-stone-600 leading-relaxed max-w-sm mx-auto">
              ممنون {fullName} عزیز. اطلاعات شما برای شورای مرکزی ارسال شد و از طریق آیدی{' '}
              <span dir="ltr" className="font-mono-num font-semibold text-stone-800">
                {contactHandle}
              </span>{' '}
              زمان جلسه معارفه به شما اطلاع داده می‌شود.
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-2 px-5 py-2.5 bg-[#065F46] text-white text-sm font-medium rounded-lg hover:bg-[#064E3B] cursor-pointer"
            >
              بازگشت به سایت
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div>
              <label htmlFor="join-name" className="block text-sm font-medium mb-1.5">
                نام و نام خانوادگی
              </label>
              <input
                id="join-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: سارا رضوی"
                className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-lg focus:border-[#065F46]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="join-sid" className="block text-sm font-medium mb-1.5">
                  شماره دانشجویی
                </label>
                <input
                  id="join-sid"
                  type="text"
                  dir="ltr"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="402123456"
                  className="w-full px-3.5 py-2.5 text-sm font-mono-num text-left border border-stone-300 rounded-lg focus:border-[#065F46]"
                />
              </div>
              <div>
                <label htmlFor="join-handle" className="block text-sm font-medium mb-1.5">
                  آیدی تلگرام یا ایتا
                </label>
                <input
                  id="join-handle"
                  type="text"
                  dir="ltr"
                  value={contactHandle}
                  onChange={(e) => setContactHandle(e.target.value)}
                  placeholder="@username"
                  className="w-full px-3.5 py-2.5 text-sm font-mono-num text-left border border-stone-300 rounded-lg focus:border-[#065F46]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="join-interest" className="block text-sm font-medium mb-1.5">
                کمیته یا حوزه علاقه‌مندی
              </label>
              <select
                id="join-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm border border-stone-300 rounded-lg bg-white focus:border-[#065F46]"
              >
                <option value="کارگاه‌ها و آموزش">کارگاه‌ها و آموزش</option>
                <option value="مسابقات برنامه‌نویسی و ICPC">مسابقات برنامه‌نویسی و ICPC</option>
                <option value="توسعه وب و ابزارهای دانشجویی">توسعه وب و ابزارهای دانشجویی</option>
                <option value="پژوهش و هوش مصنوعی">پژوهش و هوش مصنوعی</option>
                <option value="روابط عمومی، طراحی و نشریه">روابط عمومی، طراحی و نشریه</option>
              </select>
            </div>

            {error && <p className="text-xs text-red-600">{error}</p>}

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="px-4 py-2.5 text-sm text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-semibold bg-[#065F46] text-white rounded-lg hover:bg-[#064E3B] cursor-pointer"
              >
                ثبت درخواست عضویت
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

interface MemberDetailModalProps {
  member: MemberProfile | null;
  onClose: () => void;
}

export function MemberDetailModal({ member, onClose }: MemberDetailModalProps) {
  const [copied, setCopied] = useState(false);

  if (!member) return null;

  const copyTelegram = () => {
    navigator.clipboard?.writeText(member.telegram).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="member-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white text-stone-900 border border-stone-200 rounded-xl overflow-hidden shadow-xl grid grid-cols-1 sm:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:col-span-5 bg-stone-100 aspect-[3/4] sm:aspect-auto">
          <ResilientImage
            src={member.image}
            alt={member.name}
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold text-[#065F46]">
                  {member.isCentralCouncil ? 'عضو منتخب شورای مرکزی' : 'کادر اجرایی انجمن'} ·{' '}
                  {member.entryYear}
                </div>
                <h2 id="member-modal-title" className="text-xl font-bold mt-1">
                  {member.name}
                </h2>
                <p className="text-sm font-medium text-stone-700 mt-0.5">{member.role}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="بستن پروفایل"
                className="p-1.5 text-stone-500 hover:text-stone-950 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 pt-5 border-t border-stone-200 space-y-4">
              <div>
                <div className="text-xs text-stone-500 mb-1">حوزه تخصصی</div>
                <div className="text-sm font-medium text-stone-900">{member.focus}</div>
              </div>
              <div>
                <div className="text-xs text-stone-500 mb-1">مسئولیت‌ها در انجمن</div>
                <p className="text-sm text-stone-600 leading-relaxed">{member.bio}</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div dir="ltr" className="font-mono-num text-stone-600">
              {member.github}
            </div>
            <button
              type="button"
              onClick={copyTelegram}
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-stone-300 rounded-lg text-stone-800 hover:bg-stone-100 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#065F46]" /> : <Copy className="w-3.5 h-3.5" />}
              <span dir="ltr" className="font-mono-num">
                {copied ? 'کپی شد' : member.telegram}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SponsorInfoModalProps {
  open: boolean;
  onClose: () => void;
}

export function SponsorInfoModal({ open, onClose }: SponsorInfoModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sponsor-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-stone-950 text-stone-100 border border-white/15 rounded-xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <NineCraftLogo variant="light" size="md" />
          <button
            type="button"
            onClick={onClose}
            aria-label="بستن پنجره حامی"
            className="p-1.5 text-stone-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="text-xs text-emerald-300">{SPONSOR_9CRAFT.partnershipTerm}</div>
          <h2 id="sponsor-modal-title" className="text-xl font-bold leading-snug">
            {SPONSOR_9CRAFT.headline}
          </h2>
          <p className="text-sm text-stone-300 leading-relaxed">{SPONSOR_9CRAFT.extendedStory}</p>
        </div>

        <div className="space-y-3 pt-4 border-t border-white/10">
          {SPONSOR_9CRAFT.highlights.map((item) => (
            <div key={item.title} className="pb-3 border-b border-white/10 last:border-b-0 last:pb-0">
              <div className="text-sm font-semibold text-white">{item.title}</div>
              <div className="text-xs text-stone-400 mt-1 leading-relaxed">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span dir="ltr" className="font-mono-num text-xs text-stone-400">
            {SPONSOR_9CRAFT.domainDisplay}
          </span>
          <a
            href={SPONSOR_9CRAFT.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#065F46] text-white rounded-lg hover:bg-[#047857] transition-colors"
          >
            <span>مشاهده وب‌سایت 9craft</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
