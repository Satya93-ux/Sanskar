import React, { useState } from 'react';
import { CheckCircle2, User, BookOpen, AlertCircle, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Apply() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    dob: '',
    gender: 'Male',
    grade: 'Nursery',
    branch: 'Guraru, Gaya',
    phone: '',
    email: '',
    previousSchool: '',
    address: '',
    agree: false
  });
  const [regId, setRegId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.studentName || !formData.parentName || !formData.phone) {
        alert('Please fill in all required parent and student fields.');
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('You must accept the school policies declaration.');
      return;
    }
    // Generate simple mock registration ID
    const randomId = "SVS-" + Math.floor(100000 + Math.random() * 900000);
    setRegId(randomId);
    setSubmitted(true);
    console.log('Admission Inquiry registered:', { ...formData, regId: randomId });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <span className="text-amber-400 text-xs font-extrabold uppercase tracking-widest bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full inline-block">
            Session 2026-27 Enrollment
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">Online Student Registration</h1>
          <p className="text-slate-300 max-w-xl mx-auto text-sm">Please follow this simple multi-step form to file an admission inquiry.</p>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-16 max-w-3xl mx-auto px-4">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl text-left">
          
          {submitted ? (
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-slate-900">Registration Successful!</h2>
                <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                  Thank you for submitting an inquiry. Your provisional registration has been logged in our databases.
                </p>
              </div>

              {/* Registration Card details */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 max-w-md mx-auto space-y-4 shadow-xl">
                <div className="border-b border-slate-800 pb-3 flex justify-between items-center text-xs">
                  <span className="font-extrabold text-amber-500 uppercase tracking-widest">SVS Enrollment Record</span>
                  <span className="font-mono text-slate-400">Status: Pending Verification</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex justify-between"><span className="text-slate-400">Registration ID:</span> <span className="font-mono font-bold text-white text-base">{regId}</span></p>
                  <p className="flex justify-between"><span className="text-slate-400">Student Name:</span> <span className="font-bold">{formData.studentName}</span></p>
                  <p className="flex justify-between"><span className="text-slate-400">Parent Name:</span> <span className="font-bold">{formData.parentName}</span></p>
                  <p className="flex justify-between"><span className="text-slate-400">Class Selected:</span> <span className="font-bold">{formData.grade}</span></p>
                  <p className="flex justify-between"><span className="text-slate-400">Campus Selected:</span> <span className="font-bold text-amber-400">{formData.branch}</span></p>
                </div>
                <div className="border-t border-slate-800 pt-3 text-[10px] text-slate-400 leading-normal text-center">
                  ⚠️ Please print this code card or save your ID to check status under `/print-application`.
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => { setSubmitted(false); setStep(1); }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm"
                >
                  Register Another Student
                </button>
              </div>
            </div>
          ) : (
            <div>
              {/* Steps Progress bar */}
              <div className="flex items-center justify-between border-b border-slate-50 pb-6 mb-8 text-xs sm:text-sm">
                {[
                  { num: 1, name: 'Student Details' },
                  { num: 2, name: 'Contact & History' },
                  { num: 3, name: 'Review & Verify' }
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-2">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      step === item.num
                        ? 'bg-amber-500 text-slate-950 font-black'
                        : step > item.num
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}>
                      {item.num}
                    </span>
                    <span className={`font-semibold hidden sm:inline ${
                      step === item.num ? 'text-slate-900 font-bold' : 'text-slate-400'
                    }`}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Form Content Steps */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                      <User className="w-5 h-5 text-amber-500" /> Basic Pupil & Guardian Information
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Student's Full Name *</label>
                        <input
                          type="text"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                          placeholder="Student Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Father's / Parent's Name *</label>
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                          placeholder="Father Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Date of Birth *</label>
                        <input
                          type="date"
                          name="dob"
                          required
                          value={formData.dob}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Gender *</label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Class / Grade Interested *</label>
                        <select
                          name="grade"
                          value={formData.grade}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                        >
                          {['Nursery', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII'].map((cls) => (
                            <option key={cls} value={cls}>{cls}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Preferred Branch *</label>
                        <select
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                        >
                          <option value="Guraru, Gaya">Mirdadpur, Guraru, Gaya</option>
                          <option value="Bichala Telpa, Chapra">Bichala Telpa, Chapra, Saran</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-amber-500" /> Guardian Contacts & History
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Active Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                          placeholder="guardian@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Previous School Attended (If any)</label>
                      <input
                        type="text"
                        name="previousSchool"
                        value={formData.previousSchool}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all"
                        placeholder="Last school details"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Full Communication Address</label>
                      <textarea
                        name="address"
                        rows="2"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white transition-all resize-none"
                        placeholder="District, Village, Pincode"
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-950 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500" /> Review & Declaration Policy
                    </h3>
                    
                    {/* Review info */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 text-xs sm:text-sm space-y-2.5">
                      <p><span className="font-bold text-slate-500">Student Full Name:</span> <span className="font-semibold text-slate-900">{formData.studentName}</span></p>
                      <p><span className="font-bold text-slate-500">Guardian Name:</span> <span className="font-semibold text-slate-900">{formData.parentName}</span></p>
                      <p><span className="font-bold text-slate-500">Class & Branch:</span> <span className="font-semibold text-slate-900">{formData.grade} ({formData.branch})</span></p>
                      <p><span className="font-bold text-slate-500">Phone Contact:</span> <span className="font-semibold text-slate-900">{formData.phone}</span></p>
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="agree"
                        required
                        id="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 rounded text-amber-500 border-gray-300 focus:ring-amber-500"
                      />
                      <label htmlFor="agree" className="text-xs text-slate-500 leading-normal">
                        I hereby declare that all entries compiled in this form are correct and true. I understand that this online submission is provisional, and complete admission is subject to physical document verification and school policies.
                      </label>
                    </div>
                  </div>
                )}

                {/* Form Navigation buttons */}
                <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-sm flex items-center gap-1"
                    >
                      <ArrowLeft className="w-4 h-4" /> Previous
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center gap-1 ml-auto"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm flex items-center gap-1.5 shadow-xl ml-auto"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Register Inquiry
                    </button>
                  )}
                </div>

              </form>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
