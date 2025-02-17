import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { welcomePanelText } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function WelcomePanel({ className }) {
  useGSAP(() => {
    gsap.from("#anim", {
      x: -500,
      opacity: 0,
      delay: 0.25,
      duration: 1,
      ease: "circ.inOut",
    });
  }, []);

  return (
    <div
      id='anim'
      className={`${className} flex flex-col w-1/3 max-lg:w-2/3 max-lg:mb-20 gap-10`}
    >
      <div className='flex'>
        <img src='Logo.svg' />
        <h1 className='section-header-md ml-5'>{welcomePanelText.header}</h1>
      </div>
      <ul className='flex flex-col gap-6'>
        {welcomePanelText.features.map((feature, index) => (
          <li key={index} className='text-gray flex align-middle'>
            <FontAwesomeIcon
              icon={faCheck}
              className='text-theme-color mr-6 mt-1 text-xl'
            />
            <div>
              <h2 className='text-theme-color mb-2'>{feature.header}</h2>
              {feature.text}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WelcomePanel;
