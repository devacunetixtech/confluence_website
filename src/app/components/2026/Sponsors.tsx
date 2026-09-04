'use client'

import React from 'react'
import { ArrowRight, Trophy } from 'lucide-react'
import { LogoLoop } from '../2025/LogoLoop'
import { sponsorLogos, partnerLogos } from '@/app/constants/2025'

const allLogos = [...sponsorLogos, ...partnerLogos]

const Sponsors = () => {
  return (
    <section id='sponsors' className='py-16 md:py-24 px-5 md:px-20 relative z-10'>
      <div className='max-w-[1200px] mx-auto'>
        
        {/* Header */}
        <div data-aos='fade-up' className='mb-12 text-center'>
          <div className='flex items-center justify-center gap-4 mb-4'>
            <div className='h-[2px] w-8 bg-[#286cfd]'></div>
            <h3 className='text-[#286cfd] font-bold tracking-widest uppercase text-sm'>Sponsors & Partners</h3>
            <div className='h-[2px] w-8 bg-[#286cfd]'></div>
          </div>
          <h2 className='font-black lg:text-5xl md:text-4xl text-3xl text-[#0C1246] tracking-tight leading-tight'>
            Backed by the <span className='text-[#286cfd]'>Best.</span>
          </h2>
          <p className='text-slate-600 mt-4 text-base md:text-lg max-w-2xl mx-auto'>
            Confluence is made possible by forward-thinking protocols, communities, and brands who believe in Ogbomoso&apos;s potential.
          </p>
        </div>

        {/* Logo Loop (Returning / Past Partners) */}
        <div data-aos='fade-up' data-aos-delay='100' className='mb-16 bg-white/50 backdrop-blur-sm py-10 rounded-3xl border border-slate-100 shadow-sm'>
          <p className='text-center text-slate-400 font-semibold text-sm uppercase tracking-widest mb-8'> Partners</p>
          <LogoLoop
            logos={allLogos}
            speed={100}
            direction="left"
            logoHeight={{ mobile: 30, tablet: 40, desktop: 45 }}
            gap={{ mobile: 40, tablet: 50, desktop: 60 }}
            pauseOnHover
            scaleOnHover
            fadeOut={true}
            fadeOutColor="#ffffff" 
          />
        </div>

        {/* Become a Sponsor CTA */}
        <div data-aos='fade-up' className='rounded-3xl border border-[#286cfd]/30 bg-gradient-to-r from-[#020b1f] to-[#0a1f4d] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8'>
          <div className='flex-1 max-w-2xl text-center md:text-left'>
            <div className='w-12 h-12 rounded-xl bg-[#286cfd]/20 border border-[#286cfd]/40 flex items-center justify-center mx-auto md:mx-0 mb-6'>
              <Trophy className='w-6 h-6 text-[#286cfd]' />
            </div>
            <h3 className='text-white font-black text-2xl md:text-4xl tracking-tight mb-4'>
              Sponsor Confluence 2.0
            </h3>
            <p className='text-slate-300 text-base md:text-lg leading-relaxed mb-6'>
              Get your brand in front of 800+ builders, founders, and Web3 enthusiasts. We offer tiered sponsorship packages ranging from community supporters to headline protocol partners.
            </p>
            <div className='flex flex-wrap items-center justify-center md:justify-start gap-4'>
              <a 
                href="/pitch-deck2026.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >  
                <button className='bg-[#286cfd] hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 text-white px-6 py-3 rounded-xl font-semibold text-sm md:text-base flex items-center gap-2 cursor-pointer'>
                  Download Pitch Deck <ArrowRight className='w-4 h-4' />
                </button>
              </a>
              <a href="mailto:blockchainlautech@gmail.com">  
                <button className='bg-transparent hover:bg-white/10 border border-slate-500 text-white px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-colors cursor-pointer'>
                  Contact Us
                </button>
              </a>
            </div>
          </div>
          
          <div className='hidden lg:block w-1/3'>
            <div className='grid grid-cols-2 gap-3 opacity-60'>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className='h-20 rounded-xl bg-white/5 border border-white/10 animate-pulse' style={{ animationDelay: `${i * 150}ms` }}></div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Sponsors
