import { fonts } from "@/config/fonts";
import { navigation, Products } from "@/constants";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import Container from "./ui/Container";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navyBlue w-full flex justify-center pt-10 pb-10 lg:pt-20 lg:pb-8">
      <Container className="space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left section */}
          <div className="w-full">
            <p
              className={`${fonts.darkerGrotesque} text-3xl sm:text-5xl lg:text-[92px] lg:leading-[70px] text-white font-medium text-left`}
            >
              We{" "}
              <span className="inline-block align-middle">
                <Heart
                  color="#FFD6DC"
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[72px] lg:h-[72px]"
                  fill="#FFD6DC"
                />
              </span>{" "}
              Working with ambitious brands & businesses of every sector
            </p>
          </div>
          {/* Right Section */}
          <div className="h-full flex flex-col justify-between">
            {/* Products list */}
            <div className="flex flex-col lg:flex-row  lg:flex-wrap items-start lg:items-center gap-y-4 justify-start  mt-2">
              <p
                className={`${fonts.darkerGrotesque} lg:hidden text-2xl  text-gray-200`}
              >
                Products
              </p>
              {Products.map((product, index) => (
                <div key={index} className="flex items-center">
                  <Link
                    href={product.href}
                    className={`${fonts.inter} text-sm md:text-base text-white hover:text-gray-300 transition-colors duration-300`}
                  >
                    {product.name}
                  </Link>
                  {index !== Products.length - 1 && (
                    <span className="hidden lg:inline-block size-2 mx-3 bg-white rounded-full"></span>
                  )}
                </div>
              ))}
            </div>

            {/* Address and Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-2 mt-10 lg:mt-0">
              {/* Contact */}
              <p
                className={`${fonts.darkerGrotesque} lg:hidden text-2xl  text-gray-200`}
              >
                Contact us
              </p>
              <div
                className={`${fonts.inter} text-white space-y-3 lg:space-y-6 text-left`}
              >
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:contact@sviq.co.in"
                    className="hover:underline"
                  >
                    contact@sviq.co.in
                  </a>
                  <a
                    href="mailto:abhishek@sviq.co.in"
                    className="hover:underline"
                  >
                    abhishek@sviq.co.in
                  </a>
                </div>
                <p>+91 95740 20156</p>
              </div>
              {/* Address */}
              <div
                className={`${fonts.inter} text-white space-y-6 text-left max-w-xs md:w-full`}
              >
                <p>
                  Padra Road, TF-18, Samanvay Status 2, Vadodara, Gujarat, IN
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons and socials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div className="space-y-8 hidden lg:flex flex-col items-start">
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-5">
              <Link href={"#"}>
                <button
                  className={`${fonts.inter} group border border-white hover:bg-transparent hover:text-white font-medium text-lg bg-white flex justify-center items-center text-black py-3 px-6 rounded w-full sm:w-auto transition-all duration-200 ease-in-out hover:scale-105`}
                >
                  Book a call{" "}
                  <span className="ml-3 transform group-hover:translate-x-2 flex justify-center items-center transition-transform duration-200 ease-in-out">
                    <ArrowRight />
                  </span>
                </button>
              </Link>
              <Link href={"/contact"}>
                <button
                  className={`${fonts.inter} group border border-white hover:bg-transparent hover:text-white font-medium text-lg bg-white flex justify-center items-center text-black py-3 px-6 rounded w-full sm:w-auto transition-all duration-200 ease-in-out hover:scale-105`}
                >
                  Contact us
                  <span className="ml-3 transform group-hover:translate-x-2 flex justify-center items-center transition-transform duration-200 ease-in-out">
                    <ArrowRight />
                  </span>
                </button>
              </Link>
            </div>
            <div>
              <p className={`${fonts.inter} text-sm text-white`}>
                Established. 2021
              </p>
            </div>
            <div>
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={150}
                height={50}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-start">
            <div className="flex space-x-6">
              {" "}
              <Link
                href={"https://www.linkedin.com/company/sviq/"}
                className="relative size-8 sm:size-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  fill
                  alt="Linkedin"
                  src={"/images/LinkedinLogo.svg"}
                  className="object-contain"
                />
              </Link>
              <Link
                href={
                  "https://www.instagram.com/sviqofficial/?igsh=MWI1MG5nM3B3ZW5vdg%3D%3D#"
                }
                className="relative size-8 sm:size-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  fill
                  alt="Instagram"
                  src={"/images/InstagramLogo.svg"}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div
            className={`${fonts.inter} flex flex-wrap justify-start text-white text-sm gap-4`}
          >
            <p className="hover:underline cursor-pointer">Privacy Policy</p>
            <p className="hover:underline cursor-pointer">Cookie Policy</p>
            <p className="hover:underline cursor-pointer">Terms & Conditions</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-8">
            <p
              className={`${fonts.inter} text-white text-sm text-center sm:text-right`}
            >
              © {year} {siteConfig.name.toUpperCase()}. All rights reserved
            </p>
            {/* Developed By Agnes */}
            {/* <div>
              <p
                className={`${fonts.inter} flex justify-center items-center space-x-2 text-white text-sm`}
              >
                <span>Developed By</span>
                <a target="_blank" href="http://agnescreative.agency">
                  <Image
                    quality={100}
                    src={"/images/AgnesLogo.png"}
                    className="rounded-md"
                    width={42}
                    height={42}
                    alt="Agnes"
                  />
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};
