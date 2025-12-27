import Image from "next/image";

const stats = [
  { value: "۱۳۷۲ تا کنون", label: "سال‌های فعالیت (طبق ویکی‌پدیا)" },
  { value: "دهه ۱۹۹۰", label: "تأسیس مرکز بین‌المللی علوم اعصاب (INI)" },
  { value: "۲۰٬۰۰۰+", label: "عمل جراحی انجام‌شده (طبق ویکی‌پدیا)" },
  { value: "۴۰۰ مقاله / ۱۵ کتاب", label: "انتشارات علمی تا ۲۰۰۴ (به نقل از دی‌ولت)" }
];

const highlights = [
  {
    title: "ریاست بیمارستان خصوصی علوم عصبی هانوفر",
    text: "طبق ویکی‌پدیا، بنیان‌گذار این بیمارستان خصوصی در آلمان و رئیس آن است."
  },
  {
    title: "تأسیس مرکز بین‌المللی علوم اعصاب (INI)",
    text: "مرکز خصوصی بین‌المللی علوم اعصاب را در دهه ۱۹۹۰ در هانوفر تأسیس کرد."
  },
  {
    title: "اقامت در آلمان و سفر به ایران",
    text: "بر اساس ویکی‌پدیا، در آلمان اقامت دارد و به‌طور مکرر به ایران سفر می‌کند."
  }
];

const specialties = [
  {
    title: "جراحی قاعده جمجمه",
    text: "از عوامل اصلی توسعه جراحی قاعده جمجمه در اوایل دهه ۱۹۷۰."
  },
  {
    title: "جراحی میکروسکوپی داخل جمجمه",
    text: "از جراحان پیشرو در میکروسرجری داخل‌جمجمه‌ای."
  },
  {
    title: "جراحی ساقه مغز و بطن سوم",
    text: "موضوع کتاب تخصصی درباره جراحی ساقه مغز و بطن سوم."
  },
  {
    title: "ضایعات اعصاب محیطی",
    text: "بر اساس کتاب «Peripheral Nerve Lesions»."
  },
  {
    title: "ناحیه سلا و سینوس‌های پارانازال",
    text: "موضوع کتاب «Surgery of the Sellar Region and Paranasal Sinuses»."
  },
  {
    title: "مننژیوم‌ها و تومورهای پینه‌آل",
    text: "تمرکز کتاب‌های تخصصی درباره مننژیوم‌های قاعده جمجمه و تومورهای ناحیه پینه‌آل."
  }
];

const services = [
  {
    title: "توسعه روش تصویربرداری جراحی",
    text: "توسعه یک روش اشعه رونتگن برای ایجاد کنتراست مغز پیش از رواج CT و MRI."
  },
  {
    title: "پیشگامی در جراحی قاعده جمجمه",
    text: "روش‌های او در اوایل دهه ۱۹۷۰ از عوامل اصلی توسعه این حوزه بود."
  },
  {
    title: "جراحی میکروسکوپی عصب و رگ",
    text: "از سال ۱۹۶۷ با میکروسرجری امکان جراحی دقیق‌تر اعصاب و رگ‌ها را فراهم کرد."
  },
  {
    title: "پژوهش بیونیک مغزی در INI",
    text: "تمرکز بر ارتباط ایمپلنت‌های فنی و مغز؛ در ۲۰۰۴ گزارش شد ۲۲ بیمار شنوایی خود را باز یافتند."
  }
];

const journey = [
  {
    title: "۲۹ خرداد ۱۳۱۶",
    text: "زادروز در تهران؛ خانواده با ریشه در رشت (خاندان سمیعی)."
  },
  {
    title: "تحصیل در رشت",
    text: "پایان تحصیلات متوسطه در دبیرستان شهید بهشتی (شاهپور) رشت."
  },
  {
    title: "دانشگاه یوهانس گوتنبرگ",
    text: "تحصیلات دانشگاهی در دانشگاه یوهانس گوتنبرگ."
  },
  {
    title: "۱۹۶۷",
    text: "آغاز و توسعه جراحی میکروسکوپی عصب‌ها و رگ‌ها."
  },
  {
    title: "دهه ۱۹۹۰",
    text: "تأسیس مرکز بین‌المللی علوم اعصاب (INI) در هانوفر."
  },
  {
    title: "۲۰۱۰",
    text: "ایجاد مدال افتخار سمیعی توسط فدراسیون جهانی جوامع جراحی مغز."
  }
];

