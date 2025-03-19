import { fonts } from "@/config/fonts";
import { FC, ReactNode } from "react";

interface SubTextProps {
  children: ReactNode;
  className?: string;
}

const SubText: FC<SubTextProps> = ({ children, className }) => {
  return (
    <p
      className={`${fonts.inter}  text-primaryBlack text-justify text-base md:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export default SubText;
