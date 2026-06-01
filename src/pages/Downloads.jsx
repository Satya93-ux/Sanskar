import React, { useState } from 'react';
import { Download, Search, FileText, Calendar, ShieldAlert, Award, FileSpreadsheet, ChevronRight, RefreshCw, File } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Downloads() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Realistic school downloads data matching Gaya & Chapra
  const downloadItems = [
    {
      title: "Online Admission Registration Form 2026-27",
      desc: "Reference printable copy of the offline admission registration sheet.",
      category: "Admissions",
      fileType: "PDF",
      fileSize: "1.2 MB",
      date: "May 15, 2026",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
    },
    {
      title: "School Prospectus & Guidelines Book 2026",
      desc: "Detailed overview of rules, fee structures, policies, and facilities.",
      category: "Prospectus",
      fileType: "PDF",
      fileSize: "5.4 MB",
      date: "Jan 10, 2026",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
      title: "Academic Calendar & Holiday List Session 2026-27",
      desc: "Complete calendar showing scheduled tests, terms, sports meets, and holidays.",
      category: "Academic Calendar",
      fileType: "PDF",
      fileSize: "840 KB",
      date: "May 02, 2026",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
      title: "Class I to Class V Syllabus Outline",
      desc: "Term-wise curriculum mappings for English, Science, Mathematics, and Sanskrit.",
      category: "Syllabus",
      fileType: "ZIP/PDF",
      fileSize: "2.8 MB",
      date: "Apr 20, 2026",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Class VI to Class VIII Syllabus Outline",
      desc: "Detailed term-wise syllabus and textbooks list for upper-primary students.",
      category: "Syllabus",
      fileType: "ZIP/PDF",
      fileSize: "3.2 MB",
      date: "Apr 20, 2026",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
      title: "Mandatory Public Disclosure & Affiliation Certificates",
      desc: "Required regulatory compliance documents, land certifications, and society deeds.",
      category: "Disclosures",
      fileType: "PDF",
      fileSize: "4.1 MB",
      date: "May 25, 2026",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20"
    },
    {
      title: "Monthly Student Transport Route Schedule",
      desc: "Details of school buses, van pick-up coordinates, timings, and charges in Gaya & Chapra.",
      category: "Notices",
      fileType: "PDF",
      fileSize: "620 KB",
      date: "May 28, 2026",
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-500/20"
    }
  ];

  // Unique categories list
  const categories = ['All', 'Admissions', 'Prospectus', 'Academic Calendar', 'Syllabus', 'Disclosures', 'Notices'];

  // Filter items based on search and category selection
  const filteredItems = downloadItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const triggerDownload = (fileName) => {
    // Elegant toast or trigger download notification
    alert(`Starting download for: ${fileName}\n(This is a demonstration trigger link to the file resource)`);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Student Resource Vault
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Official School Downloads
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Access prospectus booklets, admission guides, syllabus structures, annual planners, and regulatory compliance paperwork instantly.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters and Search Dashboard */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-xl mb-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Category Tabs list */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start w-full lg:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/10'
                    : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Inputs */}
          <div className="relative w-full lg:w-96">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4.5 w-4.5 text-slate-400" />
            </span>
            <input
              type="text"
              placeholder="Search downloads..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all placeholder-slate-400"
            />
          </div>

        </div>

        {/* Downloads Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {filteredItems.length > 0 ? (
            filteredItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white border border-slate-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all hover:border-amber-100 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* File Metadata Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-50 pb-3">
                    <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    <div className="flex items-center space-x-3 text-xs text-slate-400 font-semibold">
                      <span>{item.fileSize}</span>
                      <span>•</span>
                      <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded uppercase font-mono font-bold text-[9px]">{item.fileType}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Footer and Download Action */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-50 mt-5">
                  <span className="text-[11px] font-medium text-slate-400">
                    Uploaded: {item.date}
                  </span>
                  <button
                    onClick={() => triggerDownload(item.title)}
                    className="bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full bg-white border border-slate-100 p-12 rounded-3xl text-center space-y-4">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <File className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No resources found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                No files match your query "{searchQuery}". Please check your spelling or try resetting the category filter.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1 mx-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Filters
              </button>
            </div>
          )}

        </div>

      </section>

      {/* Mandatory Regulatory disclosure box */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ShieldAlert className="w-10 h-10 text-amber-500 mx-auto" />
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-white">Looking for CBSE Mandatory Public Disclosures?</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              In accordance with Central regulatory frameworks, all certificates (SAR, fire safety, water, sanitary, society registration, CBSE affiliation) are publicly compiled under the **Disclosures** category.
            </p>
          </div>
          <button
            onClick={() => setSelectedCategory('Disclosures')}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
          >
            Filter Disclosures PDF
          </button>
        </div>
      </section>

    </div>
  );
}
