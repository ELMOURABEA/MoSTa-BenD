export interface DiseaseTopic {
  id: string;
  nameAr: string;
  nameEn: string;
  category: string;
  iconEmoji: string;
  symptomsAr: string[];
  causesAr: string;
  treatmentGuidelinesAr: string[];
  recommendedLifestyleAr: string[];
  recommendedMedCategories: string[];
  whenToSeeDoctorAr: string;
}

export interface BodyOrgan {
  id: string;
  nameAr: string;
  nameEn: string;
  systemAr: string;
  functionsAr: string[];
  commonDiseasesAr: string[];
  keyLabTestsAr: string[];
  healthyTipsAr: string[];
}

export interface LabTestItem {
  id: string;
  nameAr: string;
  nameEn: string;
  category: string;
  normalRangeAr: string;
  unit: string;
  descriptionAr: string;
  highMeaningAr: string;
  lowMeaningAr: string;
  preparationAr: string;
}

export const diseasesList: DiseaseTopic[] = [
  {
    id: 'dis-1',
    nameAr: 'ارتجاع المريء وحموضة المعدة (GERD)',
    nameEn: 'Gastroesophageal Reflux Disease',
    category: 'الجهاز الهضمي',
    iconEmoji: '🔥',
    symptomsAr: [
      'حرقان في الصدر (الحموضة) يزداد بعد الوجبات',
      'طعمة حمضية أو مرّة في الفم',
      'صعوبة أو ألم عند التلذذ بالأكل',
      'سعال جاف مستمر أو بحة في الصوت'
    ],
    causesAr: 'ارتخاء العضلة العاصرة المريئية السفلى مما يسمح لحمض المعدة بالصعود نحو المريء، مدعوماً بالسمنة، التدخين، الوجبات الدسمة والنوم مباشرة بعد الأكل.',
    treatmentGuidelinesAr: [
      'استخدام مضادات الحموضة السريعة المفعول (مثل جافيسكون أو الموكسال) للتسكين الفوري.',
      'تناول مثبطات مضخة البروتون (مثل أوميبرازول أو بنتوپرازول) يومياً قبل الفطور بـ 30 دقيقة.',
      'تناول منظمات حركة المعدة في حال البطء.'
    ],
    recommendedLifestyleAr: [
      'تقسيم الوجبات إلى 5 وجبات صغيرة بدلاً من الوجبات الكبيرة.',
      'تجنب الأطعمة الحارة، المقليات، الكافيين، الشوكولاتة، والنعناع.',
      'عدم النوم أو الاستلقاء إلا بعد مرور 3 ساعات على الأقل من تناول الطعام.',
      'رفع رأس السرير بمقدار 15 سم أثناء النوم.'
    ],
    recommendedMedCategories: ['مضادات الحموضة', 'مثبطات PPI', 'الأدوية والوصفات الطبية'],
    whenToSeeDoctorAr: 'استمرار الأعراض لأكثر من أسبوعين رغم العلاج، أو ظهور صعوبة بالغة في البلع، أو فقدان وزن غير مفسر، أو خروج قيء أسود/مدمم.'
  },
  {
    id: 'dis-2',
    nameAr: 'مرض السكري من النوع الثاني',
    nameEn: 'Type 2 Diabetes Mellitus',
    category: 'الغدد الصماء والغذاء',
    iconEmoji: '🩸',
    symptomsAr: [
      'العطش الشديد وجفاف الفم المستمر',
      'التبول المتكرر خاصة أثناء الليل',
      'الشعور بالخمول والتعب العام',
      'بطء التئام الجروح وتغيم الرؤية'
    ],
    causesAr: 'مقاومة خلايا الجسم لأنسولين البنكرياس بالإضافة إلى نقص إفراز الأنسولين النسبي، يرتبط بالعوامل الوراثية والنظام الغذائي وزيادة الوزن.',
    treatmentGuidelinesAr: [
      'الميتفورمين (سيدوفاج / جلوكوفاج) كعلاج خط أول لتحسين حساسية الأنسولين.',
      'إضافة محفزات إفراز الأنسولين أو مثبطات SGLT2 حسب تقييم طبيب الغدد.',
      'المتابعة الدورية بمقياس السكر المنزلي والفحص التراكمي HbA1c كل 3 أشهر.'
    ],
    recommendedLifestyleAr: [
      'تقليل السكريات والنشويات البسيطة والاعتماد على الألياف والحبوب الكاملة.',
      'ممارسة الرياضة مثل المشي السريع لمدة 30 دقيقة يومياً.',
      'فحص القدمين يومياً وتجنب المشي حافياً.'
    ],
    recommendedMedCategories: ['أدوية السكري', 'أجهزة قياس السكر', 'الفيتامينات والمكملات'],
    whenToSeeDoctorAr: 'ارتفاع السكر فوق 300 مجم/دسل مع وجود كيتونات في البول، أو هبوط السكر المفاجئ تحت 70 مجم/دسل مع دوخة وزغللة.'
  },
  {
    id: 'dis-3',
    nameAr: 'ارتفاع ضغط الدم الشرياني',
    nameEn: 'Hypertension',
    category: 'القلب والأوعية الدموية',
    iconEmoji: '❤️',
    symptomsAr: [
      'غالباً لا توجد أعراض (القاتل الصامت)',
      'صداع مؤخرة الرأس عند الاستيقاظ',
      'دوخة وطنين بالأذن',
      'نزيف أنفي نادر أو تسارع ضربات القلب'
    ],
    causesAr: 'تصلب الأوعية الدموية وزيادة مقاومتها للدم، مع عوامل الجينات، تناول الملح العالي، التوتر المزمن، وقلة النشاط البدني.',
    treatmentGuidelinesAr: [
      'مغلقات بيتا (مثل كونكور)، أو مثبطات ACE (مثل كابتوبريل)، أو حاصرات قنوات الكالسيوم (مثل أملوديبين).',
      'الالتزام الصارم بمواعيد الدواء اليومية دون انقطاع.'
    ],
    recommendedLifestyleAr: [
      'تقليل الصوديوم (ملح الطعام) إلى أقل من 2 جرام يومياً (أقل من ملعقة صغيرة).',
      'اتباع نظام DASH الغذائي الغني بالخضراوات والفواكه والبوتاسيوم.',
      'الإقلاع النهائي عن التدخين والسيطرة على التوتر.'
    ],
    recommendedMedCategories: ['أدوية الضغط والقلب', 'أجهزة قياس ضغط الدم'],
    whenToSeeDoctorAr: 'قراءة الضغط فوق 180/120 مم زئبق مع ألم بالصدر أو ضيق تنفس أو تشوش بالرؤية (أزمة ضغط طارئة).'
  },
  {
    id: 'dis-4',
    nameAr: 'القولون العصبي (IBS)',
    nameEn: 'Irritable Bowel Syndrome',
    category: 'الجهاز الهضمي',
    iconEmoji: '🌀',
    symptomsAr: [
      'تقلصات وألم بالبطن يزول بعد الإخراج',
      'انتفاخ وشعور بالامتلاء وغازات كثيرة',
      'تناوب بين الإمساك والإسهال',
      'مخاط مع البراز دون وجود دم'
    ],
    causesAr: 'اضطراب في حركة الأمعاء والتواصل بين الدماغ والجهاز الهضمي، يتأثر بشدة بالضغط النفسي والأطعمة المهيجة.',
    treatmentGuidelinesAr: [
      'مضادات التشنج والتقلصات (مثل مبيفيرين / دوكسين / سباسمومين).',
      'مطهرات ومعالجات القولون ومكملات الألياف في حالات الإمساك.',
      'البروبيوتيك (البكتيريا النافعة) لإعادة توازن الميكروبيوم.'
    ],
    recommendedLifestyleAr: [
      'تجنب الأطعمة المسببة للغازات (البقوليات، الكرنب، البصل، المشروبات الغازية).',
      'شرب كميات وافرة من الماء (2.5 لتر يومياً).',
      'ممارسة تمارين الاسترخاء والرياضة.'
    ],
    recommendedMedCategories: ['مطهرات ومطردات الغازات', 'مكملات البروبيوتيك'],
    whenToSeeDoctorAr: 'ظهور دم بالبراز، أو نزول الوزن غير المبرر، أو آلام توقظ المريض من النوم.'
  }
];

