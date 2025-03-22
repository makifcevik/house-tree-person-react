import React, { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
}

function FormWrapper({ children }: Props) {
  const wrapperRef = useRef(null); // Create a ref

  useGSAP(() => {
    gsap.from(wrapperRef.current, {
      opacity: 0,
      delay: 1,
      duration: 0.5,
      ease: "circ.in",
    });
  }, []);

  return (
    <div
      ref={wrapperRef} // Attach the ref to the div
      className='p-common border-black border-opacity-20 dark:border-white dark:border-opacity-10 border-2
      rounded-2xl bg-middleground-light dark:bg-middleground-dark'
    >
      {children}
    </div>
  );
}

export default FormWrapper;
