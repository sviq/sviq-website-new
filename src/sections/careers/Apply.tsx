"use client";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import InputField from "@/components/ui/InputField";
import { fonts } from "@/config/fonts";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  fullname: z.string().min(3, "Full name must be at least 3 characters."),
  email: z.string().email("Invalid email address."),
  number: z.string().regex(/^\d{10}$/, "Mobile number must be 10 digits."),
  resume: z
    .any()
    .refine((files) => files?.length === 1, "Resume is required.")
    .transform((files) => files[0] as File),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

export const Apply = ({ jobId }: { jobId: string }) => {
  const [isPolicyAccepted, setIsPolicyAccepted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Please wait...");
    const formData = new FormData();
    if (!data.resume || !jobId) return;
    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("number", data.number);
    formData.append("resume", data.resume);
    formData.append("message", data.message);
    formData.append("jobId", jobId);
    formData.append("formType", "jobApplication");
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        body: formData,
      });
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
  return (
    <section className="flex justify-center items-center py-8 md:py-14 lg:py-20">
      <Container className="space-y-8">
        <div className="max-w-5xl">
          <Heading>Apply Now</Heading>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField
              {...register("fullname")}
              name="fullname"
              type="text"
              placeholder="Full Name"
              required
              error={errors.fullname?.message}
            />
            <InputField
              {...register("resume")}
              name="resume"
              type="file"
              placeholder="Upload Resume"
              required
              error={errors.resume?.message}
            />
            <InputField
              {...register("email")}
              type="text"
              name="email"
              placeholder="Email Address"
              required
              error={errors.email?.message}
            />
            <InputField
              {...register("number")}
              type="text"
              name="number"
              placeholder="Mobile No."
              required
              error={errors.number?.message}
            />
          </div>
          <div>
            <InputField
              {...register("message")}
              type="textarea"
              name="message"
              placeholder="Why do you thing you are good fit for SVIQ"
              required
              error={errors.message?.message}
            />
          </div>

          <div className="flex items-center space-x-4 max-w-4xl">
            <div className="relative">
              <input
                type="checkbox"
                id="policy"
                onChange={(e) => setIsPolicyAccepted(e.target.checked)}
                className="peer min-h-5 min-w-5 md:min-h-7 md:min-w-7 cursor-pointer transition-all appearance-none rounded-none shadow hover:shadow-md border border-primary checked:bg-primary"
              />
              <svg
                className="absolute inset-0 h-5 w-5 md:w-7 md:h-7 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 12 10 16 18 8"></polyline>
              </svg>
            </div>
            <label
              htmlFor="policy"
              className={`${fonts.inter} text-sm md:text-base lg:text-lg`}
            >
              I agree to accept the privacy policy, We will add your contact
              details provided in this form to our system for contacting you
              regarding your request.
            </label>
          </div>
          <div>
            <button
              disabled={!isPolicyAccepted || isSubmitting}
              type="submit"
              className={` ${fonts.inter} py-3 px-5 bg-primary text-white border border-primary hover:bg-white hover:text-primary tranis duration-300 ease-in-out font-medium text-lg rounded-md disabled:bg-primary/80 disabled:text-white disabled:cursor-not-allowed`}
            >
              <span className="flex justify-center items-center space-x-6">
                <p>{isSubmitting ? "Sending..." : "Send"}</p>
                <ArrowRight size={24} />
              </span>
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