const awards = [
  "نشان افتخار شایستگی جمهوری فدرال آلمان (درجه ۱)، ۱۳۶۷",
  "جایزه علمی ایالت نیدرزاکسن آلمان، ۱۳۶۷",
  "برگزیده چهره‌های ماندگار در علوم پزشکی، ۱۳۸۵",
  "دکترای افتخاری و استاد افتخاری دانشگاه تهران، ۱۳۹۰",
  "جایزه برترین جراح مغز سال از WFNS، ۲۰۱۳",
  "جشنواره خوارزمی (رتبه نخست پژوهش بنیادی)، ۲۰۱۴",
  "مدال طلای نیکولای پیروگوف، ۲۰۱۸"
];

const testimonials = [
  {
    name: "فدراسیون جهانی جوامع جراحی مغز (WFNS)",
    detail: "ژورنال World Neurosurgery، ۲۰۱۳",
    quote:
      "«هیچ‌کس در جراحی مغز امروز با مهارت و قوه سنجش، ممتازی در تدریس، دستاوردهای مدیریتی و درک جهانی مجید سمیعی برابری نمی‌کند.»"
  },
  {
    name: "دی‌ولت (Die Welt)",
    detail: "۲۰۰۴",
    quote: "دی‌ولت در سال ۲۰۰۴ سمیعی را در رشته خود «شماره یک» خواند."
  },
  {
    name: "WFNS",
    detail: "۲۰۱۰",
    quote:
      "فدراسیون جهانی جوامع جراحی مغز در سال ۲۰۱۰ «مدال افتخار سمیعی» را به نام او ایجاد کرد."
  }
];

const faqs = [
  {
    question: "مجید سمیعی در کجا متولد شد؟",
    answer:
      "بر اساس ویکی‌پدیا، او در تهران زاده شد و خانواده‌اش ریشه در رشت (خاندان سمیعی) دارد."
  },
  {
    question: "تحصیلات دانشگاهی او در کدام دانشگاه بوده است؟",
    answer: "دانشگاه یوهانس گوتنبرگ به عنوان دانشگاه محل تحصیل او ذکر شده است."
  },
  {
    question: "INI چیست و چه زمانی تأسیس شد؟",
    answer:
      "INI مرکز خصوصی بین‌المللی علوم اعصاب در هانوفر است که در دهه ۱۹۹۰ تأسیس شد و ریاست آن با مجید سمیعی و پسرش امیر سمیعی است."
  },
  {
    question: "مدال افتخار سمیعی چیست؟",
    answer:
      "فدراسیون جهانی جوامع جراحی مغز در سال ۲۰۱۰ این مدال را به نام او ایجاد کرد و هر دو سال یک‌بار به جراح ممتاز اعطا می‌شود."
  }
];

const media = [
  "Surgery in and around the Brain Stem and the Third Ventricle (1986)",
  "Peripheral Nerve Lesions (1990)",
  "Surgery of the Sellar Region and Paranasal Sinuses (1991)",
  "Approaches to the Clivus (1992)",
  "Skull Base Surgery (1994)",
  "Surgery of Skull Base Meningiomas (1992)"
];

const careerHighlights = [
  {
    name: "پزشک و جراح مغز و اعصاب ایرانی-آلمانی",
    role: "هویت و تخصص",
    summary: "طبق ویکی‌پدیا، مجید سمیعی پزشک و جراح مغز و اعصاب ایرانی-آلمانی است.",
    tags: ["ایرانی-آلمانی", "جراحی مغز و اعصاب"]
  },
  {
    name: "ریاست بیمارستان خصوصی علوم عصبی هانوفر",
    role: "نقش مدیریتی",
    summary: "ریاست بیمارستان خصوصی علوم عصبی هانوفر را بر عهده دارد که خود بنیان‌گذار آن است.",
    tags: ["هانوفر", "بیمارستان خصوصی"]
  },
  {
    name: "بنیان‌گذار INI",
    role: "بین‌المللی",
    summary: "مرکز خصوصی بین‌المللی علوم اعصاب (INI) را در دهه ۱۹۹۰ در هانوفر تأسیس کرد.",
    tags: ["INI", "دهه ۱۹۹۰", "علوم اعصاب"]
  },
  {
    name: "تحصیلات دانشگاهی",
    role: "آموزش",
    summary: "تحصیلات دانشگاهی او در دانشگاه یوهانس گوتنبرگ ذکر شده است.",
    tags: ["یوهانس گوتنبرگ", "تحصیلات"]
  },
  {
    name: "زادگاه و ریشه خانوادگی",
    role: "زندگی‌نامه",
    summary: "در تهران زاده شد و خانواده‌اش ریشه در رشت (خاندان سمیعی) دارد.",
    tags: ["تهران", "رشت"]
  },
  {
    name: "اقامت و سفر",
    role: "فعالیت بین‌المللی",
    summary: "در آلمان اقامت دارد و به‌طور مکرر به ایران سفر می‌کند.",
    tags: ["آلمان", "ایران"]
  }
];

