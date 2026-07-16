import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Wrench, Paintbrush, Home, BoxSelect, Columns, ChefHat, Video } from 'lucide-react';

type ServiceItem =
  | { kind: 'image'; title: string; description: string; image: string; icon: React.ElementType }
  | { kind: 'video'; title: string; description: string; videoSrc: string; icon: React.ElementType };

const services: ServiceItem[] = [
  {
    kind: 'image',
    title: 'Tile Fixing',
    description: 'Precision tile installation for floors and walls. We ensure perfect alignment and durable finishes for any interior or exterior space.',
    image: '/images/buntu9.jpg',
    icon: LayoutGrid,
  },
  {
    kind: 'image',
    title: 'Welding Services',
    description: 'Expert welding for gates, fences, and structural metalwork. Combining strength with clean, professional aesthetics.',
    image: '/images/buntu4.jpg',
    icon: Wrench,
  },
  {
    kind: 'image',
    title: 'Spray Painting',
    description: 'Flawless, smooth spray painting for large surfaces, cabinets, and custom interior elements. A modern, premium finish every time.',
    image: '/images/buntu10.jpg',
    icon: Paintbrush,
  },
  {
    kind: 'image',
    title: 'Roof Painting',
    description: 'Protect and renew your property with high-grade roof painting solutions designed to withstand the harsh South African climate.',
    image: '/images/bu.jpg',
    icon: Home,
  },
  {
    kind: 'image',
    title: 'Paving',
    description: 'Durable and beautifully patterned paving solutions for driveways, walkways, and outdoor living areas.',
    image: '/images/buntu.jpg',
    icon: BoxSelect,
  },
  {
    kind: 'image',
    title: 'Drywall & Partition',
    description: 'Professional drywall installation and space partitioning for offices and residential renovations.',
    image: '/images/buntu8.jpg',
    icon: Columns,
  },
  {
    kind: 'image',
    title: 'Kitchen Design',
    description: 'Custom kitchen remodeling and design services. We build functional, elegant culinary spaces tailored to your needs.',
    image: '/images/buntu5.jpg',
    icon: ChefHat,
  },
  {
    kind: 'video',
    title: 'Our Work in Action',
    description: 'Watch our skilled team deliver exceptional results on real project sites across Johannesburg.',
    videoSrc: '/videos/buvid.mov',
    icon: Video,
  },
  {
    kind: 'video',
    title: 'Project Showcase',
    description: 'A behind-the-scenes look at our craftsmanship, from groundwork to the finishing touches that set us apart.',
    videoSrc: '/videos/buvid1.mov',
    icon: Video,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive construction, renovation, and finishing solutions delivered with uncompromising quality.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.15)]"
            >
              {/* Media */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                {service.kind === 'image' ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={service.videoSrc}
                    className="h-full w-full object-cover"
                    loop
                    muted
                    playsInline
                    aria-label={service.title}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-primary p-3 text-white shadow-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
