import React from 'react'
import Image from 'next/image'


export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center px-4 py-2 md:py-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center max-w-6xl w-full'>
            {/* Profile Pic */}
            <div className="flex justify-center md:justify-start">
            <Image
                src="/profile.png"
                alt="Lam Rong Yi"
                width={200}
                height={200}
                className="w-56 h-56 md:w-90 md:h-90 object-cover rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-200"
                style={{
                    maxHeight: '50vh',
                    maxWidth: '80vw',
                }}
                priority
            />
            </div>

        
            <div className='text-center md:text-left flex flex-col justify-centers'>
                <h1 className='text-3xl md:text-5xl font-bold mb-8'>Hi, I&apos;m <span className='text-athenablue'>Rong Yi</span></h1>
                <p className='text-xl md:text-2xl'>
                    Currently pursuing a Bachelor of Computing in Computer Science, specialising in Networking. <br /> 
                    <br />
                    I&apos;m passionate about software engineering and enjoy building practical, impactful solutions while
                    actively expanding my skills in cybersecurity through certifications and hands-on learning!
                </p>

            </div>
        </div>
    </div>
  )
}
