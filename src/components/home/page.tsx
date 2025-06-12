"use client"

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ContainerTextFlip } from '../ui/container-text-flip'

export default function HomePage() {
  return (
    <div className="relative flex h-full min-h-screen w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Background grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-10" />

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-6 px-6 w-full max-w-5xl text-center">

        {/* Flipping text */}
        <ContainerTextFlip
          animationDuration={700}
          className='cursor-pointer relative bg-primary/10 text-black dark:text-white dark:bg-primary/10 border-[0.1px] dark:border-yellow-600 shadow-sm '
          words={["open to work", "available for hire", "let's connect", "let's collaborate", "for freelance work"]}
          interval={3000}
        />

        <h1 className="text-2xl sm:text-4xl md:text-4xl font-extrabold">
          <span className="text-primary">Hi, I'm Saikumar Kannuru</span> — I don't just write code,
          <br className="hidden md:block" />
          <span className="text-primary"> I craft digital experiences.</span>
        </h1>

        {/* Subtext */}
        <p className="text-md md:text-xl text-muted-foreground font-medium max-w-2xl">
          <strong>Full-stack developer</strong> focused on <strong>MERN</strong> Stack, <strong>Next.js</strong>, TypeScript, and scalable systems & <strong>Problem Solver</strong>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="#projects">
            <Button size="lg" variant={'default'} className="font-semibold text-foreground shadow-md transition-transform hover:scale-105">
              View Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="font-semibold border-primary text-primary-700 dark:text primary-400 hover:bg-green-50 dark:hover:bg-green-900/30 transition-transform hover:scale-105"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
