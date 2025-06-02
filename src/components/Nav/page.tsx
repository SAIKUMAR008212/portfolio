import React from 'react'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Mobilesheet from './Mobilesheet'
import { ModeToggle } from '../ui/modetoggle'

export default function Nav() {
    return (

        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-primary">Saikumar</Link>
                <div className="hidden md:flex gap-8 items-center">
                    <Link href="#home" className="hover:text-primary transition-colors">Home</Link>
                    <Link href="#about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
                    <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
                    <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="ml-2" aria-label="Resume">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11V17M12 17L9 14M12 17l3-3M5 7h14M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" />
                            </svg>
                        </Button>
                    </a>
                    <ModeToggle />
                </div>
                <div className="md:hidden">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="w-6 h-6" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link href="/">Home</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/about">About</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/projects">Projects</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="#skills">Skills</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/contact">Contact</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Button variant="outline">
                                    Resume
                                </Button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    )
}
