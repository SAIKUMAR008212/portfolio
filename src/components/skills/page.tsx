import React from 'react'

const skills = [
  { name: 'HTML', icon: '/html.png', color: '#E34F26' },
  { name: 'CSS', icon: '/css.png', color: '#1572B6' },
  { name: 'Tailwind', icon: '/globe.svg', color: '#06B6D4' }, // Replace with tailwind icon if available
  { name: 'JavaScript', icon: '/js.png', color: '#F7DF1E' },
  { name: 'TypeScript', icon: '/typescript.png', color: '#3178C6' },
  { name: 'Node.js', icon: '/nodejs.png', color: '#339933' },
  { name: 'MongoDB', icon: '/mongo-db.png', color: '#47A248' },
  { name: 'React.js', icon: '/react.png', color: '#61DAFB' },
  { name: 'Next.js', icon: '/nextjs.png', color: '#000000' },
  { name: 'Express.js', icon: '/file.svg', color: '#000000' }, // Use actual express icon if available
  { name:  'postgresql', icon: '/postgresql.png', color: '#336791' },
  
]

export default function Skills() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Skills & <span className="text-indigo-600">Technologies</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing My Expertise And Technical Proficiencies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-inner overflow-hidden"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                
                {/* Skill Name */}
                <h3 className="text-gray-800 font-semibold text-sm group-hover:text-indigo-600 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom spacing */}
        <div className="mt-16"></div>
      </div>
    </section>
  )
}
