import React from 'react'
import { Linkedin, Github,  Instagram, MessageCircle } from 'lucide-react'

export default function Contact() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/saikumarkannuru",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/saikumarkannuru",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/saikumar_kannuru",
      label: "Instagram"
    },
    {
      icon: MessageCircle,
      href: "https://wa.me/918008030674",
      label: "WhatsApp"
    }
  ]

  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-background px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-3xl font-bold mb-4">
          <span className="text-primary">Let's </span>
          <span className="text-primary relative">
            Connect
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"></div>
          </span>
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-x2 mb-12 max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out through any of these platforms. I'll get back to you as soon as possible.
        </p>
        
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group p-4 bg-black-300/50 hover:bg-gray-300/10 rounded-2xl border border-blue-100/10 hover:border-blue-800/80 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-100/10"
              >
                <IconComponent className="w-3 h-3 md:w-6 md:h-5 text-blue-1000 group-black:text-emerald-400 transition-colors duration-300" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}