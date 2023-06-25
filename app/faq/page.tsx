import QA from "../components/QA";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";

export const metadata = {
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
        en: "No, we do not guarantee admission to the schools applied for. Under no circumstancens, we recommend applying to low-tier schools that accept everyone for a fee. It is crucial for us to diligently evaluate every school the students apply for and make sure that they are a good fit for the student.",
        tr: "Hayır, başvurulan okullara kesin kabul garantisi vermiyoruz, veren kişi ve kuruluşlardan da uzak durmanızı tavsiye ediyoruz. Herkesi ücret karşılığında kabul eden düşük seviyeli okulları kesinlikle önermiyoruz. Öğrencilerin başvurdukları her okulu titizlikle değerlendirmek ve öğrencilerimiz için uygun olup olmadığından emin olmak en temel prensiplerimizdendir.",
      },
    },
    {
      question: {
        en: "Can you write my essays for me?",
        tr: "Başvuru için gereken niyet mektubu ve benzeri yazıları siz yazabilir misiniz?",
      },
      answer: {
        en: "No, it is against our principles to write essays for students. However, we will provide you with the necessary guidance and review it for you as many times as you need to make sure that it is perfect for your application.",
        tr: "Hayır, öğrenciler adına niyet mektubu yazı yazmak prensip olarak tamamen karşı olduğumuz bir konudur. Ancak, niyet mektubunuz dahil olmak üzere, başvuru için gerekli olan tüm metinleri yazarken size gerekli yönlendirmeyi fazlasıyla yapacak ve yazılarınızı başvurunuz için uygun olup olmadığından emin olana kadar tekrar tekrar gözden geçireceğiz.",
      },
    },
    {
      question: {
        en: "Would it not increase my chances of getting accepted if I have someone else or an application like ChatGPT write my essays for me?",
        tr: "Niyet mektubumu başkasına veya ChatGPT gibi bir uygulamaya yazdırmak kabul şansımı arttırmaz mı?",
      },
      answer: {
        en: "The essays, especially your statement of purpose, is the most important part of your application. It is also the only part of your application where you can express yourself and your motivations. If you have someone else write it for you, it will be obvious to the admissions committee that it is not your work.In addition, many admissions committe now use ai tools to detect if a text/essay was written by a large language model like ChatGPT. This will most likely result in your application being rejected right away.",
        tr: "Niyet mektubunuz başta olmak üzere, başvurunuzda kaleme alacağınız yazılar, başvurunuzun en önemli parçasıdır. Aynı zamanda kendinizi ve motivasyonunuzu ifade edebileceğiniz tek kısımdır. Başkasına veya ChatGPT gibi dil modellerine yazdırdığınızda, kabul komitesini etkilemek daha da zor olacaktır. Ayrıca, birçok kabul komitesi artık ChatGPT gibi büyük dil modellerinin yazdığı bir metni/niyet mektubunu tespit etmek için yapay zeka araçları kullanmaktadır. Bu durumda başvurunuzun reddedilmesi çok olasıdır.",
      },
    },
    {
      question: {
        en: "I am not sure if my English is good enough to apply to a school in the US. Can you help me with that?",
        tr: "İngilizcemin ABD'de bir okula başvurmak için yeterli olup olmadığından emin değilim. Bana bu konuda yardımcı olabilir misiniz?",
      },
      answer: {
        en: "Yes, absolutely we can. Our team members have experienced English teachers with a Master's Degree and PhD. We will evaluate your English level together and let you know if it is good enough for your application.",
        tr: "Evet, kesinlikle. Ekibimizde yüksek lisans ve doktora derecesine sahip deneyimli ingilizce öğretmenleri bulunmaktadır. Başvurunuzdan önce ingilizcenizi birlikte değerlendirip, başvuru için yeterli olup olmadığını sizinle paylaşacağız.",
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
        tr: "Harika! Bir sonraki adım web sitemizdeki başvuru formunu doldurmanız olacaktır. Formunuzu aldıktan sonra, en kısa sürede size geri dönüş sağlayıp, bir online ön değerlendirme görüşmesi planlayacağız.",
      },
    },
    {
      question: {
        en: "I have never been abroad before. I am not sure if I can handle living in a foreign country. Can you help me with that?",
        tr: "Daha önce hiç yurt dışına çıkmadım. Yabancı bir ülkede yaşayıp öğrencim görebileceğimden emin değilim. Bana bu konuda yardımcı olabilir misiniz?",
      },
      answer: {
        en: "We are ready to answer all your questions from academic life in the US to daily life.",
        tr: "ABD'deki akademik hayattan günlük yaşama kadar tüm sorularınızı cevaplamaya hazırız.",
      },
    },
    {
      question: {
        en: "Is Helios Admissions based in the US?",
        tr: "Helios Admissions şirketi ABD merkezli mi?",
      },
      answer: {
        en: "Yes, Helios Admissions is based in the US. However, Helios Admissions is also registered in Turkey. Our team members reside in New York City and Chicago.",
        tr: "Evet, Helios Admissions ABD merkezli olup, aynı zamanda Türkiye'de de kayıtlıdır. Ekip üyelerimiz New York ve Chicago'da yaşamaktadır.",
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
        en: "My undergraduate GPA is below 2.5. Can I still apply to US universities?",
        tr: "Lisans not ortalamam 2.5'ın altında. Yine de ABD üniversitelerine başvurabilir miyim?",
      },
      answer: {
        en: "While most schools have a GPA cutoff, it is possible to explain why your gpa is low in your statement of purpose and still get accepted. We can help you with that.",
        tr: "Birçok okulun not ortalaması sınırı olsa da, niyet mektubunuz da not ortalamanızın neden düşük olduğunu detaylıca açıklayıp, kabul alabilirsiniz. Bu konuda size yardımcı olabiliriz.",
      },
    },
    {
      question: {
        en: "My undergraduate degree is in a different field than the one I want to pursue in graduate school. Can I still apply?",
        tr: "Lisans bölümüm, yüksek lisans yapmak istediğim bölümle alakalı değil. Yine de başvurabilir miyim?",
      },
      answer: {
        en: "Absolutely! In this case, you will need to explain your motivation in detail in your statement of purpose and take some prerequisite courses beforehand. If you need a concrete example, one of our founding members, Oğuzhan Yangöz, completed his undergraduate degree in English Language Teaching and his graduate degree in Computer Science at George Washington University.",
        tr: "Kesinlikle! Bu durumda, niyet mektubunuzda motivasyonunuzu detaylıca açıklamanız ve bazı önkoşul derslerini önceden almanız gerekecektir. Somut bir kanıt sunmak gerekirse, kurucu üyelerimizden biri olan Oğuzhan Yangöz de lisans eğitimini İngilizce Öğretmenliği alanında tamamlamış ve yüksek lisansını George Washington Üniversitesi Bilgisayar Bilimleri alanında yapmıştır.",
      },
    },
    {
      question: {
        en: "Are universities in the US free?",
        tr: "ABD'deki üniversiteler ucretsiz mi?",
      },
      answer: {
        en: "No, universities in the US are not free. However, there are many scholarships and financial aid opportunities available for international students.",
        tr: "Hayır, ABD'deki üniversiteler ücretsiz değildir. Ancak, uluslararası öğrenciler için birçok burs ve mali yardım imkanı bulunmaktadır.",
      },
    },
    {
      question: {
        en: "Are there any full-ride scholarships available for international students in the US?",
        tr: "ABD'deki uluslararası öğrenciler için tam burs imkanı var mı?",
      },
      answer: {
        en: "For Master's programs, it is very difficult to get a full-ride scholarship. However, getting a full-ride scholarship for PhD programs is much more likely.That being said, there are some external scholarship programs that cover all your educational expenses such as the Fulbright Scholarship.",
        tr: "Yüksek lisans programları için tam burs almak çok zordur. Ancak, doktora programları için tam burs almak çok daha olasıdır. Bununla birlikte, Fulbright Bursu gibi tüm eğitim masraflarınızı karşılayan bazı harici burs programları bulunmaktadır.",
      },
    },
    {
      question: {
        en: "Do you provide services for undergraduate students?",
        tr: "Lisans öğrencileri için hizmet veriyor musunuz?",
      },
      answer: {
        en: "For undergraduate students, we only provide short-term language school programs. We do not provide services for undergraduate admissions.",
        tr: "Lisans öğrencileri için sadece kısa süreli dil okulu programları sağlıyoruz. Lisans programı kabulleri için hizmet vermiyoruz.",
      },
    },
    {
      question: {
        en: "Are there any age restrictions for graduate programs?",
        tr: "Yüksek lisans ve Doktora programları için yaş sınırı var mı?",
      },
      answer: {
        en: "No, there are no age restrictions for graduate programs. Students of all ages are welcome to apply.",
        tr: "Hayır, yüksek lisans ve doktora programları için yaş sınırı yoktur. Tüm yaşlardaki öğrenciler başvurabilir.",
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
