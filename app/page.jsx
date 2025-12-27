import Image from "next/image";

const stats = [
  { value: "۵۰+ سال", label: "تجربه تخصصی جراحی مغز و اعصاب" },
  { value: "۱۰۰+", label: "سخنرانی و کنگره بین المللی" },
  { value: "ده ها هزار", label: "جراحی موفق در سطح جهان" },
  { value: "۴۰+", label: "شاگرد و استاد بین المللی" }
];

const highlights = [
  {
    title: "مرکز بین المللی علوم اعصاب",
    text: "پیشگام در درمان بیماری های پیچیده مغز و نخاع با تیم چند تخصصی."
  },
  {
    title: "مشاوره دوم و برنامه درمانی",
    text: "تحلیل دقیق مدارک پزشکی و ارائه مسیر درمانی شفاف و شخصی سازی شده."
  },
  {
    title: "همراهی کامل بیمار",
    text: "از تشخیص تا توانبخشی با پشتیبانی پیوسته تیم مراقبت."
  }
];

const specialties = [
  {
    title: "تومورهای قاعده جمجمه",
    text: "جراحی های پیشرفته با حفظ عملکردهای حیاتی و کاهش عوارض."
  },
  {
    title: "آنوریسم و ناهنجاری های عروقی",
    text: "درمان های میکروسکوپی و برنامه ریزی دقیق برای نتایج پایدار."
  },
  {
    title: "جراحی های ستون فقرات",
    text: "اصلاح اختلالات ستون فقرات و بهبود کیفیت حرکت."
  },
  {
    title: "تروما و اورژانس عصبی",
    text: "پروتکل های سریع برای بیماران اورژانسی و مراقبت ویژه."
  },
  {
    title: "جراحی عملکردی مغز",
    text: "مدیریت دردهای مزمن، صرع و اختلالات حرکتی."
  },
  {
    title: "پزشکی بازساختی",
    text: "توانبخشی عصبی و برنامه های درمانی پس از جراحی."
  }
];

const services = [
  {
    title: "ویزیت تخصصی و بررسی مدارک",
    text: "ارزیابی دقیق MRI/CT و مدارک قبل از جراحی با گزارش کامل."
  },
  {
    title: "برنامه جراحی شخصی",
    text: "طراحی مسیر درمانی با مشارکت تیم نورولوژی، رادیولوژی و توانبخشی."
  },
  {
    title: "جراحی های کم تهاجمی",
    text: "استفاده از تکنیک های میکروسکوپی برای کاهش دوران نقاهت."
  },
  {
    title: "مراقبت پس از عمل",
    text: "پیگیری منظم، کنترل درد و برنامه بازتوانی اختصاصی."
  }
];

const journey = [
  {
    title: "ثبت پرونده",
    text: "ارسال مدارک و دریافت راهنمایی اولیه از تیم پذیرش."
  },
  {
    title: "ارزیابی تخصصی",
    text: "تحلیل نتایج تصویربرداری و انتخاب بهترین گزینه درمانی."
  },
  {
    title: "جراحی و مراقبت",
    text: "انجام عمل توسط تیم خبره و مراقبت ویژه پس از آن."
  },
  {
    title: "توانبخشی و پیگیری",
    text: "برنامه بازگشت به زندگی روزمره با پشتیبانی مداوم."
  }
];

const awards = [
  "برنده جوایز بین المللی جراحی مغز و اعصاب",
  "مؤسس و مدیر مراکز پژوهشی علوم اعصاب",
  "عضو افتخاری انجمن های جهانی نوروسرجری",
  "پیشگام توسعه جراحی های قاعده جمجمه",
  "منتور نسل جدید جراحان مغز و اعصاب"
];

