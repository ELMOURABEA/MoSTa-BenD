import React, { useState } from 'react';
import { 
  X, BookOpen, Stethoscope, Activity, Calculator, CheckCircle2, 
  AlertTriangle, HeartPulse, ShieldAlert, Sparkles, User, Info, ArrowLeft
} from 'lucide-react';
import { 
  diseasesList, bodyOrgansList, labTestsList, calculateChildDose 
} from '../data/medicalEncyclopediaData';

interface MedicalEncyclopediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConsultPharmacist?: (topic: string) => void;
}

export const MedicalEncyclopediaModal: React.FC<MedicalEncyclopediaModalProps> = ({
  isOpen,
  onClose,
  onConsultPharmacist
}) => {
  const [activeTab, setActiveTab] = useState<'diseases' | 'organs' | 'labs' | 'calculator'>('diseases');
  const [selectedDiseaseId, setSelectedDiseaseId] = useState<string>(diseasesList[0].id);

  // Pediatric calculator state
  const [childWeight, setChildWeight] = useState<number>(10);
  const [medicationType, setMedicationType] = useState<'paracetamol_120' | 'paracetamol_250' | 'ibuprofen_100'>('paracetamol_120');

  if (!isOpen) return null;

  const currentDisease = diseasesList.find(d => d.id === selectedDiseaseId) || diseasesList[0];
  const doseCalculation = calculateChildDose(childWeight, medicationType);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white flex justify-between items-center border-b border-emerald-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
              <Stethoscope className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-wide flex items-center gap-2">
                <span>الموسوعة الطبية والدوائية الشاملة</span>
                <span className="bg-emerald-500/30 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full border border-emerald-400/40">
                  صيدليات البنداري
                </span>
              </h2>
              <p className="text-xs text-slate-300">
                موسوعة الأمراض، إرشادات العلاج، دليل أعضاء الجسم، كيمياء التحاليل وحاسبة الأطفال
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

        {/* Tab Navigation */}
        <div className="flex bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-x-auto text-xs font-bold whitespace-nowrap px-4 py-2 gap-2">
          <button
            onClick={() => setActiveTab('diseases')}
            className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
              activeTab === 'diseases'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>موسوعة الأمراض والعلاجات</span>
          </button>

          <button
            onClick={() => setActiveTab('organs')}
            className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
              activeTab === 'organs'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <HeartPulse className="w-4 h-4" />
            <span>دليل أعضاء الجسم</span>
          </button>

          <button
            onClick={() => setActiveTab('labs')}
            className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
              activeTab === 'labs'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>كيمياء الجسم والتحاليل</span>
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
              activeTab === 'calculator'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Calculator className="w-4 h-4 text-amber-900 dark:text-amber-400" />
            <span>حاسبة حرارة الأطفال</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white dark:bg-slate-900">
          
          {/* TAB 1: Diseases */}
          {activeTab === 'diseases' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left disease selector */}
              <div className="md:col-span-4 space-y-2 border-b md:border-b-0 md:border-l border-slate-200 dark:border-slate-800 pb-4 md:pb-0 md:pl-4">
                <div className="text-xs font-bold text-slate-400 mb-2">اختر الحالة أو المرض:</div>
                {diseasesList.map(dis => (
                  <button
                    key={dis.id}
                    onClick={() => setSelectedDiseaseId(dis.id)}
                    className={`w-full text-right p-3 rounded-2xl transition border flex items-center justify-between ${
                      selectedDiseaseId === dis.id
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{dis.iconEmoji}</span>
                      <div>
                        <div className="text-xs font-bold">{dis.nameAr}</div>
                        <div className="text-[10px] text-slate-400">{dis.category}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Right Disease Detail */}
              <div className="md:col-span-8 space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{currentDisease.iconEmoji}</span>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 dark:text-white">
                        {currentDisease.nameAr}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans">{currentDisease.nameEn}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    <strong className="text-slate-900 dark:text-slate-100">الأسباب والعوامل: </strong>
                    {currentDisease.causesAr}
                  </p>
                </div>

                {/* Symptoms */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">الأعراض الشائعة:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentDisease.symptomsAr.map((sym, i) => (
                      <div key={i} className="bg-amber-50/60 dark:bg-amber-950/30 p-2.5 rounded-xl border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment Guidelines */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">إرشادات العلاج والخيارات الدوائية:</h4>
                  <ul className="space-y-2">
                    {currentDisease.treatmentGuidelinesAr.map((guide, i) => (
                      <li key={i} className="bg-emerald-50/60 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200 dark:border-emerald-900/40 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{guide}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      if (onConsultPharmacist) onConsultPharmacist(`أرغب في استشارة عن حالة: ${currentDisease.nameAr}`);
                      onClose();
                    }}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-2xl shadow transition flex items-center justify-center gap-2"
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>تحدث مع صيدلي البنداري عن خطة علاج {currentDisease.nameAr}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Organs */}
          {activeTab === 'organs' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bodyOrgansList.map(organ => (
                <div key={organ.id} className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3">
                  <div className="border-b border-slate-200 dark:border-slate-700 pb-2">
                    <h3 className="text-base font-black text-slate-900 dark:text-white">{organ.nameAr}</h3>
                    <span className="text-[10px] text-slate-400">{organ.systemAr}</span>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 mb-1">الوظائف الرئيسية:</div>
                    <ul className="text-xs text-slate-600 dark:text-slate-300 list-disc list-inside space-y-1">
                      {organ.functionsAr.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-amber-700 dark:text-amber-400 mb-1">التحاليل الموصى بها:</div>
                    <div className="flex flex-wrap gap-1">
                      {organ.keyLabTestsAr.map((lab, i) => (
                        <span key={i} className="bg-white dark:bg-slate-900 px-2 py-0.5 rounded text-[10px] border border-slate-200 dark:border-slate-700 font-mono">
                          {lab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Lab Tests */}
          {activeTab === 'labs' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {labTestsList.map(lab => (
                  <div key={lab.id} className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">{lab.nameAr}</h3>
                      <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                        {lab.category}
                      </span>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                      <div className="text-[10px] text-slate-400">النسبة الطبيعية:</div>
                      <div className="font-bold text-emerald-600 dark:text-emerald-400">{lab.normalRangeAr}</div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300">{lab.descriptionAr}</p>

                    <div className="pt-1 text-[11px] text-slate-500">
                      <strong>شروط الفحص: </strong> {lab.preparationAr}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: Pediatric Antipyretic Calculator */}
          {activeTab === 'calculator' && (
            <div className="max-w-2xl mx-auto space-y-6 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
              <div className="text-center space-y-1">
                <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                  <Calculator className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  حاسبة جرعات مخفضات الحرارة للأطفال
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  احسب الجرعة الصحيحة بدقة بالـ (مليلتر / ml) بناءً على وزن الطفل بالكيلوجرام
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    وزن الطفل (بالكيلوجرام): <span className="text-bendary-600 font-mono text-sm">{childWeight} كجم</span>
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="35"
                    step="0.5"
                    value={childWeight}
                    onChange={(e) => setChildWeight(parseFloat(e.target.value))}
                    className="w-full accent-bendary-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>3 كجم (رضيع)</span>
                    <span>15 كجم (طفل)</span>
                    <span>35 كجم</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    اختر نوع خافض الحرارة:
                  </label>
                  <select
                    value={medicationType}
                    onChange={(e) => setMedicationType(e.target.value as any)}
                    className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-3 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-bendary-600"
                  >
                    <option value="paracetamol_120">سيتال / بارامول شرب (120 مجم / 5 مل) - باراسيتامول</option>
                    <option value="paracetamol_250">سيتال اكسترا / أدول شرب (250 مجم / 5 مل) - باراسيتامول مركز</option>
                    <option value="ibuprofen_100">بروفين / سيتال جونيور شرب (100 مجم / 5 مل) - إيبوبروفين</option>
                  </select>
                </div>

                {doseCalculation && (
                  <div className="bg-emerald-500 text-white p-5 rounded-2xl shadow-lg space-y-2 text-center animate-in zoom-in-95">
                    <div className="text-xs font-bold text-emerald-100">{doseCalculation.medName}</div>
                    <div className="text-2xl font-black font-mono">
                      الجرعة في المرة الواحدة: {doseCalculation.singleDoseMl} مل (ml)
                    </div>
                    <div className="text-xs font-medium text-emerald-100">{doseCalculation.frequency}</div>
                    <p className="text-[11px] text-emerald-100 border-t border-emerald-400/40 pt-2 mt-2">
                      💡 {doseCalculation.notes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
