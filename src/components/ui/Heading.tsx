import { fonts } from "@/config/fonts";
import { FC, ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

const Heading: FC<HeadingProps> = ({ children, className = "" }) => {
  return (
    <h2
      className={`${fonts.darkerGrotesque} text-primaryBlack font-medium text-6xl md:text-[78px] leading-none whitespace-pre-line ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
