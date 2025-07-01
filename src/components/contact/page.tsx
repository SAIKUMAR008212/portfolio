import React from 'react'
import { Linkedin, Github, Instagram, MessageCircle } from 'lucide-react'
import { FloatingDock } from '../floatingDock'

export default function Contact() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/saikumarkannuru",
    },
    {
      title: "GitHub",
      icon: (
        <Github className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "https://github.com/saikumarkannuru",
    },
    {
      title: "Instagram",
      icon: (
        <Instagram className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "https://instagram.com/saikumar_kannuru",
    },
    {
      title: "WhatsApp",
      icon: (
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 dark:text-neutral-300" />
      ),
      href: "https://wa.me/918008030674",
    },
  ];

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-background px-4 py-12">
      <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-3xl font-bold mb-4">
          <span className="text-primary">Let&apos;s </span>
          <span className="text-primary relative">
            Connect
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"></div>
          </span>
        </h2>

        <p className="text-muted-foreground text-lg md:text-x2 mb-12 max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out through any of these platforms. I&apos;ll get back to you as soon as possible.
        </p>

        <FloatingDock
          className="mx-auto mt-4" // use custom styling from floatingDock.tsx
          items={links}
        />
      </div>
    </section>
  );
}
