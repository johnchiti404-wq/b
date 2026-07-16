import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    title: 'Experienced Team',
    description: 'Skilled professionals dedicated to master craftsmanship.',
    icon: Target,
  },
  {
    title: 'Quality Materials',
    description: 'We source the best materials for lasting durability.',
    icon: ShieldCheck,
  },
  {
    title: 'On-Time Delivery',
    description: 'Projects completed within the agreed timeframe.',
    icon: Clock,
  },
  {
    title: 'Customer Satisfaction',
    description: 'Our priority is exceeding your expectations.',
    icon: ThumbsUp,
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/buntu2.jpg"
                alt="BA-UBUNTU Team working on site"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-8 text-white shadow-xl lg:block">
              <div className="font-heading text-5xl font-bold">10+</div>
              <div className="mt-2 font-medium">Years of Excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-2 text-sm font-bold uppercase tracking-widest text-primary">
              About Us
            </div>
            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Built on Integrity.<br />
              Driven by Excellence.
            </h2>
            <div className="mb-8 h-1.5 w-20 rounded-full bg-primary"></div>

            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Based in Johannesburg, BA-UBUNTU Design Interior & Accessories is a premier construction and renovation company specialising in interior, exterior, and structural solutions. We are committed to top-quality workmanship, transforming spaces with precision, innovation, and an unwavering attention to detail.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-heading font-bold text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
