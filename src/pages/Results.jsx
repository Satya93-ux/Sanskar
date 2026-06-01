import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';

export default function Results() {
  const reports = [
    { year: "2024-25", class: "Class VIII Board", candidates: "120 Students", passRate: "100%", distinctions: "86 Students" },
    { year: "2023-24", class: "Class VIII Board", candidates: "105 Students", passRate: "100%", distinctions: "72 Students" },
    { year: "2022-23", class: "Class VIII Board", candidates: "98 Students", passRate: "100%", distinctions: "65 Students" },
    { year: "2024-25", class: "Class V Board", candidates: "145 Students", passRate: "100%", distinctions: "95 Students" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Our Performance Track
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Board & Class Results</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Review our outstanding academic stats, passing trends, and distinction counts.</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4">
        <div className="bg-white border border-slate-100 rounded-3xl shadow-xl overflow-hidden text-left">
          
          <div className="p-6 border-b border-slate-50">
            <h3 className="text-lg font-bold text-slate-900">Academic Records Table</h3>
            <p className="text-xs text-slate-400 mt-0.5">Verified statistics of Class V and Class VIII board assessments.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase font-mono">
                <tr>
                  <th className="py-4 px-6">Year</th>
                  <th className="py-4 px-6">Class/Grade</th>
                  <th className="py-4 px-6">Total Candidates</th>
                  <th className="py-4 px-6">Distinctions achieved</th>
                  <th className="py-4 px-6">Pass Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {reports.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold">{row.year}</td>
                    <td className="py-4 px-6">{row.class}</td>
                    <td className="py-4 px-6 font-mono text-xs">{row.candidates}</td>
                    <td className="py-4 px-6 text-indigo-600 font-semibold">{row.distinctions}</td>
                    <td className="py-4 px-6"><span className="bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold px-2 py-0.5 rounded">{row.passRate} Pass</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>
    </div>
  );
}
