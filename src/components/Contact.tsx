import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

export function Contact() {
  return (
    <section id="contact" className="relative bg-secondary py-24 pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Let's Build Something <span className="text-primary">Great Together</span>
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to start your next project? Get in touch with us today for a consultation or quote.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-2"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-foreground">Call Us</h3>
            <p className="text-lg font-medium text-muted-foreground">067 007 1198</p>
            <p className="text-lg font-medium text-muted-foreground">078 000 5757</p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-2"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-foreground">Email Us</h3>
            <a
              href="mailto:Bambimonga@gmail.com"
              className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary break-all"
            >
              Bambimonga@gmail.com
            </a>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] transition-transform hover:-translate-y-2"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold text-foreground">Visit Us</h3>
            <p className="text-lg font-medium text-muted-foreground">
              Johannesburg,<br />South Africa
            </p>
          </motion.div>
        </div>
      </div>

      {/* Social icons — fixed to bottom-left of this section */}
      <div className="absolute bottom-6 left-6 flex flex-col gap-3">
        <a
          href="https://wa.me/27670071198?text=Hello%20BA%20-%20UBUNTU,%20I%20would%20like%20to%20request%20a%20quotation."
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp className="h-8 w-8" />
        </a>
        <a
          href="https://www.facebook.com/share/p/18SJTyzxS9/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-md"
          aria-label="Visit Facebook Page"
        >
          <FaFacebook className="h-7 w-7" />
        </a>
      </div>
    </section>
  );
}
