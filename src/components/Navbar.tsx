"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { navigation } from "@/constants";
import { fonts } from "@/config/fonts";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./ui/Container";

const Navbar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport width is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav className="w-full flex justify-center items-center bg-primary">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-white font-bold relative w-32 h-auto z-20"
          >
            <Image
              quality={100}
              priority
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Hamburger icon for mobile */}
          <div className="lg:hidden z-20">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <ul className="flex space-x-14">
              {navigation.map((item, index) => (
                <li
                  key={index}
                  className={`${fonts.inter} text-lg text-white cursor-pointer relative group`}
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  {item.href && <Link href={item.href}>{item.title}</Link>}
                </li>
              ))}
            </ul>
          </div>

          {/* Estimate button */}
          <div className=" hidden lg:flex">
            <button
              className={`${fonts.inter} font-medium text-lg border border-white bg-white text-primary hover:bg-primary hover:text-white py-2 px-4 rounded transition-colors duration-300 ease-in-out`}
            >
              Estimate your project
            </button>
          </div>

          {/* Mobile menu (slide in from right) */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-full h-screen bg-primary z-10 flex flex-col pt-24 px-6 overflow-y-auto"
              >
                <ul className="flex flex-col space-y-4 w-full">
                  {navigation.map((item, index) => (
                    <li
                      key={index}
                      className={`${fonts.inter} text-xl text-white`}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <div className="w-full">
                          <button
                            onClick={() =>
                              setOpenIndex(openIndex === index ? null : index)
                            }
                            className="flex items-center justify-between w-full py-2"
                          >
                            <span>{item.title}</span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                openIndex === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`${fonts.inter} font-medium text-lg border border-white bg-white text-primary hover:bg-transparent hover:text-white py-3 px-6 rounded transition-colors duration-300 ease-in-out w-full`}
                  >
                    Estimate your project
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