const metrics = [
  {
    label: "عمل جراحی انجام‌شده",
    value: "۲۰٬۰۰۰+",
    detail: "طبق ویکی‌پدیا در طول فعالیت حرفه‌ای",
    progress: 100
  },
  {
    label: "مقالات علمی",
    value: "۴۰۰",
    detail: "تا سال ۲۰۰۴ (به نقل از دی‌ولت)",
    progress: 82
  },
  {
    label: "کتاب‌های تخصصی",
    value: "۱۵",
    detail: "کتاب‌شناسی ویکی‌پدیا",
    progress: 65
  },
  {
    label: "مدال افتخار سمیعی",
    value: "۲۰۱۰",
    detail: "ایجاد توسط WFNS و اعطای دوسالانه",
    progress: 72
  }
];

const caseStudies = [
  {
    title: "تأسیس INI در هانوفر",
    summary:
      "در دهه ۱۹۹۰ مرکز خصوصی بین‌المللی علوم اعصاب (INI) را در هانوفر تأسیس کرد.",
    outcome: "ریاست این مرکز بر عهده مجید سمیعی و پسرش امیر سمیعی است.",
    tags: ["INI", "هانوفر", "دهه ۱۹۹۰"]
  },
  {
    title: "بیونیک مغزی و ایمپلنت‌ها",
    summary:
      "از زمینه‌های پژوهشی INI، ارتباط ایمپلنت‌های فنی و مغز انسان است.",
    outcome:
      "به نوشته دی‌ولت در ۲۰۰۴، ۲۲ بیمار کر با کاشت میکروچیپ در ساقه مغز شنوایی خود را باز یافتند.",
    tags: ["بیونیک مغزی", "ایمپلنت", "ساقه مغز"]
  },
  {
    title: "طرح آفریقا ۱۰۰",
    summary:
      "برای این طرح آموزشی، حلقه لایبنیتز هانوفر در سال ۲۰۱۳ اهدا شد.",
    outcome:
      "هدف طرح، آموزش ۱۰۰ جراح جوان آفریقایی و توسعه آموزش پزشکی در قاره آفریقا است.",
    tags: ["آفریقا ۱۰۰", "آموزش", "۲۰۱۳"]
  }
];

const affiliations = [
  {
    name: "بیمارستان خصوصی علوم عصبی هانوفر",
    detail: "ریاست و بنیان‌گذاری این بیمارستان در آلمان"
  },
  {
    name: "International Neuroscience Institute (INI)",
    detail: "مرکز خصوصی بین‌المللی علوم اعصاب (دهه ۱۹۹۰)"
  },
  {
    name: "بنیاد علمی بین‌المللی علوم مغز و اعصاب",
    detail: "محل کار ذکر شده در ویکی‌پدیا"
  },
  {
    name: "دانشگاه یوهانس گوتنبرگ",
    detail: "دانشگاه محل تحصیل"
  },
  {
    name: "فدراسیون جهانی جوامع جراحی مغز (WFNS)",
    detail: "ایجاد مدال افتخار سمیعی در ۲۰۱۰"
  },
  {
    name: "دانشگاه تهران",
    detail: "دکترای افتخاری و استاد افتخاری (۱۳۹۰)"
  }
];

const articles = [
  {
    title: "Surgery in and around the Brain Stem and the Third Ventricle",
    date: "۱۹۸۶",
    category: "کتاب",
    summary: "اثر مرجع درباره جراحی ساقه مغز و بطن سوم."
  },
  {
    title: "Skull Base Surgery. Anatomy, Diagnosis and Treatment",
    date: "۱۹۹۴",
    category: "کتاب",
    summary: "کتاب تخصصی در حوزه جراحی قاعده جمجمه."
  },
  {
    title: "Peripheral Nerve Lesions",
    date: "۱۹۹۰",
    category: "کتاب",
    summary: "کتاب تخصصی درباره ضایعات اعصاب محیطی."
  }
];

