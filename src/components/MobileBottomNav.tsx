import React from 'react';
import { Home, Grid, Upload, MessageSquare, ShoppingCart, Pill } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'home' | 'catalog' | 'prescription' | 'chat' | 'cart';
  setActiveTab: (tab: 'home' | 'catalog' | 'prescription' | 'chat' | 'cart') => void;
  cartCount: number;
  unreadChatCount: number;
  onOpenPrescription: () => void;
  onOpenCart: () => void;
  onOpenChat: () => void;
  onOpenDrugDictionary: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  unreadChatCount,
  onOpenPrescription,
  onOpenCart,
  onOpenChat,
  onOpenDrugDictionary
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1.5 shadow-lg flex justify-around items-center md:hidden">
      <button
        onClick={() => setActiveTab('home')}
        className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition ${
          activeTab === 'home' ? 'text-bendary-600 dark:text-bendary-400 font-bold scale-105' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
      >
        <Home className="w-5 h-5 mb-0.5" />
        <span className="text-[11px]">الرئيسية</span>
      </button>

      <button
        onClick={onOpenDrugDictionary}
        className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-bendary-600 dark:hover:text-bendary-400 transition"
      >
        <Pill className="w-5 h-5 mb-0.5 text-bendary-600 dark:text-bendary-400" />
        <span className="text-[11px] font-bold">دليل الأدوية</span>
      </button>

      {/* Center Action: Upload Rx */}
      <button
        onClick={onOpenPrescription}
        className="flex flex-col items-center justify-center -mt-5"
        title="ارفع الروشتة"
      >
        <div className="w-13 h-13 bg-gradient-to-tr from-bendary-700 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white dark:border-slate-900 active:scale-95 transition">
          <Upload className="w-6 h-6 animate-pulse" />
        </div>
        <span className="text-[10px] font-bold text-bendary-600 dark:text-bendary-400 mt-0.5">روشتة فورية</span>
      </button>

      <button
        onClick={onOpenChat}
        className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition ${
          activeTab === 'chat' ? 'text-emerald-600 dark:text-emerald-400 font-bold scale-105' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
        }`}
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 mb-0.5" />
          {unreadChatCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-emerald-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full border border-white dark:border-slate-900 animate-bounce">
              {unreadChatCount}
            </span>
          )}
        </div>
        <span className="text-[11px]">استشر صيدلي</span>
      </button>

      <button
        onClick={onOpenCart}
        className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition"
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5 mb-0.5" />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-bendary-600 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full border border-white dark:border-slate-900">
              {cartCount}
            </span>
          )}
        </div>
        <span className="text-[11px]">السلة</span>
      </button>
    </div>
  );
};
