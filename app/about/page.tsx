import Cofounder from "../components/Cofounder";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";

export const metadata = {
  title: "About | Hakkımızda",
  description: "About us | Hakkımızda",
};

export default function About() {
  const COFOUNDERS = [
    {
      name: "Dr. Yasemin Karakoç",
      title: {
        en: "Co-founder",
        tr: "Kurucu",
      },
      description: {
        en: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, soluta laborum possimus assumenda dignissimos iste quasi similique est eum facere suscipit quia pariatur neque harum vitae vero debitis corporis? Suscipit dolores, culpa at quia cum ad eum reiciendis quaerat corporis dolorem error, temporibus sed quam minima voluptates soluta eaque accusantium ab deserunt perferendis repudiandae. Tempora esse aperiam molestias eligendi neque ipsam aut a perferendis, cumque ab minima facere odit laudantium velit impedit nam totam corporis amet explicabo sequi. Animi perferendis deleniti quo cum recusandae aut ipsa velit tempora a. Nisi tempore incidunt sed quam vel aperiam aliquid ab a voluptatem.",
        tr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in facere repudiandae unde tempore iusto nesciunt illo quam magnam, tenetur maxime pariatur consectetur molestiae vero magni numquam cupiditate ut? Aspernatur doloremque quibusdam incidunt saepe blanditiis pariatur iusto dolorem voluptate veniam, sequi, animi amet? Libero odit, minus nihil fugiat hic illum illo debitis reprehenderit assumenda voluptas explicabo earum magni soluta dolore incidunt quo cum perferendis et excepturi molestiae numquam tempora repellat rerum autem. Explicabo earum quas quo iure impedit, nostrum obcaecati, similique esse saepe, est enim nisi error eum velit consequuntur aspernatur dolor eos. Corrupti ut, ad beatae delectus sapiente laudantium.",
      },
      imagePath: "/OGUZHANYANGOZ2.jpeg",
      imageAlt: "Image of Yasemin Karakoç - one of the co-founders",
    },
    {
      name: "Oğuzhan Yangöz",
      title: "Co-founder",
      description: {
        en: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, soluta laborum possimus assumenda dignissimos iste quasi similique est eum facere suscipit quia pariatur neque harum vitae vero debitis corporis? Suscipit dolores, culpa at quia cum ad eum reiciendis quaerat corporis dolorem error, temporibus sed quam minima voluptates soluta eaque accusantium ab deserunt perferendis repudiandae. Tempora esse aperiam molestias eligendi neque ipsam aut a perferendis, cumque ab minima facere odit laudantium velit impedit nam totam corporis amet explicabo sequi. Animi perferendis deleniti quo cum recusandae aut ipsa velit tempora a. Nisi tempore incidunt sed quam vel aperiam aliquid ab a voluptatem.",
        tr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in facere repudiandae unde tempore iusto nesciunt illo quam magnam, tenetur maxime pariatur consectetur molestiae vero magni numquam cupiditate ut? Aspernatur doloremque quibusdam incidunt saepe blanditiis pariatur iusto dolorem voluptate veniam, sequi, animi amet? Libero odit, minus nihil fugiat hic illum illo debitis reprehenderit assumenda voluptas explicabo earum magni soluta dolore incidunt quo cum perferendis et excepturi molestiae numquam tempora repellat rerum autem. Explicabo earum quas quo iure impedit, nostrum obcaecati, similique esse saepe, est enim nisi error eum velit consequuntur aspernatur dolor eos. Corrupti ut, ad beatae delectus sapiente laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti in facere repudiandae unde tempore iusto nesciunt illo quam magnam, tenetur maxime pariatur consectetur molestiae vero magni numquam cupiditate ut? Aspernatur doloremque quibusdam incidunt saepe blanditiis pariatur iusto dolorem voluptate veniam, sequi, animi amet? Libero odit, minus nihil fugiat hic illum illo debitis reprehenderit assumenda voluptas explicabo earum magni soluta dolore incidunt quo cum perferendis et excepturi molestiae numquam tempora repellat rerum autem. Explicabo earum quas quo iure impedit, nostrum obcaecati, similique esse saepe, est enim nisi error eum velit consequuntur aspernatur dolor",
      },
      imagePath: "/OGUZHANYANGOZ2.jpeg",
      imageAlt: "Image of Oğuzhan Yangöz - one of the co-founders",
    },
  ];

  const ABOUT_PAGE_INTRODUCTION = {
    title: {
      en: "Our Team ",
      tr: "Ekibimiz",
    },
    description: {
      en: "We are a group of people who are passionate about helping others. We are here to help you.",
      tr: "Bizler, başkalarına yardım etmekten keyif alan bir grup insanız. Sizin yardımınız için buradayız.",
    },
  };

  return (
    <PageStyler>
      <main className="h-full px-5 pb-">
        <PageIntroduction
          title={ABOUT_PAGE_INTRODUCTION.title}
          description={ABOUT_PAGE_INTRODUCTION.description}
        />
        <div className="flex flex-col justify-center gap-5 py-5   ">
          {COFOUNDERS.map((cofounder) => (
            <Cofounder
              name={cofounder.name}
              description={cofounder.description}
              imagePath={cofounder.imagePath}
              imageAlt={cofounder.imageAlt}
              key={cofounder.name}
            />
          ))}
        </div>
      </main>
    </PageStyler>
  );
}
