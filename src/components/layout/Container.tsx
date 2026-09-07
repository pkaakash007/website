import React from "react";
import { cn } from "@/utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "sm" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
  size = "default",
  ...props
}) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1400px]",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
