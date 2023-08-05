import ServicePlan from "../components/ServicePlan";
import Footnotes from "../components/Footnotes";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";

export const metadata = {
  title: "Services | Hizmetler",
  description:
    "Education Consulting packages that we offer for higher education in the United States | ABD'de yükseköğretim için sunduğumuz eğitim danışmanlığı paketleri",
};

export default function Services() {
  const PAGE_INTRO_DATA = {
    title: {
      en: "Our Services",
      tr: "Hizmetlerimiz",
    },
    description: {
      en: "We know how daunting the grad school applications in the US can be. Here at Helios Admissions, we are offering a variety of services to help you with the entire application process.",
      tr: "ABD'de lisansüstü eğitim başvurularının ne kadar zor olduğunu biliyoruz. Helios Admissions olarak, başvuru sürecinin her aşamasında size yardımcı olmak için çeşitli hizmetler sunuyoruz.",
    },
  };

  const footnotes = [
    {
      en: "The packages do not include extra fees, such as application fees for each school, TOEFL and GRE/GMAT examination fees",
      tr: "Paketlerimiz, her okul için gerekli olan başvuru ücreti, TOEFL ve GRE/GMAT sınav ücreti gibi ek ücretleri içermez",
    },
  ];
  const SERVICE_PLANS = [
    {
      name: {
        en: "Pre-assessment",
        tr: "Ön Değerlendirme",
      },
      price: 50,
      description: {
        en: "A 45-minute virtual meeting to discuss your academic background, English proficiency and the application process",
        tr: "Akademik geçmişiniz, İngilizce yeterliliğiniz ve başvuru süreci hakkında 45 dakikalık online görüşme",
      },
      features: [
        {
          en: "A 45-minute virtual meeting",
          tr: "45 dakikalık online görüşme",
        },
        {
          en: "Assessment of academic background and interests",
          tr: "Akademik geçmiş ve ilgi alanlarının değerlendirilmesi",
        },
        {
          en: "Overview of application requirements",
          tr: "Başvuru gerekliliklerinin genel değerlendirmesi",
        },
        {
          en: "Determining eligibility for studying in the US",
          tr: "ABD'de eğitim almak için uygunluk belirlenmesi",
        },
        {
          en: "Breakdown of costs and expenses",
          tr: "Maliyet ve harcamaların ayrıntılı değerlendirilmesi",
        },
        {
          en: "Briefing about the US education system",
          tr: "ABD eğitim sistemi hakkında bilgilendirme",
        },
      ],
    },
    {
      name: {
        en: "Standard Package",
        tr: "Standart Paket",
      },
      price: 950,
      description: {
        en: "Application support up to 10 universities, visa support, TOEFL and GRE/GMAT assistance",
        tr: "10 üniversiteye kadar başvuru desteği, vize danışmanlığı, TOEFL ve GRE/GMAT desteği",
      },
      features: [
        {
          en: "Application support up to 10 universities",
          tr: "10 üniversiteye kadar başvuru desteği",
        },
        {
          en: "Feedback on the Statement of Purpose with regards to grammar and coherence",
          tr: "Niyet mektubuna dair dilbilgisi ve tutarlılık açısından geri bildirim",
        },
        {
          en: "Review of application documents for each school/program",
          tr: "Her okul/program için başvuru belgelerinin yeterliliğinin kontrolü",
        },
        {
          en: "Resources for TOEFL/IELTS/GRE/GMAT",
          tr: "TOEFL/IELTS/GRE/GMAT için kaynaklar",
        },
        {
          en: "F-1 Visa application support",
          tr: "F-1 Vize başvurusu desteği",
        },
        {
          en: "Support for official communication with target schools",
          tr: "Başvurmak istenilen okullarla resmi iletişim desteği",
        },
        {
          en: "Extra virtual meetings with students if necessary",
          tr: "Gerektiği taktirde ekstra online görüşmeler",
        },
      ],
    },
    {
      name: {
        en: "Full Package",
        tr: "Full Paket",
      },
      price: 1950,
      description: {
        en: "Standard Package + application submission, portfolio review, and loan/scholarship opportunities",
        tr: "Standart Paket + başvuru gönderimi, portfolyo değerlendirmesi ve kredi/burs fırsatları",
      },
      features: [
        {
          en: "Everything included in the Standard Package",
          tr: "Standart Paket'te yer alan tüm hizmetler",
        },
        {
          en: "Managing the students' application portal",
          tr: "Öğrencinin başvuru portalının yönetimi",
        },
        {
          en: "Ensuring the timely submission of all application documents within the specified application deadline",
          tr: "Belirtilen başvuru süresi içinde tüm başvuru belgelerinin zamanında gönderilmesinin sağlanması",
        },
        {
          en: "Exploring extensive no-colatteral/no-cosigner student loans and financial aid opportunities abroad",
          tr: "Yurt dışında ipoteksiz/kefilsiz öğrenci kredileri ve burs fırsatlarına dair kapsamlı danışmanlık",
        },
      ],
    },
  ];
  return (
    <PageStyler>
      <main className="flex flex-col transition-colors ease-linear duration-200">
        <div className="px-4 mx-auto  lg:px-6">
          <PageIntroduction
            title={PAGE_INTRO_DATA.title}
            description={PAGE_INTRO_DATA.description}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 ">
            {SERVICE_PLANS.map((plan, index) => (
              <ServicePlan
                key={index}
                name={plan.name}
                description={plan.description}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>
          <div className="col-span-1 max-w-sm lg:max-w-full  mx-auto lg:mx-0 lg:col-span-3 pt-5 lg:pt-8">
            <Footnotes footnotes={footnotes} />
          </div>
        </div>
      </main>
    </PageStyler>
  );
}
