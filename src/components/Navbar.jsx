import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, ChevronDown, Phone, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      dropdown: [
        { name: 'About School', path: '/about' },
        { name: 'Director & Principal Message', path: '/messages' },
        { name: 'Academic Toppers', path: '/toppers' }
      ]
    },
    { name: 'Academics', path: '/academics' },
    { name: 'Facilities', path: '/facilities' },
    {
      name: 'Apply Online',
      dropdown: [
        { name: 'Online Registration', path: '/apply' },
        { name: 'Print Application', path: '/print-application' }
      ]
    },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Results', path: '/results' },
    { name: 'Alumni', path: '/alumni' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <>
      {/* Top utility contacts bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 sm:px-6 lg:px-8 hidden xl:block border-b border-slate-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>Gaya Branch: +91 XXXXX XXXXX | Chapra Branch: +91 YYYYY YYYYY</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Guraru, Gaya / Bichala Telpa, Chapra</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1 bg-amber-500/15 text-amber-400 font-bold px-2.5 py-0.5 rounded-full text-[10px] uppercase border border-amber-500/20">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              Admissions Open 2026-27
            </span>
            <Link to="/apply" className="hover:text-amber-400 transition-colors duration-200">
              Register Online
            </Link>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-slate-800'
            : 'bg-slate-900 py-4 border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo & Title */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-tr from-amber-500 to-orange-500 p-2.5 rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-slate-950" />
              </div>
              <div className="text-left">
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-white block">
                  The Sanskar Valley School
                </span>
                <span className="text-[10px] font-semibold text-amber-400 tracking-widest font-display block -mt-1 uppercase">
                  संस्कार वाली स्कूल • Gaya & Chapra
                </span>
              </div>
            </Link>

            {/* Desktop Menu links */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, idx) => (
                <div key={idx} className="relative group/item">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center gap-1 py-2 text-xs xl:text-sm font-semibold tracking-wide transition-colors ${
                          item.dropdown.some((d) => location.pathname === d.path)
                            ? 'text-amber-400 font-bold'
                            : 'text-slate-300 hover:text-amber-400'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4 text-slate-400 group-hover/item:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Dropdown Box */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-slate-950/95 backdrop-blur-md border border-slate-800 rounded-2xl shadow-2xl p-2 opacity-0 scale-95 pointer-events-none group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:pointer-events-auto transition-all duration-250">
                        {item.dropdown.map((sub, sidx) => (
                          <Link
                            key={sidx}
                            to={sub.path}
                            className={`block px-4 py-2.5 rounded-xl text-xs xl:text-sm font-semibold transition-all ${
                              location.pathname === sub.path
                                ? 'bg-amber-500/10 text-amber-400'
                                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative py-2 text-xs xl:text-sm font-semibold tracking-wide transition-colors ${
                        location.pathname === item.path
                          ? 'text-amber-400 font-bold'
                          : 'text-slate-300 hover:text-amber-400'
                      }`}
                    >
                      {item.name}
                      {location.pathname === item.path && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 rounded-full" />
                      )}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Accordion Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-950 border-b border-slate-800"
            >
              <div className="px-4 py-6 space-y-2 text-left max-h-[80vh] overflow-y-auto">
                {navItems.map((item, idx) => (
                  <div key={idx} className="border-b border-slate-900 pb-2">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full py-3 px-4 text-base font-bold text-slate-200"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <div
                          className={`pl-4 space-y-1 transition-all overflow-hidden ${
                            activeDropdown === item.name ? 'max-h-40 mt-1' : 'max-h-0'
                          }`}
                        >
                          {item.dropdown.map((sub, sidx) => (
                            <Link
                              key={sidx}
                              to={sub.path}
                              className={`block py-2.5 px-4 text-sm font-semibold rounded-xl ${
                                location.pathname === sub.path
                                  ? 'bg-amber-500/10 text-amber-400'
                                  : 'text-slate-400 hover:text-white'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block py-3 px-4 text-base font-bold rounded-xl ${
                          location.pathname === item.path
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'text-slate-200 hover:bg-slate-900'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 px-4">
                  <Link
                    to="/apply"
                    className="block text-center bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 py-3 rounded-xl font-bold text-base shadow-xl"
                  >
                    Online Admissions Open
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