const testimonials = [
  {
    name: "ریحانه م.",
    detail: "بیمار تومور مغزی",
    quote:
      "از روز اول تا پایان درمان احساس امنیت کامل داشتم. تیم دکتر سمیعی فوق العاده دقیق و مهربان بود."
  },
  {
    name: "حمید ن.",
    detail: "جراحی ستون فقرات",
    quote:
      "نتایج جراحی فراتر از انتظارم بود. توضیح مراحل درمان و پیگیری بعد از عمل بی نظیر بود."
  },
  {
    name: "سارا خ.",
    detail: "مشاوره بین المللی",
    quote:
      "با ارسال مدارک از خارج کشور، خیلی سریع پاسخ گرفتم و مسیر درمانی مشخص شد."
  }
];

const faqs = [
  {
    question: "چگونه برای مشاوره بین المللی اقدام کنم؟",
    answer:
      "مدارک پزشکی و فایل های تصویربرداری را از طریق فرم ارسال کنید تا تیم تخصصی در کوتاه ترین زمان بررسی کند."
  },
  {
    question: "آیا امکان دریافت نظر دوم وجود دارد؟",
    answer:
      "بله، شما می توانید برای دریافت نظر دوم و انتخاب بهترین مسیر درمانی از خدمات مشاوره استفاده کنید."
  },
  {
    question: "چه مدت پس از جراحی باید پیگیری انجام شود؟",
    answer:
      "برنامه پیگیری به نوع جراحی بستگی دارد اما معمولا ۲ هفته پس از عمل و سپس در بازه های مشخص انجام می شود."
  },
  {
    question: "آیا خدمات توانبخشی ارائه می شود؟",
    answer:
      "بله، تیم توانبخشی عصبی برنامه اختصاصی برای بازگشت بهتر به فعالیت های روزمره ارائه می دهد."
  }
];

const media = [
  "The Lancet Neurology",
  "Journal of Neurosurgery",
  "World Neurosurgery",
  "European Neurosurgical Society",
  "Clinical Neuroscience Forum"
];

