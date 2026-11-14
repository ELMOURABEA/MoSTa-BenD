import React, { useState } from 'react';
import { 
  PhoneCall, Clock, Search, Upload, ShoppingCart, 
  ShieldCheck, MapPin, PackageCheck, MessageSquare, 
  Menu, X, Heart, Users, Moon, Sun, Pill, BookOpen, FileCheck
} from 'lucide-react';
import { Product } from '../types/pharmacy';
import { BendaryLogo } from './BendaryLogo';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenPrescription: () => void;
  onOpenInsurance: () => void;
  onOpenOrderTracker: () => void;
  onOpenBranches: () => void;
  onOpenChat: () => void;
  onOpenTeamPortal: () => void;
  onOpenDrugDictionary: () => void;
  onOpenMedicalEncyclopedia: () => void;
  onOpenLegalPolicies: (tab?: 'eda_agreement' | 'privacy' | 'terms' | 'refund' | 'about') => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  cartCount,
  onOpenCart,
  onOpenPrescription,
  onOpenInsurance,
  onOpenOrderTracker,
  onOpenBranches,
  onOpenChat,
  onOpenTeamPortal,
  onOpenDrugDictionary,
  onOpenMedicalEncyclopedia,
  onOpenLegalPolicies,
  products,
  onSelectProduct
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const matchedProducts = searchTerm.trim().length > 1
    ? products.filter(p => 
        p.nameAr.includes(searchTerm) || 
        p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5)
    : [];

  return (
    <>
      {/* Top Banner: رعاية من القلب - 46 سنة & الخط الساخن 01200400094 بشكل بارز */}
      <div className="bg-gradient-to-r from-bendary-950 via-bendary-900 to-red-950 text-white py-1.5 px-3 sm:px-4 shadow-md border-b-2 border-red-700/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          
          {/* Care from the Heart Badge - 46 Years */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-bendary-700 text-white px-2.5 sm:px-3.5 py-1 rounded-full font-black text-[11px] sm:text-xs shadow-md border border-red-400/50 tracking-wide shrink-0 whitespace-nowrap">
              <Heart className="w-3.5 h-3.5 fill-white text-white animate-pulse" />
              <span>رعاية من القلب - 46 سنة</span>
            </span>
            <span className="hidden lg:inline text-slate-300 text-xs font-semibold truncate">
              صيدليات البنداري • ترخيص هيئة الدواء #8456 • 24 ساعة
            </span>
          </div>

          {/* Prominent Hotline 01200400094 Display & Quick Tools */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="tel:01200400094" 
              className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-bendary-950 px-2.5 sm:px-4 py-1 rounded-full font-black transition shadow-lg ring-2 ring-amber-300/60 active:scale-95 group whitespace-nowrap"
              title="اتصل بالخط الساخن المباشر 01200400094"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-bendary-950 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                <PhoneCall className="w-2.5 h-2.5 sm:w-3 sm:h-3 animate-bounce" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold hidden sm:inline">الخط الساخن:</span>
              <span className="font-mono text-xs sm:text-sm font-black tracking-wider">01200400094</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 bg-slate-800/80 hover:bg-slate-700 rounded-full text-slate-200 transition"
              title="تغيير الوضع الليلي / النهاري"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-300" />}
            </button>

            {/* Quick Links */}
            <div className="hidden md:flex items-center gap-2.5 text-xs text-slate-200">
              <button 
                onClick={onOpenBranches}
                className="flex items-center gap-1 hover:text-amber-300 transition text-[11px] font-bold"
              >
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>11 فرع</span>
              </button>

              <span className="text-slate-500">|</span>

              <button 
                onClick={onOpenOrderTracker}
                className="flex items-center gap-1 hover:text-amber-300 transition text-[11px] font-bold"
              >
                <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>تتبع الطلب</span>
              </button>

              <span className="text-slate-500">|</span>

              <span className="flex items-center gap-1 text-slate-300 text-[11px] font-medium">
                <Clock className="w-3 h-3 text-amber-300" />
                24 ساعة
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-[42px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
          
          {/* Logo Section */}
          <div 
            className="cursor-pointer transition hover:opacity-95 shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <BendaryLogo size="sm" className="sm:hidden" />
            <BendaryLogo size="md" className="hidden sm:flex" />
          </div>

          {/* Main Search Bar matching user phrase "ابحث عن دواء أو مرض أو مادة" */}
          <div className="flex-1 max-w-2xl mx-2 hidden md:block relative">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="ابحث عن دواء أو مرض أو مادة (بانادول، أوجمنتين، السكري، الباراسيتامول)..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSearchDropdown(true);
                }}
                onFocus={() => setShowSearchDropdown(true)}
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full py-2.5 pr-11 pl-20 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:border-bendary-600 dark:focus:border-bendary-500 transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-2.5" />
              
              <button
                type="button"
                onClick={() => setShowSearchDropdown(!showSearchDropdown)}
                className="absolute left-2 top-1.5 bg-bendary-600 hover:bg-bendary-700 text-white font-bold text-xs px-3 py-1.5 rounded-full transition shadow"
              >
                ابحث
              </button>
            </div>

            {/* Autocomplete Dropdown */}
            {showSearchDropdown && matchedProducts.length > 0 && (
              <div className="absolute top-full mt-1.5 right-0 left-0 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-2 bg-slate-50 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-500 dark:text-slate-400 flex justify-between items-center">
                  <span>منتجات متطابقة مع البحث:</span>
                  <button onClick={() => setShowSearchDropdown(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    إغلاق ✕
                  </button>
                </div>
                {matchedProducts.map(prod => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      setShowSearchDropdown(false);
                    }}
                    className="p-3 hover:bg-bendary-50/60 dark:hover:bg-slate-800/80 cursor-pointer flex items-center justify-between border-b border-slate-100 dark:border-slate-800 last:border-0 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{prod.imageEmoji}</span>
                      <div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">{prod.nameAr}</div>
                        <div className="text-[11px] text-slate-400 font-sans">{prod.nameEn} • {prod.activeIngredient}</div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-extrabold text-bendary-700 dark:text-bendary-400">{prod.price.toFixed(2)} ج.م</div>
                      <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full font-medium">
                        {prod.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Drug Dictionary Quick Button */}
            <button
              onClick={onOpenDrugDictionary}
              className="hidden lg:flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-bendary-600 bg-slate-100 dark:bg-slate-800 hover:bg-bendary-50 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 transition"
              title="دليل الأدوية والمواد الفعالة"
            >
              <Pill className="w-4 h-4 text-bendary-600 dark:text-bendary-400" />
              <span>بنك الأدوية</span>
            </button>

            {/* Medical Encyclopedia Quick Button */}
            <button
              onClick={onOpenMedicalEncyclopedia}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 transition"
              title="الموسوعة الطبية وحاسبة الأطفال"
            >
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>الموسوعة الطبية</span>
            </button>

            {/* Prescription Upload */}
            <button
              onClick={onOpenPrescription}
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-white bg-bendary-600 hover:bg-bendary-700 px-3.5 py-2 rounded-xl shadow-sm hover:shadow transition active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>ارفع الروشتة</span>
            </button>

            {/* Consultation */}
            <button
              onClick={onOpenChat}
              className="hidden md:flex items-center gap-1.5 text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 px-3 py-2 rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-sm transition active:scale-95"
              title="استشارة صيدلي البنداري المباشرة 24 ساعة"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>استشر صيدلي</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-bendary-50 text-slate-700 dark:text-slate-200 hover:text-bendary-600 transition active:scale-95"
              aria-label="سلة المشتريات"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-bendary-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-slate-200 text-slate-700 dark:text-slate-200 transition md:hidden"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Quick Tag Pills Navigation matching Screenshot 1 */}
        <div className="bg-amber-50/60 dark:bg-slate-900 border-t border-b border-amber-200/50 dark:border-slate-800 py-2 px-4 overflow-x-auto">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs whitespace-nowrap">
            <span className="text-slate-500 dark:text-slate-400 text-[11px] font-bold">الرئيسية/البحث الشامل:</span>
            
            <button 
              onClick={onOpenDrugDictionary}
              className="bg-white dark:bg-slate-800 text-bendary-700 dark:text-bendary-400 px-3 py-1 rounded-full border border-bendary-200 dark:border-slate-700 font-bold hover:bg-bendary-50 shadow-2xs flex items-center gap-1"
            >
              <Pill className="w-3.5 h-3.5" />
              <span>بنك الأدوية والبدائل</span>
            </button>

            <button 
              onClick={onOpenMedicalEncyclopedia}
              className="bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full border border-emerald-200 dark:border-slate-700 font-bold hover:bg-emerald-50 shadow-2xs flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>موسوعة الأمراض</span>
            </button>

            <button 
              onClick={() => onOpenLegalPolicies('eda_agreement')}
              className="bg-amber-400 text-slate-950 px-3 py-1 rounded-full font-black hover:bg-amber-300 shadow-2xs flex items-center gap-1"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>إقرار موافقة EDA 8456</span>
            </button>

            <button 
              onClick={onOpenChat}
              className="bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full border border-blue-200 dark:border-slate-700 font-bold hover:bg-blue-50 shadow-2xs flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>استشر طبيباً / صيدلياً</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="px-4 py-2 md:hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="ابحث عن دواء أو مرض أو مادة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full py-2 pr-9 pl-14 text-xs dark:text-slate-100 focus:outline-none focus:border-bendary-600"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5" />
            <button
              onClick={() => setSearchTerm(searchTerm)}
              className="absolute left-1.5 top-1 bg-bendary-600 text-white font-bold text-[10px] px-2.5 py-1 rounded-full"
            >
              ابحث
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 text-white px-4 py-3 space-y-2 text-sm border-t border-slate-800 animate-in fade-in duration-150">
            <a
              href="tel:01200400094"
              className="w-full flex items-center justify-between py-2.5 px-3 bg-amber-400 text-bendary-950 rounded-xl font-black text-xs"
            >
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4" />
                <span>الخط الساخن المباشر</span>
              </span>
              <span className="font-mono text-sm">01200400094</span>
            </a>

            <button
              onClick={() => { toggleTheme(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right text-amber-300 font-bold text-xs"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              <span>تغيير المظهر ({theme === 'dark' ? 'تفعيل النهاري' : 'تفعيل الليلي'})</span>
            </button>

            <button
              onClick={() => { onOpenDrugDictionary(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-amber-300 text-xs font-bold"
            >
              <Pill className="w-4 h-4 text-bendary-400" /> دليل وبنك الأدوية والمواد الفعالة
            </button>

            <button
              onClick={() => { onOpenMedicalEncyclopedia(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-amber-300 text-xs font-bold"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" /> الموسوعة الطبية وحاسبة جرعات الأطفال
            </button>

            <button
              onClick={() => { onOpenLegalPolicies('eda_agreement'); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-amber-300 text-xs font-bold text-amber-400"
            >
              <FileCheck className="w-4 h-4" /> إقرار موافقة العميل وتصريحات EDA
            </button>

            <button
              onClick={() => { onOpenPrescription(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-red-300 text-xs"
            >
              <Upload className="w-4 h-4 text-bendary-400" /> اطلب بروشتة فورية
            </button>
            
            <button
              onClick={() => { onOpenInsurance(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-red-300 text-xs"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> تعاقدات التأمين الطبي
            </button>

            <button
              onClick={() => { onOpenOrderTracker(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-red-300 text-xs"
            >
              <PackageCheck className="w-4 h-4 text-amber-400" /> تتبع شحنة دواء
            </button>

            <button
              onClick={() => { onOpenBranches(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right hover:text-red-300 text-xs"
            >
              <MapPin className="w-4 h-4 text-red-400" /> فروع صيدليات البنداري الـ 11
            </button>

            <button
              onClick={() => { onOpenChat(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 border-b border-slate-800 text-right text-emerald-300 font-bold text-xs"
            >
              <MessageSquare className="w-4 h-4" /> استشارة صيدلي البنداري 24 ساعة
            </button>

            <button
              onClick={() => { onOpenTeamPortal(); setMobileMenuOpen(false); }}
              className="w-full flex items-center gap-2 py-2 text-right text-slate-400 hover:text-white text-xs"
            >
              <Users className="w-4 h-4 text-emerald-400" /> بوابة الفريق (دخول الموظفين)
            </button>
          </div>
        )}
      </header>
    </>
  );
};
