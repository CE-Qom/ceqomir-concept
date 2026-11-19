import { useEffect, useState } from 'react';
import { Plus, Trash2, RotateCcw, Play, Pause, Copy, Check } from 'lucide-react';

type ToolTab = 'gpa' | 'base' | 'credits' | 'pomodoro';

interface CourseRow {
  id: number;
  name: string;
  credits: number;
  grade: number;
}

const INITIAL_COURSES: CourseRow[] = [
  { id: 1, name: 'ساختمان داده‌ها', credits: 3, grade: 18.5 },
  { id: 2, name: 'طراحی الگوریتم‌ها', credits: 3, grade: 17.25 },
  { id: 3, name: 'معماری کامپیوتر', credits: 3, grade: 16.5 },
  { id: 4, name: 'آزمایشگاه سیستم عامل', credits: 1, grade: 19 },
];

const palette = {
  shell: 'bg-white border border-stone-200/90 text-stone-900 shadow-xs',
  subtleSurface: 'bg-[#F3F4F0] border border-stone-200/80',
  muted: 'text-stone-600',
  divider: 'border-stone-200',
  tabTrack: 'bg-[#F3F4F0] border border-stone-200',
  tabActive: 'bg-[#065F46] text-white',
  tabIdle: 'text-stone-600 hover:text-stone-900',
  accentBg: 'bg-[#065F46] hover:bg-[#064E3B] text-white',
  accentText: 'text-[#065F46]',
  input: 'bg-white border border-stone-300 text-stone-900 focus:border-[#065F46]',
  radius: 'rounded-lg',
};

