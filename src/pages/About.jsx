import React from 'react';
import { BookOpen, Award, Check, Milestone, Heart, Globe, UserCheck, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Our Ethos & Origin
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            The Sanskar Valley Ethos
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Preserving Indian heritage while fostering modern scientific inquiry at Mirdadpur (Gaya) and Chapra (Saran).
          </p>
        </div>
      </section>

      {/* Origin Ethos */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Established 2016</span>
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 leading-tight">
              Shaping Conscious, Competent Future Leaders
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              **The Sanskar Valley School (संस्कार वाली स्कूल)** is founded on a singular ideal: that true education is the harmonization of modern intellect with values ("Sanskar"). With branches spanning Mirdadpur (Guraru, Gaya) and Bichala Telpa (Chapra, Saran), we bring high-fidelity English-medium educational programs to students across Bihar.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We reject the archaic memorization models. Our methodologies are tailored around inquiry-based, activity-supported curriculum which sparks natural curiosity and builds confident communication skills in both Hindi and English.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-700 font-semibold">
              {['Values-driven Indian ethos', 'Modern Science & ICT labs', 'Empathetic class guidance', 'Multi-dimensional sports fields'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-slate-900 border border-slate-800 text-white rounded-3xl p-8 shadow-2xl text-left space-y-6">
            <h3 className="text-xl font-bold border-b border-slate-800 pb-4 text-white">Our School Ethos</h3>
            <div className="space-y-4">
              {[
                { icon: Milestone, title: "Foundation First", desc: "Solidifying literacy, numerical logic, and phonetics in young minds." },
                { icon: Heart, title: "Character Pillars", desc: "Teaching moral courage, truth, clean values, and community support." },
                { icon: Globe, title: "Universal Education", desc: "Affordable access to premium schooling for all rural and semi-urban communities." }
              ].map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="bg-slate-800 p-2.5 rounded-xl text-amber-400 shrink-0"><val.icon className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-slate-200 text-sm">{val.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Institutional Mission</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To deliver premium general education that stimulates intellectual growth, encourages critical exploration, and preserves profound moral character. We are dedicated to providing a safe, growth-oriented environment across Saran and Saran-adjacent Gaya districts.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center font-bold">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Institutional Vision</h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              To stand as the leading center for general schooling in Bihar, recognized for nurturing proactive, responsible citizens. We envision a community where students learn happily, practice ethics consistently, and emerge ready to contribute positively to society.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
