import React from 'react'

export default function About() {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 py-12 bg-white dark:bg-black">
      {/* Left: Image/Illustration */}
      <div className="w-84 h-74 md:w-80 md:h-60 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-tr from-primary/10 to-secondary/10 border-4 border-primary/20">
        <img
          src="20250116_103004.jpg"
          alt="About Me"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          style={{ objectPosition: 'center top' }}
        />
      </div>
      {/* Right: About Me Content */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-5xl text-left font-bold  text-primary mb-4">About Me</h2>
        <p className="text-lg md:text-xl text-white-400 mb-4">
          Hello! I'm <span className="font-semibold">Saikumar Kannuru</span>, A curious and driven Full-Stack Developer from Andhra Pradesh, currently pursuing my B.Tech in Computer Science & Data Science. I’m passionate about building responsive web applications that are both functional and visually engaging.
        </p>
        <p className="text-base md:text-lg text-white-600 mb-5">
          My journey into tech began with a deep desire to understand how things work behind the scenes — and that curiosity turned into code. Inspired by the support of friends and mentors, I started with the basics and gradually moved into working with real-world projects using React, FastAPI, Node.js, and MongoDB.

          Every bug I fixed, every UI I crafted, and every API I wrote added a new chapter to my learning story.
        </p>
        <p className="text-base md:text-lg text-white-600 mb-5 font-semibold">
          “Great things aren’t done by impulse, but by a series of small things brought together.”<br />
          –  <span className="font-semibold">Sai Kumar Kannuru</span>
        </p>
      </div>
    </div>
  )
}
