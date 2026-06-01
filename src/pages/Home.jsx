import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Award, Users, BookOpen, Shield, ShieldCheck, CheckCircle2, 
  Sparkles, Trophy, Calendar, Bell, ChevronLeft, ChevronRight, BookOpenCheck, ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero carousel slides
  const slides = [
    {
      title: "Empowering Minds, Shaping Futures",
      sub: "Welcome to The Sanskar Valley School",
      text: "A center of academic superiority, standard values, and modern pedagogy at Gaya & Chapra.",
      gradient: "from-slate-950 via-slate-900/90 to-transparent",
      cta: "Explore Admissions",
      link: "/apply",
      bg: "bg-gradient-to-r from-blue-900 to-indigo-900"
    },
    {
      title: "Where Values Meet Modern Innovation",
      sub: "Excellence in General Schooling",
      text: "Equipping children with scientific inquiry, active critical thinking, and social integrity.",
      gradient: "from-slate-950 via-indigo-950/85 to-transparent",
      cta: "Academics Curriculum",
      link: "/academics",
      bg: "bg-gradient-to-r from-indigo-900 to-slate-900"
    },
    {
      title: "Modern Classrooms & Creative Lab Spaces",
      sub: "State-of-the-Art Facilities",
      text: "Nurturing multi-dimensional growth through sports, debate, modern science labs, and extensive libraries.",
      gradient: "from-slate-950 via-indigo-900/95 to-transparent",
      cta: "View School Facilities",
      link: "/facilities",
      bg: "bg-gradient-to-r from-slate-900 to-blue-950"
    }
  ];

  // Auto scroll slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Static school announcements
  const announcements = [
    "Admission Inquiry open for the Session 2026-27 (Nursery to Class VIII). Online Registration Portal is fully active.",
    "Congratulations to our board toppers for achieving 100% success rate in Gaya and Saran regions!",
    "Annual Sports Meet scheduled from November 12th at Gaya Mirdadpur sports grounds.",
    "Summer school timings updated: Monday to Saturday 7:30 AM to 1:30 PM."
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. ANNOUNCEMENTS MARQUEE / TICKER */}
      <div className="bg-amber-500 text-slate-950 py-2.5 px-4 font-bold border-y border-amber-600 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="bg-slate-950 text-amber-400 text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg flex items-center gap-1.5 shrink-0 animate-pulse">
            <Bell className="w-3.5 h-3.5" />
            <span>Latest Announcements</span>
          </div>
          <div className="overflow-hidden relative w-full h-5 text-xs sm:text-sm font-semibold">
            <div className="absolute flex whitespace-nowrap gap-16 animate-marquee">
              {announcements.map((ann, idx) => (
                <span key={idx} className="inline-block hover:underline">
                  🔥 {ann}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. DYNAMIC HERO SLIDER */}
      <section className="relative h-[550px] md:h-[650px] overflow-hidden bg-slate-950">
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 border border-slate-800 text-white hover:bg-slate-900 hover:border-amber-500 transition-all focus:outline-none"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/60 border border-slate-800 text-white hover:bg-slate-900 hover:border-amber-500 transition-all focus:outline-none"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slides Content */}
        <div className="relative w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className={`absolute inset-0 w-full h-full ${slides[currentSlide].bg} flex items-center justify-start text-left`}
            >
              {/* Decorative grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
              
              {/* Side Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].gradient}`} />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
                <div className="max-w-3xl space-y-6">
                  
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block text-xs md:text-sm font-extrabold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-widest"
                  >
                    {slides[currentSlide].sub}
                  </motion.span>
                  
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl sm:text-5xl lg:text-6.5xl font-black text-white tracking-tight leading-[1.1]"
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm sm:text-lg text-slate-300 max-w-xl leading-relaxed"
                  >
                    {slides[currentSlide].text}
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-4 pt-2"
                  >
                    <Link
                      to={slides[currentSlide].link}
                      className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 px-8 py-3.5 rounded-xl font-extrabold shadow-lg hover:shadow-amber-500/10 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
                    >
                      <span>{slides[currentSlide].cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold transition-all text-base"
                    >
                      Contact Campus
                    </Link>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-amber-500' : 'w-2.5 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 3. QUICK ACTIONS DASHBOARD */}
      <section className="relative -mt-16 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-amber-500 to-amber-400 rounded-bl-full opacity-10 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md">Enrollment Active</span>
            <h3 className="text-xl font-extrabold text-white mt-4">Admissions Open 2026</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Submit your school admission query easily using our fully online portal. Secure your seat today.
            </p>
            <div className="pt-6">
              <Link to="/apply" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors">
                Apply Online Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-bl-full opacity-10 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">Excellence</span>
            <h3 className="text-xl font-extrabold text-white mt-4">Academic Toppers</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              We take pride in our outstanding achievers. Check our top performers in state and central examinations.
            </p>
            <div className="pt-6">
              <Link to="/toppers" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-white transition-colors">
                View Toppers Grid <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 shadow-2xl hover:-translate-y-1.5 transition-transform duration-300 text-left relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-emerald-500 to-green-500 rounded-bl-full opacity-10 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">Resources</span>
            <h3 className="text-xl font-extrabold text-white mt-4">Student Downloads</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Access and download syllabus, holiday lists, notices, prospectus booklets, and public declarations instantly.
            </p>
            <div className="pt-6">
              <Link to="/downloads" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-white transition-colors">
                Go to Resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. STATS COUNTER BAR */}
      <section className="py-16 bg-white mt-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "2", label: "State of Art Branches", sub: "Gaya & Chapra" },
              { val: "100%", label: "Passing Success Rate", sub: "Academic Excellence" },
              { val: "30+", label: "Experienced Educators", sub: "Top Pedagogical Experts" },
              { val: "1000+", label: "Happy Alumnus", sub: "Shaping Leaders" }
            ].map((stat, idx) => (
              <div key={idx} className="space-y-1.5">
                <span className="block text-3xl sm:text-4.5xl font-black text-slate-900 tracking-tight">
                  {stat.val}
                </span>
                <span className="block text-sm font-bold text-slate-700">
                  {stat.label}
                </span>
                <span className="block text-xs text-slate-400 font-medium">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CO-CURRICULAR & FACILITIES BRIEF */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
              Pillars of Sanskar Valley
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Holistic Infrastructure & Development
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              We focus on highly structured classrooms, digital laboratory practices, safe commutes, and creative extra-curricular programs to bring out the leader in every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpenCheck, title: "Modern Labs & Labs", desc: "Equipped with state-of-the-art computers, scientific instrument panels, and interactive modules." },
              { icon: Award, title: "Vast Library Range", desc: "A sprawling collections of books, fiction, textbooks, reference materials, and journals." },
              { icon: Users, title: "Secure Transport", desc: "Safe, GPS-enabled school vehicles for students commuting within Gaya and Chapra." },
              { icon: ShieldCheck, title: "Vibrant Sports", desc: "Large play arenas, track fields, soccer courts, indoor chess leagues, and yogic assemblies." }
            ].map((fac, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 text-left hover:shadow-xl transition-shadow flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-slate-900 text-amber-500 rounded-xl flex items-center justify-center">
                    <fac.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{fac.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{fac.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-50 mt-4">
                  <Link to="/facilities" className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-900 hover:text-amber-600">
                    Learn Details <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIAL / BRIEF QUOTE */}
      <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden border-y border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="text-[10px] font-extrabold uppercase text-amber-500 tracking-widest block bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Presidential Vision
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight leading-relaxed italic text-slate-200">
              "We strive to make education a joyful adventure of discovery. Our goal is to train students who are intellectually active, emotionally resilient, and morally grounded with Indian values (Sanskar)."
            </h2>
            <div className="pt-2">
              <span className="block text-base font-bold text-white">Board of Directors</span>
              <span className="block text-xs text-amber-400 font-display">The Sanskar Valley School</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
