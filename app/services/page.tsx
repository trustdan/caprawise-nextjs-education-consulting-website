'use client'
import ServicePlan from "../components/ServicePlan";
import { useLanguageContext } from "../hooks/useLanguageContext";
import Footnotes from "../components/Footnotes";



export default function Services() {
 const { language } = useLanguageContext();

 const footnotes = [{
    en: "None of our services include writing a statement of purpose on behalf of the students",
    tr: "Hizmetlerimizin hiçbiri öğrenciler adına niyet mektubu yazmayı içermez",
 }, {
    en: "The packages do not include extra fees, such as application fees for each school, TOEFL and GRE/GMAT examination fees",
    tr: "Paketlerimiz, her okul için gerekli olan başvuru ücreti, TOEFL ve GRE/GMAT sınav ücreti gibi ek ücretleri içermez",
  }, {
    en: "We do not offer visa application support. It is the students' responsibility to make sure they have sufficient funds to document and cover educational expenses in the US",
    tr: "Vize başvurusu desteği sunmuyoruz. Öğrencilerin, ABD'deki eğitim masraflarını belgelemek ve karşılamak için yeterli miktarda paraya sahip olmaları kendi sorumluluklarıdır",
 }
]
  const SERVICE_PLANS =  [
    {
      name: {
        en: "Pre-assessment",
        tr : "Ön Değerlendirme",
      },
      price: 50,
      description: {
        en: "Eligibility and academic background assessment",
        tr: "Akademik geçmiş değerlendirmesi ve uygunluk belirleme",
      },
      features: {
        en: [
          "A 45-minute virtual meeting",
          "Assesment of academic background and interests",
          "Overview of application requirements",
          "Determining eligibility for studying in the US",
          "Briefing about the US education system",
        ],
        tr: [
          "45 dakikalık online görüşme",
          "Akademik geçmiş ve ilgi alanlarının değerlendirilmesi",
          "Başvuru gerekliliklerinin genel değerlendirmesi",
          "ABD'de eğitim almak için uygunluk belirlenmesi",
          "ABD eğitim sistemi hakkında bilgilendirme",
        ]
      },
    },
    {
      name: {
        en: "Standard Package",
        tr : "Standart Paket",
      },
      price: 1500,  
      description: {
        en: "Standard assistance with the entire application process",
        tr: "10 okula kadar başvuru sürecinin tamamında destek",
      },
      features: {
        en: [
          "Application support up to 10 universities",
          "Feedback on the Statement of Purpose with regards to grammar and coherence.",
          "Review of application documents for each school/program",
          "Resources for TOEFL/IELTS/GRE/GMAT",
          "Support for official communication with target schools",
          "Extra virtual meetings with students if necessary",
        ],
        tr: [
          "10 üniversiteye kadar başvuru desteği",
          "Niyet mektubuna dair dilbilgisi ve tutarlılık açısından geri bildirim",
          "Her okul/program için başvuru belgelerinin yeterliliğinin kontrolü",
          "TOEFL/IELTS/GRE/GMAT için kaynaklar",
          "Başvurmak istenilen okullarla resmi iletişim desteği",
          "Gerektiği taktirde ekstra online görüşmeler",
        ]
      },
    },
    {
      name: {
        en: "Full Package",
        tr : "Full Paket",
      },
      price: 3000,
      description: {
        en: "The highest level of assistance with the entire application process",
        tr: "10 okula kadar başvuru sürecinin tamamında en üst düzeyde destek",
      },
      features: {
        en: [
          "Everything included in the Standard Package",
          "Managing the students’ application portal ",
          "Ensuring the timely submission of all application documents within the specified application deadline",
          "Exploring extensive student loans and financial aid opportunities",
        ],
        tr: [
          "Standart Paket'te yer alan tüm hizmetler",
          "Öğrencinin başvuru portalının yönetimi",
          "Belirtilen başvuru süresi içinde tüm başvuru belgelerinin zamanında gönderilmesinin sağlanması",
          "Uluslararasi öğrenci kredileri ve mali yardım fırsatlarının araştırılması",
        ]
      },
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {language === "en" ? "Exploring graduate-level education opportunities in the US?" : "ABD'de lisansüstü eğitim fırsatları mı arıyorsunuz?"}  
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
           {language === "en" ? "We know how daunting the grad school applications in the US are. Here at X, we are offering a variety of services to help you with the entire application process." :
            "ABD'de lisansüstü eğitim başvurularının ne kadar zor olduğunu biliyoruz. X olarak, başvuru sürecinin her aşamasında size yardımcı olmak için çeşitli hizmetler sunuyoruz."}
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3  md:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {SERVICE_PLANS.map((plan, index) => (
            <ServicePlan
              key={index}
              name={language === "en" ? plan.name.en : plan.name.tr }
              description={language === "en" ? plan.description.en : plan.description.tr }
              price={plan.price}
              features={language === "en" ? plan.features.en : plan.features.tr }
               />
          ))}
        </div>
      </div>
      <Footnotes footnotes={footnotes} />

    </section>
  );
}
