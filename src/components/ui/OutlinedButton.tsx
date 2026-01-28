import { fonts } from "@/config/fonts";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  color: "white" | "primaryBlack";
  children: ReactNode;
  onClick?: () => void;
}

const colorClasses: Record<ButtonProps["color"], string> = {
  white: "border-white text-white hover:bg-white hover:text-black",
  primaryBlack:
    "border-black text-primaryBlack hover:bg-primaryBlack hover:bg-transparent",
};

export const OutlinedButton = ({
  href,
  color,
  children,
  onClick,
}: ButtonProps) => {
  const buttonClasses = `${fonts.inter} mt-8 px-6 py-3 border-2 rounded text-lg sm:text-xl transition-all transform hover:scale-105 duration-200 ease-out ${colorClasses[color]}`;

  const buttonContent = (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
};
