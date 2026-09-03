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
        {"Evolving Africa's Digital Landscape From Ogbomoso"}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy */}
        <div data-aos="fade-right" className='lg:col-span-7 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed text-justify md:text-left'>
          <p className="text-white">
            Confluence is an ecosystem and gathering point for students, builders, founders, creatives and technology enthusiasts.
          </p>
          <p>
            It exists to create meaningful connections, expose young people to opportunities, foster practical skills, encourage entrepreneurship and build a stronger technology ecosystem around Ogbomoso and beyond.
          </p>
          <p>
            By bridging the gap between local talent and global networks, Blockchain Club LAUTECH continues to nurture a highly competent, community-driven generation of innovators prepared to solve real-world challenges.
          </p>
        </div>

        {/* Right Side: Two stat cards */}
        <div data-aos="fade-left" className='lg:col-span-5 grid grid-cols-2 lg:flex lg:flex-col gap-4 sm:gap-6 lg:gap-12 w-full'>
          
          {/* Stat Card 01 */}
          <div className="group bg-black/40 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 neo-shadow-blue">
            <div className="p-3 sm:p-4 bg-blue-950/40 text-[#286cfd] rounded-xl sm:rounded-2xl group-hover:bg-[#286cfd] group-hover:text-black transition-colors duration-300 flex-shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-[#286cfd] transition-colors duration-300">
                7,500+
              </h4>
              <p className="text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider mt-0.5 sm:mt-1">
                Students Trained & Mentored
              </p>
            </div>
          </div>

          {/* Stat Card 02 */}
          <div className="group bg-black/40 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 shadow-2xl transition-all duration-300 transform hover:-translate-y-1 neo-shadow-lemon">
            <div className="p-3 sm:p-4 bg-lime-950/40 text-[#ccff00] rounded-xl sm:rounded-2xl group-hover:bg-[#ccff00] group-hover:text-black transition-colors duration-300 flex-shrink-0">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <h4 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-[#ccff00] transition-colors duration-300">
                6+
              </h4>
              <p className="text-slate-400 font-bold text-[10px] sm:text-xs uppercase tracking-wider mt-0.5 sm:mt-1">
                Years of Ecosystem Impact
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About