import QA from "../components/QA";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | SSS",
  description: "Frequently Asked Questions | Sıkça Sorulan Sorular",
};

export default function FAQ() {
  const FAQ_PAGE_INTRO = {
    title: {
      en: "Frequently Asked Questions",
      tr: "Sıkça Sorulan Sorular",
    },
    description: {
      en: "Here are some of the questions you may have and their answers.",
      tr: "Aklınıza gelebilecek soruların bazıları ve cevapları",
    },
  };

  const FAQ_DATA = () => [
    {
      question: {
        en: "Do you guarantee admission to the schools applied for?",
        tr: "Başvurulan okullara kesin kabul garantisi veriyor musunuz?",
      },
      answer: {
        en: "While we are very confident in our services and the quality of our work, we cannot guarantee admission to any school due to the various factors that make up the application process.",
        tr: "Danışmanlığımızdan ve hizmet kalitemizden son derece emin olsak da, herhangi bir okula kesin kabul garantisi vermemiz başvuru sürecinin yapısı gereği mümkün değildir.",
      },
    },
    {
      question: {
        en: "I am not sure if my English is good enough to apply to a school in the US. Can you help me with that?",
        tr: "İngilizcemin ABD'de bir okula başvurmak için yeterli olup olmadığından emin değilim. Bana bu konuda yardımcı olabilir misiniz?",
      },
      answer: {
        en: "Absolutely we can. Our team has experienced English language teachers with a Master's Degree and PhD. We will evaluate your English level together and let you know if it is good enough for your application.",
        tr: "Kesinlikle. Ekibimizde yüksek lisans ve doktora derecesine sahip deneyimli ingilizce öğretmenleri bulunmaktadır. Başvurunuzdan önce ingilizcenizi birlikte değerlendirip, başvuru için yeterli olup olmadığını sizinle paylaşacağız.",
      },
    },
    {
      question: {
        en: "I am a bit confused about the service packages you offer. How can I reach out to you to get more information?",
        tr: "Sunduğunuz hizmet paketlerinizde kafama takılan bazı noktalar var. Bu konuda daha fazla bilgi almak için size nasıl ulaşabilirim?",
      },
      answer: {
        en: "You can reach out to us via our contact form on our website or send us an email at info@heliosadmissions.com",
        tr: "Web sitemizdeki iletişim formunu kullanarak veya info@heliosadmissions.com adresine e-posta göndererek bizimle iletişime geçebilirsiniz.",
      },
    },
    {
      question: {
        en: "I have reviewed your packages and I would like to get started. What is the next step?",
        tr: "Paketlerinizi inceledim ve sizden danışmanlık almak istiyorum. Nasıl bir yol izlemeliyim?",
      },
      answer: {
        en: "Great! The next step is to fill out our application form on our website. We will get back to you as soon as possible and schedule an online pre-assessment session with you.",
        tr: "Harika! Bir sonraki adım web sitemizdeki başvuru formunu doldurmanız olacaktır. Formunuzu aldıktan sonra, en kısa sürede size geri dönüş sağlayıp, Google Meet üzerinden bir ön değerlendirme görüşmesi planlayacağız.",
      },
    },
    {
      question: {
        en: "I have never been abroad before. I am not sure if I can handle living in a foreign country. Can you help me with that?",
        tr: "Daha önce hiç yurt dışına çıkmadım. Yabancı bir ülkede yaşayıp öğrencim görebileceğimden emin değilim. Bana bu konuda yardımcı olabilir misiniz?",
      },
      answer: {
        en: "As a team that has resided in the US both as a student and a professional, we are ready to answer all your questions from academic life to daily life in the US.",
        tr: "ABD'de ikamet eden ve lisanüstü eğitim süreçlerinden geçen bir ekip olarak, ABD'deki akademik hayattan günlük yaşama kadar tüm sorularınızı cevaplamaya hazırız.",
      },
    },
    {
      question: {
        en: "Is Helios Admissions based in the US?",
        tr: "Helios Admissions şirketi ABD merkezli mi?",
      },
      answer: {
        en: "Yes, Helios Admissions is based in the US. However, Helios Admissions is also registered in Turkey. Our team members reside in New York City and Chicago.",
        tr: "Evet, Helios Admissions ABD merkezli olup, aynı zamanda Türkiye'de de kayıtlıdır. Ekip üyelerimiz New York ve Chicago'da ikamet etmektedir.",
      },
    },
    {
      question: {
        en: "I have no idea about the TOEFL and/or GRE exams. Can you inform me about them?",
        tr: "TOEFL ve/veya GRE sınavları hakkında hiçbir fikrim yok. Bu konuda bana bilgi verebilir misiniz?",
      },
      answer: {
        en: "Yes, we will provide you with all the information you need about the TOEFL and GRE exams. We will also help you with the preparation process.",
        tr: "Evet, TOEFL ve GRE sınavları hakkında ihtiyacınız olan tüm bilgileri size sağlayacağız. Ayrıca hazırlık sürecine dair de size öneriler de bulunacağız.",
      },
    },
    {
      question: {
        en: "My undergraduate GPA is below 2.5. Can I still apply to the universities in the US?",
        tr: "Lisans not ortalamam 2.5'ın altında. Yine de ABD üniversitelerine başvurabilir miyim?",
      },
      answer: {
        en: "While most schools have a GPA cutoff, it is possible to explain why your gpa is low in your statement of purpose and still get accepted.",
        tr: "Birçok okulun belirlediği minimum bir not ortalaması olsa da, niyet mektubunuz da not ortalamanızın neden düşük olduğunu detaylıca açıklayıp, kabul alabilirsiniz.",
      },
    },
    {
      question: {
        en: "My undergraduate degree is in a different field than the one I want to pursue in graduate school. Can I still apply?",
        tr: "Lisans bölümüm, yüksek lisans yapmak istediğim bölümle alakalı değil. Yine de başvurabilir miyim?",
      },
      answer: {
        en: "Absolutely! In this case, you will need to explain your motivation in detail in your statement of purpose and take some prerequisite courses beforehand. ",
        tr: "Kesinlikle! Bu durumda, niyet mektubunuzda motivasyonunuzu detaylıca açıklamanız ve bazı önkoşul derslerini önceden almanız gerekecektir. ",
      },
    },
    {
      question: {
        en: "Are universities in the US free?",
        tr: "ABD'deki üniversiteler ucretsiz mi?",
      },
      answer: {
        en: "Unfortunately, the majority of the universities in the US are not free. However, there are many scholarships and financial aid opportunities available for international students.",
        tr: "Maalesef, ABD'deki üniversiteler ücretsiz değildir. Ancak, uluslararası öğrenciler için birçok burs ve mali yardım imkanı bulunmaktadır.",
      },
    },
    {
      question: {
        en: "Are there any full-ride scholarships available for international students in the US?",
        tr: "ABD'deki uluslararası öğrenciler için tam burs imkanı var mı?",
      },
      answer: {
        en: "For Master's programs, full-ride scholarships are very limited. However, getting a full-ride scholarship for PhD programs is much more likely. That being said, there are some external scholarship programs that cover all your educational expenses such as the Fulbright Scholarship.",
        tr: "Yüksek lisans programları için tam burs imkanları çok kısıtlıdır. Ancak, doktora programları için tam burs almak çok daha olasıdır. Bununla birlikte, Fulbright bursu gibi tüm eğitim masraflarınızı karşılayan bazı harici burs programları bulunmaktadır.",
      },
    },
    {
      question: {
        en: "Do you provide services for undergraduate students?",
        tr: "Lisans öğrencileri için hizmet veriyor musunuz?",
      },
      answer: {
        en: "For undergraduate students, we only provide short-term language school programs. We do not provide services for undergraduate admissions.",
        tr: "Lisans öğrencileri için sadece kısa süreli dil okulu programları sunuyoruz. Lisans programı başvuruları için hizmet vermiyoruz.",
      },
    },
    {
      question: {
        en: "Are there any age restrictions for graduate programs?",
        tr: "Yüksek lisans ve Doktora programları için yaş sınırı var mı?",
      },
      answer: {
        en: "No, there are no age restrictions for graduate programs. Students of all ages are welcome to apply.",
        tr: "Hayır, yüksek lisans ve doktora programları için yaş sınırı yoktur. Her yaş grubundan öğrenciler başvurabilir.",
      },
    },
    {
      question: {
        en: "Will I be able to work while I am studying in the US?",
        tr: "ABD'de okurken çalışabilir miyim?",
      },
      answer: {
        en: "You can only work on-campus for a maximum of 20 hours per week. However, you can work off-campus after your first year of study by proving that you are facing financial difficulties (Fluctuations in USD/TRY parity is a valid reason for requesting off-campus work authorization). In addition, you can do internship through Curricular Practical Training (CPT) and work full time/part time through Optional Practical Training (OPT) during and after your studies. Please contact us for more information.",
        tr: "Haftada maksimum 20 saat olmak üzere sadece okul bünyesinde (öğretim asistanı, kütüphane görevlisi vb) çalışabilirsiniz. Ancak, ilk yılınızı tamamladıktan sonra, mali zorluklarla karşı karşıya olduğunuzu kanıtlayarak (USD/TRY paritesindeki dalgalanmalar, kampüs dışında çalışma izni talep etmek için USCIS tarafından geçerli bir neden olarak kabul edilir) kampüs dışında çalışabilirsiniz. Ayrıca, eğitiminiz sırasında ve sonrasında Stajyerlik (CPT) ve İsteğe Bağlı Pratik Eğitim (OPT) programları aracılığıyla staj yapabilir veya yarı zamanlı/tam zamanlı olarak çalışabilirsiniz. Bu konuda daha detaylı bilgi için lütfen bizimle iletişime geçin.",
      },
    },
    {
      question: {
        en: "Do you provide visa consulting services for students?",
        tr: "Öğrenciler için vize danışmanlığı hizmeti veriyor musunuz?",
      },
      answer: {
        en: "Yes, we provide visa consulting services for students. We provide consulting services on preparing the required documents, filling out the DS-160 form, creating the SEVIS record, scheduling the visa interview, and practicing for the interview.",
        tr: "Evet, öğrenciler için vize danışmanlığı hizmeti veriyoruz. Gerekli belgeleri hazırlama, DS-160 formunu doldurma, SEVIS kaydı oluşturma, vize görüşmesi için randevu alma ve görüşmeye hazırlanma konularında danışmanlık hizmeti veriyoruz.",
      },
    },
    {
      question: {
        en: "Some agencies claim that students can work in the US while they are studying starting from the first year. Is this true?",
        tr: "Öğrenciler için vize danışmanlığı hizmeti veriyor musunuz?",
      },
      answer: {
        en: "Yes, we provide visa consulting services for students as a part of our service packages. We provide consulting services on preparing the required documents, filling out the DS-160 form, creating the SEVIS record, scheduling the visa interview, and practicing for the interview.",
        tr: "Evet, hizmet paketlerimizin kapsamı dahilinde öğrenciler için vize danışmanlığı hizmeti veriyoruz. Gerekli belgeleri hazırlama, DS-160 formunu doldurma, SEVIS kaydı oluşturma, vize görüşmesi için randevu alma ve görüşmeye hazırlanma konularında danışmanlık hizmeti veriyoruz.",
      },
    },
  ];
  return (
    <PageStyler>
      <main className="flex flex-col items-center">
        <PageIntroduction
          title={FAQ_PAGE_INTRO.title}
          description={FAQ_PAGE_INTRO.description}
        />
        <div className="w-full lg:max-w-5xl max-w-2xl pb-5 ">
          {FAQ_DATA().map((faq, index) => (
            <QA
              key={index + 1}
              question={faq.question}
              answer={faq.answer}
              order={index + 1}
            />
          ))}
        </div>
      </main>
    </PageStyler>
  );
}
