import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export default function Messages() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 md:py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Leadership Address
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Institutional Messages</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Words of inspiration and guidance from our Director and Principal.</p>
        </div>
      </section>

      {/* Messages */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Director Message */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 border-r border-slate-100 pr-0 lg:pr-8">
            <div className="w-32 h-32 bg-slate-900 text-amber-500 rounded-full flex items-center justify-center font-bold text-3xl border-4 border-amber-500 shadow-xl">
              DM
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Dr. S. K. Pathak</h3>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">Managing Director</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">The Sanskar Valley School</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4 relative">
            <Quote className="w-12 h-12 text-slate-100 absolute -top-6 -left-4 shrink-0" />
            <h4 className="text-lg font-bold text-slate-950 z-10 relative">Dear Parents & Students,</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed z-10 relative">
              "It is with immense joy and gratitude that I welcome you to The Sanskar Valley School. Our core target has always been to deliver a holistic system that balances academic superiority with sound human values. Under our values-based general education format in Mirdadpur (Gaya) and Bichala Telpa (Chapra), we build confident global thinkers ready to lead tomorrow."
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              "We invest heavily in state-of-the-art facilities, safe student commute buses, advanced computer and scientific research rooms, and highly capable teachers to ensure that your child gets the absolute best standard of growth. Thank you for placing your trust in us."
            </p>
          </div>
        </div>

        {/* Principal Message */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 border-r border-slate-100 pr-0 lg:pr-8 lg:order-last pl-0 lg:pl-8 border-l-0 lg:border-l lg:border-r-0">
            <div className="w-32 h-32 bg-slate-900 text-amber-500 rounded-full flex items-center justify-center font-bold text-3xl border-4 border-amber-500 shadow-xl">
              PM
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Mrs. R. Sharma</h3>
              <p className="text-xs text-amber-600 font-bold uppercase tracking-wider">School Principal</p>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">The Sanskar Valley School</p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4 relative">
            <Quote className="w-12 h-12 text-slate-100 absolute -top-6 -left-4 shrink-0" />
            <h4 className="text-lg font-bold text-slate-950 z-10 relative">Greeting Learners & Guardians,</h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed z-10 relative">
              "Education is not merely learning facts, but training the mind to think and the heart to grow with values. At The Sanskar Valley School, we foster a safe, positive, and stress-free environment where every child feels respected and enabled to grow."
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              "Our classrooms feature highly interactive teaching paradigms. We keep student-teacher ratios around 15:1 to verify that no child is left behind. Through arts, athletic sports, scientific inquiry, and active communication, we shape dynamic and healthy pupils."
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
