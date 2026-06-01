import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Phone, Mail, MapPin, Clock, ArrowRight, Send, Sparkles } from 'lucide-react';

export default function Footer() {
  const [msgData, setMsgData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Footer message sent:', msgData);
    setSent(true);
    setMsgData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      
      {/* Top golden strip accent */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Col 1: School Identity */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-tr from-amber-500 to-orange-500 p-2.5 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <span className="text-lg font-black text-white block">
                  The Sanskar Valley
                </span>
                <span className="text-[10px] font-semibold text-amber-400 tracking-wider -mt-1 block font-display">
                  संस्कार वाली स्कूल
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Replacing conventional education models with values, innovation, and scientific enquiry. Catering to Saran and Saran-adjacent Gaya districts with international education.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
              </a>
              <a href="https://youtube.com" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.388.507 9.388.507s7.517 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://twitter.com" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com" className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 hover:bg-amber-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-amber-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'About School', path: '/about' },
                { name: 'Latest Results', path: '/results' },
                { name: 'Facilities', path: '/facilities' },
                { name: 'Admission Policy', path: '/apply' },
                { name: 'Mandatory Disclosure', path: '/downloads' },
                { name: 'Alumni Network', path: '/alumni' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center hover:text-white transition-colors duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info & Branches */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-amber-500 pl-3">
              Locations
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-bold">Gaya Branch (HQ)</span>
                  <span>AT: Mirdadpur, Guraru, Gaya, Bihar 824203</span>
                </div>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-200 font-bold">Chapra Branch</span>
                  <span>Bichala Telpa, South of Chota Telpa, Chapra, Bihar 841302</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:info@sanskarvalleys.com" className="hover:text-white">info@sanskarvalleys.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Mon-Sat: 8:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Leave a Message Short Form */}
          <div className="lg:col-span-3 text-left">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-4 border-amber-500 pl-3">
              Leave a Message
            </h3>
            {sent ? (
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl text-center space-y-2">
                <Sparkles className="w-8 h-8 text-amber-500 mx-auto animate-bounce" />
                <span className="block text-xs font-bold text-white">Thank you!</span>
                <span className="block text-[11px] text-slate-400">We have received your message.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={msgData.name}
                  onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={msgData.email}
                  onChange={(e) => setMsgData({ ...msgData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <textarea
                  rows="2"
                  required
                  placeholder="Your Message"
                  value={msgData.message}
                  onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

        <div className="border-t border-slate-900 my-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} The Sanskar Valley School. All Rights Reserved.</p>
          <div className="flex space-x-6 text-slate-500">
            <Link to="/about" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300">Timings & Campus</Link>
            <a href="https://www.savarnacloudtech.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 text-amber-500/80">Web design by Savarna Cloudtech</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
