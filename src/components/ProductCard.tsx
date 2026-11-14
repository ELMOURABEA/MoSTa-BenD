import React, { useState } from 'react';
import { ShoppingCart, Heart, Plus, Minus, Check, MessageSquare, Info, ShieldAlert } from 'lucide-react';
import { Product } from '../types/pharmacy';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenDetails: (product: Product) => void;
  onConsultPharmacist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenDetails,
  onConsultPharmacist
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      onClick={() => onOpenDetails(product)}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-bendary-500 dark:hover:border-bendary-500 hover:shadow-xl transition-all duration-200 p-4 flex flex-col justify-between group cursor-pointer relative"
    >
      {/* Top badges */}
      <div className="flex justify-between items-start mb-2">
        <div className="flex flex-col gap-1">
          {discountPercent > 0 && (
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-sm">
              خصم {discountPercent}%
            </span>
          )}
          {product.requiresPrescription && (
            <span className="bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-amber-300 dark:border-amber-800">
              <ShieldAlert className="w-3 h-3 text-amber-600 dark:text-amber-400" />
              روشتة طبية
            </span>
          )}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`p-1.5 rounded-full backdrop-blur-md transition ${
            isLiked ? 'text-red-500 bg-red-50 dark:bg-red-950/40' : 'text-slate-400 hover:text-red-500 bg-slate-50 dark:bg-slate-800'
          }`}
          aria-label="إضافة للمفضلة"
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Visual Emoji/Image showcase */}
      <div className="w-full h-36 bg-gradient-to-b from-slate-50 to-slate-100/60 dark:from-slate-800/80 dark:to-slate-800/40 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-200 border border-slate-100 dark:border-slate-800">
        <span className="text-5xl drop-shadow-sm select-none">{product.imageEmoji}</span>
        
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 text-xs font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
            <Info className="w-3 h-3 text-bendary-600" /> تفاصيل الدواء
          </span>
        </div>
      </div>

      {/* Category & Names */}
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-bendary-700 dark:text-bendary-400 bg-bendary-50 dark:bg-bendary-950/60 px-2 py-0.5 rounded inline-block">
          {product.category}
        </span>
        <h3 className="font-extrabold text-sm text-slate-800 dark:text-slate-100 line-clamp-2 leading-snug group-hover:text-bendary-600 dark:group-hover:text-bendary-400 transition">
          {product.nameAr}
        </h3>
        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-sans tracking-tight truncate uppercase">
          {product.nameEn}
        </p>
        <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
          المادة الفعالة: <span className="font-semibold text-slate-700 dark:text-slate-300">{product.activeIngredient}</span>
        </p>
      </div>

      {/* Price & Action Section */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-baseline justify-between mb-2">
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">السعر الرسمي</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-slate-900 dark:text-white">{product.price.toFixed(2)}</span>
              <span className="text-xs font-bold text-slate-600 dark:text-slate-400">ج.م</span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-amber-500 font-bold">
            <span>★</span>
            <span>{product.rating}</span>
            <span className="text-slate-400 text-[10px]">({product.reviewCount})</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-1.5">
          <button
            onClick={handleAdd}
            className={`col-span-3 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition ${
              justAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-bendary-600 hover:bg-bendary-700 text-white'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>تمت الإضافة!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>أضف للسلة</span>
              </>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onConsultPharmacist(product);
            }}
            title="استشر الصيدلي الإكلينيكي عن هذا الدواء عبر MoSTaa-ChaT"
            className="col-span-1 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded-xl p-2 flex items-center justify-center transition active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
