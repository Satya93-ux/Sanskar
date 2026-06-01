import React from 'react';
import { Award, Users, Trophy } from 'lucide-react';

export default function Toppers() {
  const toppers = [
    { name: "Rahul Kumar", score: "98.4%", class: "Class VIII", year: "2025", branch: "Gaya Branch" },
    { name: "Sneha Kumari", score: "97.8%", class: "Class VIII", year: "2025", branch: "Chapra Branch" },
    { name: "Amit Pathak", score: "96.5%", class: "Class V", year: "2025", branch: "Gaya Branch" },
    { name: "Priya Raj", score: "96.2%", class: "Class V", year: "2025", branch: "Chapra Branch" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Student Achievements
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Academic Toppers</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Honoring our exceptional scholars who have consistently set new standards of excellence.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {toppers.map((student, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-lg text-center relative overflow-hidden group hover:border-amber-100 hover:shadow-xl transition-all">
              <div className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/20 text-amber-500 p-2 rounded-xl">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="w-24 h-24 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 border-2 border-amber-500 group-hover:scale-105 transition-transform">
                {student.name.charAt(0)}
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg leading-snug">{student.name}</h3>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider mt-1">{student.score} Marks</p>
              <div className="border-t border-slate-50 mt-4 pt-4 text-xs text-slate-400 space-y-1">
                <p><span className="font-bold text-slate-600">Grade:</span> {student.class}</p>
                <p><span className="font-bold text-slate-600">Session:</span> {student.year}</p>
                <p className="font-semibold text-slate-500">{student.branch}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
