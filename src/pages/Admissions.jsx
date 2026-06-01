import React, { useState } from 'react';
import { BookOpen, FileText, CheckCircle2, AlertCircle, Calendar, GraduationCap, ChevronRight, HelpCircle } from 'lucide-react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    gradeInterested: 'Class I',
    phone: '',
    email: '',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send an email or store in database
    console.log('Admission inquiry submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-amber-400 text-xs sm:text-sm font-extrabold uppercase tracking-widest bg-blue-950/80 border border-blue-800 px-4 py-1.5 rounded-full inline-block">
            Admissions Session 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Secure Your Child's Future
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Welcome to the admissions portal of Sanskar Valley School. Discover our simple admission process, age criteria, and document requirements.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Requirements & Info */}
            <div className="lg:col-span-7 space-y-10 text-left">
              
              {/* Admissions Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3.5xl font-black text-slate-900 leading-tight">
                  Simple, Transparent Admission Process
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We strive to make our registration process as warm and stress-free as possible. Admissions are granted on a first-come, first-served basis, subject to class strength capacity and basic learning preparedness assessment.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Three Easy Steps to Enroll</h3>
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Submit Inquiry Form', desc: 'Fill out the online application inquiry form on the right or visit our Bichala Telpa campus in person.' },
                    { step: '02', title: 'Interactions & Assessment', desc: 'A short friendly conversation with the child to evaluate basic literacy and social milestones.' },
                    { step: '03', title: 'Document Verification & Fee', desc: 'Verify required certificates, complete fee formalities, and lock in the admission seat.' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-shadow">
                      <span className="text-2xl font-black text-blue-600 shrink-0 font-display">{step.step}</span>
                      <div>
                        <h4 className="font-bold text-slate-950 text-base">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Needed */}
              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-xl text-blue-600">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-950">Required Registration Documents</h3>
                </div>
                <p className="text-xs text-slate-500">Please prepare photocopy sets of the following documents during physical verification:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  {[
                    'Child\'s Birth Certificate copy',
                    'Passport size photos (Child & Parents)',
                    'Previous Class Report Card (if applicable)',
                    'Transfer Certificate (TC - if applicable)',
                    'Aadhar Card of Student and Parents',
                    'Address Proof (Electricity / Voter Card)'
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur opacity-25" />
                <div className="relative bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
                  
                  {submitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-950">Inquiry Submitted Successfully!</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        Thank you for your interest in Sanskar Valley School. Our admissions coordinator will reach out to you at your provided phone number shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors mt-4"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 block mb-1">
                          Admissions Inquiry Form
                        </span>
                        <h3 className="text-xl font-black text-slate-950">Submit Online Inquiry</h3>
                        <p className="text-xs text-slate-400 mt-1">Please provide accurate parent and student details to register.</p>
                      </div>

                      <div className="border-t border-slate-100 pt-4 space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Parent's Name *</label>
                          <input
                            type="text"
                            name="parentName"
                            required
                            value={formData.parentName}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                            placeholder="Father or Mother name"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Student's Full Name *</label>
                          <input
                            type="text"
                            name="studentName"
                            required
                            value={formData.studentName}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                            placeholder="Student name"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Grade/Class *</label>
                            <select
                              name="gradeInterested"
                              value={formData.gradeInterested}
                              onChange={handleChange}
                              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                            >
                              {['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI'].map((grade) => (
                                <option key={grade} value={grade}>{grade}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Phone Number *</label>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                            placeholder="parent@domain.com"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Additional Queries</label>
                          <textarea
                            name="message"
                            rows="2"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                            placeholder="Any queries related to fees, school timings, transport, etc."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-all"
                        >
                          Submit Inquiry
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
