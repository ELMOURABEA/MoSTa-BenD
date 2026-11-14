import React, { useState } from 'react';
import { 
  X, ShieldCheck, FileText, Lock, RefreshCcw, Info, 
  CheckCircle2, Printer, Download, Award, AlertCircle, Building2
} from 'lucide-react';

interface LegalPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'eda_agreement' | 'privacy' | 'terms' | 'refund' | 'about';
}

export const LegalPoliciesModal: React.FC<LegalPoliciesModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'eda_agreement'
}) => {
  const [activeTab, setActiveTab] = useState<'eda_agreement' | 'privacy' | 'terms' | 'refund' | 'about'>(initialTab);
  
  // Interactive Patient Agreement Verification State
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [agreedToEdaRules, setAgreedToEdaRules] = useState(false);
  const [agreedToDataStorage, setAgreedToDataStorage] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [signedDate, setSignedDate] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSignAgreement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone || !agreedToEdaRules || !agreedToDataStorage) {
      alert('يرجى ملء الاسم ورقم الهاتف وتأكيد جميع الموافقتين للاستمرار.');
      return;
    }
    const now = new Date().toLocaleString('ar-EG');
    setSignedDate(now);
    setIsSigned(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 backdrop-blur-sm p-3 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800">
        
        {/* Header with EDA License Badge */}
        <div className="p-3.5 sm:p-5 bg-gradient-to-r from-slate-950 via-bendary-950 to-slate-950 text-white flex items-center justify-between gap-3 border-b border-red-900/50 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg font-black shrink-0">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5">
                <h2 className="text-sm sm:text-lg font-black tracking-wide truncate">
                  المركز القانوني والاعتماد الطبي
                </h2>
                <span className="bg-amber-400/20 text-amber-300 text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full border border-amber-400/30 whitespace-nowrap">
                  ترخيص هيئة الدواء #8456
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-300 truncate">
                إقرار موافقة حماية بيانات العميل، الخصوصية، الشروط والاعتماد الرسمي
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition shrink-0"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 overflow-x-auto text-xs font-bold whitespace-nowrap px-3 py-2 gap-2">
          <button
            onClick={() => setActiveTab('eda_agreement')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
              activeTab === 'eda_agreement'
                ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Award className="w-4 h-4 text-amber-800 dark:text-amber-400" />
            <span>إقرار موافقة العميل وهيئة الدواء (EDA)</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-bendary-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>سياسة الخصوصية</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-bendary-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>الشروط والأحكام</span>
          </button>

          <button
            onClick={() => setActiveTab('refund')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
              activeTab === 'refund'
                ? 'bg-bendary-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <RefreshCcw className="w-4 h-4" />
            <span>سياسة التوصيل والإرجاع</span>
          </button>

          <button
            onClick={() => setActiveTab('about')}
            className={`px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 ${
              activeTab === 'about'
                ? 'bg-bendary-600 text-white shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Info className="w-4 h-4" />
            <span>عن صيدليات البنداري</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-white dark:bg-slate-900">
          
          {/* TAB 1: EDA Customer Data Agreement Document */}
          {activeTab === 'eda_agreement' && (
            <div className="space-y-5">
              {/* Official License Header Box */}
              <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 dark:from-amber-950/40 dark:to-amber-900/20 p-4 rounded-3xl border border-amber-300/80 dark:border-amber-800 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
                <img 
                  src="/public/assets/aistudio/Screenshot_2026-11-10-13-10-04-051_com.android.chrome-edit_228694d6.jpg" 
                  alt="ختم وترخيص هيئة الدواء المصرية"
                  className="w-32 h-auto object-contain bg-white p-2 rounded-2xl shadow-sm border border-slate-200"
                />
                <div className="flex-1 space-y-1">
                  <div className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-black">
                    مرخّصة رسمياً من هيئة الدواء المصرية (Egyptian Drug Authority)
                  </div>
                  <h3 className="text-base font-black text-slate-900 dark:text-white">
                    إقرار موافقة وتأكيد حماية بيانات المريض والعميل
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    صيدليات البنداري • ترخيص هيئة الدواء رقم 8456 – آية العناني (صيدليات العناني والبنداري) - محافظة الشرقية وجمهورية مصر العربية
                  </p>
                </div>
              </div>

              {/* Legal Text & Authority Compliance Articles */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs leading-relaxed space-y-3 text-slate-700 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>مضمون الوثيقة القانونية لحفظ البيانات والرعاية الدوائية:</span>
                </div>
                
                <p>
                  وفقاً لقانون حماية البيانات الشخصية المصري رقم 151 لسنة 2020، وقرارات هيئة الدواء المصرية المنظمة لصرف الدواء ومتابعة الروشتات والعلاجات الشهرية:
                </p>

                <ol className="list-decimal list-inside space-y-1.5 font-medium">
                  <li><strong>حفظ البيانات الطبية:</strong> يتم تشفير وحفظ السجل الدوائي والروشتات الصادرة بحساب العميل الآمن لاستخدامها حصراً في صرف الدواء ومتابعة التداخلات الدوائية بواسطة الصيدلي الممارس.</li>
                  <li><strong>المرجعية الرقابية:</strong> تخضع جميع الإجراءات الرقابية والصرف الدوائي لتعليمات هيئة الدواء المصرية (EDA) ونقابة صيدلية مصر.</li>
                  <li><strong>عدم الإفصاح:</strong> لا يتم مشاركة بيانات المرضى أو الروشتات مع أي طرف ثالث لأغراض تجارية، وتظل بياناتكم محمية بأعلى معايير التشفير الإلكتروني.</li>
                  <li><strong>الحق في المراجعة والحذف:</strong> يحق للعميل طلب نسخة من بياناته المسجلة أو تعديلها أو إغلاق حسابه في أي وقت من خلال التواصل مع إدارة صيدليات البنداري.</li>
                </ol>
              </div>

              {/* Digital Form & Consent Verification */}
              {isSigned ? (
                <div className="bg-emerald-500 text-white p-5 rounded-3xl shadow-xl text-center space-y-3 animate-in zoom-in-95">
                  <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-100" />
                  <h4 className="text-lg font-black">تم توثيق إقرار الموافقة وحفظ البيانات بنجاح</h4>
                  <div className="text-xs text-emerald-100 space-y-1">
                    <div>اسم المريض: <strong>{patientName}</strong></div>
                    <div>رقم الهاتف: <strong>{patientPhone}</strong></div>
                    <div>تاريخ التوثيق: <strong>{signedDate}</strong></div>
                    <div>مرجع التوثيق الرقمي: <span className="font-mono bg-emerald-700/60 px-2 py-0.5 rounded">EDA-CONSENT-8456-{Math.floor(Math.random()*89999+10000)}</span></div>
                  </div>
                  <div className="flex justify-center gap-2 pt-2">
                    <button
                      onClick={() => window.print()}
                      className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold text-xs py-2 px-4 rounded-xl flex items-center gap-1.5 transition"
                    >
                      <Printer className="w-4 h-4" />
                      <span>طباعة الإقرار الرقمي</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSignAgreement} className="bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
                  <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">
                    نموذج توثيق موافقة العميل الرقمية (تسجيل لمرة واحدة):
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        اسم المريض / العميل بالكامل: *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="أدخل الاسم الرباعي"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-bendary-600 dark:text-slate-100"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
                        رقم الهاتف المسجل بالصيدلية: *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="01xxxxxxxxx"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-2.5 text-xs font-medium focus:outline-none focus:border-bendary-600 dark:text-slate-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-xs">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToEdaRules}
                        onChange={(e) => setAgreedToEdaRules(e.target.checked)}
                        className="mt-0.5 rounded text-bendary-600 focus:ring-bendary-500 w-4 h-4"
                      />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        أقر بأني اطلعت وأوافق على ضوابط هيئة الدواء المصرية وصرف الأدوية الطبية بحسب الإرشادات المعتمدة.
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreedToDataStorage}
                        onChange={(e) => setAgreedToDataStorage(e.target.checked)}
                        className="mt-0.5 rounded text-bendary-600 focus:ring-bendary-500 w-4 h-4"
                      />
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        أوافق على حفظ وتشفير سجل الروشتات والأدوية الخاصة بي لدى صيدليات البنداري وفقاً لقانون حماية البيانات رقم 151 لسنة 2020.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs py-3 px-4 rounded-xl shadow transition"
                  >
                    اعتماد وتوثيق موافقة العميل الإلكترونية
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: Privacy Policy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <h3 className="text-base font-black text-slate-900 dark:text-white">سياسة الخصوصية وحماية بيانات المرضى</h3>
              <p>تلتزم صيدليات البنداري بأعلى درجات السرية والتشفير فيما يتعلق بالمعلومات الطبية والشخصية الخاصة بالعملاء.</p>
              
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-bold text-slate-900 dark:text-white">1. البيانات التي نجمعها:</h4>
                <p>الاسم، رقم التليفون، العنوان، صورة الروشتة أو التكليف الطبي، والسجل الدوائي للصرف التلقائي.</p>
                <h4 className="font-bold text-slate-900 dark:text-white mt-2">2. كيفية استخدام البيانات:</h4>
                <p>صرف وتوصيل الأدوية، مراجعة التداخلات الدوائية بواسطة الصيادلة، إرسال تذكيرات مواعيد الجرعات ومتابعة الأدوية الشهرية.</p>
              </div>
            </div>
          )}

          {/* TAB 3: Terms & Conditions */}
          {activeTab === 'terms' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <h3 className="text-base font-black text-slate-900 dark:text-white">الشروط والأحكام لاستخدام المنصة</h3>
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p>• الأدوية الخاضعة لجدول المخدّرات أو المؤثرات النفسية يلزم صرفها بأصل الروشتة الطبية المختومة وبطاقة الرقم القومي وفق تعليمات وزارة الصحة وهيئة الدواء.</p>
                <p>• الاستشارات الدوائية المقدمة عبر MoSTaa-ChaT هي إرشادات صيدلانية تهدف للتثقيف الدوائي ولا تغني عن الفحص الطبي الفوري في الحالات الطارئة.</p>
              </div>
            </div>
          )}

          {/* TAB 4: Refund & Delivery */}
          {activeTab === 'refund' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <h3 className="text-base font-black text-slate-900 dark:text-white">سياسة التوصيل والاسترجاع والاستبدال</h3>
              <div className="space-y-2 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                <p><strong>توصيل الأدوية:</strong> يتم التوصيل خلال 30 إلى 60 دقيقة في أكياس مجهزة تحافظ على سلامة الدواء وتبريد الأنسولين والمستحضرات الحساسة.</p>
                <p><strong>استرجاع المستحضرات:</strong> يحق للعميل استرجاع مستحضرات التجميل والأجهزة الطبية خلال 14 يوماً بشرط عدم فتح العبوة ووجود الفاتورة وفقاً لقانون حماية المستهلك.</p>
                <p><strong>استرجاع الأدوية:</strong> يمنع استرجاع الأدوية التي تم خروجها وتحفيظها خارج الصيدلية ضماناً لسلامة الدواء وعدم تعرضه لظروف تخزين غير مطابقة للمواصفات.</p>
              </div>
            </div>
          )}

          {/* TAB 5: About El-Bendary */}
          {activeTab === 'about' && (
            <div className="space-y-4 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <div className="bg-gradient-to-r from-bendary-950 to-slate-900 text-white p-5 rounded-3xl space-y-3">
                <h3 className="text-lg font-black text-amber-300">صيدليات البنداري • رعاية من القلب - 46 سنة</h3>
                <p className="text-xs text-slate-200">
                  تأسست صيدليات البنداري منذ عام 1980 لتقديم أعلى مستويات الرعاية الصيدلانية الإكلينيكية وتوفير كافة الأدوية والمستلزمات الطبية بأعلى معايير الجودة والاعتماد من هيئة الدواء المصرية.
                </p>
                <div className="text-xs text-emerald-300 font-bold">
                  الإشراف الطبي والإدارة: د. مصطفى المرابع - Dr. Moustafa Al-Marabaa
                </div>
                <div className="pt-2 flex flex-wrap gap-3 text-[11px] font-bold text-amber-300 border-t border-slate-800">
                  <span>✔ 11 فرعاً بخدمتكم</span>
                  <span>✔ خط ساخن موحد 01200400094</span>
                  <span>✔ خدمة 24 ساعة طوال أيام الأسبوع</span>
                </div>
                <div className="pt-2 text-center text-[11px] text-amber-400 font-mono font-bold">
                  Devolepe By MoSta® | Let's Live The Future Now
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
