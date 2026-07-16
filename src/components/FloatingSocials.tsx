import React from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';

export function FloatingSocials() {
  return (
    <div className="fixed bottom-6 left-6 z-[90] flex flex-col gap-3">
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
  );
}
