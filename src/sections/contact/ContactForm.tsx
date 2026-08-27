"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { fonts } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const schema = z.object({
  fullname: z.string().min(3, "Full name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

const contactBlocks = [
  {
    title: "Location",
    content: siteConfig.address,
  },
  {
    title: "Working Hour",
    content: "Monday To Friday\n9:30 AM to 6:30 PM",
  },
  {
    title: "Contact Us",
    content: `${siteConfig.phoneNumber}\n${siteConfig.contactEmail}\nabhishek@sviq.co.in`,
  },
];

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Submitting form...");
    const formData = new FormData();
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formData.append("formType", "contactUs");
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        body: formData,
      });
      console.log(response);

      if (response.ok) {
        toast.success("Form submitted successfully!", { id: toastId });
        reset();
      } else {
        toast.error("Something went wrong. Please try again.", { id: toastId });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form.", { id: toastId });
    }
  };

  const socialLinks = [
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/company/sviq/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/sviqofficial/?igsh=MWI1MG5nM3B3ZW5vdg%3D%3D#",
    },
  ];

  return (
    <section className="flex justify-center items-center py-10 md:py-14 lg:py-20">
      <Container className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className={`${fonts.inter} text-sm uppercase font-bold`}>
            CONTACT US
          </p>
          <Heading>{`Have a Question?\nLet's Get in Touch with us 👋`}</Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-14"
        >
          <div className="space-y-8">
            <p
              className={`${fonts.poppins} text-sm text-primaryBlack md:text-base`}
            >
              Fill up the Form and our team will get back to you within 24 hrs
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 max-w-lg md:max-w-full mx-auto"
            >
              {(["fullname", "email", "subject", "message"] as const).map(
                (field, index) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <label className={`${fonts.inter} text-lg font-bold`}>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    {field === "message" ? (
                      <textarea
                        {...register(field)}
                        rows={5}
                        className="w-full py-3 border-b focus:outline-none"
                      />
                    ) : (
                      <input
                        {...register(field)}
                        className="w-full py-3 border-b focus:outline-none"
                      />
                    )}
                    {errors[field] && (
                      <p className="text-red-500 text-sm">
                        {errors[field].message}
                      </p>
                    )}
                  </motion.div>
                )
              )}
              <motion.button
                type="submit"
                className={`${fonts.inter} py-3 px-5 bg-primary text-white border border-primary hover:bg-white hover:text-primary transition duration-300 ease-in-out font-medium text-lg rounded-md disabled:bg-primary/80 disabled:text-white disabled:cursor-not-allowed`}
                disabled={isSubmitting}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <span className="flex justify-center items-center space-x-6">
                  <p>{isSubmitting ? "Sending..." : "Send"}</p>
                  <ArrowRight size={24} />
                </span>
              </motion.button>
            </form>
          </div>

          <motion.div
            className="h-full bg-[#666DFF] px-16 py-12 space-y-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactBlocks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <p
                  className={`${fonts.poppins} md:text-lg text-[#fff]/75 font-medium py-2 border-b border-[#000000]/15`}
                >
                  {item.title}
                </p>
                <p
                  className={`${fonts.poppins} md:text-lg text-[#fff]/90 font-medium pt-3 whitespace-pre-line`}
                >
                  {item.content}
                </p>
              </motion.div>
            ))}

            <motion.div
              className="py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex space-x-6">
                {socialLinks.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative size-8 sm:size-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <img
                      alt={platform.name}
                      src={`/images/${platform.name}Logo.svg`}
                      className="h-full w-full object-contain"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
