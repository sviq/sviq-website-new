import { Metadata } from "next";

export const defaultSEO = {
  title: "SVIQ Solutions LLP",
  description:
    "SVIQ is a leading IT & Engineering startup  providing innovative solutions to businesses. Our services include web design, eCommerce, digital marketing and more.",
  Keywords:
    "software development, custom software, enterprise solutions, CRM development, SaaS development, startup software, MVP development, business automation, digital transformation, cloud applications, AI-powered software, ERP solutions, web development, mobile app development, API integration, scalable backend, agile development, tech consulting, business software, IT services",
  image: "/images/og-image.png",
  url: "https://sviqsolutions.com",
};

export function generateSEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
}: Partial<typeof defaultSEO>): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(url),
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
