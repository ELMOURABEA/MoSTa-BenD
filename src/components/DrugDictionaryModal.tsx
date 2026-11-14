import React, { useState } from 'react';
import { 
  X, Search, Pill, ShieldAlert, FileText, RefreshCw, 
  ShoppingCart, MessageSquare, CheckCircle2, ChevronRight, Sparkles, Building2, ExternalLink
} from 'lucide-react';
import { drugDictionaryList, DrugItem } from '../data/drugDictionaryData';
import { Product } from '../types/pharmacy';

interface DrugDictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product) => void;
  onConsultPharmacist?: (drugName: string) => void;
  initialSearch?: string;
}

export const DrugDictionaryModal: React.FC<DrugDictionaryModalProps> = ({
  isOpen,
  onClose,
  onAddToCart,
  onConsultPharmacist,
  initialSearch = ''
}) => {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDrug, setSelectedDrug] = useState<DrugItem | null>(drugDictionaryList[0]);

  if (!isOpen) return null;

  const categories = [
    { id: 'all', name: 'جميع المجموعات' },
    { id: 'مسكنات ومضادات الحرارة', name: 'مسكنات' },
    { id: 'مضادات حيوية', name: 'مضادات حيوية' },
    { id: 'مضادات الحموضة والجهاز الهضمي', name: 'الجهاز الهضمي' },
    { id: 'أدوية الضغط والقلب', name: 'الضغط والقلب' },
    { id: 'أدوية البرد والإنفلونزا', name: 'البرد والإنفلونزا' },
    { id: 'أدوية السكري', name: 'السكري' }
  ];

  const filteredDrugs = drugDictionaryList.filter(d => {
    const matchesSearch = 
      d.nameAr.includes(search) || 
      d.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      d.activeIngredient.toLowerCase().includes(search.toLowerCase()) ||
      d.activeIngredientAr.includes(search);

    if (!matchesSearch) return false;
    if (selectedCategory !== 'all' && d.category !== selectedCategory) return false;
    return true;
  });

  const handleAddToCartFromDrug = (drug: DrugItem) => {
    if (onAddToCart) {
      const mockProduct: Product = {
        id: drug.id,
        sku: drug.edaCode,
        nameAr: drug.nameAr,
        nameEn: drug.nameEn,
        category: drug.category,
        categoryEn: drug.category,
        price: drug.price,
        inStock: true,
        dosageForm: drug.dosageForm,
        descriptionAr: drug.indicationsAr.join(' • '),
        descriptionEn: drug.indicationsAr.join(' • '),
        activeIngredient: drug.activeIngredient,
        requiresPrescription: drug.requiresPrescription,
        rating: 4.9,
        reviewCount: 42,
        imageEmoji: '💊',
        usageInstructionsAr: drug.dosageAr,
        sideEffectsAr: drug.sideEffectsAr.join(' • ')
      };
      onAddToCart(mockProduct);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-bendary-950 to-slate-900 text-white flex justify-between items-center border-b border-red-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-bendary-600 text-white flex items-center justify-center shadow-lg">
              <Pill className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-wide flex items-center gap-2">
                <span>دليل وبنك الأدوية والمواد الفعالة</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/30">
                  مرخص EDA
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                ابحث عن الأسماء التجارية، المواد الفعالة، ودواعي الاستعمال البدائل والأسعار
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 space-y-3">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث باسم الدواء (بنادول، أوجمنتين) أو المادة الفعالة (Paracetamol, Amoxicillin)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-2xl py-3 pr-11 pl-4 text-sm font-medium focus:outline-none focus:border-bendary-600 shadow-inner dark:text-slate-100"
            />
            <Search className="w-5 h-5 text-slate-400 absolute right-3.5 top-3.5" />
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 text-xs whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl font-bold transition ${
                  selectedCategory === cat.id
                    ? 'bg-bendary-600 text-white shadow'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Split Content (Master / Detail) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
          
          {/* Left Master List */}
          <div className="md:col-span-5 border-l border-slate-200 dark:border-slate-800 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 max-h-[340px] md:max-h-none">
            {filteredDrugs.length === 0 ? (
              <div className="p-8 text-center text-slate-400 text-xs">
                لم يتم العثور على أدوية مطابقة للبحث
              </div>
            ) : (
              filteredDrugs.map((drug) => (
                <div
                  key={drug.id}
                  onClick={() => setSelectedDrug(drug)}
                  className={`p-3.5 cursor-pointer transition flex items-center justify-between ${
                    selectedDrug?.id === drug.id
                      ? 'bg-bendary-50 dark:bg-slate-800/90 border-r-4 border-bendary-600'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="min-w-0 pr-1">
                    <div className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">
                      {drug.nameAr}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-sans truncate">
                      {drug.activeIngredient} • {drug.dosageForm}
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 text-[10px]">
                      <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md font-medium">
                        {drug.category}
                      </span>
                      {drug.requiresPrescription && (
                        <span className="bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 px-1.5 py-0.5 rounded-md font-bold">
                          روشتة
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-left shrink-0">
                    <span className="text-xs font-black text-bendary-600 dark:text-bendary-400">
                      {drug.price.toFixed(2)} ج.م
                    </span>
                    <ChevronRight className="w-4 h-4 text-slate-400 mt-1 mr-auto" />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Detail Pane */}
          <div className="md:col-span-7 overflow-y-auto p-4 sm:p-6 bg-white dark:bg-slate-900 space-y-5">
            {selectedDrug ? (
              <>
                {/* Drug Main Header Box */}
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 relative">
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        {selectedDrug.nameAr}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-sans font-medium">
                        {selectedDrug.nameEn}
                      </p>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-black text-bendary-600 dark:text-bendary-400">
                        {selectedDrug.price.toFixed(2)} ج.م
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        متوفر بالصيدلية
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400">المادة الفعالة:</span>
                      <div className="font-bold text-slate-800 dark:text-slate-200">
                        {selectedDrug.activeIngredientAr} ({selectedDrug.activeIngredient})
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400">كود ترخيص الهيئة:</span>
                      <div className="font-mono text-slate-700 dark:text-slate-300 font-semibold">
                        {selectedDrug.edaCode}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Indications & Uses */}
                <div>
                  <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-bendary-600" />
                    <span>دواعي الاستعمال:</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedDrug.indicationsAr.map((ind, idx) => (
                      <li key={idx} className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dosage */}
                <div className="bg-blue-50/70 dark:bg-blue-950/30 p-3.5 rounded-2xl border border-blue-200 dark:border-blue-900/50 text-xs">
                  <div className="font-bold text-blue-900 dark:text-blue-300 mb-1 flex items-center gap-1.5">
                    <Pill className="w-4 h-4 text-blue-600" />
                    <span>الجرعة وطريقة الاستعمال:</span>
                  </div>
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    {selectedDrug.dosageAr}
                  </p>
                </div>

                {/* Contraindications & Side Effects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-amber-50/60 dark:bg-amber-950/30 p-3 rounded-2xl border border-amber-200 dark:border-amber-900/50 text-xs">
                    <div className="font-bold text-amber-900 dark:text-amber-300 mb-1.5 flex items-center gap-1">
                      <ShieldAlert className="w-4 h-4 text-amber-600" />
                      <span>الآثار الجانبية:</span>
                    </div>
                    <ul className="space-y-1 text-amber-800 dark:text-amber-200 list-disc list-inside">
                      {selectedDrug.sideEffectsAr.map((se, i) => (
                        <li key={i}>{se}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-red-50/60 dark:bg-red-950/30 p-3 rounded-2xl border border-red-200 dark:border-red-900/50 text-xs">
                    <div className="font-bold text-red-900 dark:text-red-300 mb-1.5 flex items-center gap-1">
                      <ShieldAlert className="w-4 h-4 text-red-600" />
                      <span>موانع الاستعمال:</span>
                    </div>
                    <ul className="space-y-1 text-red-800 dark:text-red-200 list-disc list-inside">
                      {selectedDrug.contraindicationsAr.map((ci, i) => (
                        <li key={i}>{ci}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alternatives Section (البدائل الدوائية المتاحة بالصيدلية) */}
                <div className="bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-900/50 space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-black text-emerald-900 dark:text-emerald-300 flex items-center gap-1.5">
                      <RefreshCw className="w-4 h-4 text-emerald-600" />
                      <span>البدائل والبدائل المماثلة بالصيدلية (نفس المادة الفعالة):</span>
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedDrug.alternatives.map((alt, i) => (
                      <div key={i} className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-emerald-200 dark:border-slate-800 text-xs space-y-1">
                        <div className="font-bold text-slate-800 dark:text-slate-200">{alt.nameAr}</div>
                        <div className="text-[10px] text-slate-400 font-sans">{alt.nameEn}</div>
                        <div className="text-emerald-600 dark:text-emerald-400 font-black">{alt.price.toFixed(2)} ج.م</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => handleAddToCartFromDrug(selectedDrug)}
                    className="w-full sm:w-auto flex-1 bg-bendary-600 hover:bg-bendary-700 text-white font-bold text-xs py-3 px-4 rounded-2xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>إضافة الدواء إلى سلة الشراء ({selectedDrug.price.toFixed(2)} ج.م)</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onConsultPharmacist) onConsultPharmacist(selectedDrug.nameAr);
                      onClose();
                    }}
                    className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-2xl transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>استشر الصيدلي عن هذا الدواء</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-slate-400 text-xs">
                حدد دواء من القائمة لعرض كامل تفاصيله
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
