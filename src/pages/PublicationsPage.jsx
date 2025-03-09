import React from "react";
import { placeHolderHouseImg } from "../utils";
import Card from "../components/ui/Card";

const PublicationsPage = () => {
  const tempContent =
    "Article abstract will go here to show the users what the article is actually about. I need to write a few more words to practically see how it is going to look when the actual text data is displayed here.";

  return (
    <>
      <section className='flex flex-col items-center'>
        <h1 className='section-header-lg p-common'>Our Publications</h1>

        <div className='grid lg:w-4/5 md:w-5/6 p-common gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          <Card
            image={placeHolderHouseImg}
            alt={"House Image"}
            header={"Article Title"}
            content={tempContent}
            buttonText={"Keep Reading"}
          />
          <Card
            image={placeHolderHouseImg}
            alt={"House Image"}
            header={"Article Title"}
            content={tempContent}
            buttonText={"Keep Reading"}
          />
          <Card
            image={placeHolderHouseImg}
            alt={"House Image"}
            header={"Article Title"}
            content={tempContent}
            buttonText={"Keep Reading"}
          />
          <Card
            image={placeHolderHouseImg}
            alt={"House Image"}
            header={"Article Title"}
            content={tempContent}
            buttonText={"Keep Reading"}
          />
          <Card
            image={placeHolderHouseImg}
            alt={"House Image"}
            header={"Article Title"}
            content={tempContent}
            buttonText={"Keep Reading"}
          />
          <Card
            image={placeHolderHouseImg}
            alt={"House Image"}
            header={"Article Title"}
            content={tempContent}
            buttonText={"Keep Reading"}
          />
        </div>
      </section>
    </>
  );
};

export default PublicationsPage;
