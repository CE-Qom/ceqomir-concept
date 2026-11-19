import { IMAGES } from '../data/associationData';

interface NineCraftLogoProps {
  variant?: 'emerald' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export function NineCraftLogo({ variant = 'emerald', size = 'md' }: NineCraftLogoProps) {
  const sizeMap = {
    sm: { box: 'w-8 h-8 rounded-md', text: 'text-lg' },
    md: { box: 'w-10 h-10 rounded-lg', text: 'text-2xl' },
    lg: { box: 'w-12 h-12 rounded-lg', text: 'text-3xl' },
  };

  const dims = sizeMap[size];

  return (
    <div dir="ltr" className="inline-flex items-center gap-3 select-none">
      <div className={`${dims.box} overflow-hidden shrink-0 bg-[#05083B] border border-black/10`}>
        <img
          src={IMAGES.sponsor9craftIcon}
          alt="لوگوی 9Craft"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <span
        className={`font-latin font-extrabold tracking-tight leading-none ${dims.text} ${
          variant === 'light' ? 'text-white' : 'text-stone-900'
        }`}
      >
        9Craft
      </span>
    </div>
  );
}
