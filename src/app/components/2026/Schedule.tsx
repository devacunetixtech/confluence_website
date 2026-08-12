'use client'

import React, { useState } from 'react'
import { Calendar, MapPin, Clock, PhoneOff, Rocket, Code2, Users2, Activity, Sparkles } from 'lucide-react'

interface Session {
  time: string;
  title: string;
  description: string;
  venue: string;
  track: 'Kickoff' | 'Human Layer' | 'Founders' | 'Dev Track' | 'Community';
  details?: string[];
  registerUrl?: string;
}

interface DayData {
  id: string;
  date: string;
  title: string;
  phase: 'Road to Confluence' | 'Confluence' | 'Confluence 2.0 (Main Conference)';
  sessions: Session[];
}

const scheduleData: DayData[] = [
  {
    id: 'mon',
    date: 'Monday, Sept 21',
    title: 'KICKOFF',
    phase: 'Road to Confluence',
    sessions: [
      {
        time: 'TBA',
        title: 'Kickoff: Team IRL Sync & Bonding Session (Internal / Core Operations)',
        description: 'A relaxed bonding session to discuss growth plans, unwind, and prepare core organizers.',
        venue: 'Internal / Core Operations',
        track: 'Kickoff'
      }
    ]
  },
  {
    id: 'tue',
    date: 'Tuesday, Sept 22',
    title: 'THE HUMAN LAYER',
    phase: 'Road to Confluence',
    sessions: [
      {
        time: '3:00 PM WAT',
        title: 'The Human Layer: Novelty Sports & Games',
        description: 'Friendly competitive sports including football, tennis, and games.',
        venue: 'Maracana, Ogbomoso',
        track: 'Human Layer',
        details: ['Football', 'Tennis', 'Games'],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/sports'
      }
    ]
  },
  {
    id: 'wed',
    date: 'Wednesday, Sept 23',
    title: 'THE HUMAN LAYER',
    phase: 'Road to Confluence',
    sessions: [
      {
        time: 'Morning (TBA)',
        title: 'The Human Layer: Unplugged Room (Strictly 50 Seats)',
        description: 'Phone-free, technology-free environment for human-centered conversations on building, failure, burnout, and student developer journeys. Replacing traditional tech panels with raw human stories.',
        venue: 'TBA',
        track: 'Human Layer',
        details: [
          '“What are you building, and why?”',
          '“If money didn’t exist, what would you create?”',
          'Story theme: “I lost money in crypto and had to start over”',
          'Story theme: “Burnout, pressure, and identity in Web3”',
          'Story theme: “A student navigating tech in Nigeria”',
          'Story theme: “A creative lost in the noise of Web3”'
        ],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/unplugged'
      },
      {
        time: 'Evening (Expected 3:00–4:00 PM)',
        title: 'Create with Purpose',
        description: 'A chill creative evening blending soft music and deep ambient conversations. A visual departure from conventional tech conferences, blending art gallery aesthetics with an intimate creative studio.',
        venue: 'TBA',
        track: 'Human Layer',
        details: ['Soft music & ambient talks', 'Intimate creative studio vibes'],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/create'
      }
    ]
  },
  {
    id: 'thu',
    date: 'Thursday, Sept 24',
    title: 'CONFLUENCE BEGINS',
    phase: 'Confluence 2.0 (Main Conference)',
    sessions: [
      {
        time: 'Morning (TBA)',
        title: 'Confluence Begins: Founders Track: The Confluence Fellowship',
        description: 'A prestigious network of 20–30 young founders under 30 in Ogbomoso focused on raising capital, building in public, and scaling products.',
        venue: 'TBA',
        track: 'Founders',
        details: [
          'Raising capital',
          'Building in public',
          'Scaling products'
        ],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/fellowship'
      },
      {
        time: 'Evening (TBA)',
        title: 'Dev Track: 24-Hour Hackathon Sprint',
        description: '18 HOURS TO BUILD. 6 HOURS TO DEMO. The developer track sprint kicks off Thursday evening, pushing technical builders to create live solutions before Friday concluding.',
        venue: 'TBA',
        track: 'Dev Track',
        details: ['Hackathon rules and criteria are currently being curated'],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/hackathon'
      }
    ]
  },
  {
    id: 'fri',
    date: 'Friday, Sept 25',
    title: 'DEV TRACK CONCLUDES',
    phase: 'Confluence 2.0 (Main Conference)',
    sessions: [
      {
        time: 'All Day',
        title: 'Dev Track Concludes: Hackathon Demos & Pitching',
        description: 'Hackathon teams pitch their product prototypes before judges. (All Day: 18h building + 6h pitching).',
        venue: 'TBA',
        track: 'Dev Track',
        details: ['18 Hours of building complete', '6 Hours of presentations and live demos'],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/demos'
      }
    ]
  },
  {
    id: 'sat',
    date: 'Saturday, Sept 26',
    title: 'COMMUNITY TRACK',
    phase: 'Confluence 2.0 (Main Conference)',
    sessions: [
      {
        time: 'Full Day',
        title: 'Community Track: Community Track Culmination',
        description: 'The grand finale uniting Code, Create, and Connect with keynotes, panels, and ecosystem awards.',
        venue: 'TBA',
        track: 'Community',
        details: ['Pillars convergence celebration', 'Keynote addresses & fireside chats', 'Community award recognitions'],
        registerUrl: 'https://blockchainlautech.club/confluence2.0/register/community'
      }
    ]
  }
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState<string>('thu'); // Default to main Confluence starting day

  const currentDayData = scheduleData.find(d => d.id === activeDay) || scheduleData[3];

  const getTrackIcon = (track: string) => {
    switch (track) {
      case 'Kickoff': return <Users2 className="w-4 h-4" />;
      case 'Human Layer': return <PhoneOff className="w-4 h-4" />;
      case 'Founders': return <Rocket className="w-4 h-4" />;
      case 'Dev Track': return <Code2 className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getTrackColor = (track: string) => {
    switch (track) {
      case 'Kickoff': return 'bg-slate-900/50 text-slate-300 border-slate-800';
      case 'Human Layer': return 'bg-yellow-950/40 text-[#facc15] border-yellow-900/50';
      case 'Founders': return 'bg-lime-950/40 text-[#ccff00] border-lime-900/50';
      case 'Dev Track': return 'bg-blue-950/40 text-[#286cfd] border-blue-900/50';
      default: return 'bg-slate-900/50 text-slate-300 border-slate-800';
    }
  };

  return (
    <section id='schedule' className='pt-6 pb-20 px-6 md:px-20 max-w-7xl mx-auto relative z-10'>
      
      {/* Badge */}
      <div className="flex justify-center mb-6" data-aos="fade-up">
        <div className='text-xs sm:text-sm font-bold bg-white/5 py-2.5 px-6 rounded-full w-fit text-nowrap shadow border border-white/10'>
          <h2 className='text-gradient uppercase tracking-widest'>Experience &amp; Schedule</h2>
        </div>
      </div>

      {/* Main Title */}
      <h3 
        data-aos="fade-up" 
        data-aos-delay="100"
        className='text-center text-gradient text-3xl md:text-5xl font-black uppercase tracking-tight max-w-3xl mx-auto mb-6'
      >
        Event Experience Timeline
      </h3>      
      {/* <p className="text-center text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl mx-auto mb-12" data-aos="fade-up">
        Experience Confluence 2.0 through two distinct phases: the preparatory Road to Confluence and the official Main Event.
      </p> */}

      {/* Phase Headings / Days selectors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12" data-aos="fade-up">
        
        {/* ROAD TO CONFLUENCE PHASE */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#286cfd] flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#286cfd]"></span> Phase 01: Road to Confluence
          </h4>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {scheduleData.slice(0, 3).map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`py-4 px-2 sm:px-4 rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  activeDay === day.id
                    ? 'bg-[#286cfd] text-white font-black neo-shadow-lemon border border-black'
                    : 'bg-black/40 hover:bg-black/60 border border-white/10 text-slate-400 font-semibold'
                }`}
              >
                <span className="block text-[9px] uppercase opacity-75 mb-1 font-extrabold tracking-wider">Day 0{scheduleData.indexOf(day) + 1}</span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-tight">{day.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* CONFLUENCE MAIN EVENT */}
        <div className="lg:col-span-6 space-y-4">
          <h4 className="text-xs uppercase font-extrabold tracking-widest text-[#ccff00] flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#ccff00]"></span> Phase 02: Confluence 2.0 (Main Conference)
          </h4>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {scheduleData.slice(3).map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`py-4 px-2 sm:px-4 rounded-2xl text-center cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  activeDay === day.id
                    ? 'bg-[#ccff00] text-black font-black neo-shadow-blue border border-black'
                    : 'bg-black/40 hover:bg-black/60 border border-white/10 text-slate-400 font-semibold'
                }`}
              >
                <span className="block text-[9px] uppercase opacity-75 mb-1 font-extrabold tracking-wider">Day 0{scheduleData.indexOf(day) + 1}</span>
                <span className="text-xs sm:text-sm font-black uppercase tracking-tight">{day.title}</span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Selected Day Timeline Card display */}
      <div 
        key={activeDay}
        className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-350"
        data-aos="fade-up"
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 block mb-1.5">
              {currentDayData.phase}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-2.5">
              <Activity className="w-6 h-6 text-[#ccff00] stroke-[2.5]" /> {currentDayData.date}
            </h3>
          </div>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
          {currentDayData.sessions.map((session, index) => (
            <div 
              key={index}
              className="relative bg-black/40 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm flex flex-col md:flex-row gap-6 justify-between items-start group"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-9 w-4 h-4 rounded-full border-2 border-black bg-[#ccff00] group-hover:scale-125 transition-transform duration-200 shadow-sm"></span>

              <div className="space-y-4 flex-1">
                
                {/* Meta details tag */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getTrackColor(session.track)}`}>
                    {getTrackIcon(session.track)}
                    {session.track}
                  </span>
                  
                  {session.track === 'Founders' && (
                    <span className="inline-flex items-center gap-1 bg-[#ccff00] text-black text-[9px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                      <Sparkles className="w-3 h-3 fill-black" /> FELLOWSHIP
                    </span>
                  )}
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight group-hover:text-[#ccff00] transition-colors duration-200">
                  {session.title}
                </h4>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed text-justify md:text-left font-medium">
                  {session.description}
                </p>

                {/* Sub details bullet points */}
                {session.details && (
                  <div className="pt-2">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold text-slate-300">
                      {session.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Time & Venue Column */}
              <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 w-full md:w-56 shrink-0">
                <div className="flex flex-row md:flex-col gap-4 justify-between md:justify-center">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-[9px] uppercase font-extrabold tracking-wider text-slate-400">Time</p>
                      <p className="text-sm font-bold text-slate-100">{session.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-[9px] uppercase font-extrabold tracking-wider text-slate-400">Venue</p>
                      <p className="text-sm font-bold text-slate-100">{session.venue}</p>
                    </div>
                  </div>
                </div>

                {/* Register Button (for Day 2 to Day 6, inactive) */}
                {session.registerUrl && (
                  <button 
                    disabled
                    type="button"
                    data-register-url={session.registerUrl}
                    className="w-full bg-white/5 text-slate-500 border border-white/10 font-bold rounded-xl text-xs py-3 text-center cursor-not-allowed transition-all duration-200 md:mt-2"
                  >
                    Register
                  </button>

                  // USE THIS TO ACTIVATE
                  // <a 
                  //   href={session.registerUrl}
                  //   target="_blank"
                  //   rel="noopener noreferrer"
                  //   className="w-full bg-[#286cfd] hover:bg-blue-700 text-white font-bold rounded-xl text-xs py-3 text-center transition-all duration-200 md:mt-2 block"
                  //   >
                  //     Register
                  // </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default Schedule
