import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 px-4 min-h-screen">
      <div className="text-center mb-12 md:mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-athenablue mb-4">Projects</h1>
      </div>
      
      <div className="space-y-12 md:space-y-16">
        <ProjectCard
          image="/savings_squad.png"
          title="Savings Squad"
          subtitle="Personal Finance Tracker"
          description="Personal finance tracker with expense management built with Flutter and Firebase"
          tech={["Flutter", "Firebase", "GitHub"]}
          repoLink="https://github.com/lrongyi/Orbital"
          reverse={false}
        />

        <ProjectCard
          image="/ezstates.png"
          title="EZSTATES"
          subtitle="Property and Client Manager"
          description="An application built for real estate agents to manage their properties and clients"
          tech={["Java", "JavaFX", "Gradle", "CodeCov", "GitHub", "JUnit 5"]}
          repoLink="https://github.com/lrongyi/tp"
          reverse={true}
        />

        <ProjectCard
          image="/computer_vision.png"
          title="Computer Vision"
          subtitle="Mouse Control System"
          description="Enable users to control mouse movements and actions through hand gestures"
          tech={["Python", "OpenCV", "MediaPipe", "AutoPy"]}
          repoLink="https://github.com/lrongyi/MouseControl"
          reverse={false}
        />
      </div>
    </div>
  )
}