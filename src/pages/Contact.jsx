import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Navigation } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    setSent(true);
    setFormData({ name: '', email: '', subject: 'General', message: '' });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Connect With SVS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Contact Our Campuses</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Reach out to our offices in Gaya and Saran districts. We look forward to guiding you.</p>
        </div>
      </section>

      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 leading-tight">Drop By Or Call Us</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our campus administration desks are open Monday through Saturday to guide guardians and handle registrations.
            </p>

            <div className="space-y-4">
              
              {/* Gaya Campus */}
              <div className="bg-white border border-slate-100 p-5 rounded-3xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="bg-slate-900 text-amber-500 p-3 rounded-2xl shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm sm:text-base">Gaya Campus (HQ)</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">AT: Mirdadpur, Guraru, Gaya, Bihar 824203</p>
                  <p className="text-xs font-bold text-slate-700 mt-1.5 flex items-center gap-1.5">📞 Gaya: +91 XXXXX XXXXX</p>
                </div>
              </div>

              {/* Chapra Campus */}
              <div className="bg-white border border-slate-100 p-5 rounded-3xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="bg-slate-900 text-amber-500 p-3 rounded-2xl shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm sm:text-base">Chapra Campus</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Bichala Telpa, South of Chota Telpa, Chapra, Bihar 841302</p>
                  <p className="text-xs font-bold text-slate-700 mt-1.5 flex items-center gap-1.5">📞 Chapra: +91 YYYYY YYYYY</p>
                </div>
              </div>

              {/* General Hours */}
              <div className="bg-white border border-slate-100 p-5 rounded-3xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="bg-slate-900 text-amber-500 p-3 rounded-2xl shrink-0"><Clock className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm sm:text-base">Office Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">Monday to Saturday: 8:00 AM – 2:00 PM</p>
                  <p className="text-[11px] text-amber-600 font-semibold italic mt-1">* Closed on Sundays & national holidays.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl blur opacity-20" />
            <div className="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
              {sent ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto"><CheckCircle2 className="w-10 h-10" /></div>
                  <h3 className="text-xl font-bold text-slate-950">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">We have registered your messages. Our admin coordinators will write back to you shortly.</p>
                  <button onClick={() => setSent(false)} className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2 rounded-xl text-xs mt-4">Send another query</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-black text-slate-950 border-b border-slate-50 pb-3">Write to School Desk</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Your Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Your Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500" placeholder="Email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Subject</label>
                    <select value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500">
                      <option value="General">General Inquiries</option>
                      <option value="Admissions">Admissions Help</option>
                      <option value="Complaints">Feedback & suggestions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1">Message *</label>
                    <textarea rows="3" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none" placeholder="Message details" />
                  </div>
                  <button type="submit" className="w-full bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map */}
      <section className="bg-white border-t border-slate-100 py-12 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-950">Interactive Driving Coordinates</h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto leading-normal">Plus codes: Gaya branch **QQG7+HV Mirdadpur** / Chapra branch **Bichala Telpa**.</p>
        <div className="relative max-w-6xl mx-auto px-4 h-64 bg-sky-50 border border-slate-100 rounded-3xl flex items-center justify-center overflow-hidden">
          <div className="space-y-3 z-10 text-center">
            <Navigation className="w-8 h-8 text-amber-500 mx-auto animate-bounce" />
            <h4 className="font-bold text-slate-900">Get Driving Directions On Map</h4>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-block bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2 rounded-xl transition-colors">Get Directions</a>
          </div>
        </div>
      </section>

    </div>
  );
}
