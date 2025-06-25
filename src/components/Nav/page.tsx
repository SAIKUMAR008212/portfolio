"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Mobilesheet from './Mobilesheet'
import { ModeToggle } from '../ui/modetoggle'

export default function Nav() {
    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
            <div className="max-w-6xl mx-auto px-1 py-3 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-primary">SaiKumar</Link>
                <div className="hidden md:flex gap-6 items-center">
                    <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#Projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="ml-2" aria-label="Resume">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V17M12 17L9 14M12 17l3-3M5 7h14M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                            </svg>
                        </Button>
                    </a>
                    <ModeToggle />
                </div>
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />
                    <Mobilesheet />
                </div>
            </div>
        </nav>
    )
}
