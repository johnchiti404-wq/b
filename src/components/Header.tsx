import React from 'react';

// ─── LOGO CONFIG ──────────────────────────────────────────────────────────────
// Place your logo image at:  artifacts/ba-ubuntu/public/images/logo.png
// Supported formats: .png  .jpg  .jpeg  .webp  .svg
// To change the logo just replace that file — no code edits needed.
const LOGO_SRC = '/images/ba-ubuntu.png';
// ──────────────────────────────────────────────────────────────────────────────

export function Header() {
  const [activeSection, setActiveSection] = React.useState('home');
  const [logoError, setLogoError] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'projects', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1f2937] text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between gap-4">

          {/* Logo circle — click scrolls to top */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-primary overflow-hidden">
              {!logoError ? (
                <img
                  src={LOGO_SRC}
                  alt="BA-UBUNTU Logo"
                  className="h-full w-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="font-heading text-xl font-bold leading-none tracking-tighter text-white">
                  BA
                </span>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-3 sm:gap-5 lg:gap-8 flex-wrap justify-end">
            {['Home', 'Services', 'About', 'Projects', 'Contact'].map((item) => {
              const id = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(id)}
                  className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                    activeSection === id ? 'text-primary' : 'text-gray-200'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