export const bodyOrgansList: BodyOrgan[] = [
  {
    id: 'organ-1',
    nameAr: 'الكبد (Liver)',
    nameEn: 'Liver',
    systemAr: 'الجهاز الهضمي والأيض',
    functionsAr: [
      'تصفية السموم وتنقية الدم من الفضلات والأدوية',
      'إنتاج العصارة الصفراوية لهضم الدهون',
      'تخزين الجلوكوز على شكل جلايكوجين',
      'تصنيع بروتينات التجلط وألبومين الدم'
    ],
    commonDiseasesAr: ['الكبد الدهني', 'التهاب الكبد الفيروسي (B & C)', 'تليف الكبد', 'ارتفاع إنزيمات الكبد'],
    keyLabTestsAr: ['SGOT / AST', 'SGPT / ALT', 'Total & Direct Bilirubin (الصفراء)', 'Serum Albumin'],
    healthyTipsAr: ['الابتعاد عن الدهون المشبعة', 'تجنب الإفراط في المسكنات دون استشارة', 'تناول أطعمة غنية بمضادات الأكسدة']
  },
  {
    id: 'organ-2',
    nameAr: 'الكلى (Kidneys)',
    nameEn: 'Kidneys',
    systemAr: 'الجهاز البولي والتوازن',
    functionsAr: [
      'تصفية الدم وإنتاج البول للتخلص من اليوريا والكرياتينين',
      'تنظيم ميزان الملح والماء وضغط الدم',
      'إفراز هرمون الإريثروبويتين المحفز لإنتاج خلايا الدم الحمراء',
      'تنشيط فيتامين د لصحة العظام'
    ],
    commonDiseasesAr: ['حصوات الكلى والمسالك', 'التهاب حوض الكلى', 'قصور وظائف الكلى المزمن', 'ارتفاع اليوريك أسيد (النقرس)'],
    keyLabTestsAr: ['Serum Creatinine', 'Blood Urea Nitrogen (BUN)', 'eGFR', 'Urinalysis (تحليل البول الشامل)'],
    healthyTipsAr: ['شرب 3 لتر ماء يومياً', 'عدم الإفراط في مسكنات NSAIDs (مثل الفولتارين والبروفين)', 'ضبط الضغط والسكر']
  },
  {
    id: 'organ-3',
    nameAr: 'القلب (Heart)',
    nameEn: 'Heart',
    systemAr: 'الجهاز الدوري والوعائي',
    functionsAr: [
      'ضخ الدم المؤكسج إلى جميع أنحاء الجسم',
      'استقبال الدم غير المؤكسج وتوجيهه للرئتين',
      'الحفاظ على التروية الدموية للأعضاء الحيوية'
    ],
    commonDiseasesAr: ['ارتفاع ضغط الدم', 'قصور الشرايين التاجية', 'ضعف عضلة القلب', 'اضطراب نبضات القلب'],
    keyLabTestsAr: ['Lipid Profile (الكوليسترول والدهون الثلاثية)', 'Troponin I / T', 'CK-MB', 'ECG (رسم القلب)'],
    healthyTipsAr: ['المشي 150 دقيقة أسبوعياً', 'الامتناع التام عن التدخين', 'تناول أوميجا 3 والألياف']
  }
];

