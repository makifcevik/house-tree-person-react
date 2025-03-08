import React from "react";
import { placeHolderHouseImg } from "../utils";

const PublicationsPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <h1 className='section-header-lg p-common mt-10'>Our Publications</h1>
      <div className='flex items-center gap-16 max-lg:gap-2 max-md:flex-col bg-foreground-light dark:bg-foreground-dark mx-16'>
        <img
          src={placeHolderHouseImg}
          alt='House Image'
          className='mx-10 h-[400px] max-lg:h-[250px]'
        />
        <div className='flex flex-col gap-10 p-common lg:w-1/3'>
          <h3 className='text-theme-color section-header-sm'>
            Article Title Most Recent
          </h3>
          <p className='text-gray'>
            Article abstract will go here to show the users what the article is actually
            about. I need to write a few more words to practically see how it is going to
            look when the actual text data is displayed here.
          </p>
          <button className='btn-primary py-2 rounded-2xl lg:w-2/3'>Keep Reading</button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsPage;
