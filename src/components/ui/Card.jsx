import React from "react";

const Card = ({ image, alt, header, content, buttonText }) => {
  return (
    <div
      className='flex flex-col bg-foreground-light dark:bg-foreground-dark 
    shadow-lg'
    >
      <img src={image} alt={alt} className='max-h-[200px]' />
      <div className='flex flex-col p-common gap-3'>
        <h1 className='section-header-sm'>{header}</h1>
        <p className='text-gray'>{content}</p>
        <button className='btn-secondary w-1/2 py-2 rounded-2xl mt-2'>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
