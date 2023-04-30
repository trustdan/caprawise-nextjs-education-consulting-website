import Faq from "../components/QA";

export default function FAQ() {
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
    <main className="flex flex-col items-center justify-center p-5">
      <h1 className="text-3xl font-bold">{}</h1>
      <div className="flex flex-col w-full max-w-3xl mt-8">
        {FAQ_DATA().map((faq) => (
          <Faq
            key={faq.question.en}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </main>
  );
}
