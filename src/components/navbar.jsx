import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    // Header shadow on scroll
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Active section highlight
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/98 shadow-lg shadow-teal-900/10' : 'bg-gray-950/90'} backdrop-blur-md border-b border-teal-900/20`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl font-extrabold text-teal-400 tracking-tight hover:text-teal-300 transition-colors cursor-pointer bg-transparent border-none"
        >
          MK
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border-none bg-transparent cursor-pointer
                ${activeSection === id
                  ? 'text-teal-400'
                  : 'text-gray-300 hover:text-teal-300'
                }
              `}
            >
              {label}
              {activeSection === id && (
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-full bg-teal-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer border-none bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-teal-400 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal-400 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-teal-400 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950/98 border-t border-teal-900/20 px-4 pb-4">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg my-1 transition-colors border-none bg-transparent cursor-pointer
                ${activeSection === id ? 'text-teal-400 bg-teal-900/20' : 'text-gray-300 hover:text-teal-300 hover:bg-gray-800/50'}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
