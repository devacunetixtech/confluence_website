'use client';

import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";

const placeholders = [
  { id: 1, name: "[ Mystery Speaker ]", track: "CODE TRACK", topic: "Protocol Infrastructure & Dev Tools" },
  { id: 2, name: "[ Mystery Speaker ]", track: "CREATE TRACK", topic: "Web3 UX & Creative Operations" },
  { id: 3, name: "[ Mystery Speaker ]", track: "CONNECT TRACK", topic: "Grassroots Community Ecosystems" },
  { id: 4, name: "[ Mystery Speaker ]", track: "FOUNDERS TRACK", topic: "Venture Capital & Product-Market Scale" }
];

export default function SpeakersCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        if (entry.isIntersecting) {
          swiper.autoplay.start();
        } else {
          swiper.autoplay.stop();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [swiperRef, containerRef]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center pt-4 md:pt-2 w-full min-w-0"
      data-aos="fade-up"
    >
      <div className="max-w-5xl w-full relative px-4 sm:px-12 overflow-visible">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".speaker-next-btn",
            prevEl: ".speaker-prev-btn",
          }}
          pagination={{
            clickable: true,
            el: ".speaker-pagination",
            renderBullet: (index, className) =>
              `<span class="w-3 h-3 rounded-full mx-1 ${className}"></span>`,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full py-8 overflow-hidden"
        >
          {placeholders.map((speaker) => (
            <SwiperSlide key={speaker.id} className="h-full">
              <div className="group bg-white hover:bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-[380px] transform hover:-translate-y-2 relative overflow-hidden">
                
                {/* Neon-like top border line visible on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#286cfd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="space-y-4">
                  {/* Category label */}
                  <span className="inline-block bg-blue-50 text-[#286cfd] text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                    {speaker.track}
                  </span>
                  
                  {/* Giant mysterious question mark block */}
                  <div className="aspect-video w-full rounded-2xl bg-slate-900 flex items-center justify-center relative overflow-hidden shadow-inner group-hover:bg-[#0C1246] transition-colors duration-300">
                    <span className="text-4xl sm:text-5xl font-black text-white/20 tracking-widest group-hover:text-white/40 group-hover:scale-110 transition-all duration-500">
                      ???
                    </span>
                    <HelpCircle className="absolute bottom-4 right-4 w-5 h-5 text-white/10 group-hover:text-white/20 transition-colors" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#0C1246] uppercase tracking-tight mb-1 group-hover:text-[#286cfd] transition-colors duration-300">
                    {speaker.name}
                  </h4>
                  <p className="text-slate-500 font-bold text-xs uppercase tracking-wider group-hover:text-[#286cfd] transition-colors duration-300">
                    {speaker.topic}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation arrows (hidden on mobile, visible on tablet/desktop) */}
        <div className="hidden sm:block">
          <button
            className="speaker-prev-btn absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-slate-100 p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer z-10"
            aria-label="Previous speaker"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          
          <button
            className="speaker-next-btn absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 border border-slate-100 p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer z-10"
            aria-label="Next speaker"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
        </div>

        {/* Custom Pagination */}
        <div className="speaker-pagination flex justify-center mt-6"></div>

        {/* CSS Patch for swiper pagination */}
        <style>{`
          .speaker-pagination .swiper-pagination-bullet {
            background-color: #cbd5e1; /* slate-300 */
            opacity: 1;
            transition: all 0.3s;
          }
          .speaker-pagination .swiper-pagination-bullet-active {
            background-color: #286cfd; /* conblue */
            width: 24px;
            border-radius: 9999px;
          }
        `}</style>
      </div>
    </div>
  );
}
