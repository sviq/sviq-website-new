import {
  Inter,
  Darker_Grotesque,
  Bricolage_Grotesque,
  Poppins,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const darkerGrotesque = Darker_Grotesque({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] });

export const fonts = {
  inter: inter.className,
  darkerGrotesque: darkerGrotesque.className,
  bricolageGrotesque: bricolageGrotesque.className,
  poppins: poppins.className,
};
