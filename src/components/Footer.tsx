import React from 'react';
import { 
  PhoneCall, Heart, ShieldCheck, Moon, Sun, MessageSquare, 
  MapPin, CheckCircle2, ChevronLeft, Award
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { BendaryLogo } from './BendaryLogo';

interface FooterProps {
  onOpenDrugDictionary: () => void;
  onOpenMedicalEncyclopedia: () => void;
  onOpenLegalPolicies: (tab?: 'eda_agreement' | 'privacy' | 'terms' | 'refund' | 'about') => void;
  onOpenChat: () => void;
  onOpenPrescription: () => void;
  onOpenBranches: () => void;
  onSelectCategory: (cat: string) => void;
  onSelectBrand: (brand: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDrugDictionary,
  onOpenMedicalEncyclopedia,
  onOpenLegalPolicies,
  onOpenChat,
  onOpenPrescription,
  onOpenBranches,
  onSelectCategory,
  onSelectBrand
}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Top Header inside footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-2 max-w-xl">
            <BendaryLogo size="md" />
            <p className="text-xs text-slate-400 leading-relaxed pt-2">
              منظومة صيدليات البنداري الرقمية الشاملة • رعاية من القلب لأكثر من 46 سنة متواصلة (تأسست 1980). توفير كامل للأدوية المحلية والمستوردة، ومستحضرات التجميل، والخدمات الإكلينيكية المعتمدة من هيئة الدواء المصرية.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2.5 rounded-2xl border border-slate-700 transition text-xs font-bold"
              title="تغيير المظهر (الوضع الليلي / النهاري)"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>الوضع النهاري (Light)</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-400" />
                  <span>الوضع الليلي (Dark)</span>
                </>
              )}
            </button>

            {/* Direct hotline button */}
            <a
              href="tel:01200400094"
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs px-4 py-2.5 rounded-2xl transition shadow-lg flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>الخط الساخن: 01200400094</span>
            </a>
          </div>
        </div>

        {/* Links Grid matching screenshot 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs">
          
          {/* Column 1: الأقسام الرئيسية */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm border-r-4 border-bendary-600 pr-2">
              الأقسام الرئيسية
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectCategory('all')} className="hover:text-amber-300 transition">
                  كل أقسام الصيدلية
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('medicines')} className="hover:text-amber-300 transition">
                  الأدوية والعلاج
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('vitamins')} className="hover:text-amber-300 transition">
                  الفيتامينات والمكملات
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('skincare')} className="hover:text-amber-300 transition">
                  العناية بالبشرة
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('mother_baby')} className="hover:text-amber-300 transition">
                  الأم والطفل
                </button>
              </li>
              <li>
                <button onClick={() => onSelectCategory('medical_devices')} className="hover:text-amber-300 transition">
                  الأجهزة والمستلزمات الطبية
                </button>
              </li>
              <li>
                <button onClick={onOpenDrugDictionary} className="text-amber-400 font-bold hover:underline">
                  بدائل الأدوية والمواد الفعالة
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: أشهر الماركات */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm border-r-4 border-bendary-600 pr-2">
              أشهر الماركات
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-slate-400">
              <button onClick={() => onSelectBrand('بانادول')} className="text-right hover:text-amber-300">بانادول</button>
              <button onClick={() => onSelectBrand('فولتارين')} className="text-right hover:text-amber-300">فولتارين</button>
              <button onClick={() => onSelectBrand('إيفا')} className="text-right hover:text-amber-300">إيفا</button>
              <button onClick={() => onSelectBrand('دوف')} className="text-right hover:text-amber-300">دوف</button>
              <button onClick={() => onSelectBrand('فاتيكا')} className="text-right hover:text-amber-300">فاتيكا</button>
              <button onClick={() => onSelectBrand('سيجنال')} className="text-right hover:text-amber-300">سيجنال</button>
              <button onClick={() => onSelectBrand('بروفين')} className="text-right hover:text-amber-300">بروفين</button>
              <button onClick={() => onSelectBrand('أوجمنتين')} className="text-right hover:text-amber-300">أوجمنتين</button>
              <button onClick={() => onSelectBrand('نيفيا')} className="text-right hover:text-amber-300">نيفيا</button>
              <button onClick={() => onSelectBrand('بانتين')} className="text-right hover:text-amber-300">بانتين</button>
              <button onClick={() => onSelectBrand('سنسوداين')} className="text-right hover:text-amber-300">سنسوداين</button>
              <button onClick={() => onSelectBrand('لوريال')} className="text-right hover:text-amber-300">لوريال</button>
            </div>
            <button onClick={() => onSelectBrand('')} className="text-[11px] font-bold text-amber-400 hover:underline pt-1 block">
              كل الماركات (135 ماركة) ←
            </button>
          </div>

          {/* Column 3: الموسوعة الطبية والدوائية */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm border-r-4 border-bendary-600 pr-2">
              الموسوعة الطبية والدوائية
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={onOpenDrugDictionary} className="hover:text-amber-300 transition text-right">
                  دليل الأدوية العربي (الأدوية والمواد الفعالة)
                </button>
              </li>
              <li>
                <button onClick={onOpenMedicalEncyclopedia} className="hover:text-amber-300 transition text-right">
                  موسوعة الأمراض والإرشادات العلاجية
                </button>
              </li>
              <li>
                <button onClick={onOpenMedicalEncyclopedia} className="hover:text-amber-300 transition text-right">
                  دليل أعضاء الجسم وكيمياء التحاليل
                </button>
              </li>
              <li>
                <button onClick={onOpenMedicalEncyclopedia} className="hover:text-amber-300 transition text-right text-amber-400 font-bold">
                  حاسبة جرعات الحرارة للأطفال (ml)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalPolicies('eda_agreement')} className="hover:text-amber-300 transition text-right">
                  ضوابط وتصريحات هيئة الدواء المصرية
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: عن المنصة والخدمات */}
          <div className="space-y-3">
            <h4 className="font-black text-white text-sm border-r-4 border-bendary-600 pr-2">
              عن المنصة والخدمات
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onOpenLegalPolicies('about')} className="hover:text-amber-300 transition">
                  عن صيدليات البنداري والاعتماد الطبي
                </button>
              </li>
              <li>
                <button onClick={onOpenChat} className="text-emerald-400 font-bold hover:underline flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>استشارة صيدلي مجاناً 24 ساعة (MoSTaa-ChaT)</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenPrescription} className="hover:text-amber-300 transition">
                  ارفع روشتة فوري
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalPolicies('refund')} className="hover:text-amber-300 transition">
                  سياسة التوصيل والإرجاع والإلغاء
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalPolicies('privacy')} className="hover:text-amber-300 transition">
                  سياسة الخصوصية
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalPolicies('terms')} className="hover:text-amber-300 transition">
                  الشروط والأحكام
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalPolicies('eda_agreement')} className="text-amber-400 font-bold hover:underline">
                  إقرار حفظ بيانات العميل (EDA 151/2020)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Egyptian Drug Authority Certification Seal Footer Bar */}
        <div className="bg-slate-950 p-4 sm:p-5 rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/public/assets/aistudio/Screenshot_2026-11-10-13-10-04-051_com.android.chrome-edit_228694d6.jpg"
              alt="شعار هيئة الدواء المصرية"
              className="w-20 h-auto object-contain bg-white p-1.5 rounded-xl border border-slate-700"
            />
            <div>
              <div className="text-xs font-black text-white flex items-center gap-1.5">
                <span>مرخّصة رسمياً من هيئة الدواء المصرية (EDA)</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
              </div>
              <p className="text-[11px] text-slate-400">
                ترخيص هيئة الدواء المصنع رقم 8456 – آية العناني (صيدليات العناني والبنداري) • محافظة الشرقية والجمهورية
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenChat}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2 px-4 rounded-xl shadow transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>اسأل الصيدلي الذكي MoSTaa-ChaT 🤖</span>
            </button>
          </div>
        </div>

        {/* Copyright notice & Developer Credit */}
        <div className="text-center space-y-1.5 text-[11px] text-slate-500 pt-4 border-t border-slate-800">
          <div>© {new Date().getFullYear()} صيدليات البنداري الرقمية. جميع الحقوق محفوظة • د. مصطفى المرابع - Dr. Moustafa Al-Marabaa</div>
          <div className="font-mono text-amber-400 font-bold text-xs tracking-wider">
            Devolepe By MoSta® | Let's Live The Future Now
          </div>
        </div>

      </div>
    </footer>
  );
};
