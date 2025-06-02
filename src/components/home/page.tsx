import { cn } from '@/lib/utils'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Background grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-10"></div>
      {/* Hero content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center gap-15 md:gap-20 px-6">
        {/* Profile/illustration */}
        
        {/* Text content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary mb-6">
            Hi, I'm <span className="text-primary">Saikumar Kannuru - I don't just write code, I engineer meaningful digital experiences</span>
          </h1>
          <p className="text-lg md:text-2xl text-primary mb-6">
             A Full-Stack Developer..
          </p>
          <div className="flex gap-4">
            <Link href="/projects">
              <Button size="lg" className="font-semibold">View Projects</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Me</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
