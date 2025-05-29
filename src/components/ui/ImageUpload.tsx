import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";

export function ImageUpload({
  onFileAccepted,
}: {
  onFileAccepted: (file: File) => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setError(null);
      const file = acceptedFiles[0];

      // Validate image type
      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed");
        return;
      }

      // Validate file size (2MB max)
      if (file.size > 2 * 1024 * 1024) {
        setError("File size must be less than 2MB");
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);

      onFileAccepted(file);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp"],
    },
    maxFiles: 1,
  });

  const clearFile = () => {
    setPreview(null);
    setError(null);
  };

  return (
    <Card>
      <CardContent className='p-6'>
        {preview ? (
          <div className='relative'>
            <img
              src={preview}
              alt='Preview'
              className='h-64 w-full rounded-md object-cover'
            />
            <Button
              variant='ghost'
              size='icon'
              className='absolute right-2 top-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background'
              onClick={clearFile}
            >
              <X className='h-4 w-4' />
            </Button>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={`flex h-64 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed p-4 transition-colors ${
              isDragActive ? "border-primary bg-primary/10" : "border-muted-foreground/30"
            }`}
          >
            <input {...getInputProps()} />
            <UploadCloud className='mb-3 h-10 w-10 text-muted-foreground' />
            <p className='text-center text-sm text-muted-foreground'>
              {isDragActive
                ? "Drop the image here"
                : "Drag & drop an image, or click to select"}
            </p>
            <p className='mt-2 text-xs text-muted-foreground'>
              Only PNG, JPG, WEBP (Max 2MB)
            </p>
          </div>
        )}
        {error && <p className='mt-2 text-sm text-destructive'>{error}</p>}
      </CardContent>
    </Card>
  );
}
