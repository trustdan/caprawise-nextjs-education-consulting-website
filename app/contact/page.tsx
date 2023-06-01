import PageStyler from "../components/PageStyler";
import ContactForm from "../components/ContactForm";
import PageIntroduction from "../components/PageIntroduction";
import RecaptchaProvider from "../components/RecaptchaProvider";

export const metadata = {
  title: "Contact | İletişim",
  description: "Contact us | Bize ulaşın",
};

export default function Contact() {
  const CONTACT_INTRODUCTION_DATA = {
    title: {
      en: "Any questions on your mind?",
      tr: "Bizimle iletişime geçin",
    },
    description: {
      en: "We look forward to hearing from you! Please fill out the form below and we will get back to you as soon as possible :)",
      tr: "Aklınıza takılan konular için bizimle iletişime geçin. Aşağıdaki formu doldurduktan sonra keyfinize bakın ve bizden haber bekleyin :)",
    },
  };
  return (
    <RecaptchaProvider>
      <PageStyler>
        <main>
          <PageIntroduction
            title={CONTACT_INTRODUCTION_DATA.title}
            description={CONTACT_INTRODUCTION_DATA.description}
          />
          <ContactForm />
        </main>
      </PageStyler>
    </RecaptchaProvider>
  );
}
