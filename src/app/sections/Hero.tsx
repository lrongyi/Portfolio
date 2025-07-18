import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-2 md:py-4">
      <div className="grid grid-cols-1 gap-4 md:gap-6 items-center max-w-6xl w-full">

        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            Lam Rong Yi
          </h1>
          <p className="text-base font-bold md:text-lg lg:text-xl text-athenablue mb-4 md:mb-6 leading-relaxed">
            Computer Science student @ NUS
          </p>

          {/* Link to Linkedin, resume, github, etc */}
          <div className="flex flex-row gap-8 md:gap-12 justify-center">
            {/* Resume Icon */}
            <a
              href="/lam_rong_yi_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-3xl bg-transparent"
              aria-label="Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 duration-75 hover:stroke-freshwater">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/rong-yi-lam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-3xl bg-transparent"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 duration-75 hover:stroke-freshwater' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* GitHub Icon */}
            <a
              href="https://github.com/lrongyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-3xl bg-transparent"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 duration-75 hover:stroke-freshwater' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>

            {/* Email Icon */}
            <a
              href="mailto:lamrongyi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-3xl bg-transparent"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 hover:scale-110 duration-75 hover:stroke-freshwater"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}