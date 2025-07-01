'use client';

import React, { useEffect, useState } from 'react';
import { StickyScroll } from '../ui/sticky-scroll-reveal';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import Image from 'next/image';

const content = [
  {
    title: "Devorbit",
    description: (
      <div>
        <p>
          A task management platform built with the MERN stack (MongoDB, Express, React, Node.js).
          Includes features like user authentication with JWT, task creation, and deadline tracking.
          Styled with Tailwind CSS for a clean interface.
        </p>
        <a
          href="https://github.com/SAIKUMAR008212/devorbit"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 mt-2 hover:underline"
        >
          <FaGithub /> Code on GitHub
        </a>
      </div>
    ),
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-white p-4">
        <h2 className="text-xl font-bold mb-2 text-center">Devorbit</h2>
        <Image
          src="/devorbit.png"
          alt="Devorbit demo"
          width={400}
          height={200}
          className="w-full h-full object-contain rounded"
        />
      </div>
    ),
  },
  {
    title: "Music Recommendation System",
    description: (
      <div>
        <p>
          Built with React (Vite) and Flask (Python), this ML-powered app uses the KNN algorithm
          to recommend songs based on user preferences from a CSV dataset. Real-time responses via
          REST APIs and styled with Tailwind.
        </p>
        <a
          href="https://github.com/SAIKUMAR008212/music-recommendation-system"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 mt-2 hover:underline"
        >
          <FaGithub /> Code on GitHub
        </a>
      </div>
    ),
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full text-white p-4">
        <h2 className="text-xl font-bold mb-2 text-center">Music Recommendation</h2>
    <Image
          src="/music.png"
          alt="Music Recommendation demo"
          className="w-full h-full object-contain rounded"
          width={400}
          height={200}
        />
      </div>
    ),
  },
];

export default function Project() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full py-4">
      <p className="text-3xl md:text-5xl text-center font-bold text-primary mb-4">Projects</p>
      <StickyScroll content={content} />
    </div>
  );
}
