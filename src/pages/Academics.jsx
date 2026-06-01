import React from 'react';
import { BookOpen, Award, Users, CheckCircle2 } from 'lucide-react';

export default function Academics() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Our Learning Framework
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Academics & Curriculum</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Deploying comprehensive primary and upper-primary general instruction matching standards.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Course details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 leading-tight">Curriculum Structure (Nursery to Class VIII)</h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The academic framework at The Sanskar Valley School is designed around experiential learning modules. We offer general schooling starting from Nursery up to Class VIII, focusing heavily on phonetics, communicative English, basic arithmetic logic, scientific query, and Hindi/Sanskrit ethics.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We leverage modern digital visuals and lab sessions to ensure concepts are deeply integrated rather than temporarily memorized.
            </p>
          </div>

          <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-xl space-y-5 text-left">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-3">Core Curricular Domains</h3>
            <div className="space-y-3.5 text-slate-700 font-semibold text-sm">
              {[
                "Language Arts: Phonics, Reading & Writing fluency",
                "Mathematics: Numerical logic and operational math structures",
                "General Science: Exploratory physics, biology and environmental science",
                "Social Science: History, geography, and civic duties",
                "Moral character assemblies & value education (Sanskar)",
                "Information Communication Technology (ICT) basic training"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
