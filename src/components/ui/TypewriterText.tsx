import { useRef, useEffect } from "react";
import gsap from "gsap";

interface Props {
  text: string;
  delay?: number;
}

export function TypewriterText({ text, delay = 0.015 }: Props) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const chars = text.split("");
    textRef.current.innerHTML = ""; // Clear the element

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      textRef.current?.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        delay: i * delay, // Adjust typing speed (per character)
        duration: 0.01,
      });
    });
  }, [text]);

  return <span ref={textRef} />;
}
