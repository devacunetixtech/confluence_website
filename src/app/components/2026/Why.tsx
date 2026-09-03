'use client'

import React from 'react'

const Why = () => {
  return (
    <section id='why' className='pt-8 pb-16 px-6 md:px-20 max-w-7xl mx-auto'>
      
      {/* Badge */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <div className='text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10'>
          <h2 className='text-gradient uppercase tracking-wider'>Why Ogbomoso?</h2>
        </div>
      </div>
      
      {/* Title */}
      <h3 
        data-aos="fade-up" 
        data-aos-delay="100"
        className='text-center text-gradient text-3xl md:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto mb-10'
      >
        Amplifying Innovation Through Community
      </h3>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        
        {/* Copy Column */}
        <div data-aos="fade-right" className="basis-1/2 flex flex-col justify-center space-y-6 text-slate-350 text-base sm:text-lg leading-relaxed text-justify md:text-left">
          <p>
            Ogbomoso isn&apos;t just a city—it&apos;s a growing hub of energy, innovation, and youthful talent. As the second largest city in Oyo State, with a population running into the millions, Ogbomoso stands out as a vibrant urban center on the rise.
          </p>
          <p className="text-white">
            By bringing Blockchain and Web3 innovation here, Blockchain Club LAUTECH is planting seeds of opportunity, empowering a new generation of builders, and showing that global technology can take root in local communities.
          </p>
        </div>
        
        {/* Video Column */}
        <div data-aos="fade-left" className="basis-1/2 flex items-center justify-center">
          <div className="w-full h-full min-h-[350px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 neo-shadow-blue">
            <video 
              src="/VID-20250916-WA0048_1.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Video label */}
            <div className="absolute bottom-6 left-6 text-white z-10">
              <p className="text-xs uppercase font-bold tracking-widest opacity-80">Confluence Chronicles</p>
              <h4 className="text-lg font-bold">BCL Tech Ecosystem in Action</h4>
            </div>
          </div>
        </div>

      </div> 
    </section>
  )
}

export default Why
