import React, { useRef } from "react";
import gsap from "gsap";

function Paper({ header, text, icon, className }) {
  const paperRef = useRef();

  // !!! Disabled !!!
  const handleOnMouseEnter = () => {
    const paper = paperRef.current;

    // Get current border color before modifying
    const originalBorderColor = getComputedStyle(paper).borderColor;

    // Store original border color in dataset for resetting later
    paper.dataset.originalBorderColor = originalBorderColor;

    gsap.to(paper, {
      borderColor: "#0099FF",
      scale: 1.02,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  // !!! Disabled !!!
  const handleOnMouseLeave = () => {
    const paper = paperRef.current;

    // Reset to the stored original border color
    gsap.to(paper, {
      borderColor: paper.dataset.originalBorderColor || "",
      scale: 1,
      duration: 0.2,
      ease: "power2.in",
    });
  };

  return (
    <div
      ref={paperRef}
      className={`p-common rounded-xl border-2 border-black dark:border-white
       border-opacity-20 dark:border-opacity-20 shadow-sm dark:shadow-md shadow-black dark:shadow-black
        ${className}`}
      // onMouseEnter={handleOnMouseEnter}
      // onMouseLeave={handleOnMouseLeave}
    >
      <span className='text-3xl'>{icon}</span>
      <h5 className='text-theme-color text-lg my-4'>{header}</h5>
      <p>{text}</p>
    </div>
  );
}

export default Paper;
