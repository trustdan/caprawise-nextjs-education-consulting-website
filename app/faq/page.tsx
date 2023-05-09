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
        en: "What is React?",
        tr: "React nedir?",
      },
      answer: {
        en: "React is a JavaScript library for building user interfaces.",
        tr: "React, kullanıcı arayüzleri oluşturmak için kullanılan bir JavaScript kütüphanesidir.",
      },
    },
    {
      question: {
        en: "What is Next.js?",
        tr: "Next.js nedir?",
      },
      answer: {
        en: "Next.js is a React framework for production.",
        tr: "Next.js, üretim için bir React çatısıdır.",
      },
    },
    {
      question: {
        en: "What is Tailwind CSS?",
        tr: "Tailwind CSS nedir?",
      },
      answer: {
        en: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
        tr: "Tailwind CSS, özel kullanıcı arayüzleri oluşturmak için hızlı bir şekilde kullanılan bir CSS çatısıdır.",
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
        <div className="w-full max-w-3xl ">
          {FAQ_DATA().map((faq) => (
            <QA
              key={faq.question.en}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </main>
    </PageStyler>
  );
}
