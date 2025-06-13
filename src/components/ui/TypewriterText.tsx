import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  text: string;
  delay?: number;
  triggerElement?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean;
}

export function TypewriterText({
  text,
  delay = 0.015,
  triggerElement,
  start = "top 90%",
  end = "top 20%",
  scrub = false,
}: Props) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = text.split("");
    textRef.current.innerHTML = ""; // Clear the element

    // Create a timeline for the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement || textRef.current,
        start,
        end,
        scrub,
        toggleActions: "play none none none",
      },
    });

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      textRef.current?.appendChild(span);

      tl.to(
        span,
        {
          opacity: 1,
          duration: 0.01,
        },
        i * delay
      );
    });
  }, [text, delay, triggerElement, start, end, scrub]);

  return <span ref={textRef} />;
}
