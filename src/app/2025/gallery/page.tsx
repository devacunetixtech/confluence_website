'use client'

import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Navbar from '../../components/2025/Navbar'
import Gallery from '../../components/2025/Gallery'
import Footer from '../../components/2025/Footer'

export default function GalleryPage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="bg-[url('/bg-main.svg')] bg-fixed bg-cover pt-5 min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="pt-32 px-6 md:px-20 max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/2025" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#286cfd] transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow"
        >
          <ArrowLeft className="w-4 h-4" /> Back to 2025 Main Page
        </Link>
      </div>

      <Gallery />

      <Footer />
    </div>
  )
}
