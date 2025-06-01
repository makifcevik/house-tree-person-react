import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "react-i18next";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  onSelect: (selectedImage: string) => void;
  selectedImage?: string | null;
  className?: string;
  imageSize?: string; // Tailwind classes for main image container
  thumbnailSize?: string; // Tailwind classes for thumbnail
}

export function ImageCarousel({
  images,
  onSelect,
  selectedImage = null,
  className = "",
  imageSize = "aspect-square",
  thumbnailSize = "h-16 w-16",
}: ImageCarouselProps) {
  const { t } = useTranslation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleSelect = () => {
    onSelect(images[currentIndex].src);
  };

  useEffect(() => {
    if (selectedImage) {
      const index = images.findIndex((img) => img.src === selectedImage);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [selectedImage, images]);

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Carousel Navigation */}
      <div className='relative w-full max-w-md'>
        {/* Current Image Display */}
        <div className={`relative overflow-hidden rounded-lg border ${imageSize}`}>
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className='h-full w-full object-cover'
          />
        </div>

        {/* Navigation Arrows */}
        <Button
          variant='ghost'
          size='icon'
          className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/50 hover:bg-gray-700/50'
          onClick={prevImage}
        >
          <ChevronLeft className='h-6 w-6 text-white' />
        </Button>
        <Button
          variant='ghost'
          size='icon'
          className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/50 hover:bg-gray-700/50'
          onClick={nextImage}
        >
          <ChevronRight className='h-6 w-6 text-white' />
        </Button>
      </div>

      {/* Thumbnail Strip */}
      <div className='flex gap-2 overflow-x-auto pb-2'>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 rounded border-2 transition-all ${
              currentIndex === index
                ? "border-primary"
                : "border-gray-200 hover:border-gray-500"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className={`${thumbnailSize} object-cover`}
            />
          </button>
        ))}
      </div>

      {/* Select Button */}
      <Button onClick={handleSelect}>{t("demoPage.selectImageButton")}</Button>
    </div>
  );
}
