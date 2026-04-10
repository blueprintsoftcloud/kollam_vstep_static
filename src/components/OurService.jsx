// import React from 'react';

// const VStepServices = () => {
//   // Verbatim Course Data from your reference image
//   const courseCategories = [
//     {
//       title: "Medical & Health Care",
   
//       courses: [
//         "MBBS", "BAMS", "BHMS", "BDS", "MD", "MDS", "BSC NURSING", "GNM", "B. Pharm",
//         "D. Pharm", "DMLT", "DOTAT", "DHI", "Forensic Sciences", "Renal Dialysis", 
//         "Psychology", "Radiology and Imaging Technology", "Dialysis Technology",
//         "Occupational Therapy (BOT)", "Physiotherapy (BPT)", "Physician Assistant"
//       ]
//     },
//     {
//       title: "Engineering & Technology",
      
    
//       courses: [
//         "Computer Science & Engineering", "AI & Machine Learning", "Marine Engineering",
//         "Aeronautical Engineering", "Aerospace Engineering", "Automobile Engineering",
//         "Civil Engineering", "Electrical & Electronics", "Information Technology",
//         "Cyber security & Forensic", "Mechanical Engineering", "Mechatronics"
//       ]
//     },
//     {
//       title: "Law & Management",
    
     
//       courses: [
//         "LLB", "BA.LLB", "B.Com.LLB", "LLM", "B.com with CA", "BCA", 
//         "International Logistics", "Shipping & Management", "BBA Business Analytics",
//         "BBA Digital Marketing", "BBA Aviation", "Financial Management"
//       ]
//     },
//     {
//       title: "Social Sciences & Others",
     
     
//       courses: [
//         "BA English with Montessori", "BA Arabic", "Humanities", "BSW/MSW",
//         "B.Ed / D.El.Ed", "BA Political Science", "IAS Coaching",
//         "Ph.D & PG Courses Available"
//       ]
//     }
//   ];

//   return (
//     <div className="bg-slate-50 min-h-screen py-20 px-6">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-[#ffbc03] font-bold uppercase tracking-widest text-sm mb-4">Our Programs</h2>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-[Outfit]">
//             Excellence in Education
//           </h1>
//           <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
//             Choose from a wide range of industry-leading courses. We provide the guidance 
//             you need to secure admission in top institutions.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {courseCategories.map((cat, idx) => (
//             <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className={`${cat.iconColor} p-4 rounded-2xl`}>
//                   {cat.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-slate-900 font-[Outfit]">{cat.title}</h3>
//               </div>
              
//               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
//                 {cat.courses.map((course, cIdx) => (
//                   <li key={cIdx} className="flex items-center gap-3 text-slate-600 group">
//                     <span className="w-1.5 h-1.5 rounded-full bg-[#ffbc03] shrink-0"></span>
//                     <span className="text-sm md:text-base group-hover:text-black transition-colors">
//                       {course}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Footer CTA */}
       

//       </div>
//     </div>
//   );
// };

// export default VStepServices;




import React from 'react';
import { Stethoscope, Cpu, Scale, Globe, ArrowRight,Film } from 'lucide-react';

const VStepServices = () => {
  const courseCategories = [
    {
      title: "Medical & Health Care",
      icon: <Stethoscope className="w-8 h-8 text-[#ffbc03]" />,
      courses: [
        "MBBS", "BAMS", "BHMS", "BDS", "MD", "MDS", "BSC NURSING", "GNM", "B. Pharm",
        "D. Pharm", "DMLT", "DOTAT", "DHI", "Forensic Sciences", "Renal Dialysis", 
        "Psychology", "Radiology and Imaging Technology", "Dialysis Technology",
        "Anaesthesia Technology", "Neuron Electrophysiology Technology","Health Inspector (DHI)",
        "Occupational Therapy (BOT)", "Physiotherapy (BPT)", "Physician Assistant","Biotechnology"
      ]
    },
    {
      title: "Engineering & Technology",
      icon: <Cpu className="w-8 h-8 text-[#ffbc03]" />,
      courses: [
        "Computer Science & Engineering", "AI & Machine Learning (ECE)", "Marine Engineering","Aircraft Maintenance Engineering",
        "Aeronautical Engineering", "Aerospace Engineering", "Automobile Engineering","Bio-Medical Engineering (polytechnic)",
        "Civil Engineering", "Electrical & Electronics Engineering","Electrical and Instrumentation Engineering", "Information Technology",
        "Specialized in Cyber security & Forensic","Fire Technology & Safety Engineering", "Mechanical Engineering","Nano Technology","Petrochemical Engineering", "Mechatronics","Fashion Design"
      ]
    },
    {
      title: "Law & Management",
      icon: <Scale className="w-8 h-8 text-[#ffbc03]" />,
      courses: [
        "LLB", "BA.LLB", "B.Com.LLB", "LLM","B.Com Accounting & Finance", "B.com with CA", "BCA", 
        "B.com In International Logistics", "Shipping & Financial Management", "BBA Business Analytics",
        "BBA Digital Marketing", "BBA Aviation","BBA in Multimode Transportation & Logistic Management" , "BBA Financial Management","BBA Entrepreneurial Management"
      ]
    },
    {
      title: "Multimedia & Film Technology",
      icon: <Film className="w-8 h-8 text-[#ffbc03]" />,
      courses: [
        "Bsc Hon's Film Making", "Bsc Hon's Animation & Visual Effects", "Bsc Hon's Editing & Sound Design", "Bsc Hon's Animation & Digital Design","MSc in Visual Communication",
        
      ]
    },
    {
      title: "Social Sciences & Others",
      icon: <Globe className="w-8 h-8 text-[#ffbc03]" />,
      courses: [
        "BA English with Montessori", "BA Arabic", "Humanities", "BSW/MSW",
        "B.Ed / D.El.Ed", "BA Political Science", "IAS Coaching",
        "Ph.D & PG Courses"
      ]
    }
  ];

  return (
    // Note: bg-transparent allows it to blend into whatever section it is placed in
    <div className="bg-transparent py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Minimal Left-Aligned Header */}
        <div className="mb-16 md:flex md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#ffbc03] font-bold uppercase tracking-widest text-sm mb-4">
              Our Programs
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-[Outfit]">
              Excellence in Education
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Choose from a wide range of industry-leading courses. We provide the guidance 
              you need to secure admission in top institutions.
            </p>
          </div>
        </div>

        {/* Flush Row Layout */}
        <div className="">
          {courseCategories.map((cat, idx) => (
            <div 
              key={idx} 
              className="py-12 border-slate-200 flex flex-col lg:flex-row gap-8 lg:gap-16  transition-colors duration-300"
            >
              {/* Left Column: Category Info */}
              <div className="lg:w-1/3 shrink-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-100 rounded-xl">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-[Outfit]">
                    {cat.title}
                  </h3>
                </div>
              </div>
              
              {/* Right Column: Course Grid */}
              <div className="lg:w-2/3">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
                  {cat.courses.map((course, cIdx) => (
                    <li key={cIdx} className="flex items-start gap-3 text-slate-600 group">
                      {/* Subtler bullet point */}
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#ffbc03] shrink-0 mt-2 transition-colors"></span>
                      <span className="text-sm md:text-base group-hover:text-slate-900 transition-colors leading-snug">
                        {course}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Integrated Footer CTA */}
        

      </div>
    </div>
  );
};

export default VStepServices;