export interface DrugItem {
  id: string;
  nameAr: string;
  nameEn: string;
  activeIngredient: string;
  activeIngredientAr: string;
  category: string;
  therapeuticGroup: string;
  dosageForm: string;
  price: number;
  requiresPrescription: boolean;
  indicationsAr: string[];
  dosageAr: string;
  sideEffectsAr: string[];
  contraindicationsAr: string[];
  interactionsAr: string[];
  manufacturer: string;
  edaCode: string;
  alternatives: {
    nameAr: string;
    nameEn: string;
    price: number;
    activeIngredient: string;
    inStock: boolean;
  }[];
}

export const drugDictionaryList: DrugItem[] = [
  {
    id: 'drug-1',
    nameAr: 'بانادول اكسترا 500 مجم / 65 مجم',
    nameEn: 'Panadol Extra 500mg / 65mg',
    activeIngredient: 'Paracetamol + Caffeine',
    activeIngredientAr: 'باراسيتامول + كافيين',
    category: 'مسكنات ومضادات الحرارة',
    therapeuticGroup: 'الجهاز العصبي والمسكنات',
    dosageForm: 'أقراص مغلفة',
    price: 45.00,
    requiresPrescription: false,
    indicationsAr: [
      'تخفيف الآلام المتوسطة والشديدة',
      'علاج صداع الشقيقة والصداع التوتري',
      'تخفيف آلام الأسنان والعضلات والدورة الشهرية',
      'خافض للحرارة في حالات البرد والإنفلونزا'
    ],
    dosageAr: 'قرصين كل 6 إلى 8 ساعات عند الحاجة. الحد الأقصى 8 أقراص يومياً.',
    sideEffectsAr: [
      'أرق خفيف بسبب الكافيين',
      'اضطراب بسيط بالمعدة في حالات النادرة'
    ],
    contraindicationsAr: [
      'الحساسية المفرطة للباراسيتامول أو الكافيين',
      'مرضى الفشل الكبدي الشديد'
    ],
    interactionsAr: [
      'مضادات التجلط مثل الوارفارين عند الاستخدام لفترات طويلة',
      'المنبهات والمشروبات الغنية بالحجم الكبير من الكافيين'
    ],
    manufacturer: 'Haleon / GSK Health',
    edaCode: 'EDA-PAR-2024-8456',
    alternatives: [
      { nameAr: 'سيتال اكسترا أقراص', nameEn: 'Cetal Extra Tablets', price: 21.00, activeIngredient: 'Paracetamol + Caffeine', inStock: true },
      { nameAr: 'أدول اكسترا', nameEn: 'Adol Extra', price: 28.00, activeIngredient: 'Paracetamol + Caffeine', inStock: true },
      { nameAr: 'أبرامول اكسترا', nameEn: 'Abramol Extra', price: 18.50, activeIngredient: 'Paracetamol + Caffeine', inStock: true }
    ]
  },
  {
    id: 'drug-2',
    nameAr: 'أوجمنتين 1 جرام (1000 مجم)',
    nameEn: 'Augmentin 1g Tablets',
    activeIngredient: 'Amoxicillin + Clavulanic Acid',
    activeIngredientAr: 'أموكسيسيللين + حمض الكلافولانيك',
    category: 'مضادات حيوية',
    therapeuticGroup: 'مضادات العدوى البكتيرية',
    dosageForm: 'أقراص مغلفة غشاء',
    price: 135.00,
    requiresPrescription: true,
    indicationsAr: [
      'علاج التهابات الجهاز التنفسي العلوي والسفلي (التهاب اللوزتين، الجيوب الأنفية، الشعب الهوائية)',
      'التهابات الأذن الوسطى الحادة',
      'التهابات المسالك البولية والكلى',
      'التهابات الجلد والأنسجة الرخوة والأسنان'
    ],
    dosageAr: 'قرص واحد كل 12 ساعة بعد الوجبات لمدة 7 إلى 10 أيام حسب الإرشاد الطبي.',
    sideEffectsAr: [
      'إسهال أو اضطرابات بالجهاز الهضمي',
      'غثيان طفيف',
      'طفح جلدي عند الحساسية'
    ],
    contraindicationsAr: [
      'حساسية البنسلين والسبورينات',
      'التاريخ الطبي لليرقان أو اعتلال الكبد بسبب الأوجمنتين'
    ],
    interactionsAr: [
      'حبوب منع الحمل (قد يقلل من كفاءتها)',
      'أنتيثروكسين والبروبينسيد'
    ],
    manufacturer: 'GSK Egypt',
    edaCode: 'EDA-ANT-2024-1102',
    alternatives: [
      { nameAr: 'كلافوكس 1 جرام أقراص', nameEn: 'Clavox 1g', price: 95.00, activeIngredient: 'Amoxicillin + Clavulanic Acid', inStock: true },
      { nameAr: 'إيموكسكلاف 1g', nameEn: 'EmoXclav 1g', price: 88.00, activeIngredient: 'Amoxicillin + Clavulanic Acid', inStock: true },
      { nameAr: 'ميجاموكس 1g', nameEn: 'Megamox 1g', price: 105.00, activeIngredient: 'Amoxicillin + Clavulanic Acid', inStock: true }
    ]
  },
  {
    id: 'drug-3',
    nameAr: 'هيلسيك 20 مجم كبسولات',
    nameEn: 'Helexic / Omeprazole 20mg Capsules',
    activeIngredient: 'Omeprazole',
    activeIngredientAr: 'أوميبرازول',
    category: 'مضادات الحموضة والجهاز الهضمي',
    therapeuticGroup: 'مثبطات مضخة البروتون (PPI)',
    dosageForm: 'كبسولات معوية التأثير',
    price: 52.00,
    requiresPrescription: false,
    indicationsAr: [
      'علاج ارتجاع المريء وحرقة المعدة',
      'علاج قرحة المعدة والإثني عشر',
      'الوقاية من قرحة المعدة الناتجة عن المسكنات',
      'جزء من العلاج الثلاثي لجرثومة المعدة H. pylori'
    ],
    dosageAr: 'كبسولة واحدة يومياً قبل الفطور بـ 30 دقيقة على معدة فارغة.',
    sideEffectsAr: [
      'صداع طفيف',
      'انتفاخ أو إمساك/إسهال مؤقت'
    ],
    contraindicationsAr: [
      'الحساسية لمادة الأوميبرازول أو مثبطات مضخة البروتون'
    ],
    interactionsAr: [
      'مستحضرات الحديد والكيتوكونازول (تقلل امتصاصها)',
      'كلوبيدوجريل (قد يقلل من فعاليته)'
    ],
    manufacturer: 'AstraZeneca / Pharco',
    edaCode: 'EDA-DIG-2023-4512',
    alternatives: [
      { nameAr: 'أوميز 20 مجم كبسول', nameEn: 'Omez 20mg', price: 34.50, activeIngredient: 'Omeprazole', inStock: true },
      { nameAr: 'غازتك 20 مجم', nameEn: 'Gastec 20mg', price: 38.00, activeIngredient: 'Omeprazole', inStock: true },
      { nameAr: 'بيبتيزول 20 مجم', nameEn: 'Peptizole 20mg', price: 42.00, activeIngredient: 'Omeprazole', inStock: true }
    ]
  },
  {
    id: 'drug-4',
    nameAr: 'كونكور 5 مجم أقراص',
    nameEn: 'Concor 5mg Tablets',
    activeIngredient: 'Bisoprolol Fumarate',
    activeIngredientAr: 'بيسوبرولول فومارات',
    category: 'أدوية الضغط والقلب',
    therapeuticGroup: 'مغلقات بيتا1 الانتقائية',
    dosageForm: 'أقراص مغلفة',
    price: 68.00,
    requiresPrescription: true,
    indicationsAr: [
      'علاج ارتفاع ضغط الدم الشرياني',
      'علاج الذبحة الصدرية المستقرة',
      'علاج قصور القلب الاحتقاني المزمن'
    ],
    dosageAr: 'قرص واحد يومياً صباحاً حسب تعليمات طبيب القلب.',
    sideEffectsAr: [
      'بطء ضربات القلب',
      'برودة بالأطراف',
      'شعور بالتعب في بداية العلاج'
    ],
    contraindicationsAr: [
      'الربو الشعبي الحاد أو انسداد الرئة المزمن',
      'بطء القلب الشديد (أقل من 50 نبضة/دقيقة)'
    ],
    interactionsAr: [
      'حاصرات قنوات الكالسيوم مثل فيراباميل وديلتيازم',
      'أدوية تنظيم ضربات القلب'
    ],
    manufacturer: 'Merck / Amoun',
    edaCode: 'EDA-CAR-2024-9912',
    alternatives: [
      { nameAr: 'بيزوكارد 5 مجم', nameEn: 'Bizocard 5mg', price: 38.00, activeIngredient: 'Bisoprolol', inStock: true },
      { nameAr: 'لودوز 2.5/6.25', nameEn: 'Lodoz 2.5mg', price: 46.00, activeIngredient: 'Bisoprolol + HCTZ', inStock: true }
    ]
  },
  {
    id: 'drug-5',
    nameAr: 'كونجستال أقراص البرد والرشح',
    nameEn: 'Congestal Cold & Flu Tablets',
    activeIngredient: 'Paracetamol + Chlorpheniramine + Pseudoephedrine',
    activeIngredientAr: 'باراسيتامول + كلورفينيرامين + سودوإيفيدرين',
    category: 'أدوية البرد والإنفلونزا',
    therapeuticGroup: 'مضادات الاحتقان والحساسية',
    dosageForm: 'أقراص',
    price: 33.00,
    requiresPrescription: false,
    indicationsAr: [
      'تخفيف أعراض البرد والإنفلونزا',
      'انسداد الأنف والرشح وحكة العينين',
      'تخفيف الصداع وآلام الجسم المصاحبة لنزلات البرد'
    ],
    dosageAr: 'قرص واحد 3 مرات يومياً بعد الأكل.',
    sideEffectsAr: [
      'نعاس طفيف',
      'جفاف بالفم'
    ],
    contraindicationsAr: [
      'ارتفاع ضغط الدم غير المنضبط',
      'مرضى المياه الزرقاء (الجلوكوما)'
    ],
    interactionsAr: [
      'مثبطات أكسيداز أحادي الأمين (MAOIs)',
      'المهدئات ومضادات الاكتئاب'
    ],
    manufacturer: 'SIGMA Pharmaceutical',
    edaCode: 'EDA-COL-2023-7721',
    alternatives: [
      { nameAr: '123 أقراص للبرد', nameEn: '1 2 3 Cold Tablets', price: 27.00, activeIngredient: 'Paracetamol + Chlorpheniramine + Pseudoephedrine', inStock: true },
      { nameAr: 'كومبريكس أقراص', nameEn: 'Comprex Tablets', price: 25.00, activeIngredient: 'Paracetamol + Pseudoephedrine', inStock: true }
    ]
  },
  {
    id: 'drug-6',
    nameAr: 'جلوكوفاج 1000 مجم XR',
    nameEn: 'Glucophage 1000mg XR Tablets',
    activeIngredient: 'Metformin Hydrochloride',
    activeIngredientAr: 'سيدوفاج / ميتفورمين',
    category: 'أدوية السكري',
    therapeuticGroup: 'مخفضلات السكر الفموية (Biguanides)',
    dosageForm: 'أقراص ممتدة المفعول',
    price: 75.00,
    requiresPrescription: true,
    indicationsAr: [
      'علاج مرض السكري من النوع الثاني',
      'مقاومة الأنسولين ومتلازمة تكيس المبايض (PCOS)',
      'المساعدة في ضبط الوزن لدى مرضى ما قبل السكري'
    ],
    dosageAr: 'قرص واحد يومياً مع وجبة العشاء.',
    sideEffectsAr: [
      'اضطرابات هضمية طفيفة مثل الغازات والشعور بالشبع',
      'نقص مستويات فيتامين ب12 عند الاستخدام الطويل'
    ],
    contraindicationsAr: [
      'قصور وظائف الكلى الشديد (eGFR < 30)',
      'الحماض اللبني (Lactic Acidosis)'
    ],
    interactionsAr: [
      'الصبغات الوريدية للأشعة التداخلية (توجب التوقف قبلها بـ 48 ساعة)',
      'الكحوليات والعديد من مدرات البول'
    ],
    manufacturer: 'Merck Healthcare',
    edaCode: 'EDA-DIA-2024-5001',
    alternatives: [
      { nameAr: 'سيدوفاج 1000 مجم ريتارد', nameEn: 'Cidophage 1000mg Retard', price: 38.00, activeIngredient: 'Metformin', inStock: true },
      { nameAr: 'أموفاج 1000 مجم', nameEn: 'Amovage 1000mg', price: 42.00, activeIngredient: 'Metformin', inStock: true }
    ]
  }
];
