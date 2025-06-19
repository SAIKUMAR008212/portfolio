import React from 'react'
import { Button } from '../ui/button'

const projects = [
	{
		title: 'DEVORBIT',
		description:
			'Devorbit is a simple and easy-to-use platform that provides YouTube videos and PDFs for learning web development. It helps users quickly find useful resources for frontend, backend, and full-stack topics.',
		demo: 'https://your-portfolio-demo.com',
		github: 'https://github.com/yourusername/portfolio',
		image: '/project-1.png',
	},
  {
		title: 'MUSIC RECOMENDATION SYSTEM',
		description:
			'A full-stack task management app with authentication, built using MERN stack and styled with Tailwind CSS.',
		demo: 'https://your-taskmanager-demo.com',
		github: 'https://github.com/yourusername/taskmanager',
		image: '/mongo-db.png',
	},
	{
		title: 'NOTEPAD ',
		description:
			'A full-stack task management app with authentication, built using MERN stack and styled with Tailwind CSS.',
		demo: 'https://your-taskmanager-demo.com',
		github: 'https://github.com/yourusername/taskmanager',
		image: '/public/mongo-db.png',
	},
]

export default function Project() {
	return (
		<section className="py-12 px-4 max-w-4xl mx-auto">
			<h2 className="text-5xl font-bold mb-6 text-center">Projects</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, idx) => (
					<div
						key={idx}
						className="bg-card rounded-xl shadow-lg p-6 flex flex-col items-center border border-border"
					>
						<img
							src={project.image}
							alt={project.title}
							className="w-20 h-20 object-contain mb-4 rounded"
						/>
						<h3 className="text-xl font-semibold mb-2 text-center">
							{project.title}
						</h3>
						<p className="text-muted-foreground mb-6 text-center">
							{project.description}
						</p>
						<div className="flex gap-4 mt-auto">
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="default">Demo</Button>
							</a>
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="outline">CODE</Button>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
