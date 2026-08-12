'use client'

import { ExternalLink } from 'lucide-react'

const Connected = () => {
  return (
    <section id='contact' className='pt-8 pb-8 px-6 md:px-20 max-w-8xl mx-auto relative z-10'>
      
      {/* Badge */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <div className="text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10">
          <h2 className="text-gradient uppercase tracking-wider">Stay Connected</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
          <h4 className="text-2xl sm:text-3xl font-black text-[#ccff00] uppercase tracking-tight">
            Code. Create. Connect.
          </h4>
          <p className="text-slate-350 text-base sm:text-lg leading-relaxed text-justify md:text-left">
            More than a conference, Confluence is the heartbeat of Blockchain Club LAUTECH (BCL). We are building a borderless community of university builders, connecting local talent to the global Web3 ecosystem. Explore our hub, view our open-source repositories, and join the network shaping the future of African technology.
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-6" data-aos="fade-left" data-aos-delay="200">
          
          {/* About BCL Card */}
          <div className="bg-black/40 border border-white/10 shadow-2xl rounded-3xl p-6 border-l-4 border-l-[#facc15] hover:border-white/20 transition-all">
            <h4 className="text-xs uppercase font-black tracking-widest text-[#facc15] mb-1">About BCL</h4>
            <p className="text-slate-200 font-bold text-sm sm:text-base leading-snug">
              BCL has been championing developer education, blockchain technology, and technical innovation since 2020. Connecting Nigerian talent to the global Web3 movement.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-black/40 border border-white/10 shadow-2xl rounded-3xl p-6 border-l-4 border-l-[#286cfd] hover:border-white/20 transition-all">
            <h4 className="text-xs uppercase font-black tracking-widest text-[#286cfd] mb-1">Our Mission</h4>
            <p className="text-slate-200 font-bold text-sm sm:text-base leading-snug">
              To democratize technology education, nurture ambitious builders, and foster purposeful innovation from Nigeria to the world.
            </p>
          </div>

          <a 
            href="https://blockchainlautech.club" 
            rel="noreferrer" 
            target="_blank" 
            className="block"
          >
            <button className="bg-[#ccff00] hover:bg-[#b5e000] text-black py-4 px-8 rounded-full text-sm sm:text-base font-black uppercase tracking-wider cursor-pointer w-full flex items-center justify-center gap-3 border border-black neo-shadow-blue">
              Visit BCL Hub <ExternalLink className="w-5 h-5" />
            </button>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Connected