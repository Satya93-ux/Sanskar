import React from 'react';
import { BookOpen, Shield, Users, Trophy } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    { title: "Science & Computer Labs", desc: "Advanced scientific and computing rooms to provide hands-on general scientific applications and tech literacy.", icon: BookOpen },
    { title: "Spacious Library", desc: "Sprawling space housing hundreds of textbooks, child friction cards, dictionaries, magazines, and educational boards.", icon: Shield },
    { title: "Safe GPS Fleet", desc: "Our transport vehicles cover Mirdadpur (Gaya) and Chapra routes with high safety vigilance.", icon: Users },
    { title: "Multi-Sports Arenas", desc: "Extensive play yards for outdoor volleyball, soccer, tracks, and creative indoor chess assemblies.", icon: Trophy }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Our Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">School Facilities</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Providing safe, resourceful and innovative facilities to nurture our learners daily.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow text-left flex gap-5 items-start">
              <div className="bg-slate-900 text-amber-500 p-3 rounded-2xl shrink-0">
                <fac.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-950">{fac.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
