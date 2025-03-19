import Container from "@/components/ui/Container";
import { fonts } from "@/config/fonts";
import { Products } from "@/constants";
import { generateSEO } from "@/lib/seo";
import { About } from "@/sections/product/About";
import { Connect } from "@/sections/product/Connect";
import Functionalities from "@/sections/product/Functionalities";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const href = `/products/${slug}`;
  const product = Products.find((product) => product.href === href);
  const productNames = Products.map((product) => product.name);

  if (!product) {
    return notFound();
  }

  return (
    <main>
      {/* Banner Section */}
      <section className="flex justify-center items-center py-8 md:py-14 lg:py-20">
        <Container>
          <div className="relative w-full h-[200px] md:h-[410px]">
            <Image
              fill
              quality={100}
              src={`/images/product_banner.png`}
              alt="Product Banner"
              className="object-cover"
            />
            {/* Image Overlay */}
            <div className="absolute w-full h-full inset-0 bg-primary/80" />
            {/* Product name */}
            <div className="absolute bottom-6 left-6 md:bottom-16 md:left-16">
              <h1
                className={`${fonts.darkerGrotesque} text-white text-4xl md:text-6xl lg:text-[102px] lg:leading-none`}
              >
                {product.name}
              </h1>
            </div>
          </div>
        </Container>
      </section>
      <About
        name={product.name}
        about={product.about}
        brochure={product.brochure}
        features={product.features}
      />
      <Functionalities
        functionalities={product.functionalities}
        name={product.name}
      />
      <Connect productNames={productNames} />
    </main>
  );
}
