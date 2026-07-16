import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t-[3px] border-primary bg-[#1f2937] py-12 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-1 font-heading text-3xl font-extrabold tracking-tight">BA - UBUNTU</h2>
        <p className="mb-6 text-sm font-medium tracking-widest text-primary uppercase">Design Interior & Accessories</p>
        
        <div className="mb-8 flex flex-col items-center justify-center gap-2 text-gray-300 sm:flex-row sm:gap-6">
          <span>067 007 1198 / 078 000 5757</span>
          <span className="hidden sm:inline">&bull;</span>
          <a href="mailto:Bambimonga@gmail.com" className="hover:text-white transition-colors">Bambimonga@gmail.com</a>
          <span className="hidden sm:inline">&bull;</span>
          <span>Johannesburg, South Africa</span>
        </div>
        
        <div className="text-sm text-gray-500">
          &copy; {currentYear} BA - UBUNTU. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