export const labTestsList: LabTestItem[] = [
  {
    id: 'lab-1',
    nameAr: 'تحليل السكر التراكمي (HbA1c)',
    nameEn: 'Glycated Hemoglobin Test',
    category: 'تحاليل السكري والتمثيل الغذائي',
    normalRangeAr: 'أقل من 5.7% (طبيعي) | 5.7% - 6.4% (مرحلة ما قبل السكري) | 6.5% فأكثر (مريض سكري)',
    unit: '%',
    descriptionAr: 'يقيس متوسط نسبة الجلوكوز المرتبط بهيموجلوبين الدم خلال الأشهر الثلاثة الماضية.',
    highMeaningAr: 'يشير إلى عدم انتظام مستويات السكر بالدم وزيادة خطر مضاعفات السكري.',
    lowMeaningAr: 'نادر جداً، قد يحدث في حالات أنيميا تكسر الدم الشديدة أو الهبوط الحاد متكرر النزيف.',
    preparationAr: 'لا يتطلب الصيام، يمكن إجراؤه في أي وقت من اليوم.'
  },
  {
    id: 'lab-2',
    nameAr: 'تحليل وظائف الكلى - الكرياتينين (Serum Creatinine)',
    nameEn: 'Serum Creatinine Test',
    category: 'تحاليل الكلى والمسالك',
    normalRangeAr: '0.6 - 1.2 مجم/دسل (للبالغين)',
    unit: 'mg/dL',
    descriptionAr: 'يقيس ناتج تكسر كيراتين العضلات والذي تقوم الكلى السليمة بتصفيته وطرحه بالبول.',
    highMeaningAr: 'قد يشير إلى تراجع كفاءة الكلى، الجفاف الحاد، أو انسداد المسالك البولية.',
    lowMeaningAr: 'قد يظهر في حالات ضمور العضلات أو سوء التغذية الشديد.',
    preparationAr: 'شرب كمية طبيعية من الماء وتجنب التمارين العنيفة قبل الفحص بـ 24 ساعة.'
  },
  {
    id: 'lab-3',
    nameAr: 'صورة الدم الكاملة (CBC)',
    nameEn: 'Complete Blood Count',
    category: 'تحاليل الدم العامة',
    normalRangeAr: 'الهيموجلوبين: 13.5-17.5 (رجال) | 12.0-15.5 (نساء) - الصفائح: 150K-450K',
    unit: 'g/dL & K/mcL',
    descriptionAr: 'فحص شامل لخلايا الدم الحمراء والبيضاء والصفائح الدموية للكشف عن الأنيميا والعدوى.',
    highMeaningAr: 'ارتفاع الكريات البيضاء يشير لعدوى بكتيرية أو التهاب حاد، وارتفاع الحمراء قد يشير للجفاف أو التدخين.',
    lowMeaningAr: 'نقص الهيموجلوبين يشير للأنيميا، ونقص الصفائح يزيد خطر النزيف.',
    preparationAr: 'لا يتطلب صيام معقد إلا إذا كان مقتطناً مع سكر صائم.'
  }
];

