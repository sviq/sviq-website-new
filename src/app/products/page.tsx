import PageIntro from "@/components/PageIntro";
import { generateSEO } from "@/lib/seo";
import ProductList from "@/sections/product/ProductList";

export const metadata = generateSEO({
  title: "Our Products | SVIQ Solutions LLP",
  description:
    "Building the foundation for your success with solutions that scale",
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
