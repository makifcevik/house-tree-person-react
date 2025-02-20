import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ImageScan = ({ image }) => {
  const imageRef = useRef();
  const scanRef = useRef();
  const containerRef = useRef(); // Reference for correct positioning

  useGSAP(() => {
    if (scanRef.current) {
      gsap.fromTo(
        scanRef.current,
        { y: "-30%" }, // Start above the image
        {
          y: "320%", // Move down completely
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "circ.inOut",
        }
      );

      gsap.fromTo(
        imageRef.current,
        { scaleY: 1 }, // Initial State
        {
          scaleY: 1.075,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    }
  }, [image]);

  if (!image) return null; // If no image is provided, return nothing

  return (
    <div className='relative flex flex-grow justify-end p-common'>
      <div ref={containerRef} className='relative'>
        {/* Image */}
        <img
          ref={imageRef}
          src={image}
          alt='Uploaded'
          className='h-32 w-auto object-cover rounded-lg shadow-lg border-2 border-black dark:border-white'
        />

        {/* GSAP Scanning Effect */}
        <div
          ref={scanRef}
          className='absolute inset-0 h-8 w-full bg-gradient-to-b 
             from-transparent via-green-400 to-transparent opacity-60 
             rounded-2xl'
        ></div>
      </div>
    </div>
  );
};

export default ImageScan;
