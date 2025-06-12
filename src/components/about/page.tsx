import React from 'react'

export default function About() {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-12 bg-white dark:bg-black">
      {/* Left: Image/Illustration */}
      <div className="w-80 h-80 md:w-94 md:h-94 rounded-full overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-tr from-primary/10 to-secondary/10">
        <img
          src="20250116_103004.jpg"
          alt="About Me"
          className="object-cover w-full h-full"
        />
      </div>
      {/* Right: About Me Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-lg md:text-xl text-primary mb-5">
          Hello! I'm <span className="font-semibold">Saikumar Kannuru</span>, a Full-Stack Developer from Andhra Pradesh, currently pursuing B.Tech in Computer Science & Data Science at KIET...
        </p>
        <p className="text-base md:text-lg text-primary/80 mb-4">
          I specialize in the MERN Stack (MongoDB, Express, React, Node.js), with a strong focus on Next.js and TypeScript for building scalable, high-performance web applications.
        </p>
      </div>
    </div>
  )
}