const contactDetails = [
  { title: "تلفن", value: "۰۲۱-۹۱۰۰-۲۷۰۰" },
  { title: "ایمیل", value: "contact@drsamii-demo.com" },
  { title: "آدرس", value: "تهران، الهیه، خیابان شریعتی، کلینیک تخصصی" }
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="relative z-10">
        <header id="home" className="container-site pb-16 pt-10">
          <div className="flex flex-col gap-12">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-lg font-bold text-white shadow-glow">
                  DS
                </div>
                <div>
                  <p className="text-xs text-slate">کلینیک تخصصی</p>
                  <p className="text-lg font-semibold text-ink">دکتر مجید سمیعی</p>
                </div>
              </div>
              <nav className="flex flex-wrap items-center gap-4 text-sm text-slate">
                <a className="transition hover:text-ink" href="#about">
                  درباره
                </a>
                <a className="transition hover:text-ink" href="#specialties">
                  تخصص ها
                </a>
                <a className="transition hover:text-ink" href="#services">
                  خدمات
                </a>
                <a className="transition hover:text-ink" href="#journey">
                  مسیر درمان
                </a>
                <a className="transition hover:text-ink" href="#contact">
                  تماس
                </a>
              </nav>
              <div className="flex flex-wrap items-center gap-3">
                <a className="btn-outline" href="#contact">
                  مشاوره آنلاین
                </a>
                <a className="btn-primary" href="#appointment">
                  رزرو نوبت
                </a>
              </div>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-6">
                <span className="badge">مرجع بین المللی جراحی مغز و اعصاب</span>
                <h1 className="text-4xl font-semibold leading-tight text-ink md:text-5xl">
                  بازتعریف استانداردهای درمان مغز و اعصاب با نگاه انسانی و علمی
                </h1>
                <p className="text-lg text-slate">
                  کلینیک دکتر مجید سمیعی با ترکیب تجربه جهانی، فناوری های نوین و مراقبت تیمی،
                  درمانی دقیق و مطمئن را برای بیماران داخلی و بین المللی فراهم می کند.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a className="btn-primary" href="#appointment">
                    درخواست ارزیابی اولیه
                  </a>
                  <a className="btn-outline" href="#services">
                    آشنایی با خدمات تخصصی
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
                    className="h-[420px] w-full object-cover object-top sm:h-[520px]"
                  />
                </div>
                <div className="card absolute -bottom-8 left-6 max-w-xs">
                  <p className="text-xs text-slate">کلینیک تخصصی علوم اعصاب</p>
                  <p className="mt-2 text-sm font-semibold text-ink">
                    پذیرش بیماران بین المللی با پشتیبانی چندزبانه
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-slate">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    <span>نوبت دهی ویژه برای موارد پیچیده</span>
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
                دکتر مجید سمیعی به عنوان یکی از برجسته ترین جراحان مغز و اعصاب جهان شناخته می شود.
                رویکرد ایشان تلفیقی از دانش، مهارت جراحی و توجه به کیفیت زندگی بیمار است.
              </p>
              <div className="mt-8 space-y-4 text-sm text-slate">
                <p>
                  تمرکز اصلی این مرکز بر درمان بیماری های پیچیده مغز و نخاع، تومورهای قاعده جمجمه و
                  بازتوانی عصبی است. هر پرونده درمانی با همکاری تیم چند تخصصی بررسی می شود تا بهترین
                  تصمیم برای بیمار اتخاذ شود.
                </p>
                <p>
                  در کنار درمان های جراحی، برنامه های آموزشی و پژوهشی با هدف ارتقای استانداردهای علوم
                  اعصاب نیز در این مجموعه دنبال می شود.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">چرا بیماران ما را انتخاب می کنند؟</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate">
                  <li>ارزیابی چند تخصصی برای پرونده های پیچیده</li>
                  <li>هماهنگی کامل بین جراحی، مراقبت ویژه و توانبخشی</li>
                  <li>ارتباط شفاف و احترام به تصمیم بیمار</li>
                  <li>تجربه گسترده در درمان بیماران بین المللی</li>
                </ul>
              </div>
              <div className="card-dark">
                <p className="text-xs uppercase tracking-widest text-white/60">پیام حرفه ای</p>
                <p className="mt-3 text-lg font-semibold">
                  هدف ما این است که درمان پیچیده ترین بیماری ها را با آرامش و اطمینان برای بیمار
                  ممکن کنیم.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="specialties" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">حوزه های تخصصی</h2>
                <p className="section-subtitle">
                  تمرکز بر درمان بیماری های پیچیده مغز و اعصاب با استانداردهای جهانی.
                </p>
              </div>
              <span className="badge">پروتکل های درمانی به روز</span>
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

        <section id="services" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
            <div>
              <h2 className="section-title">خدمات کلینیک</h2>
              <p className="section-subtitle">
                از مشاوره دقیق تا پیگیری پس از عمل، تمام مراحل درمان به صورت یکپارچه مدیریت می شود.
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
                <h3 className="text-lg font-semibold text-ink">افتخارات و جایگاه جهانی</h3>
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
                <h3 className="text-lg font-semibold text-ink">رسانه و پژوهش</h3>
                <p className="mt-3 text-sm text-slate">
                  انتشار مستمر در ژورنال های معتبر و مشارکت در کنفرانس های تخصصی علوم اعصاب.
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

        <section id="journey" className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="section-title">مسیر درمان بیمار</h2>
                <p className="section-subtitle">
                  فرآیند درمان شفاف و مرحله به مرحله برای آرامش و اطمینان خانواده ها طراحی شده است.
                </p>
              </div>
              <a className="btn-outline" href="#appointment">
                شروع مسیر درمان
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {journey.map((step, index) => (
                <div
                  key={step.title}
                  className="card animate-fade-up"
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="text-xs font-semibold text-accent">گام {index + 1}</div>
                  <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-site">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h2 className="section-title">صدای بیماران</h2>
                <p className="section-subtitle">
                  تجربه بیماران از اعتماد، دقت و همراهی تیم پزشکی در مسیر درمان.
                </p>
              </div>
              <span className="badge">رضایت بیماران اولویت اول ماست</span>
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

        <section className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
            <div>
              <h2 className="section-title">سوالات پرتکرار</h2>
              <p className="section-subtitle">
                پاسخ به سوالات متداول بیماران برای تصمیم گیری آگاهانه.
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
                <h3 className="text-lg font-semibold text-ink">اطلاعیه پزشکی</h3>
                <p className="mt-3 text-sm text-slate">
                  برای موارد اورژانسی لطفا با مرکز اورژانس تماس بگیرید. کلینیک آماده پاسخگویی سریع
                  به پرونده های پیچیده و ارجاعی است.
                </p>
                <div className="mt-6 grid gap-4 rounded-3xl border border-line bg-mist/70 p-5 text-sm text-slate">
                  <div className="flex items-center justify-between">
                    <span>پاسخگویی تلفنی</span>
                    <span className="font-semibold text-ink">۲۴ ساعته</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>پاسخ به مشاوره آنلاین</span>
                    <span className="font-semibold text-ink">کمتر از ۴۸ ساعت</span>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-semibold">کلینیک بین المللی بیماران خارجی</h3>
                <p className="mt-3 text-sm text-white/70">
                  هماهنگی پرونده های بین المللی، مترجم تخصصی و پشتیبانی اقامت برای همراهان بیمار.
                </p>
                <a className="mt-6 inline-flex text-sm font-semibold text-highlight" href="#appointment">
                  دریافت راهنمای پذیرش بین الملل
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="appointment" className="section-space">
          <div className="container-site grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="card">
              <h2 className="section-title">درخواست نوبت یا مشاوره</h2>
              <p className="section-subtitle">
                فرم زیر را تکمیل کنید تا کارشناسان ما در کوتاه ترین زمان با شما تماس بگیرند.
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
                  placeholder="شرح کوتاه وضعیت بیمار"
                />
                <button className="btn-primary w-full" type="button">
                  ارسال درخواست
                </button>
              </form>
            </div>

            <div id="contact" className="space-y-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-ink">اطلاعات تماس کلینیک</h3>
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
                <h3 className="text-lg font-semibold text-ink">ساعات پذیرش</h3>
                <div className="mt-4 space-y-3 text-sm text-slate">
                  <div className="flex items-center justify-between">
                    <span>شنبه تا چهارشنبه</span>
                    <span className="font-semibold text-ink">۸:۰۰ تا ۱۸:۰۰</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>پنجشنبه</span>
                    <span className="font-semibold text-ink">۹:۰۰ تا ۱۴:۰۰</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>جمعه</span>
                    <span className="font-semibold text-ink">فقط اورژانس</span>
                  </div>
                </div>
              </div>
              <div className="card-dark">
                <h3 className="text-lg font-semibold">راهنمای مراجعه</h3>
                <p className="mt-3 text-sm text-white/70">
                  برای مراجعه حضوری لطفا مدارک پزشکی و آخرین تصویربرداری ها را همراه داشته باشید.
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-white/70">
                  <span className="h-2 w-2 rounded-full bg-highlight" />
                  <span>پارکینگ اختصاصی بیماران</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-line bg-white/60 py-10">
          <div className="container-site flex flex-col gap-6 text-sm text-slate md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-ink">کلینیک تخصصی دکتر مجید سمیعی</p>
              <p className="mt-2">
                تمامی حقوق این وب سایت متعلق به کلینیک دکتر سمیعی است. استفاده صرفا جهت دمو.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="transition hover:text-ink" href="#home">
                بازگشت به بالا
              </a>
              <a className="transition hover:text-ink" href="#specialties">
                تخصص ها
              </a>
              <a className="transition hover:text-ink" href="#appointment">
                رزرو نوبت
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
