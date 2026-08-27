import PageIntro from "@/components/PageIntro";
import { generateSEO } from "@/lib/seo";
import ProductList from "@/sections/product/ProductList";

export const metadata = generateSEO({
  title: "Our Products | SVIQ Solutions LLP",
  description:
    "Ready SaaS products from SVIQ: Optiva, SafeTrack, Horizon, VizTrack, LogiTrack, DocuTrack, and eBMR. Custom software is under Solutions.",
});

export default function ProductsPage() {
  return (
    <main>
      <PageIntro
        pageName="Our Products"
        title="Building the foundation for your success with solutions that scale"
      />
      <ProductList />
    </main>
  );
}
