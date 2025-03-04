import React from "react";

const Step = ({ index, header, text, children }) => {
  return (
    <section
      className='flex items-center gap-5 max-lg:flex-col p-5 rounded-lg shadow-xl 
                  bg-foreground-light dark:bg-foreground-dark'
    >
      <h2 className='text-4xl text-theme-color p-4 rounded-full'>{index}</h2>
      <div>
        <h3 className='text-theme-color font-semibold text-lg'>{header}</h3>
        <p className='text-gray'>{text}</p>
      </div>
      {children}
    </section>
  );
};

export default Step;
