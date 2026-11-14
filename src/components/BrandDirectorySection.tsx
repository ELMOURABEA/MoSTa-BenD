import React from 'react';
import { Sparkles, Tag, ExternalLink, ShieldCheck, Star } from 'lucide-react';

interface BrandDirectorySectionProps {
  onSelectBrand: (brandName: string) => void;
  onOpenAdOffer?: (adTitle: string) => void;
}

export const popularBrands = [
  { name: 'بانادول', nameEn: 'Panadol', logoEmoji: '💊', origin: '영국 / GSK', category: 'مسكنات' },
  { name: 'فولتارين', nameEn: 'Voltaren', logoEmoji: '⚡', origin: 'سويسرا / Novartis', category: 'مسكنات ومراهم' },
  { name: 'إيفا', nameEn: 'Eva Cosmetics', logoEmoji: '✨', origin: 'مصر', category: 'عناية بالبشرة والشعر' },
  { name: 'دوف', nameEn: 'Dove', logoEmoji: '🕊️', origin: 'Unilever', category: 'العناية الشخصية' },
  { name: 'فاتيكا', nameEn: 'Vatika', logoEmoji: '🌿', origin: 'Dabur', category: 'زيوت وشامبو' },
  { name: 'سيجنال', nameEn: 'Signal', logoEmoji: '🪥', origin: 'Unilever', category: 'عناية بالأسنان' },
  { name: 'بروفين', nameEn: 'Brufen', logoEmoji: '🩺', origin: 'Abbott', category: 'مضاد التهاب' },
  { name: 'أوجمنتين', nameEn: 'Augmentin', logoEmoji: '🔬', origin: 'GSK', category: 'مضادات حيوية' },
  { name: 'نيفيا', nameEn: 'Nivea', logoEmoji: '💙', origin: 'ألمانيا / Beiersdorf', category: 'كريمات وترطيب' },
  { name: 'بانتين', nameEn: 'Pantene', logoEmoji: '💆‍♀️', origin: 'P&G', category: 'العناية بالشعر' },
  { name: 'صانسيلك', nameEn: 'Sunsilk', logoEmoji: '☀️', origin: 'Unilever', category: 'شامبو' },
  { name: 'سنسوداين', nameEn: 'Sensodyne', logoEmoji: '🦷', origin: 'Haleon', category: 'أسنان حساسة' },
  { name: 'بلانكي', nameEn: 'Blankie', logoEmoji: '👶', origin: 'مصر', category: 'مستلزمات أطفال' },
  { name: 'لوريال', nameEn: "L'Oreal Paris", logoEmoji: '💄', origin: 'فرنسا', category: 'تجميل ومكياج' },
  { name: 'فيشي', nameEn: 'Vichy', logoEmoji: '💧', origin: 'فرنسا', category: 'عناية بالبشرة الطبية' },
  { name: 'لاروش بوزيه', nameEn: 'La Roche-Posay', logoEmoji: '🛡️', origin: 'فرنسا', category: 'بشرة حساسة' }
];

export const adBanners = [
  {
    id: 'ad-1',
    title: 'خصم حقيقي 25% على جميع مستحضرات العناية بالبشرة من Vichy & La Roche-Posay',
    subtitle: 'عرض حقيقي لفترة محدودة حصرياً بفروع صيدليات البنداري وعلى الأونلاين',
    badge: 'شراكة راعي معتمد',
    bgColor: 'from-blue-900 via-indigo-950 to-slate-950',
    buttonText: 'احصل على العرض',
    code: 'SKIN25'
  },
  {
    id: 'ad-2',
    title: 'تجهيز كامل لمستلزمات حديثي الولادة والأم (بلانكي، بيبي جوي، سانوسان)',
    subtitle: 'توصيل مجاني فوري مع استشارة طبيبة الأطفال عبر MoSTaa-ChaT',
    badge: 'باقة رعاية الأم والطفل',
    bgColor: 'from-pink-900 via-rose-950 to-slate-950',
    buttonText: 'تصفح باقات الأطفال',
    code: 'BABYKIT'
  }
];

export const BrandDirectorySection: React.FC<BrandDirectorySectionProps> = ({
  onSelectBrand,
  onOpenAdOffer
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Brand Index Section Title */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span>أشهر الماركات الطبية والعالمية (135+ ماركة معتمدة)</span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            تصفح منتجات أفضل الشركات الدوائية العالمية والمحلية المسجلة بوزارة الصحة
          </p>
        </div>

        <button
          onClick={() => onSelectBrand('')}
          className="text-xs font-bold text-bendary-600 dark:text-bendary-400 hover:underline"
        >
          عرض كل الماركات (135 ماركة) ←
        </button>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
        {popularBrands.map((brand, i) => (
          <button
            key={i}
            onClick={() => onSelectBrand(brand.name)}
            className="bg-white dark:bg-slate-900 hover:bg-bendary-50/70 dark:hover:bg-slate-800 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 transition shadow-2xs hover:shadow-md text-center group space-y-1.5"
          >
            <div className="text-2xl group-hover:scale-110 transition duration-200">
              {brand.logoEmoji}
            </div>
            <div className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-bendary-600 dark:group-hover:text-bendary-400 truncate">
              {brand.name}
            </div>
            <div className="text-[10px] text-slate-400 font-sans truncate">
              {brand.nameEn}
            </div>
          </button>
        ))}
      </div>

      {/* Promotional Ads Spaces */}
      <div className="space-y-3 pt-4">
        <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-red-500" />
          <span>العروض والخصومات الطبية المعتمدة</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adBanners.map((ad) => (
            <div
              key={ad.id}
              className={`bg-gradient-to-r ${ad.bgColor} text-white p-5 rounded-3xl shadow-xl relative overflow-hidden border border-white/10 flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-1 relative z-10">
                <span className="bg-amber-400 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {ad.badge}
                </span>
                <h3 className="text-sm sm:text-base font-black leading-snug">
                  {ad.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {ad.subtitle}
                </p>
              </div>

              <div className="flex justify-between items-center relative z-10 pt-2 border-t border-white/10">
                <div className="text-[11px] font-mono bg-white/10 px-2.5 py-1 rounded-lg">
                  كود الخصم: <span className="font-bold text-amber-300">{ad.code}</span>
                </div>

                <button
                  onClick={() => onOpenAdOffer && onOpenAdOffer(ad.title)}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs py-2 px-3.5 rounded-xl shadow transition flex items-center gap-1"
                >
                  <span>{ad.buttonText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
