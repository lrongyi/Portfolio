import React from 'react'

interface ProjectCardProps {
  image: string
  title: string
  subtitle: string
  description: string
  tech: string[]
  repoLink: string
  reverse?: boolean
}

export default function ProjectCard({
  image,
  title,
  subtitle,
  description,
  tech,
  repoLink,
  reverse = false,
}: ProjectCardProps) {
  return (
    <div className={`flex flex-row items-center overflow-hidden mb-12 ${reverse ? 'flex-row-reverse' : ''}`}>
      {/* Project Image */}
      <div className="md:w-2/3 w-full flex items-center justify-center">
        <a href={repoLink} 
            target="_blank"
            rel="noopener noreferrer">
            <img
          src={image}
          alt="Project Image"
          className="w-full h-full max-w-xl object-contain rounded-xl hover:scale-90 duration-200 cursor-pointer"
          
        />
        </a>
        
      </div>
      
      {/* Project Details */}
        <div className={`md:w-1/2 w-full flex flex-col justify-center px-8 py-12 ${reverse ? 'text-right' : 'text-left'}`}>
            <h2 className={`text-3xl md:text-4xl font-bold text-white`}>
              <span
                className={`inline-block hover:scale-110 duration-75 ${
                  reverse ? 'origin-right' : 'origin-left'
                }`}
              >
                {title}
              </span>
              <br />
              <span className="font-normal text-2xl text-freshwater">{subtitle}</span>
            </h2>
            <div className='border-t-2 border-freshwater opacity-20 mb-6 mt-2'></div>

            <p className="mb-4">{description}</p>

            <div className={`flex flex-wrap gap-2 mb-2 ${reverse ? 'justify-end' : 'justify-start'}`}>
                {tech.map((t) => (
                <span key={t} className="bg-slate-500 text-white px-3 py-1 rounded-full text-xs hover:scale-110 duration-75 hover:text-freshwater cursor-default">{t}</span>
                ))}
            </div>
        </div>
    </div>
  )
}