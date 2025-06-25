import React from 'react'

const skills = [
  { name: 'HTML', icon: '/html.png', color: '#E34F26' },
  { name: 'CSS', icon: '/css.png', color: '#1572B6' },
  { name: 'Tailwind', icon: '/globe.svg', color: '#06B6D4' },
  { name: 'JavaScript', icon: '/js.png', color: '#F7DF1E' },
  { name: 'TypeScript', icon: '/typescript.png', color: '#3178C6' },
  { name: 'Node.js', icon: '/nodejs.png', color: '#339933' },
  { name: 'MongoDB', icon: '/mongo-db.png', color: '#47A248' },
  { name: 'React.js', icon: '/react.png', color: '#61DAFB' },
  { name: 'Next.js', icon: '/nextjs.png', color: '#000000' },
  { name: 'Express.js', icon: '/file.svg', color: '#000000' },
  { name: 'postgresql', icon: '/postgresql.png', color: '#336791' },

]
export default function Skills() {
  return (
    <section className="bg-gray-10 py-9 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            <span className="text-black-500 dark:text-white">Skills</span> & <span className="text-blue-900">Technologies</span>
          </h1>
          <p className="text-xl text-gray-220 max-w-2xl mx-auto">
            Showcasing My Expertise And Technical Proficiencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className=" flex flex-wrap  gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className=" min-w-48  bg-primary/10  flex-1  backdrop-blur-md rounded-md p-4 shadow-sm border border-gray-400 dark:border-gray-800 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group"
            >

              <div
                className="   rounded-xl flex items-center justify-center  overflow-hidden gap-2"

              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-9 object-contain"
                />
                <h3 className=" font-semibold text-sm text-foreground dark:text-white group-hover:text-indigo-900 transition-colors dark:group-hover:text-indigo-400  dark:text-black">
                  {skill.name}
                </h3>
              </div>

              {/* Skill Name */}

            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>
    </section>
  )
}
