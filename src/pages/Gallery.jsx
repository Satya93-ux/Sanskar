import React, { useState } from 'react';
import { X, Image, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  // Mock school gallery items
  const photos = [
    { title: "Smart Science Classroom", category: "Academics", color: "from-blue-600 to-indigo-600" },
    { title: "Computer Lab Assemblies", category: "Technology", color: "from-indigo-600 to-slate-900" },
    { title: "Spacious Central Library", category: "Academics", color: "from-slate-900 to-blue-900" },
    { title: "Annual Athletic Running Track", category: "Sports", color: "from-amber-600 to-orange-600" },
    { title: "Creative Art & Craft Sessions", category: "Co-Curricular", color: "from-emerald-600 to-green-600" },
    { title: "Student Yoga Assembly", category: "Ethos", color: "from-purple-600 to-rose-600" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            SVS In Pixels
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Campus Gallery</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Visual tour of our state-of-the-art labs, library assemblies, sports events, and values assemblies.</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item)}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-2xl transition-all hover:border-amber-100 flex flex-col justify-between"
            >
              <div className={`h-48 w-full bg-gradient-to-tr ${item.color} flex items-center justify-center p-6 text-white text-center relative overflow-hidden`}>
                <Image className="w-10 h-10 opacity-30 absolute top-4 left-4" />
                <h4 className="font-extrabold text-white text-base sm:text-lg z-10">{item.title}</h4>
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-slate-900 font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> View Image
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-slate-50 flex justify-between items-center bg-slate-50/50">
                <span className="text-xs font-bold text-slate-500">{item.title}</span>
                <span className="bg-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 bg-slate-900 text-white p-2.5 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 text-white rounded-3xl max-w-xl w-full p-8 border border-slate-800 space-y-6 text-center shadow-2xl relative"
            >
              <div className={`h-64 w-full bg-gradient-to-tr ${activeImage.color} rounded-2xl flex items-center justify-center p-6 text-white text-center`}>
                <h3 className="text-2xl font-black">{activeImage.title}</h3>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md inline-block">
                  {activeImage.category}
                </span>
                <h4 className="text-lg font-bold">{activeImage.title}</h4>
                <p className="text-xs text-slate-400">
                  Provisional classroom demonstration display from Mirdadpur (Gaya) / Chapra (Saran) campuses.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
