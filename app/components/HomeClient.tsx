"use client";
import FeatureCard from ".././components/FeatureCard";
import MovingSlider from ".././components/MovingSlider";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import { useLanguageContext } from "../hooks/useLanguageContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HomeClient() {
  const { language } = useLanguageContext();
  const FEATURES_DATA = [
    {
      title: {
        en: "TOEFL/GRE Advising",
        tr: "TOEFL/GRE Danışmanlığı",
      },
      description: {
        en: "Navigating the TOEFL or GRE can seem intimidating, but our team of distinguished English teachers, all possessing Master’s and PhD degrees, is ready to assist. We’ll offer customized advising and support to help you achieve your optimal score. Our experienced instructors will work closely with you to identify your specific needs and design a comprehensive study plan that maximizes your potential for success.",
        tr: "TOEFL veya GRE sınavlarına hazırlanmak göz korkutucu bir süreç, ancak yüksek lisans ve doktora derecelerine sahip deneyimli İngilizce öğretmenlerimizden oluşan ekibimiz ile size yardımcı olmak için hazırız. Başvurunuz için olmazsa olmaz olan bu sınavlarda en yüksek puanınızı elde etmenize yardımcı olmak için size özel danışmanlık ve destek sunacağız. ",
      },
    },
    {
      title: {
        en: "Statement of Purpose Feedback",
        tr: "Niyet Mektubu Desteği",
      },
      description: {
        en: "Our team will provide you with all the assistance you need to craft a compelling narrative that showcases your unique strengths and experiences in your statement of purpose. We understand the importance of a well-written and impactful SOP in the admissions process, and we are dedicated to helping you create a personalized and persuasive document that sets you apart from other applicants.",
        tr: "Ekibimiz, niyet mektubunuzda benzersiz güçlü yönlerinizi ve deneyimlerinizi sergileyen etkileyici bir anlatım oluşturmanız için ihtiyacınız olan tüm yardımı size sağlayacaktır. Kabul sürecinde iyi yazılmış ve etkileyici bir SOP'un önemini biliyoruz ve sizin diğer başvuru sahiplerinden farkınızı ortaya koyan kişisel ve ikna edici bir belge oluşturmanıza yardımcı olmak için özveriyle çalışacağız.",
      },
    },
    {
      title: {
        en: "Financial Aid Opportunities",
        tr: "Burs/Kredi Fırsatları",
      },
      description: {
        en: "We’ll help you navigate the complex world of financial aid and identify opportunities to fund your education. From scholarships to grants and loans, we’ll help you maximize your chances of receiving financial support.",
        tr: "ABD'de lisansüstü eğitim için burs ve kredi fırsatlarıyla ilgili tüm süreçlerde size yardımcı oluyoruz. Böylece burs ve kredi alma şansınızı en üst düzeye çıkarıyoruz.",
      },
    },
    {
      title: {
        en: "Briefing Sessions",
        tr: "Kısa Bilgilendirme Toplantıları",
      },
      description: {
        en: "Our briefing sessions provide valuable insights into the admissions process. You’ll learn insider tips and strategies from our team of experts, helping you to stand out from the competition and increase your chances of acceptance.",
        tr: "Süreç boyunca size yol gösterecek kısa bilgilendirme toplantılarımızda, başvurularınızın gidişatını değerlendirip, diğer adayların önüne geçmenizi sağlayacak ve kabul şansınızı artıracak stratejileri paylaşıyoruz.",
      },
    },
    {
      title: {
        en: "Equity, Diversity and Inclusion Statement",
        tr: "Toplumsal Eşitlik ve Kapsayıcılık Mektubu",
      },
      description: {
        en: "Embracing diversity is crucial in the US, and it can significantly impact your admissions outcome. Our skilled team will assist you in creating a compelling diversity statement that showcases your distinctive experiences and viewpoints, and underscores your dedication to fostering diversity and inclusion",
        tr: "ABD'de ki kozmopolit topluma entegre olmak, dil, din, ırk, cinsiyet eşitliği ve kapsayıcılık konularında farkındalık yaratmak ve bu konularda kendinizi ifade etmek başvurunuzun en önemli bileşenlerindendir. Bu konuda kendinize özgü deneyimlerinizi ve bakış açınızı sergileyen ikna edici bir anlatı oluşturmanıza yardımcı oluyoruz.",
      },
    },
    {
      title: {
        en: "Ivy League Applications",
        tr: "Ivy League Başvuruları",
      },
      description: {
        en: "Getting into an Ivy League school is a dream for many students, but very few are accepted. Our team will help you craft a compelling application that showcases your unique strengths and experiences, helping you to stand out from the competition and increase your chances of being in the top 5% of the applicants.",
        tr: "Ivy League okullarına girmek birçok öğrencinin hayalidir, ancak çok az öğrenci kabul edilir. Ekibimiz, sadece akademik değil, sosyal ve kültürel yönlerinizi de göz önünde bulundurarak, size özel güçlü yönlerinizi ve deneyimlerinizi sergileyen ikna edici bir başvuru oluşturmanıza yardımcı olarak %5'lik dilime girme şansınızı arttıracaktır.",
      },
    },
    {
      title: {
        en: "Application to Law Schools and Bar Exams",
        tr: "Hukuk Fakültelerine ve Baro Sınavlarına Başvuru",
      },
      description: {
        en: "We provide support to individuals who have completed their law education in Turkey and aim to enhance their careers through prestigious American law schools' master's, doctoral, and certificate programs, as well as those who wish to practice law in the USA by registering with globally recognized bars such as the New York and California State Bar Associations. We also assist aspiring lawyers who wish to pursue their legal education in the USA. Our team handles all aspects of the application process, including correspondence between the candidate and the Law School Admission Council (LSAC), and preparation for bar exams. Having personally gone through the same procedures, our consultants guide candidates through the entire process.",
        tr: "Türkiye’de hukuk eğitimini tamamlamış ve kariyerine saygın Amerikan hukuk fakültelerinin yüksek lisans, doktora ve sertifika programları ile güç katmak isteyen hukukçulara, mesleğini New York ve California Baroları gibi dünya çapında tanınırlığa sahip barolara kaydolarak ABD’de icra etmek isteyen avukatlara ve hukuk eğitimini ABD’de almak isteyen tüm hukukçu adaylarına uzman ekibimiz ile başvuru süreçlerinde destek sağlıyoruz. Adayımız ve LSAC (the Law School Admission Council) arasındaki yazışmaların yapılmasından, baro sınavlarına hazırlık sürecine kadar, aynı prosedürlerden bizzat geçmiş danışman kadromuz ile tüm süreci beraber yürütüyoruz.",
      },
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.fromTo(
      ".gsap-section-1",
      {
        scale: 0.9,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
        stagger: {
          each: 0.1,
        },
      }
    );

    tl.fromTo(
      ".home-section-2",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".home-section-2",
          scrub: true,
          start: "top 90%",
          end: "top 20%",
        },
      }
    );

    tl.fromTo(
      "#home-section-3",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#home-section-3",
          scrub: true,
          start: "top 90%",
          end: "top 20%",
        },
      }
    );
  }, []);

  return (
    <main>
      <section
        className="grid grid-cols-1  place-content-center gap-10 min-h-[calc(100svh-4rem)] px-5"
        id="home-section-1"
      >
        <div className="gsap-section-1 flex items-center justify-center h-min opacity-0">
          <Image
            src={"/998.svg"}
            alt="a graduation cap doodle"
            width={0}
            height={0}
            className="w-[600px] h-fit dark:invert"
            priority={true}
          />
        </div>
        <h1 className="gsap-section-1 text-5xl lg:text-6xl font-semibold max-w-[600px] text-center mx-auto pt-2 opacity-0">
          {language === "en"
            ? "Boost Your Career With a Graduate Degree from the US"
            : "ABD Diplomasıyla Kariyerinizde Fark Yaratın"}
        </h1>
        <div className="gsap-section-1 opacity-0">
          <MovingSlider
            width={500} // width of the elements in the slider(not the container)
            texts={[
              {
                en: "Academic English Program",
                tr: "Akademik İngilizce Programı",
              },
              { en: "Master's Degree", tr: "Yüksek Lisans" },

              { en: "PhD", tr: "Doktora" },
            ]}
          />
        </div>
      </section>
      <section
        id="home-section-2"
        className=" grid place-content-center gap-10 px-5 py-16 bg-LIGHT_SECONDARY_BG_COLOR dark:bg-DARK_SECONDARY_BG_COLOR"
      >
        <h1 className=" home-section-2 md:text-5xl text-3xl font-extrabold text-center">
          {language === "en" ? "What Do We Offer?" : "Neler Sunuyoruz?"}
        </h1>
        <div className="home-section-2 grid gap-10 md:grid-cols-2 max-w-[1440px] md:[&>*:last-child]:col-span-2">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      <section id="home-section-3" className="grid place-items-center py-16">
        <div className="mx-5 flex flex-col gap-8 justify-center items-center max-w-2xl">
          <h1 className="md:text-5xl text-3xl font-extrabold text-center px-5">
            {language === "en"
              ? "Why Helios Admissions?"
              : "Neden Helios Admissions?"}
          </h1>
          <Image
            src="/195.svg"
            alt="helios image"
            width={700}
            height={700}
            className="rounded-2xl dark:invert"
          />

          {language === "en" ? (
            <p className="text-justify min-h-full flex-1 text-gray-500 dark:text-gray-400">
              Helios Admissions provides professional consultancy services to
              candidates who want to study in the USA. Since its establishment,
              our company has carried out comprehensive studies on academic
              consultancy in various fields and has been appreciated for its
              service quality and customer satisfaction.
              <br />
              <br /> Founded by a professor and a software developer, Helios
              Admissions has developed international education solutions that
              are suitable for the realities of our country and the needs and
              potentials of our students in today’s globalized world conditions.
              It has enabled dozens of students to make correct choices and
              manage their application processes correctly by participating in
              different programs abroad with education, career, and cultural
              exchange programs. Helios Admissions has not only established
              strong and diverse connections in the USA but also has the
              infrastructure to provide direct service both abroad and at home
              by organizing in different states.
              <br /> <br /> Its strong academic staff and working model,
              consisting of people who have gone through the admission process
              of universities in the USA make Helios Admissions superior to many
              institutions in the sector and ensure that the service quality is
              high.
            </p>
          ) : (
            <p className="text-justify min-h-full flex-1  text-gray-500 dark:text-gray-400">
              Helios Admissions Amerika’da eğitim almak isteyen adaylara
              profesyonel danışmanlık hizmeti vermektedir. Şirketimiz kurulduğu
              günden günümüze kadar pek çok alanda akademik danışmanlık üzerine
              kapsamlı çalışmalar yapmış, verdiği hizmet kalitesi ve müşteri
              memnuniyeti ile takdir edilmiştir.
              <br />
              <br /> Kurucuları akademisyen ve yazılımcı olan Helios Admissions,
              günümüzün globalleşen dünya koşullarında, ülkemizin gerçekleri
              veöğrencilerimizin ihtiyaç ve potansiyellerine uygun olarak
              yurtdışı eğitim çözümleri üretmiş, bugüne kadar onlarca öğrencinin
              dogru tercihler yaparak ve basvuru süreçlerini doğru yöneterek
              değişik programlarla yurtdışında eğitim, kariyer ve kültürel
              değişim programlarına başarıyla katılmalarını sağlamıştır.Helios
              Admissions, Amerika’da çok güçlü ve çeşitli bağlara sahip
              olmasının yanı sıra farkli eyaletlerde örgütlenerek hem yurt
              dışında hem de yurt içinde doğrudan hizmet sağlayabilecek
              altyapıya sahip olmuştur. <br /> <br /> Amerika’daki
              üniversitelerin kabul süreçlerinden geçmiş ve süreci bizzat
              deneyimlemiş kişilerden oluşan güçlü akademik kadrosu ve çalışma
              modeli Helios Admissions’i sektörde birçok kuruluştan üstün
              kılmakta ve hizmet kalitesinin üst düzeyde olmasını sağlamaktadır.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