/**
 * Child Antipyretic Dosage Calculator
 * Dose for Paracetamol Syrup (120mg/5ml or 250mg/5ml):
 * Paracetamol dose = 15 mg/kg per dose.
 * Ibuprofen dose = 10 mg/kg per dose.
 */
export function calculateChildDose(weightKg: number, medicationType: 'paracetamol_120' | 'paracetamol_250' | 'ibuprofen_100') {
  if (weightKg <= 0) return null;

  if (medicationType === 'paracetamol_120') {
    // 15 mg / kg -> 120mg in 5ml => (weight * 15) / 24 ml
    const ml = (weightKg * 15) / 24;
    return {
      medName: 'سيتال / بارامول شرب (120 مجم / 5 مل)',
      singleDoseMl: ml.toFixed(1),
      frequency: 'كل 4 إلى 6 ساعات عند اللزوم (الحد الأقصى 4 مرات يومياً)',
      notes: 'آمن للرضع والأطفال من عمر شهرين. يعطى باستخدام سرنجة مدرجة بدقة.'
    };
  } else if (medicationType === 'paracetamol_250') {
    // 15 mg / kg -> 250mg in 5ml => (weight * 15) / 50 ml
    const ml = (weightKg * 15) / 50;
    return {
      medName: 'سيتال اكسترا / أدول شرب (250 مجم / 5 مل)',
      singleDoseMl: ml.toFixed(1),
      frequency: 'كل 6 ساعات عند اللزوم',
      notes: 'مخصص للأطفال فوق عمر سنتين أو الأوزان التي تتجاوز 12 كجم.'
    };
  } else {
    // Ibuprofen 10mg/kg -> 100mg in 5ml => (weight * 10) / 20 ml
    const ml = (weightKg * 10) / 20;
    return {
      medName: 'بروفين / سيتال جونيور شرب (100 مجم / 5 مل)',
      singleDoseMl: ml.toFixed(1),
      frequency: 'كل 6 إلى 8 ساعات بعد الأكل (الحد الأقصى 3 مرات يومياً)',
      notes: 'ممنوع للأطفال أقل من 6 أشهر أو عند وجود جفاف شديد أو مشاكل بالكلية.'
    };
  }
}
