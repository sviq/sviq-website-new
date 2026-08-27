import { Metadata } from "next";

export const defaultSEO = {
  title: "SVIQ Solutions LLP",
  description:
    "SVIQ Solutions LLP builds web applications, SaaS, mobile apps, business websites, and hosting — and ships Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR.",
  Keywords:
    "custom software, SaaS, web applications, mobile app development, business websites, hosting, software development, EHS software, visitor management, WMS, logistics software, document management, eBMR, SafeTrack, VizTrack, LogiTrack, DocuTrack, Horizon, Optiva, Vadodara",
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
