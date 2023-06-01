import PageStyler from "../components/PageStyler";
import ApplicationForm from "../components/ApplicationForm";
import RecaptchaProvider from "../components/RecaptchaProvider";
import PageIntroduction from "../components/PageIntroduction";
export default function Apply() {
  return (
    <RecaptchaProvider>
      <PageStyler>
        <main>
          <PageIntroduction
            title={{
              en: "We are so excited to get your application!",
              tr: "Başvurunuzu heyecanla bekliyoruz! ",
            }}
            description={{
              en: "Please fill out the form below so we can get to know you better and assist you in the best way possible. The form consists of 5 parts and should take about 7-8 minutes to complete.",
              tr: "Size en iyi şekilde yardımcı olabilmemiz için lütfen aşağıdaki formu doldurun. Form 5 kısımdan oluşmaktadır ve doldurması yaklaşık 7-8 dakika sürmektedir.",
            }}
          />
          <ApplicationForm />
        </main>
      </PageStyler>
    </RecaptchaProvider>
  );
}
