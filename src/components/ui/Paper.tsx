import React, { useRef } from "react";
import gsap from "gsap";

interface Props {
  header: string;
  text: string;
  icon: string;
  className: string;
}

function Paper({ header, text, icon, className }: Props) {
  const paperRef = useRef(null);

  return (
    <div
      ref={paperRef}
      className={`p-common rounded-xl border-2 border-black dark:border-white
       border-opacity-20 dark:border-opacity-20 shadow-sm dark:shadow-md shadow-black dark:shadow-black
        ${className}`}
    >
      <span className='text-3xl'>{icon}</span>
      <h5 className='text-theme-color text-lg my-4'>{header}</h5>
      <p>{text}</p>
    </div>
  );
}

export default Paper;
