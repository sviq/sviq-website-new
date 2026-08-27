interface Navigation {
  title: string;
  href?: string;
}

export type { Functionality, Product } from "./products";
export { Products } from "./products";

export const navigation: Navigation[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Solutions",
    href: "/solutions",
  },
  {
    title: "About us",
    href: "/about",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export type JobOpening = {
  jobId: string;
  role: string;
  position: string;
  salary: string;
  jobDescription: string[];
  details: string[];
  requirements: string[];
  responsibilities: string[];
};

export const AllOpenings: JobOpening[] = [];
