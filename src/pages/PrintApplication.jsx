import React, { useState } from 'react';
import { Search, FileText, Download, Printer, ShieldCheck } from 'lucide-react';

export default function PrintApplication() {
  const [appId, setAppId] = useState('');
  const [record, setRecord] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    // Mock record data matches registration card
    if (appId.toUpperCase().startsWith("SVS-")) {
      setRecord({
        regId: appId.toUpperCase(),
        studentName: "Aditya Kumar Pathak",
        parentName: "Sanjeev Pathak",
        dob: "2018-08-14",
        grade: "Class I",
        branch: "Guraru, Gaya Branch",
        phone: "+91 99999 99999",
        date: "2026-05-28",
        status: "Provisional Verification Pending"
      });
    } else {
      setRecord(null);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Inquiry Records
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Print Registration Card</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Enter your system provisional Registration ID (e.g. SVS-XXXXXX) to view and print details.</p>
        </div>
      </section>

      <section className="py-16 max-w-2xl mx-auto px-4 space-y-8">
        
        {/* Search form */}
        <div className="bg-white border border-slate-100 p-6 rounded-3xl shadow-xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              placeholder="Enter Registration ID (e.g. SVS-123456)"
              value={appId}
              onChange={(e) => setAppId(e.target.value)}
              className="flex-grow bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all uppercase placeholder-slate-400 font-mono"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center justify-center gap-1.5 shrink-0"
            >
              <Search className="w-4 h-4" /> Fetch Application
            </button>
          </form>
        </div>

        {/* Results display */}
        {searched && (
          record ? (
            <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl text-left space-y-6">
              <div className="flex justify-between items-center border-b border-slate-50 pb-4">
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl">Registration Status Card</h3>
                  <p className="text-xs text-slate-400 mt-0.5">The Sanskar Valley School enrollment database</p>
                </div>
                <span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md">
                  {record.status}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <p><span className="font-bold text-slate-400 block mb-0.5">Registration ID</span> <span className="font-mono font-bold text-slate-900 text-base">{record.regId}</span></p>
                <p><span className="font-bold text-slate-400 block mb-0.5">Student Full Name</span> <span className="font-bold text-slate-900">{record.studentName}</span></p>
                <p><span className="font-bold text-slate-400 block mb-0.5">Father / Parent Name</span> <span className="font-bold text-slate-900">{record.parentName}</span></p>
                <p><span className="font-bold text-slate-400 block mb-0.5">Date of Birth</span> <span className="font-bold text-slate-900">{record.dob}</span></p>
                <p><span className="font-bold text-slate-400 block mb-0.5">Class & Campus</span> <span className="font-bold text-slate-900">{record.grade} ({record.branch})</span></p>
                <p><span className="font-bold text-slate-400 block mb-0.5">Date Filed</span> <span className="font-bold text-slate-900">{record.date}</span></p>
              </div>

              <div className="border-t border-slate-50 pt-5 flex justify-between items-center gap-4">
                <button
                  onClick={() => window.print()}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" /> Print Page
                </button>
                <button
                  onClick={() => alert('Downloading PDF card...')}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-slate-100 rounded-3xl p-12 text-center space-y-4 shadow-xl">
              <FileText className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Application not found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
                We could not find any active admission inquiries matching ID "{appId}". Please check your spelling or verify with our campus office. Note: Mock IDs must start with "SVS-".
              </p>
            </div>
          )
        )}

      </section>

    </div>
  );
}
