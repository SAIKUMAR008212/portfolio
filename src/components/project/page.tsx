// Project.tsx

import React from 'react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';

const content = [
  {
    title: " Devorbit text",
    description:
      "A modern task management and productivity platform developed using the MERN stack (MongoDB, Express, React, Node.js). This project allows users to register, create tasks, track progress, and manage deadlines in a clean and responsive UI. Integrated JWT-based authentication and RESTful APIs for secure user access. Styled with Tailwind CSS for a sleek design.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        <img
          src="Devorbit.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        
      </div>
    ),
  },
  {
    title: "music recommendation system",
    description:
      "An intelligent web app that suggests music based on user preferences using machine learning. Built with React (Vite) on the frontend and a Flask (Python) backend with KNN and data from a CSV dataset. Clean UI with Tailwind CSS and real-time recommendations via REST APIs.See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];

export default function Project() {
  return (
    <div className="w-full py-4">
    <p className="text-3xl md:text-5xl text-center font-bold text-primary mb-4">Projects</p>

      <StickyScroll content={content} />
    </div>
  );
}
