import Container from "@/components/ui/Container";
import { generateSEO } from "@/lib/seo";
import { ContactForm } from "@/sections/contact/ContactForm";
export const metadata = generateSEO({
  title: "Contact Us | SVIQ Solutions LLP",
  description: "Have a Question ? Let's Get in Touch with us",
});

export default function Contact() {
  return (
    <main>
      <ContactForm />
      <section className="flex justify-center items-center py-10 md:py-14 lg:py-20">
        <Container className="space-y-12">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2509282546903!2d73.13727617500776!3d22.268482644048532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc64bb45bffff%3A0x78daaa86bad3b5f5!2sSVIQ%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1740976799802!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
    </main>
  );
}