const accessPoints = [
  { title: "شهر محل فعالیت", detail: "هانوفر، آلمان (بر اساس ویکی‌پدیا)" },
  { title: "فرودگاه هانوفر", detail: "دسترسی بین‌المللی به شهر هانوفر" },
  { title: "ایستگاه مرکزی هانوفر", detail: "دسترسی ریلی به مرکز شهر" },
  { title: "دسترسی شهری", detail: "مسیرهای اصلی شهری برای تردد به مرکز علوم اعصاب" }
];

const contactDetails = [
  { title: "زادروز", value: "۲۹ خرداد ۱۳۱۶، تهران" },
  { title: "ملیت", value: "ایرانی تابع آلمان" },
  { title: "حوزه فعالیت", value: "جراحی مغز و اعصاب" },
  { title: "محل فعالیت", value: "هانوفر، آلمان (بیمارستان خصوصی علوم عصبی)" }
];

export default function Home() {
  return (
    <main className="page-shell pb-24">
      <div className="relative z-10">
        <header id="home" className="container-site pb-16 pt-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white shadow-glow">
                  DS
                </div>
                <div>
                  <p className="text-xs text-slate">مرکز علوم اعصاب</p>
                  <p className="text-lg font-semibold text-ink">دکتر مجید سمیعی</p>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-4 text-sm text-slate">
                <a className="transition hover:text-ink" href="#about">
                  درباره
                </a>
                <a className="transition hover:text-ink" href="#team">
                  مسیر حرفه‌ای
                </a>
                <a className="transition hover:text-ink" href="#specialties">
                  تخصص ها
                </a>
                <a className="transition hover:text-ink" href="#metrics">
                  شاخص‌ها
                </a>
                <a className="transition hover:text-ink" href="#services">
                  فعالیت‌ها
                </a>
                <a className="transition hover:text-ink" href="#cases">
                  ابتکارات
                </a>
                <a className="transition hover:text-ink" href="#news">
                  کتاب‌شناسی
                </a>
                <a className="transition hover:text-ink" href="#contact">
                  اطلاعات
                </a>
              </nav>
              <div className="flex flex-wrap items-center gap-3">
                <a className="btn-outline" href="#contact">
                  اطلاعات رسمی
                </a>
                <a className="btn-primary" href="#appointment">
                  رزرو نوبت
                </a>
              </div>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-6">
                <span className="badge">پزشک و جراح مغز و اعصاب ایرانی-آلمانی</span>
                <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
                  مجید سمیعی؛ بنیان‌گذار INI و رئیس بیمارستان خصوصی علوم عصبی هانوفر
                </h1>
                <p className="text-lg text-slate">
                  زاده ۲۹ خرداد ۱۳۱۶ در تهران، تحصیل‌کرده دانشگاه یوهانس گوتنبرگ و جراح مغز و اعصاب
                  ایرانی-آلمانی که بر اساس ویکی‌پدیا در آلمان اقامت دارد و به‌طور مکرر به ایران
                  سفر می‌کند.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a className="btn-primary" href="#about">
                    مشاهده زندگی‌نامه
                  </a>
                  <a className="btn-outline" href="#services">
                    مرور فعالیت‌ها و نوآوری‌ها
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-line bg-white/70 p-4 text-center shadow-soft"
                    >
                      <p className="text-lg font-semibold text-ink">{item.value}</p>
                      <p className="mt-1 text-xs text-slate">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -right-10 top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl animate-float" />
                <div
                  className="absolute -left-10 bottom-10 h-40 w-40 rounded-full bg-accent-2/20 blur-2xl animate-float"
                  style={{ animationDelay: "1.2s" }}
                />
                <div className="absolute -top-6 left-6 h-24 w-24 rounded-full border border-accent/30" />
                <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/80 shadow-glow">
                  <Image
                    src="/image.jpg"
                    alt="دکتر مجید سمیعی"
                    width={640}
                    height={760}
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="h-[260px] w-full object-cover object-top sm:h-[360px]"
                  />
                </div>
                <div className="card absolute -bottom-8 left-6 max-w-xs">
                  <p className="text-xs text-slate">بیمارستان خصوصی علوم عصبی هانوفر</p>
                  <p className="mt-2 text-sm font-semibold text-ink">
                    بنیان‌گذار و رئیس این بیمارستان خصوصی در آلمان
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>تأسیس INI در دهه ۱۹۹۰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="container-site pb-12">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card animate-fade-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-slate">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="section-title">درباره دکتر سمیعی</h2>
              <p className="section-subtitle">
                مجید سمیعی (زاده ۲۹ خرداد ۱۳۱۶) پزشک و جراح مغز و اعصاب ایرانی-آلمانی است.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate">
                <p>
                  او در تهران به دنیا آمد و خانواده‌اش ریشه در رشت دارند. تحصیلات ابتدایی را در رشت
                  و دوره متوسطه را در دبیرستان شهید بهشتی (شاهپور) گذراند و تحصیلات دانشگاهی او در
                  دانشگاه یوهانس گوتنبرگ ذکر شده است.
                </p>
                <p>
                  بنا بر ویکی‌پدیا، او بنیان‌گذار و رئیس بیمارستان خصوصی علوم عصبی هانوفر در آلمان
                  است و در دهه ۱۹۹۰ مرکز بین‌المللی علوم اعصاب (INI) را تأسیس کرد. او در آلمان اقامت
                  دارد و به‌طور مکرر به ایران سفر می‌کند.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">نکات کلیدی از ویکی‌پدیا</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate">
                  <li>پزشک و جراح مغز و اعصاب ایرانی-آلمانی</li>
                  <li>ریاست بیمارستان خصوصی علوم عصبی هانوفر (بنیان‌گذار)</li>
                  <li>تأسیس مرکز بین‌المللی علوم اعصاب (INI) در دهه ۱۹۹۰</li>
                  <li>انتشار گسترده علمی: ۴۰۰ مقاله و ۱۵ کتاب تا ۲۰۰۴</li>
                </ul>
              </div>
              <div className="card-dark">
                <p className="text-xs uppercase tracking-widest text-white/60">خلاصه ویکی‌پدیا</p>
                <p className="mt-3 text-lg font-semibold">
                  او ریاست بیمارستان خصوصی علوم عصبی هانوفر را بر عهده دارد و بنیان‌گذار آن است.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">مسیر حرفه‌ای و مسئولیت‌ها</h2>
                <p className="section-subtitle">
                  مروری بر نقش‌ها و موقعیت‌های علمی بر اساس داده‌های ویکی‌پدیا.
                </p>
              </div>
              <span className="badge">خلاصه زندگی‌نامه</span>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {careerHighlights.map((member, index) => (
                <div
                  key={member.name}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-slate">{member.role}</p>
                      <h3 className="mt-2 text-lg font-semibold text-ink">{member.name}</h3>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/15 text-sm font-semibold text-accent">
                      {index + 1}
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate">{member.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs text-slate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="specialties" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">حوزه های تخصصی</h2>
                <p className="section-subtitle">
                  موضوعات تخصصی برگرفته از فعالیت‌ها و کتاب‌های علمی ذکرشده در ویکی‌پدیا.
                </p>
              </div>
              <span className="badge">مرجع کتاب‌شناسی</span>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {specialties.map((item, index) => (
                <div
                  key={item.title}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="metrics" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div>
              <h2 className="section-title">شاخص‌های علمی و انتشارات</h2>
              <p className="section-subtitle">
                داده‌های آماری منتشرشده در ویکی‌پدیا و منابع ذکرشده در آن.
              </p>
              <div className="mt-8 space-y-5">
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-3xl border border-line bg-white/70 p-5 shadow-soft"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-ink">{item.label}</p>
                        <p className="mt-1 text-xs text-slate">{item.detail}</p>
                      </div>
                      <span className="text-lg font-semibold text-ink">{item.value}</span>
                    </div>
                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-mist">
                      <div
                        className="h-full rounded-full bg-gradient-to-l from-accent to-accent-2"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-dark">
                <p className="text-xs uppercase tracking-widest text-white/60">بازتاب علمی</p>
                <p className="mt-3 text-lg font-semibold">
                  ایجاد «مدال افتخار سمیعی» توسط WFNS در سال ۲۰۱۰ نشان‌دهنده جایگاه علمی اوست.
                </p>
                <div className="mt-6 space-y-3 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span>مدال افتخار سمیعی</span>
                    <span className="font-semibold text-highlight">۲۰۱۰</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>برترین جراح مغز (WFNS)</span>
                    <span className="font-semibold text-highlight">۲۰۱۳</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>جشنواره خوارزمی</span>
                    <span className="font-semibold text-highlight">۲۰۱۴</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">محورهای فعالیت علمی</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate">
                  <li>پیشگامی در جراحی قاعده جمجمه</li>
                  <li>جراحی میکروسکوپی عصب‌ها و رگ‌ها از ۱۹۶۷</li>
                  <li>توسعه روش اشعه رونتگن برای کنتراست مغز</li>
                  <li>پژوهش بیونیک مغزی و ایمپلنت‌ها در INI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <h2 className="section-title">فعالیت‌ها و نوآوری‌ها</h2>
              <p className="section-subtitle">
                مرور مهم‌ترین حوزه‌های فعالیت علمی و نوآوری‌های ثبت‌شده در ویکی‌پدیا.
              </p>
              <div className="mt-8 space-y-4">
                {services.map((service, index) => (
                  <div
                    key={service.title}
                    className="flex gap-4 rounded-3xl border border-line bg-white/70 p-5 shadow-soft"
                  >
                    <div className="mt-1 h-9 w-9 shrink-0 rounded-2xl bg-accent/15 text-center text-sm font-semibold text-accent">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{service.title}</h3>
                      <p className="mt-2 text-sm text-slate">{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">جوایز و افتخارها</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate">
                  {awards.map((award) => (
                    <li key={award} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">کتاب‌ها و آثار منتخب</h3>
                <p className="mt-3 text-sm text-slate">
                  گزیده‌ای از کتاب‌های تخصصی ذکرشده در کتاب‌شناسی ویکی‌پدیا.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {media.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-white/70 px-4 py-1 text-xs text-slate"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="affiliations" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">نهادها و مراکز مرتبط</h2>
                <p className="section-subtitle">
                  مراکز و نهادهای ذکرشده در ویکی‌پدیا که با فعالیت‌های او مرتبط‌اند.
                </p>
              </div>
              <span className="badge">بر اساس ویکی‌پدیا</span>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {affiliations.map((item, index) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-line bg-white/70 p-5 shadow-soft animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-xs text-slate">{item.detail}</p>
                  <h3 className="mt-3 text-base font-semibold text-ink">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">خط زمانی فعالیت‌ها</h2>
                <p className="section-subtitle">
                  نقاط عطف زندگی و فعالیت‌های علمی بر اساس داده‌های ویکی‌پدیا.
                </p>
              </div>
              <a className="btn-outline" href="#about">
                مرور زندگی‌نامه
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {journey.map((step, index) => (
                <div
                  key={step.title}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="text-xs font-semibold text-accent">رویداد {index + 1}</div>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">ابتکارات و پروژه‌ها</h2>
                <p className="section-subtitle">
                  پروژه‌ها و ابتکارات علمی و بین‌المللی ذکرشده در ویکی‌پدیا.
                </p>
              </div>
              <a className="btn-outline" href="#affiliations">
                مشاهده نهادهای مرتبط
              </a>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((item, index) => (
                <div
                  key={item.title}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate">{item.summary}</p>
                  <div className="mt-4 rounded-2xl border border-line bg-highlight/70 p-4 text-sm text-slate">
                    <p className="text-xs font-semibold text-ink">نتیجه</p>
                    <p className="mt-2">{item.outcome}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line bg-white/70 px-3 py-1 text-xs text-slate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="section-title">بازتاب رسانه‌ای و علمی</h2>
                <p className="section-subtitle">
                  گزیده‌ای از نقل‌قول‌ها و ارجاعات ذکرشده در ویکی‌پدیا.
                </p>
              </div>
              <span className="badge">منابع و ارجاعات</span>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <div
                  key={item.name}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="text-sm text-slate">"{item.quote}"</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.name}</p>
                      <p className="text-xs text-slate">{item.detail}</p>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-accent/15" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">کتاب‌شناسی منتخب</h2>
                <p className="section-subtitle">
                  گزیده‌ای از کتاب‌های تخصصی ذکرشده در ویکی‌پدیا.
                </p>
              </div>
              <span className="badge">آثار علمی</span>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {articles.map((item, index) => (
                <div
                  key={item.title}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <div className="flex items-center justify-between text-xs text-slate">
                    <span>{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate">{item.summary}</p>
                  <button className="mt-5 text-sm font-semibold text-accent" type="button">
                    مشاهده کتاب
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
            <div>
              <h2 className="section-title">پرسش‌های متداول درباره زندگی و فعالیت‌ها</h2>
              <p className="section-subtitle">
                پاسخ‌های مستند بر اساس اطلاعات ویکی‌پدیا.
              </p>
              <div className="mt-8 space-y-4">
                {faqs.map((item, index) => (
                  <div
                    key={item.question}
                    className="rounded-3xl border border-line bg-white/70 p-5 shadow-soft"
                  >
                    <p className="text-sm font-semibold text-ink">
                      {index + 1}. {item.question}
                    </p>
                    <p className="mt-3 text-sm text-slate">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">پژوهش‌های INI</h3>
                <p className="mt-3 text-sm text-slate">
                  در INI پژوهش‌هایی در زمینه بیونیک مغزی و ارتباط ایمپلنت‌های فنی با مغز انسان
                  انجام می‌شود.
                </p>
                <div className="mt-6 grid gap-4 rounded-3xl border border-line bg-mist/70 p-5 text-sm text-slate">
                  <div className="flex items-center justify-between">
                    <span>بیونیک مغزی</span>
                    <span className="font-semibold text-ink">زمینه پژوهشی</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ایمپلنت عصبی</span>
                    <span className="font-semibold text-ink">پژوهش کاربردی</span>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-semibold">INI در هانوفر</h3>
                <p className="mt-3 text-sm text-white/70">
                  مرکز خصوصی بین‌المللی علوم اعصاب (INI) در دهه ۱۹۹۰ در هانوفر تأسیس شد و ریاست آن
                  با مجید سمیعی و پسرش امیر سمیعی است.
                </p>
                <a className="mt-6 inline-flex text-sm font-semibold text-highlight" href="#international">
                  مشاهده جزئیات INI
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="international" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
            <div className="space-y-6">
              <div className="card-dark">
                <p className="text-xs uppercase tracking-widest text-white/60">مرکز INI</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  مرکز بین‌المللی علوم اعصاب (INI)
                </h2>
                <p className="mt-4 text-sm text-white/70">
                  INI در دهه ۱۹۹۰ به عنوان مرکز خصوصی بین‌المللی علوم اعصاب در هانوفر تأسیس شد و
                  بنای آن برگرفته از شکل مغز است.
                </p>
                <div className="mt-6 space-y-3 text-sm text-white/70">
                  <div className="flex items-center justify-between">
                    <span>محل</span>
                    <span className="font-semibold text-highlight">هانوفر، آلمان</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>ریاست</span>
                    <span className="font-semibold text-highlight">مجید سمیعی و امیر سمیعی</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>نوع مرکز</span>
                    <span className="font-semibold text-highlight">خصوصی بین‌المللی</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">زمینه‌های پژوهشی INI</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate">
                  <li>بیونیک مغزی</li>
                  <li>ارتباط ایمپلنت‌های فنی و مغز انسان</li>
                  <li>ایمپلنت‌های عصبی و تبدیل سیگنال‌های صوتی به سیگنال مغزی</li>
                  <li>پژوهش‌های کاربردی در علوم اعصاب</li>
                </ul>
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-ink">نمونه نتایج پژوهشی</h3>
              <p className="mt-3 text-sm text-slate">
                به نوشته دی‌ولت در سال ۲۰۰۴، ۲۲ بیمار که کاملاً کر بودند توانستند از طریق عمل در
                هانوفر شنوایی خود را باز به دست آورند.
              </p>
              <div className="mt-6 space-y-4 rounded-3xl border border-line bg-mist/60 p-5 text-sm text-slate">
                <div className="flex items-center justify-between">
                  <span>روش</span>
                  <span className="font-semibold text-ink">کاشت میکروچیپ در ساقه مغز</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>تبدیل سیگنال</span>
                  <span className="font-semibold text-ink">از میکروفون به سیگنال مغزی</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>INI ایران</span>
                  <span className="font-semibold text-ink">در حال ساخت</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="appointment" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="card">
              <h2 className="section-title">فرم نمونه درخواست تماس</h2>
              <p className="section-subtitle">
                این فرم صرفاً جهت نمایش ساختار دمو است و اطلاعات تماس رسمی در ویکی‌پدیا ذکر نشده است.
              </p>
              <form className="mt-8 grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="input-field" placeholder="نام و نام خانوادگی" type="text" />
                  <input className="input-field" placeholder="شماره تماس" type="tel" />
                </div>
                <input className="input-field" placeholder="ایمیل" type="email" />
                <input className="input-field" placeholder="موضوع درخواست" type="text" />
                <textarea
                  className="input-field min-h-[120px]"
                  placeholder="شرح کوتاه درخواست"
                />
                <button className="btn-primary w-full" type="button">
                  ارسال درخواست
                </button>
              </form>
            </div>

            <div id="contact" className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">اطلاعات رسمی منتشرشده</h3>
                <div className="mt-4 space-y-3 text-sm text-slate">
                  {contactDetails.map((item) => (
                    <div key={item.title} className="flex items-start justify-between gap-4">
                      <span>{item.title}</span>
                      <span className="text-right font-semibold text-ink">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">تحصیلات و زندگی‌نامه</h3>
                <div className="mt-4 space-y-3 text-sm text-slate">
                  <div className="flex items-center justify-between">
                    <span>زادگاه</span>
                    <span className="font-semibold text-ink">تهران</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>تحصیلات متوسطه</span>
                    <span className="font-semibold text-ink">دبیرستان شهید بهشتی (شاهپور)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>دانشگاه</span>
                    <span className="font-semibold text-ink">یوهانس گوتنبرگ</span>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-semibold">اقامت و ارتباط با ایران</h3>
                <p className="mt-3 text-sm text-white/70">
                  طبق ویکی‌پدیا، او در آلمان اقامت دارد و به‌طور مکرر به ایران سفر می‌کند.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-highlight" />
                  <span>ریشه خانوادگی در رشت (خاندان سمیعی)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="location" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div>
              <h2 className="section-title">مسیر دسترسی و نقشه</h2>
              <p className="section-subtitle">
                موقعیت فعالیت در هانوفر، آلمان با دسترسی شهری و بین‌المللی.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {accessPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-line bg-white/70 p-4 text-sm text-slate shadow-soft"
                  >
                    <p className="font-semibold text-ink">{item.title}</p>
                    <p className="mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-line bg-white/70 p-4 shadow-soft">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-mist via-white to-highlight">
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-accent/15 blur-2xl" />
                  <div className="absolute bottom-8 right-12 h-40 w-40 rounded-full bg-accent-2/20 blur-2xl" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 rounded-3xl border border-white/70 bg-white/80 px-6 py-4 text-center shadow-soft">
                    <span className="text-xs text-slate">موقعیت تقریبی فعالیت</span>
                    <span className="text-base font-semibold text-ink">هانوفر، آلمان</span>
                    <span className="text-xs text-slate">مختصات نمونه: ۵۲.۳۷۵۹، ۹.۷۳۲۰</span>
                  </div>
                </div>
                <div className="absolute right-12 top-12 h-4 w-4 rounded-full bg-accent shadow-glow" />
                <div className="absolute right-11 top-11 h-6 w-6 rounded-full border-2 border-accent/30" />
              </div>
              <p className="mt-4 text-xs text-slate">
                مختصات فوق صرفاً نمونه است و برای نمایش در دمو استفاده شده است.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-line bg-white/60 py-10">
          <div className="container-site flex flex-col gap-6 text-sm text-slate md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-ink">وب‌سایت دمو دکتر مجید سمیعی</p>
              <p className="mt-2">
                محتوای این صفحه بر اساس ویکی‌پدیا تنظیم شده و صرفاً جهت دمو استفاده می‌شود.
              </p>
              <p className="mt-2 text-xs text-slate">
                طراحی و توسعه توسط{" "}
                <a className="font-semibold text-accent" href="https://crm.vahidmohtasham.com">
                  محتشم تک
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="transition hover:text-ink" href="#home">
                بازگشت به بالا
              </a>
              <a className="transition hover:text-ink" href="#team">
                مسیر حرفه‌ای
              </a>
              <a className="transition hover:text-ink" href="#specialties">
                تخصص ها
              </a>
              <a className="transition hover:text-ink" href="#international">
                INI
              </a>
              <a className="transition hover:text-ink" href="#appointment">
                رزرو نوبت
              </a>
              <a className="transition hover:text-ink" href="#location">
                مسیر دسترسی
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="fixed bottom-4 left-1/2 z-40 w-[92vw] max-w-lg -translate-x-1/2 rounded-2xl border border-line bg-white/80 px-4 py-3 shadow-soft backdrop-blur">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate">
          <span className="font-semibold text-ink">دسترسی سریع به بخش‌های کلیدی</span>
          <div className="flex flex-wrap items-center gap-2">
            <a
              className="inline-flex items-center justify-center rounded-full border border-accent/30 bg-white/80 px-4 py-2 text-xs font-semibold text-accent transition hover:-translate-y-0.5"
              href="#about"
            >
              زندگی‌نامه
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5"
              href="#international"
            >
              INI
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
