import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function FormWrapper({ children }) {
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
      className='p-common shadow-md dark:shadow-sm shadow-background-dark dark:shadow-background-light
      rounded-2xl bg-middleground-light dark:bg-middleground-dark'
    >
      {children}
    </div>
  );
}

export default FormWrapper;
