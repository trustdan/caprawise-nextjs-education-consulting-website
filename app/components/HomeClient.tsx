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
        en: "Navigating the TOEFL or GRE can seem intimidating, but our team of distinguished English teachers, all possessing Master’s and PhD degrees, is ready to assist. We’ll offer customized advising and support to help you achieve your optimal score.",
        tr: "TOEFL veya GRE sınavlarına hazırlanmak göz korkutucu görünebilir, ancak yüksek lisans ve doktora derecelerine sahip deneyimli İngilizce öğretmenlerimizden oluşan ekibimiz size yardımcı olmaya hazır. Başvurunuz için olmazsa olmaz olan bu sınavlarda en yüksek puanınızı elde etmenize yardımcı olmak için size özel danışmanlık ve destek sunacağız",
      },
    },
    {
      title: {
        en: "Statement of Purpose Feedback",
        tr: "Niyet Mektubu Desteği",
      },
      description: {
        en: "Our team will review your statement of purpose as many times as needed and provide detailed feedback to help you craft a compelling narrative that showcases your unique strengths and experiences.",
        tr: "Ekibimiz niyet mektubunuzu belirli standartlara erişene kadar defalarca gözden geçirecek ve güçlü yönlerinizi ve deneyimlerinizi sergileyen ikna edici bir anlatı oluşturmanıza yardımcı olacak ayrıntılı geri bildirimler sunacaktır.",
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
        en: "Equity, Diversity and Inclusion Statement Feedback",
        tr: "Toplumsal Eşitlik ve Kapsayıcılık Mektubu Desteği",
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
        tr: " Ivy League okullarına girmek birçok öğrencinin hayalidir, ancak çok az öğrenci kabul edilir. Ekibimiz, sadece akademik değil, sosyal ve kültürel yönlerinizi de göz önünde bulundurarak, size özel güçlü yönlerinizi ve deneyimlerinizi sergileyen ikna edici bir başvuru oluşturmanıza yardımcı olarak %5'lik dilime girme şansınızı arttıracaktır.",
      },
    },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.fromTo(
      ".gsap-section-1",
      {
        opacity: 0,
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
        <div className="gsap-section-1 flex items-center justify-center h-min">
          <Image
            src={"/998.svg"}
            alt="a graduation cap doodle"
            width={0}
            height={0}
            className="w-[600px] h-fit dark:invert"
          />
        </div>
        <h1 className="gsap-section-1 text-5xl lg:text-6xl lowercase font-semibold max-w-[600px] text-center mx-auto pt-2">
          {language === "en"
            ? "We Help You Get Into Your Dream School"
            : "Hayallerinizdeki Okula Girmenize Yardımcı Oluyoruz"}
        </h1>
        <div className="gsap-section-1">
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
        className=" grid place-content-center gap-10 px-5 py-16 lg:py-0 bg-LIGHT_SECONDARY_BG_COLOR dark:bg-DARK_SECONDARY_BG_COLOR min-h-[calc(100svh-4rem)]"
      >
        <h1 className=" home-section-2 md:text-5xl text-3xl font-extrabold text-center">
          {language === "en" ? "What Do We Offer?" : "Neler Sunuyoruz?"}
        </h1>
        <div className="home-section-2 grid gap-10 md:grid-cols-2 max-w-[1440px]">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
      <section
        id="home-section-3"
        className="grid place-items-center my-16 min-h-[calc(100svh-4rem)]"
      >
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
              consisting of people who have gone through the admission processes
              of universities in the USA and experienced the process personally,
              make Helios Admissions superior to many institutions in the sector
              and ensure that the service quality is high.
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
              Admissiıns, Amerika’da çok güçlü ve çeşitli bağlara sahip
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
