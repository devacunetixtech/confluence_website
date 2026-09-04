'use client'

import React from 'react';
import { ExternalLink, Film, Award } from 'lucide-react';

const archiveData = [
  {
    id: '2025',
    version: '1.0',
    year: '2025',
    theme: 'Ogbomoso\'s digital transformation: BlockChain as a catalyst',
    link: '/2025',
    isLatest: true,
  },
];

const Archive = () => {
  return (
    <section id="archive" className="py-12 px-6 md:px-20 relative z-10 max-w-7xl mx-auto">
      
      {/* Badge */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <div className="text-xs sm:text-sm font-bold bg-white/5 py-2 px-6 rounded-full w-fit text-nowrap shadow border border-white/10">
          <h2 className="text-gradient uppercase tracking-wider">The Chronicles</h2>
        </div>
      </div>
      
      {/* Title */}
      <div className="text-center space-y-3 mb-12" data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
          Confluence Over The Years
        </h3>
      </div>

      {/* Cards container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
        {archiveData.map((item) => (
          <div
            key={item.id}
            className="group bg-black/40 hover:bg-black/60 border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1 relative overflow-hidden neo-shadow-blue"
          >
            {/* Top border accent line on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#286cfd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div>
              {item.isLatest && (
                <div className="mb-6 inline-flex items-center gap-2 bg-blue-950/40 border border-blue-900/50 text-[#286cfd] text-xs font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase">
                  <span className="w-1.5 h-1.5 bg-[#286cfd] rounded-full animate-pulse"></span>
                  LATEST EDITION
                </div>
              )}
              
              <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">
                Confluence {item.version} — {item.year}
              </h4>
              
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-snug mb-6 group-hover:text-[#286cfd] transition-colors">
                {item.theme}
              </h3>
            </div>

            <div className="space-y-3">
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Media &amp; Chronicles</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a 
                  href="/2025#gallery" 
                  className="flex items-center justify-center gap-2 bg-[#ccff00] hover:bg-[#b5e000] text-black py-3 px-4 rounded-xl transition-all font-black text-xs uppercase tracking-wider border border-black neo-shadow-blue"
                >
                  <Film className="w-4 h-4 text-[#286cfd]" /> View Photo Gallery
                </a>
                
                <a 
                  href="/2025" 
                  className="flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-slate-300 py-3 px-4 rounded-xl transition-all font-bold text-xs uppercase tracking-wider"
                >
                  <Award className="w-4 h-4" /> Explore 1.0 Site
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Conceptual Confluence 2.0 card */}
        <div className="bg-black/40 text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden border border-white/10 neo-shadow-yellow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(40,108,253,0.08),transparent_50%)] pointer-events-none" />
          
          <div>
            <div className="mb-6 inline-flex items-center gap-2 bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] text-xs font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-ping"></span>
              IN PROGRESS
            </div>
            
            <h4 className="text-xs font-bold tracking-wider uppercase text-slate-400 mb-2">
              Confluence 2.0 — 2026
            </h4>
            
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-snug mb-6 text-white">
              CODE. CREATE. CONNECT.
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              We are currently in active redesign and venture alignment. Stay tuned for registration passes and program tracks.
            </p>
          </div>
          
          <div className="pt-6 mt-6 border-t border-white/10">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#facc15]">
              November 2–7, 2026 <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Archive;
