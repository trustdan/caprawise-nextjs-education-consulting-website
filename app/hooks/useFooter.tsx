import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function useFooter() {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    // gsap animations
    gsap.from(footerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "ease-in-out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return { footerRef };
}
