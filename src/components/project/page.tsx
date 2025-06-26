import React from 'react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';

const content = [
  {
    title: "Devorbit",
    description: (
      <p>
        A task management platform built with MERN stack (MongoDB, Express, React, Node.js). Includes features like user authentication with JWT, task creation, and deadline tracking. Styled with Tailwind CSS for a clean interface.
      </p>
    ),
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white p-4">
        <h2 className="text-xl font-bold mb-2 text-center">Devorbit</h2>
        <img
          src="devorbit.png"
          alt="Devorbit demo"
          className="w-full h-full object-cover rounded"
        />
      </div>
    ),
  },
  {
    title: "Music Recommendation System",
    description: (
      <p>
        Built with React (Vite) and Flask (Python), this ML-powered app uses the KNN algorithm to recommend songs based on user preferences from a CSV dataset. Real-time responses via REST APIs and styled with Tailwind.
      </p>
    ),
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
        <h2 className="text-xl font-bold mb-2 text-center">Music Recommendation</h2>
        <img
          src="/linear.webp"
          alt="Music Recommendation demo"
          className="w-full h-full object-cover rounded"
        />
      </div>
    ),
  },
  {
    title: "Version Control Panel",
    description: (
      <p>
        A collaborative platform to monitor and maintain the latest version of any project with real-time updates. No more merge conflicts — just clean, automatic version syncing.
      </p>
    ),
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-4">
        <h2 className="text-xl font-bold mb-2 text-center">Version Control</h2>
        <img
          src="/linear.webp"
          alt="Version Control demo"
          className="w-full h-full object-cover rounded"
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
