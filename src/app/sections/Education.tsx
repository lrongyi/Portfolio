import React from 'react'
import Image from 'next/image'

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto py-8 md:py-16 px-4 min-w-screen h-auto">
      <div className='flex items-center justify-center'>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-athenablue mb-16 md:mb-24 text-center">Education</h1>
      </div>
      <div className="relative flex flex-col">
        {/* Timeline vertical line - responsive positioning */}
        <div className="absolute md:left-1/2 top-0 h-full w-0.5 sm:w-1 bg-gradient-to-b from-athenablue via-blu to-pureblue rounded-full md:-translate-x-1/2 z-0"></div>
        
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-12 md:gap-y-48">
          {/* NUS - responsive layout */}
          <div className="flex items-center relative z-10">
            
            {/* Mobile layout */}
            <div className="flex md:hidden items-start pl-12 sm:pl-16 w-full">
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Image src="/nus.png" alt="NUS Logo" width={0} height={0} sizes="100vw" className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">National University of Singapore</h3>
                    <p className="text-freshwater text-sm mt-1">2023 – Present</p>
                  </div>
                </div>
                <p className="text-sm">Bachelor of Computing in Computer Science</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Data Structures & Algorithms</span>
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Software Engineering</span> <br />
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Networks</span>
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Databases</span>
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">AI & ML</span>
                </div>
              </div>
            </div>

            {/* Desktop layout - left aligned */}
            <div className="hidden md:flex items-center w-full">
              <div className="w-1/2 flex flex-col items-end pr-8">
                <div className='text-right'>
                  <h3 className="text-xl font-bold text-white md:hover:scale-110 transition-transform duration-200 origin-right">National University of Singapore</h3>
                  <p className="text-freshwater text-sm">2023 – Present</p>
                  <p>Bachelor of Computing in Computer Science</p>
                  <div className="flex flex-wrap gap-2 mt-2 justify-end">
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Data Structures & Algorithms</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Software Engineering</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Networks</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Databases</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">AI & ML</span>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex items-center pl-8">
                <Image src="/nus.png" alt="NUS Logo" width={0} height={0} sizes="100vw" className="w-16 h-16 object-contain md:hover:scale-110 transition-transform duration-200 origin-center" />
              </div>
            </div>

            {/* Timeline dot - responsive positioning */}
            <div className="hidden absolute md:left-1/2 w-0 md:flex flex-col items-center md:-translate-x-1/2 md:hover:scale-110 transition-transform duration-200 origin-center">
              <span className="block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white border-2 md:border-4 border-athenablue rounded-full z-10"></span>
            </div>
          </div>

          {/* TMJC - responsive layout */}
          <div className="flex items-center relative z-10">
            
            {/* Mobile layout */}
            <div className="flex md:hidden items-start pl-12 sm:pl-16 w-full">
              <div className="flex-1 space-y-3">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Image src="/tmjc.png" alt="TMJC Logo" width={0} height={0} sizes="100vw" className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Tampines Meridian Junior College</h3>
                    <p className="text-freshwater text-sm mt-1">2019 – 2020</p>
                  </div>
                </div>
                <p className="text-sm">&apos;A&apos; Levels</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Physics</span>
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Chemistry</span>
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Math</span>
                  <span className="bg-slate-500 text-white px-2 py-1 rounded-lg text-xs">Economics</span>
                </div>
              </div>
            </div>

            {/* Desktop layout - right aligned */}
            <div className="hidden md:flex items-center w-full">
              <div className="w-1/2 flex items-center justify-end pr-8">
                <Image src="/tmjc.png" alt="TMJC Logo" width={0} height={0} sizes="100vw" className="w-16 h-16 object-contain md:hover:scale-110 transition-transform duration-200 origin-center" />
              </div>
              <div className="w-1/2 flex flex-col items-start pl-8">
                <div>
                  <h3 className="text-xl font-bold text-white md:hover:scale-110 transition-transform duration-200 origin-left">Tampines Meridian Junior College</h3>
                  <p className="text-freshwater text-sm">2019 – 2020</p>
                  <p>&apos;A&apos; Levels</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Physics</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Chemistry</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Math</span>
                    <span className="bg-slate-500 text-white px-3 py-1 rounded-xl text-xs md:hover:scale-110 transition-transform duration-200 origin-center hover:text-freshwater">Economics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline dot - responsive positioning */}
            <div className="hidden absolute md:left-1/2 w-0 md:flex flex-col items-center md:-translate-x-1/2 md:hover:scale-110 transition-transform duration-200 origin-center">
              <span className="block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white border-2 md:border-4 border-pureblue rounded-full z-10"></span>
            </div>
          </div>
        </div>
      </div>
    </div>      
  )
}