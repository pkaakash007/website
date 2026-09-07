import React, { useState } from "react";
import { cn } from "@/utils/cn";

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  fallbackSrc?: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  fill = false,
  priority = false,
  fallbackSrc = "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
  className,
  style,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const fillClasses = fill
    ? "absolute inset-0 w-full h-full object-cover"
    : "";

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={handleError}
      className={cn(fillClasses, className)}
      style={style}
      {...props}
    />
  );
};

export default Image;
