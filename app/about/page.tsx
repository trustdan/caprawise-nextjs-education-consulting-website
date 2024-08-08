import React from 'react';
import Cofounder from "../components/Cofounder";
import PageIntroduction from "../components/PageIntroduction";
import PageStyler from "../components/PageStyler";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About us",
};

interface CofounderData {
  name: string;
  title: {
    en: string;
    tr: string;
  };
  description: {
    en: string;
    tr: string;
  };
  imagePath: string;
  imageAlt: string;
}

const COFOUNDERS: CofounderData[] = [
  {
    name: "Zach Capra",
    title: {
      en: "Co-founder",
      tr: "",
    },
    description: {
      en: `With over 15 years of experience spanning legal, consulting, and
private equity contexts, Zach has cultivated multifaceted
expertise that equips him to lead complex engagements.

His background in the law with positions in the military and
state government provided strong foundations in
communication, strategy, analytical thinking, and leading teams.
He leveraged these skills to excel in management consulting,
driving growth strategies, operational excellence, and
transformations for industry leaders.

His diverse professional experiences gives him unique
perspectives to uncover opportunities and devise creative
solutions. He has led numerous M&A diligence and integration
initiatives, devising data-driven synergies assessments and
cultural integration plans. He has spearheaded organizational
restructures, realigning elements from structure to processes
to management style to optimize performance. And he has
developed expansive growth strategies for new market entry,
product/service expansion, and inorganic growth options.

With his intellectual curiosity, strategic
orientation, and passion for developing talent,
he is uniquely positioned to lead any strategy,
consulting, diligence, or integration engagement.

His experience allows him to quickly
understand ambiguous problems, draw
insights from disparate data, and collaborate
cross-functionally to drive transformative
change.`,
      tr: "", // Add Turkish translation here
    },
    imagePath: "/Capra-Zachary.jpg",
    imageAlt: "Image of Zach Capra - one of the co-founders",
  },
  {
    name: "Marie Wise",
    title: {
      en: "Co-founder",
      tr: "",
    },
    description: {
      en: "",
      tr: "",
    },
    imagePath: "/Marie.jpg",
    imageAlt: "Image of Marie Wise - one of the co-founders",
  },
];

const ABOUT_PAGE_INTRODUCTION = {
  title: {
    en: "Our Team",
    tr: "Ekibimiz",
  },
  description: {
    en: "Our team members have completed their master's and doctoral degrees and are currently residing in the United States.",
    tr: "Ekip üyelerimiz yüksek lisans ve doktora süreçlerinden geçmiş olup, şu anda ABD'de ikamet etmektedir.",
  },
};

export default function About() {
  return (
    <PageStyler>
      <section
        id="our-team"
        className="h-full px-5 lg:pb-8 pb-5 min-h-[calc(100svh-12rem)]"
      >
        <PageIntroduction
          title={ABOUT_PAGE_INTRODUCTION.title}
          description={ABOUT_PAGE_INTRODUCTION.description}
        />
        <div className="flex flex-col justify-center gap-5 lg:gap-10">
          {COFOUNDERS.map((cofounder, index) => (
            <Cofounder
              key={cofounder.name}
              name={cofounder.name}
              description={cofounder.description}
              imagePath={cofounder.imagePath}
              imageAlt={cofounder.imageAlt}
              index={index}
            />
          ))}
        </div>
      </section>
    </PageStyler>
  );
}