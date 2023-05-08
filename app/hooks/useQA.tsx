import { useLayoutEffect, useRef, useState } from "react";
import { useLanguageContext } from "./useLanguageContext";
import { gsap } from "gsap";
export default function useQA() {

  const QARef = useRef<any>(null);

  useLayoutEffect(() => {
    // GSAP Animations  

    const tl = gsap.timeline();
    
    tl.from(QARef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const language = useLanguageContext().language;

  return { isOpen, setIsOpen, language, QARef };
}

