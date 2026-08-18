'use client'

import React, { useState } from 'react'

const Pillars = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'create' | 'connect'>('code');

  const pillarsData = {
    code: {
      title: "CODE.",
      subtitle: "The Builders",
      description: [
        "CODE is where developers, engineers, researchers, and technical minds come together to explore the technologies powering the next generation of the digital economy.",
        "In this track, we would be exploring AI, blockchain, open-source infrastructure, digital identity, payments, security, and emerging technologies. This track is about going beyond the conversation and getting closer to the technology itself."
      ],
      details: [
        "Technical deep dives",
        "Workshops",
        "Developer conversations",
        "Live builds",
        "Ecosystem insights",
        "Practical knowledge you can take back and build with."
      ],
      color: "border-l-[#286cfd] text-[#286cfd] bg-blue-950/25",
      accent: "#286cfd",
      glowClass: "from-blue-500/10 to-indigo-500/5",
      borderHover: "hover:border-blue-500/40"
    },
    create: {
      title: "CREATE.",
      subtitle: "The Visionaries",
      description: [
        "CREATE brings together founders, entrepreneurs, product builders, creators, and innovators who are turning ideas into companies, products, communities, and solutions for real problems.",
        "This is where we talk about what actually happens after the idea.",
        "No pitch-deck fantasies. No overnight-success stories. Just honest conversations with people in the arena."
      ],
      details: [
        "Building in Africa.",
        "Finding product-market fit.",
        "Raising capital.",
        "Creating sustainable businesses.",
        "Navigating failure.",
        "Building teams.",
        "Going from MVP to something people actually want."
      ],
      color: "border-l-[#ccff00] text-[#ccff00] bg-lime-950/25",
      accent: "#ccff00",
      glowClass: "from-lime-500/10 to-emerald-500/5",
      borderHover: "hover:border-lime-500/40"
    },
    connect: {
      title: "CONNECT.",
      subtitle: "The Community",
      description: [
        "CONNECT is the human layer of Confluence - a space for students, professionals, creators, communities, founders, ecosystem leaders, and curious minds to meet, exchange ideas, find opportunities, and build relationships that extend far beyond the conference. This track explores what happens when the right people are in the same room.",
        "Because sometimes, the most valuable thing you take away from a conference isn't a slide deck. It's a person you met. An idea you exchanged. An opportunity you discovered."
      ],
      details: [
        "Novelty Sports",
        "The Human Layer Experience",
        "Community building",
        "Mentorship",
        "The creator economy",
        "Digital opportunities",
        "Collaboration"
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
        <div className='text-xs sm:text-sm font-bold bg-white/5 py-2.5 px-6 rounded-3xl w-fit max-w-2xl text-center shadow border border-white/10'>
          <h2 className='text-gradient uppercase tracking-widest leading-relaxed'>Three ways to shape the future. One place to bring it together.</h2>
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
          <div className="lg:col-span-6 space-y-4">
            {activePillar.description.map((para, idx) => (
              <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed text-justify font-medium">
                {para}
              </p>
            ))}
          </div>

          {/* Details Bullet List */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-2">What to expect:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {activePillar.details.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-200">
                  <span 
                    className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                    style={{ backgroundColor: activePillar.accent }}
                  />
                  <p className="text-slate-200 text-sm sm:text-base font-bold leading-snug">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Pillars
