"use client";
import Container from "@/components/ui/Container";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { Products } from "@/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function ProductList() {
  return (
    <section className="flex justify-center items-center pb-12 lg:pb-24">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {Products.map((software, index) => (
            <motion.div key={index} variants={itemVariants}>
              <InteractiveCard
                name={software.name}
                description={software.description}
                href={software.href}
                bgColor={software.bgColor}
                textColor={software.textColor}
                size="large"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

export default ProductList;
