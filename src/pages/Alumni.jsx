import React from 'react';
import { Users, Award, Heart, MessageSquare } from 'lucide-react';

export default function Alumni() {
  const reviews = [
    { name: "Vikash Kumar", career: "Software Engineer", comment: "The Sanskar Valley School gave me the logical thinking base that helped me conquer coding challenges in engineering. The values taught here remain my guiding light.", year: "2018 Grad" },
    { name: "Shalini Kumari", career: "Medical Aspirant", comment: "Caring teachers who spent hours mentoring me on math problems and biology queries. SVS has the best academic atmosphere in Gaya.", year: "2020 Grad" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Our Legacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Alumni Connect</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Words from our past scholars who are today building remarkable careers across the nation.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-4 space-y-8 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((al, idx) => (
            <div key={idx} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-lg relative flex flex-col justify-between">
              <MessageSquare className="w-12 h-12 text-slate-100 absolute top-4 right-4" />
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed italic z-10 relative">
                "{al.comment}"
              </p>
              <div className="border-t border-slate-50 mt-6 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-950 text-amber-500 rounded-full flex items-center justify-center font-bold text-sm">
                  {al.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">{al.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{al.career} • {al.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
