import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Compass, 
  MousePointerClick, 
  HeartPulse, 
  Wallet 
} from 'lucide-react'; // Lucide icons for a modern look

const AboutUs = () => {
  const programs = [
    {
      title: "Admission Guidance",
      description: "Navigating university requirements can be daunting. We provide end-to-end support to ensure you land in the institution that fits your goals.",
      icon: <GraduationCap className="w-8 h-8 text-[#ffbc03]" />,
    },
    {
      title: "Career Counselling",
      description: "Our experts help you identify your strengths and passions, mapping out a long-term career path rather than just a degree.",
      icon: <Compass className="w-8 h-8 text-[#ffbc03]" />,
    },
    {
      title: "Job Opportunities",
      description: "We don't just stop at education. We bridge the gap between graduation and employment with active placement assistance.",
      icon: <Briefcase className="w-8 h-8 text-[#ffbc03]" />,
    },
    {
      title: "Online Application Support",
      description: "Avoid technical errors and missed deadlines. We handle the paperwork and digital submissions for your peace of mind.",
      icon: <MousePointerClick className="w-8 h-8 text-[#ffbc03]" />,
    },
    {
      title: "Psychological Support",
      description: "Student life is stressful. We offer dedicated mental health support to help students manage anxiety and stay focused on their journey.",
      icon: <HeartPulse className="w-8 h-8 text-[#ffbc03]" />,
    },
    {
      title: "Education Loan Guidelines",
      description: "Finances shouldn't stop your dreams. We guide you through the complex documentation and bank processes for student loans.",
      icon: <Wallet className="w-8 h-8 text-[#ffbc03]" />,
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#ffbc03] font-bold tracking-widest uppercase text-sm mb-3">
            Who We Are
          </h2>
          <h1 className="font-[Outfit] text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Empowering Students to <br /> Reach Their Full Potential
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            VStep Consultancy was founded on the belief that every student deserves a clear 
            roadmap to success. We combine academic expertise with emotional care to 
            transform your career journey into a seamless experience.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="p-8 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-5 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-[#ffbc03]/10 transition-colors">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-[Outfit]">
                {program.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;