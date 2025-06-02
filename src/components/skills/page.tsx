"use client"
import React from 'react'

export default function Skills() {
  const skills = [
    { name: 'HTML', color: 'bg-orange-500', icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor"><path d="M6.5 27L4 4h24l-2.5 23L16 30z" fill="#E44D26"/><path d="M16 28l7.2-2 2.1-21H16z" fill="#F16529"/><path d="M16 13.5h-4.2l.3 3h3.9v2.5h-3.6l.1 1.5h3.5v2.5l-3.1-.8-.2-2h-2.1l.3 3.2 5.1 1.4v.1h.1l5.1-1.4.7-7.2H16zm0-4.5h-4.3l.2 2.5h4.1V9zm0 0V6.5h4.3l-.2 2.5H16z" fill="#fff"/></svg>
    ) },
    { name: 'CSS', color: 'bg-blue-500', icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor"><path d="M6.5 27L4 4h24l-2.5 23L16 30z" fill="#264DE4"/><path d="M16 28l7.2-2 2.1-21H16z" fill="#2965F1"/><path d="M16 13.5h-4.2l.3 3h3.9v2.5h-3.6l.1 1.5h3.5v2.5l-3.1-.8-.2-2h-2.1l.3 3.2 5.1 1.4v.1h.1l5.1-1.4.7-7.2H16zm0-4.5h-4.3l.2 2.5h4.1V9zm0 0V6.5h4.3l-.2 2.5H16z" fill="#fff"/></svg>
    ) },
    { name: 'JavaScript', color: 'bg-yellow-400', icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="6" fill="#F7DF1E"/><path d="M19.6 23.2c.4.7.8 1.3 1.7 1.3.8 0 1.3-.3 1.3-1.6v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7zm-7.2.1c.2.4.4.7.9.7.5 0 .8-.2.8-.9v-7.1h2.2v7.2c0 2.3-1.3 3.3-3.1 3.3-1.7 0-2.7-.9-3.2-2l1.1-.7z" fill="#000"/></svg>
    ) },
    { name: 'React', color: 'bg-cyan-400', icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2.5" fill="#61DAFB"/><ellipse rx="13" ry="5.5" transform="matrix(.866 .5 -.866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="13" ry="5.5" transform="matrix(-.866 .5 .866 .5 16 16)" stroke="#61DAFB" strokeWidth="2"/><ellipse rx="13" ry="5.5" transform="matrix(0 1 1 0 16 16)" stroke="#61DAFB" strokeWidth="2"/></svg>
    ) },
    { name: 'Node.js', color: 'bg-green-600', icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none"><path d="M16 2.7l12.1 7v12.6L16 29.3 3.9 22.3V9.7L16 2.7z" fill="#3C873A"/><path d="M16 4.6l10.1 5.8v11.2L16 27.4l-10.1-5.8V10.4L16 4.6z" fill="#fff"/><path d="M16 6.2l8.7 5v9.6L16 25.8l-8.7-5V11.2L16 6.2z" fill="#3C873A"/><path d="M20.2 18.7c-.3.6-.7 1.1-1.5 1.1-.7 0-1.1-.3-1.1-1.2v-4.2h2.2v-2.1h-2.2v-1.2h-2.1v1.2h-2.2v2.1h2.2v4.2c0 2.1 1.2 3.1 3.1 3.1 1.3 0 2.2-.5 2.7-1.5l-1.1-.7z" fill="#fff"/></svg>
    ) },
  ];

  return (
    <section id="skills" className="min-h-[60vh] flex items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-3xl mx-auto bg-card rounded-xl shadow-lg border border-border p-8 md:p-12 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl">
          Here are some of the technologies and tools I work with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full">
          {skills.map((skill) => (
            <div key={skill.name} className={`flex flex-col items-center gap-3 p-4 rounded-xl shadow transition hover:scale-105 hover:shadow-lg border border-border bg-background`}>
              <span className={`rounded-full p-3 ${skill.color} shadow-md`}>{skill.icon}</span>
              <span className="text-primary font-semibold text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

