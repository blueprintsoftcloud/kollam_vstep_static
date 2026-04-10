import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-[#ffbc03] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Contact Information
          </h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 font-[Outfit] leading-tight">
            Connect with our <br /> 
            <span className="text-[#ffbc03]">expert consultants.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: Contact Details (5/12 width) */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Phone Numbers */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#ffbc03] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold uppercase text-[11px] tracking-widest mb-1">Phone Support</h3>
                <p className="text-xl font-bold text-slate-900">+91 90377 30151</p>
                <p className="text-xl font-bold text-slate-900">+91 85477 00351</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#ffbc03] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold uppercase text-[11px] tracking-widest mb-1">Email Us</h3>
                <p className="text-xl font-bold text-slate-900 break-words">vestepconsultancy@gmail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#ffbc03] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold uppercase text-[11px] tracking-widest mb-1">Head Office</h3>
                <p className="text-xl font-bold text-slate-900 leading-snug">
                  Pallimukku Junction,<br />
                  Kollam, Kerala 691019
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-[#ffbc03] transition-colors duration-300">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="text-slate-400 font-bold uppercase text-[11px] tracking-widest mb-1">Working Hours</h3>
                <p className="text-xl font-bold text-slate-900">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-500 font-medium">Sunday: Closed</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Map (7/12 width) */}
          <div className="lg:col-span-7 h-[500px] lg:h-full min-h-[450px]">
            <div className="w-full h-full bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe 
                title="VStep Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.82390886737!2d76.6025178!3d8.8604313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd400f074d3d%3A0xc6829742e47f7d1!2sPallimukku%2C%20Kollam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1711894000000!5m2!1sen!2sin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;



// import React from 'react';

// const ContactUs = () => {
//   return (
//     // Changed min-h-screen to h-auto to remove the forced empty space at the bottom
//     <div className="bg-white h-auto pt-16 pb-12 px-6 lg:pt-24 lg:pb-20">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="mb-16">
//           <h2 className="text-[#ffbc03] font-bold uppercase tracking-[0.2em] text-[10px] mb-3">
//             Contact
//           </h2>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-[Outfit] tracking-tight">
//             Connect with our <span className="text-[#ffbc03]">experts.</span>
//           </h1>
//         </div>

//         {/* Minimalist Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-slate-100 pt-10">
          
//           {/* Phone Details */}
//           <div>
//             <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-3">Phone Support</h3>
//             <div className="space-y-1">
//               <p className="text-sm font-bold text-slate-900">+91 90377 30151</p>
//               <p className="text-sm font-bold text-slate-900">+91 85477 00351</p>
//             </div>
//           </div>

//           {/* Email Details */}
//           <div>
//             <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-3">Email Address</h3>
//             <p className="text-sm font-bold text-slate-900 hover:text-[#ffbc03] transition-colors cursor-pointer">
//               vestepconsultancy@gmail.com
//             </p>
//           </div>

//           {/* Address Details */}
//           <div>
//             <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-3">Head Office</h3>
//             <p className="text-sm font-bold text-slate-900 leading-relaxed">
//               Pallimukku Junction,<br />
//               Kollam, Kerala 691019
//             </p>
//           </div>

//           {/* Hours Details */}
//           <div>
//             <h3 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-3">Working Hours</h3>
//             <div className="flex justify-between items-center max-w-[160px]">
//               <span className="text-[13px] font-medium text-slate-600">Mon — Sat</span>
//               <span className="text-[13px] font-bold text-slate-900">9AM - 6PM</span>
//             </div>
//           </div>

//         </div>

//         {/* Simple WhatsApp Link */}
       

//       </div>
//     </div>
//   );
// };

// export default ContactUs;