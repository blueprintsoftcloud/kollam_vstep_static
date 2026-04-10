


// import React from 'react';
// import img from '../assets/hero-img1.png';

// const FinancialHero = () => {
//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       <main className="max-w-7xl mx-auto px-6 py-16 lg:py-24 flex items-center min-h-screen">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

//           {/* LEFT CONTENT */}
//           <div className="max-w-2xl z-10">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
//               <span className="w-2 h-2 rounded-full bg-[#daa412]"></span>
//               VStep Consultancy
//             </div>

//             <h1 className="font-[Outfit] text-5xl sm:text-6xl lg:text-[4.6rem] font-extrabold text-slate-900 leading-tight">
//               A Step Towards A <br />
//               <span className="text-[#ffbc03]">Bright Future</span>
//             </h1>

//             <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
//               Your all-in-one solution for career growth. Get expert admission support,
//               counseling, and placement assistance to build your future with confidence.
//             </p>

//             <div className="mt-10 flex flex-col sm:flex-row gap-4">
//               <button className="px-8 py-3.5 bg-[#ffbc03] text-black font-semibold rounded-lg shadow-md hover:scale-105 transition">
//                 Get Started
//               </button>
//               <button className="px-8 py-3.5 bg-white text-slate-900 font-semibold rounded-lg border border-slate-300 hover:bg-slate-50 transition">
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           {/* RIGHT IMAGE - Increased size and translated further right */}
//           <div className="relative flex justify-center lg:justify-end items-center lg:translate-x-24 transition-transform duration-500">
//             <div className="relative w-full max-w-[700px] lg:max-w-[950px]"> 
              
//               {/* Glow effect - enlarged to match image scale */}
//               <div className="absolute inset-0 bg-[#E5B22A]/15 blur-[100px] rounded-full -z-10 scale-125"></div>

//               {/* IMAGE */}
//               <img
//                 src={img}
//                 alt="Graduate"
//                 className="w-full h-auto object-contain drop-shadow-2xl scale-110 lg:scale-125 origin-center"
//               />
//             </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// };

// export default FinancialHero;



import React from 'react';
import img from '../assets/hero-img1.png';

const FinancialHero = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-16 lg:pt-28 lg:pb-24 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <div className="max-w-2xl z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#daa412]"></span>
              VStep Consultancy
            </div>

            <h1 className="font-[Outfit] text-5xl sm:text-6xl lg:text-[4.6rem] font-extrabold text-slate-900 leading-tight">
              A Step Towards A <br />
              <span className="text-[#ffbc03]">Bright Future</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg">
              Your all-in-one solution for career growth. Get expert admission support,
              counseling, and placement assistance to build your future with confidence.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {/* GET STARTED -> Scrolls to Home (Top) */}
              <a 
                href="#home" 
                className="px-8 py-3.5 bg-[#ffbc03] text-black font-bold rounded-lg shadow-md hover:scale-105 transition text-center"
              >
                Get Started
              </a>

              {/* CONTACT US -> Scrolls to Contact Section */}
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-lg border border-slate-300 hover:bg-slate-50 transition text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end items-center lg:translate-x-24">
            <div className="relative w-full max-w-[700px] lg:max-w-[900px]">
              <div className="absolute inset-0 bg-[#E5B22A]/10 blur-3xl rounded-full -z-10 scale-125"></div>
              <img
                src={img}
                alt="Graduate"
                className="w-full h-auto object-contain drop-shadow-2xl scale-110 lg:scale-125"
              />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default FinancialHero;