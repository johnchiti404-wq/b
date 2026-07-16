import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const slides = [
  '/images/buntu.jpg',
  '/images/buntu1.jpg',
  '/images/buntu2.jpg',
  '/images/buntu3.jpg',
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative h-[calc(100vh-80px)] min-h-[600px] w-full overflow-hidden bg-gray-900">
      {/* Background Slideshow */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentSlide]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/65" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <h1 className="mb-4 font-heading text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            BA - UBUNTU
          </h1>
          <h2 className="mb-8 font-heading text-2xl font-semibold italic text-primary md:text-3xl">
            Design Interior & Accessories
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-10 text-sm font-medium tracking-wide text-gray-200 md:text-base lg:text-lg"
          >
            Professional Tile Fixing &bull; Welding &bull; Spray Painting &bull; Roof Painting &bull; Paving &bull; Drywall & Partition
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/27670071198?text=Hello%20BA%20-%20UBUNTU,%20I%20would%20like%20to%20request%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-semibold text-white transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(26,86,219,0.5)] sm:w-auto"
            >
              Request a Quote
            </a>
            <button
              onClick={scrollToServices}
              className="flex h-14 w-full items-center justify-center rounded-full border-2 border-white bg-transparent px-8 font-semibold text-white transition-all hover:bg-white hover:text-gray-900 hover:scale-105 sm:w-auto"
            >
              View Services
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        onClick={scrollToServices}
      >
        <ChevronDown className="h-10 w-10 opacity-70" />
      </motion.div>
    </section>
  );
}