export function StudentToolsWorkbench() {
  const [activeTool, setActiveTool] = useState<ToolTab>('gpa');

  // GPA calculator state
  const [courses, setCourses] = useState<CourseRow[]>(INITIAL_COURSES);
  const [newCourseName, setNewCourseName] = useState('');
  const [newCredits, setNewCredits] = useState('3');
  const [newGrade, setNewGrade] = useState('18');

  // Base converter state
  const [decimalInput, setDecimalInput] = useState('2026');
  const [baseSource, setBaseSource] = useState<'dec' | 'bin' | 'hex' | 'oct'>('dec');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Unit limit state
  const [prevGpa, setPrevGpa] = useState('16.85');
  const [isFirstTerm, setIsFirstTerm] = useState(false);

  // Pomodoro state
  const [pomodoroMode, setPomodoroMode] = useState<'focus' | 'break'>('focus');
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [isRunning]);

  const isDark = false;

  // GPA computation
  const totalCredits = courses.reduce((sum, c) => sum + c.credits, 0);
  const weightedSum = courses.reduce((sum, c) => sum + c.credits * c.grade, 0);
  const gpa = totalCredits > 0 ? weightedSum / totalCredits : 0;

  const gpaStatus =
    totalCredits === 0
      ? 'درسی ثبت نشده است'
      : gpa >= 17
        ? 'وضعیت ممتاز (امکان اخذ تا ۲۴ واحد در ترم بعد)'
        : gpa >= 12
          ? 'وضعیت عادی (امکان اخذ تا ۲۰ واحد در ترم بعد)'
          : 'هشدار مشروطی (سقف مجاز ۱۴ واحد در ترم بعد)';

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCredits = Math.max(1, Math.min(4, Number(newCredits) || 1));
    const parsedGrade = Math.max(0, Math.min(20, Number(newGrade) || 0));
    const trimmed = newCourseName.trim() || `درس ${courses.length + 1}`;
    setCourses((prev) => [
      ...prev,
      { id: Date.now(), name: trimmed, credits: parsedCredits, grade: parsedGrade },
    ]);
    setNewCourseName('');
    setNewCredits('3');
    setNewGrade('18');
  };

  const handleCourseChange = (id: number, field: 'credits' | 'grade', rawValue: string) => {
    const val = Number(rawValue);
    if (Number.isNaN(val)) return;
    setCourses((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              [field]:
                field === 'credits'
                  ? Math.max(1, Math.min(4, val))
                  : Math.max(0, Math.min(20, val)),
            }
          : row,
      ),
    );
  };

  // Base converter computation
  const parseBaseValue = (): number | null => {
    const cleaned = decimalInput.trim();
    if (!cleaned) return 0;
    const radixMap = { dec: 10, bin: 2, oct: 8, hex: 16 };
    const regexMap = {
      dec: /^[0-9]+$/,
      bin: /^[01]+$/,
      oct: /^[0-7]+$/,
      hex: /^[0-9a-fA-F]+$/,
    };
    if (!regexMap[baseSource].test(cleaned)) return null;
    const num = parseInt(cleaned, radixMap[baseSource]);
    return Number.isSafeInteger(num) ? num : null;
  };

  const parsedNum = parseBaseValue();

  const handleCopy = (label: string, val: string) => {
    navigator.clipboard?.writeText(val).catch(() => {});
    setCopiedField(label);
    window.setTimeout(() => setCopiedField(null), 1500);
  };

  // Unit limit computation
  const numericPrevGpa = Math.max(0, Math.min(20, Number(prevGpa) || 0));
  const creditLimitInfo = isFirstTerm
    ? {
        maxUnits: 20,
        minUnits: 12,
        rule: 'دانشجوی ترم اول کارشناسی طبق آیین‌نامه آموزشی مجاز به انتخاب حداکثر ۲۰ واحد است.',
      }
    : numericPrevGpa >= 17
      ? {
          maxUnits: 24,
          minUnits: 12,
          rule: 'معدل بالای ۱۷ (ممتاز): مجاز به انتخاب تا ۲۴ واحد درسی در نیم‌سال جدید.',
        }
      : numericPrevGpa >= 12
        ? {
            maxUnits: 20,
            minUnits: 12,
            rule: 'معدل بین ۱۲ تا ۱۶.۹۹ (عادی): سقف مجاز انتخاب واحد ۲۰ واحد درسی است.',
          }
        : {
            maxUnits: 14,
            minUnits: 12,
            rule: 'معدل زیر ۱۲ (مشروط): طبق آیین‌نامه دانشگاه، سقف مجاز انتخاب واحد ۱۴ واحد است.',
          };

  const switchPomodoroMode = (mode: 'focus' | 'break') => {
    setIsRunning(false);
    setPomodoroMode(mode);
    setSecondsLeft(mode === 'focus' ? 25 * 60 : 5 * 60);
  };

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const ss = String(secondsLeft % 60).padStart(2, '0');

  const tabs: { id: ToolTab; label: string }[] = [
    { id: 'gpa', label: 'محاسبه‌گر معدل' },
    { id: 'base', label: 'مبدل مبنای اعداد' },
    { id: 'credits', label: 'سقف انتخاب واحد' },
    { id: 'pomodoro', label: 'تایمر مطالعه' },
  ];

  return (
    <div className={`${palette.shell} ${palette.radius} p-5 sm:p-7`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-current/10">
        <div>
          <h3 className="text-lg font-bold">میز ابزارهای تعاملی مهندسی کامپیوتر</h3>
          <p className={`text-sm mt-1 ${palette.muted}`}>
            ابزارهای پرکاربرد دانشجویی با محاسبه آنی در مرورگر، بدون نیاز به نصب
          </p>
        </div>
        <div
          role="tablist"
          aria-label="انتخاب ابزار دانشجویی"
          className={`flex flex-wrap sm:flex-nowrap items-center gap-1 p-1 ${palette.tabTrack} ${palette.radius}`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTool === tab.id}
              onClick={() => setActiveTool(tab.id)}
              className={`px-3 py-2 text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${palette.radius} ${
                activeTool === tab.id ? palette.tabActive : palette.tabIdle
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tool 1: GPA Calculator */}
      {activeTool === 'gpa' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-8 space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-right border-collapse">
                <thead>
                  <tr className={`border-b ${palette.divider} ${palette.muted} text-xs`}>
                    <th className="py-2.5 font-medium">نام درس</th>
                    <th className="py-2.5 font-medium w-24">واحد</th>
                    <th className="py-2.5 font-medium w-28">نمره (۰ تا ۲۰)</th>
                    <th className="py-2.5 font-medium w-12 text-left">حذف</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((row) => (
                    <tr key={row.id} className={`border-b ${palette.divider}`}>
                      <td className="py-2.5 font-medium">{row.name}</td>
                      <td className="py-2.5">
                        <input
                          type="number"
                          min={1}
                          max={4}
                          value={row.credits}
                          onChange={(e) => handleCourseChange(row.id, 'credits', e.target.value)}
                          aria-label={`تعداد واحد ${row.name}`}
                          className={`w-16 px-2 py-1 text-center font-mono-num text-sm ${palette.input} ${palette.radius}`}
                        />
                      </td>
                      <td className="py-2.5">
                        <input
                          type="number"
                          step="0.25"
                          min={0}
                          max={20}
                          value={row.grade}
                          onChange={(e) => handleCourseChange(row.id, 'grade', e.target.value)}
                          aria-label={`نمره ${row.name}`}
                          className={`w-20 px-2 py-1 text-center font-mono-num text-sm ${palette.input} ${palette.radius}`}
                        />
                      </td>
                      <td className="py-2.5 text-left">
                        <button
                          type="button"
                          onClick={() => setCourses((prev) => prev.filter((c) => c.id !== row.id))}
                          aria-label={`حذف ${row.name}`}
                          className={`p-1.5 cursor-pointer transition-colors ${palette.muted} hover:text-red-500`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <form onSubmit={handleAddCourse} className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-2">
              <input
                type="text"
                placeholder="نام درس جدید (مثلاً سیستم عامل)"
                value={newCourseName}
                onChange={(e) => setNewCourseName(e.target.value)}
                className={`sm:col-span-5 px-3 py-2 text-sm ${palette.input} ${palette.radius}`}
              />
              <input
                type="number"
                min={1}
                max={4}
                value={newCredits}
                onChange={(e) => setNewCredits(e.target.value)}
                placeholder="واحد"
                aria-label="تعداد واحد درس جدید"
                className={`sm:col-span-2 px-3 py-2 text-sm font-mono-num text-center ${palette.input} ${palette.radius}`}
              />
              <input
                type="number"
                step="0.25"
                min={0}
                max={20}
                value={newGrade}
                onChange={(e) => setNewGrade(e.target.value)}
                placeholder="نمره"
                aria-label="نمره درس جدید"
                className={`sm:col-span-2 px-3 py-2 text-sm font-mono-num text-center ${palette.input} ${palette.radius}`}
              />
              <button
                type="submit"
                className={`sm:col-span-3 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm transition-colors cursor-pointer whitespace-nowrap ${palette.accentBg} ${palette.radius}`}
              >
                <Plus className="w-4 h-4" />
                <span>افزودن درس</span>
              </button>
            </form>
          </div>

          <div className={`lg:col-span-4 p-5 ${palette.subtleSurface} ${palette.radius} space-y-4`}>
            <div className="flex items-center justify-between text-xs">
              <span className={palette.muted}>نتیجه محاسبه نیم‌سال</span>
              <button
                type="button"
                onClick={() => setCourses(INITIAL_COURSES)}
                className={`inline-flex items-center gap-1 cursor-pointer ${palette.muted} hover:opacity-80`}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>بازنشانی</span>
              </button>
            </div>
            <div>
              <div className={`text-4xl font-extrabold font-mono-num ${palette.accentText}`}>
                {gpa.toFixed(2)}
              </div>
              <div className={`text-xs mt-1 ${palette.muted}`}>از ۲۰.۰۰ نمره</div>
            </div>
            <div className={`pt-4 border-t ${palette.divider} space-y-2 text-sm`}>
              <div className="flex items-center justify-between">
                <span className={palette.muted}>مجموع واحدها</span>
                <span className="font-mono-num font-semibold">{totalCredits} واحد</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={palette.muted}>تعداد دروس</span>
                <span className="font-mono-num font-semibold">{courses.length} درس</span>
              </div>
            </div>
            <p className={`text-xs leading-relaxed pt-3 border-t ${palette.divider} ${palette.muted}`}>
              {gpaStatus}
            </p>
          </div>
        </div>
      )}

      {/* Tool 2: Number Base Converter */}
      {activeTool === 'base' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">مبنای ورودی را انتخاب کنید</label>
              <div className={`grid grid-cols-4 gap-1 p-1 ${palette.tabTrack} ${palette.radius}`}>
                {(
                  [
                    { id: 'dec', label: 'ده‌دهی' },
                    { id: 'bin', label: 'دودویی' },
                    { id: 'oct', label: 'هشت‌تایی' },
                    { id: 'hex', label: 'هگز' },
                  ] as const
                ).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (parsedNum !== null) {
                        const rad = { dec: 10, bin: 2, oct: 8, hex: 16 }[item.id];
                        setDecimalInput(parsedNum.toString(rad).toUpperCase());
                      }
                      setBaseSource(item.id);
                    }}
                    className={`py-2 text-xs font-medium cursor-pointer transition-colors ${palette.radius} ${
                      baseSource === item.id ? palette.tabActive : palette.tabIdle
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="base-value-input" className="block text-sm font-medium mb-2">
                مقدار عددی
              </label>
              <input
                id="base-value-input"
                type="text"
                dir="ltr"
                value={decimalInput}
                onChange={(e) => setDecimalInput(e.target.value)}
                placeholder="مثال: 2026"
                className={`w-full px-4 py-3 font-mono-num text-base text-left ${palette.input} ${palette.radius}`}
              />
              {parsedNum === null && (
                <p className="text-xs text-red-500 mt-2">
                  کاراکترهای وارد شده با مبنای انتخابی سازگار نیستند.
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'dec', title: 'مبنای ۱۰ (Decimal)', val: parsedNum !== null ? parsedNum.toString(10) : '—' },
              { key: 'bin', title: 'مبنای ۲ (Binary)', val: parsedNum !== null ? parsedNum.toString(2) : '—' },
              { key: 'oct', title: 'مبنای ۸ (Octal)', val: parsedNum !== null ? parsedNum.toString(8) : '—' },
              { key: 'hex', title: 'مبنای ۱۶ (Hexadecimal)', val: parsedNum !== null ? `0x${parsedNum.toString(16).toUpperCase()}` : '—' },
            ].map((out) => (
              <div key={out.key} className={`p-4 ${palette.subtleSurface} ${palette.radius}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs ${palette.muted}`}>{out.title}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(out.key, out.val)}
                    disabled={parsedNum === null}
                    className={`inline-flex items-center gap-1 text-xs cursor-pointer ${palette.muted} hover:opacity-80 disabled:opacity-40`}
                  >
                    {copiedField === out.key ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>کپی شد</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>کپی</span>
                      </>
                    )}
                  </button>
                </div>
                <div dir="ltr" className="font-mono-num text-base font-semibold break-all text-left">
                  {out.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tool 3: Credit Limit Checker */}
      {activeTool === 'credits' && (
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div>
              <label htmlFor="prev-gpa-input" className="block text-sm font-medium mb-2">
                معدل ترم گذشته (از ۲۰)
              </label>
              <input
                id="prev-gpa-input"
                type="number"
                step="0.01"
                min={0}
                max={20}
                disabled={isFirstTerm}
                value={prevGpa}
                onChange={(e) => setPrevGpa(e.target.value)}
                className={`w-full px-4 py-3 font-mono-num text-base disabled:opacity-50 ${palette.input} ${palette.radius}`}
              />
            </div>
            <label className="inline-flex items-center gap-2.5 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isFirstTerm}
                onChange={(e) => setIsFirstTerm(e.target.checked)}
                className="w-4 h-4 accent-current"
              />
              <span>دانشجوی ترم اول (ورودی جدید) هستم</span>
            </label>
          </div>

          <div className={`lg:col-span-6 p-6 ${palette.subtleSurface} ${palette.radius} space-y-3`}>
            <div className={`text-xs ${palette.muted}`}>سقف مجاز انتخاب واحد در گلستان</div>
            <div className="flex items-baseline gap-3">
              <span className={`text-4xl font-extrabold font-mono-num ${palette.accentText}`}>
                {creditLimitInfo.maxUnits} واحد
              </span>
              <span className={`text-sm ${palette.muted}`}>حداقل مجاز: {creditLimitInfo.minUnits} واحد</span>
            </div>
            <p className={`text-sm leading-relaxed pt-3 border-t ${palette.divider} ${palette.muted}`}>
              {creditLimitInfo.rule}
            </p>
          </div>
        </div>
      )}

      {/* Tool 4: Study Pomodoro Timer */}
      {activeTool === 'pomodoro' && (
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 text-center sm:text-right">
            <div className={`inline-flex items-center gap-1 p-1 ${palette.tabTrack} ${palette.radius}`}>
              <button
                type="button"
                onClick={() => switchPomodoroMode('focus')}
                className={`px-3 py-1.5 text-xs font-medium cursor-pointer ${palette.radius} ${
                  pomodoroMode === 'focus' ? palette.tabActive : palette.tabIdle
                }`}
              >
                جلسه تمرکز (۲۵ دقیقه)
              </button>
              <button
                type="button"
                onClick={() => switchPomodoroMode('break')}
                className={`px-3 py-1.5 text-xs font-medium cursor-pointer ${palette.radius} ${
                  pomodoroMode === 'break' ? palette.tabActive : palette.tabIdle
                }`}
              >
                استراحت کوتاه (۵ دقیقه)
              </button>
            </div>
            <p className={`text-sm max-w-md ${palette.muted}`}>
              برای حل تمرین‌های الگوریتم، مطالعه امتحانات میان‌ترم و کدنویسی عمیق بدون حواس‌پرتی.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div
              dir="ltr"
              className={`text-5xl font-extrabold font-mono-num tracking-tight ${palette.accentText}`}
            >
              {mm}:{ss}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsRunning((r) => !r)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm cursor-pointer transition-colors whitespace-nowrap ${palette.accentBg} ${palette.radius}`}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRunning ? 'توقف' : 'شروع'}</span>
              </button>
              <button
                type="button"
                onClick={() => switchPomodoroMode(pomodoroMode)}
                aria-label="بازنشانی تایمر"
                className={`p-2.5 border cursor-pointer transition-colors ${palette.divider} ${palette.radius} ${
                  isDark ? 'hover:bg-white/5' : 'hover:bg-black/5'
                }`}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
