import { useState } from "react";
import { faCloudUploadAlt, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

export default function DragDropUploader({ image, setImage }) {
  const { t } = useTranslation();
  //const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle drag & drop
  const handleDrop = (event) => {
    event.preventDefault();
    setDragActive(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section
      className={`relative flex flex-col flex-grow items-center p-common rounded-lg ${
        image ? "pb-10" : "" /* Expand when an image is uploaded */
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
    >
      {/* <h2 className='text-4xl text-theme-color p-4 rounded-full'>1</h2>
      <h3 className='text-theme-color font-semibold text-lg'>Upload an Image</h3>
      <p className='text-gray'>Drag & drop or click to upload</p> */}

      {/* Drop Area */}
      {!image && (
        <label
          className={`border-2 border-dashed p-10 rounded-lg cursor-pointer mt-4 w-full text-center transition-all 
        ${
          dragActive
            ? "border-theme-color bg-gray-200 dark:bg-gray-700"
            : "border-gray-400"
        }
        `}
        >
          <input
            type='file'
            accept='image/*'
            className='hidden'
            onChange={handleFileChange}
          />
          <FontAwesomeIcon
            icon={faCloudUploadAlt}
            size='3x'
            className='text-theme-color'
          />
          <p className='mt-2 text-sm text-gray'>{t("dragDropText")}</p>
        </label>
      )}

      {/* Image Preview */}
      {image && (
        <div className='mt-5 w-full flex justify-end gap-10 items-center'>
          <div className='flex flex-col'>
            <img
              src={image}
              alt='Uploaded'
              className='h-32 w-auto object-cover rounded-lg shadow-lg border-2 border-black dark:border-white'
            />
            <button
              className='mt-3 flex justify-end items-center gap-2 text-red-500 font-semibold hover:text-red-700'
              onClick={() => setImage(null)}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
              {t("removeImage")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
