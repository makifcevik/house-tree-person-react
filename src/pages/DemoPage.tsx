import React from "react";
import { ImageUpload } from "@/components/ui/ImageUpload";

const DemoPage = () => {
  return (
    <div className='mx-auto max-w-md'>
      <ImageUpload onFileAccepted={() => true} />
    </div>
  );
};

export default DemoPage;
