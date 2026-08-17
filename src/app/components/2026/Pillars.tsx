'use client'

import React, { useState } from 'react'
import { Cpu, Terminal, Sparkles, Target, Users as UsersIcon, Trophy } from 'lucide-react'

const Pillars = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'create' | 'connect'>('code');

  const pillarsData = {
    code: {
      title: "CODE.",
      subtitle: "The Builders",
      description: "Capturing developers, founders, hackers, engineers, and protocol architects constructing open-source protocols, smart contracts, and Web3 infrastructure from the ground up. Features technical workshops, and hackathon sprints.",
      details: [
        { icon: Cpu, text: "Technical workshops" },
        { icon: Terminal, text: "Hackathon sprints to build live solutions" },
      ],
      color: "border-l-[#286cfd] text-[#286cfd] bg-blue-950/25",
      accent: "#286cfd",
      glowClass: "from-blue-500/10 to-indigo-500/5",
      borderHover: "hover:border-blue-500/40"
    },
    create: {
      title: "CREATE.",
      subtitle: "The Visionaries",
      description: "Capturing founders, entrepreneurs, thinkers, and product designers turning ambitious ideas into viable companies, media, and digital products.",
      details: [
        { icon: Sparkles, text: "Create with Purpose: A chill creative evening" },
        { icon: Target, text: "Founders track addressing venture building & product-market scale" }
      ],
      color: "border-l-[#ccff00] text-[#ccff00] bg-lime-950/25",
      accent: "#ccff00",
      glowClass: "from-lime-500/10 to-emerald-500/5",
      borderHover: "hover:border-lime-500/40"
    },
    connect: {
      title: "CONNECT.",
      subtitle: "The Community",
      description: "Capturing the human side of technology, replacing transactional panel noise with raw human stories, networking, and bonding. Connecting people to people, talent to opportunity, ideas to resources, Africa to the global ecosystem.",
      details: [
        { icon: UsersIcon, text: "The Human Layer: Intimate phone-free unplugged conversations" },
        { icon: Trophy, text: "Novelty sports, gaming, and relaxing team bonding IRL" },
      ],
      color: "border-l-[#facc15] text-[#facc15] bg-yellow-950/25",
      accent: "#facc15",
      glowClass: "from-yellow-500/10 to-amber-500/5",
      borderHover: "hover:border-yellow-500/40"
    }
  };

  const activePillar = pillarsData[activeTab];

  return (
    <section id='pillars' className='pt-6 pb-12 px-6 md:px-20 max-w-8xl mx-auto relative z-10'>
      
      {/* Badge */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <div className='text-xs sm:text-sm font-bold bg-white/5 py-2.5 px-6 rounded-full w-fit text-nowrap shadow border border-white/10'>
          <h2 className='text-gradient uppercase tracking-widest'>Three Dimensions of Confluence</h2>
        </div>
      </div>

      {/* Interactive Tabs Header */}
      <div 
        className="flex justify-center items-center gap-2 sm:gap-4 mb-4 border-b border-white/10 pb-4 max-w-xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {(['code', 'create', 'connect'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full text-base sm:text-lg font-black uppercase tracking-tight transition-all duration-300 cursor-pointer ${
              activeTab === tab
                ? tab === 'code'
                  ? 'bg-[#286cfd] text-white shadow-lg neo-shadow-lemon border border-black'
                  : tab === 'create'
                  ? 'bg-[#ccff00] text-black shadow-lg neo-shadow-blue border border-black'
                  : 'bg-[#facc15] text-black shadow-lg neo-shadow-white border border-black'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Interactive Content Card */}
      <div 
        key={activeTab} // Forces animation restart when switching tabs
        className={`bg-black/40 border border-white/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 transition-all duration-500 transform scale-100 animate-in fade-in slide-in-from-bottom-6 relative overflow-hidden group/card ${activePillar.borderHover}`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Subtle pillar glow */}
        <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${activePillar.glowClass} blur-3xl opacity-60 rounded-full pointer-events-none transition-all duration-500`} />

        <div className={`border-l-4 pl-6 ${activePillar.color} transition-all duration-300`}>
          <span className="text-xs uppercase font-extrabold tracking-widest opacity-80 mb-1.5 block text-slate-300">
            {activePillar.subtitle}
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight uppercase leading-none text-white">
            {activePillar.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mt-8 items-start relative z-10">
          {/* Main Description */}
          <div className="lg:col-span-6">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed text-justify font-medium">
              {activePillar.description}
            </p>
          </div>

          {/* Details Bullet List */}
          <div className="lg:col-span-6 space-y-5">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">What to expect:</h4>
            {activePillar.details.map((detail, idx) => {
              const Icon = detail.icon;
              return (
                <div key={idx} className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200">
                  <span 
                    className="p-3 rounded-2xl flex-shrink-0"
                    style={{ backgroundColor: `${activePillar.accent}20`, color: activePillar.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </span>
                  <p className="text-slate-200 text-sm sm:text-base font-bold leading-snug pt-1.5">
                    {detail.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Pillars
