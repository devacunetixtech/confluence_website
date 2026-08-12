'use client'

import React from 'react'
import { GraduationCap, Sparkles, Award } from 'lucide-react'

const About = () => {
  return (
    <section id='about' className='pt-6 pb-6 px-6 md:px-20 max-w-7xl mx-auto'>
      
      {/* Small Badge */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <div className='text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10'>
          <h2 className='text-gradient uppercase tracking-wider'>About Confluence</h2>
        </div>
      </div>
      
      {/* Title */}
      <h3 
        data-aos="fade-up" 
        data-aos-delay="100"
        className='text-center text-gradient text-3xl md:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto mb-10'
      >
        Evolving the Digital Landscape of Ogbomoso
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy */}
        <div data-aos="fade-right" className='lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed text-justify md:text-left'>
          <p className="font-bold text-white text-xl">
            Confluence is an ecosystem and gathering point for students, builders, founders, creatives and technology enthusiasts.
          </p>
          <p>
            It exists to create meaningful connections, expose young people to opportunities, foster practical skills, encourage entrepreneurship and build a stronger technology ecosystem around Ogbomoso and beyond.
          </p>
          <p>
            By bridging the gap between local talent and global networks, Blockchain Club LAUTECH continues to nurture a highly competent, community-driven generation of innovators prepared to solve real-world challenges.
          </p>
        </div>

        {/* Right Side: Three stat cards stacked vertically */}
        <div data-aos="fade-left" className='lg:col-span-5 flex flex-col gap-6 w-full'>
          
          {/* Stat Card 01 */}
          <div className="group bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 flex items-center gap-6 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 neo-shadow-blue">
            <div className="p-4 bg-blue-950/40 text-[#286cfd] rounded-2xl group-hover:bg-[#286cfd] group-hover:text-black transition-colors duration-300">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-[#286cfd] transition-colors duration-300">
                5,000+
              </h4>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-wider mt-1">
                Students Trained & Mentored
              </p>
            </div>
          </div>

          {/* Stat Card 02 */}
          <div className="group bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 flex items-center gap-6 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 neo-shadow-lemon">
            <div className="p-4 bg-lime-950/40 text-[#ccff00] rounded-2xl group-hover:bg-[#ccff00] group-hover:text-black transition-colors duration-300">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-4xl sm:text-5xl font-black text-white tracking-tight group-hover:text-[#ccff00] transition-colors duration-300">
                6+
              </h4>
              <p className="text-slate-400 font-bold text-xs uppercase tracking-wider mt-1">
                Years of Ecosystem Impact
              </p>
            </div>
          </div>

          {/* Stat Card 03 */}
          <div className="group bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 flex items-center gap-6 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 neo-shadow-yellow">
            <div className="p-4 bg-yellow-950/40 text-[#facc15] rounded-2xl group-hover:bg-[#facc15] group-hover:text-black transition-colors duration-300">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#facc15] transition-colors duration-300 uppercase">
                Tier-1 Status
              </h4>
              <p className="text-slate-400 font-semibold text-xs sm:text-sm mt-1 leading-relaxed">
                Recognized as a Tier-1 University Blockchain Club in Africa, leading developer education, hackathons, and open-source contributions since 2020.
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About