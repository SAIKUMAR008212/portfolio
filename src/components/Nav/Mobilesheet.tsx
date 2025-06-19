import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose
} from '../ui/drawer';

export default function Mobilesheet() {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open menu"
          className="md:hidden"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-0 w-3/4 max-w-xs">
        <nav className="flex flex-col items-center gap-8 mt-8 text-xl font-semibold">
          <DrawerClose asChild>
            <Link href="#home" className="hover:text-primary transition-colors w-full text-center">Home</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="#about" className="hover:text-primary transition-colors w-full text-center">About</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="#skills" className="hover:text-primary transition-colors w-full text-center">Skills</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="#projects" className="hover:text-primary transition-colors w-full text-center">Projects</Link>
          </DrawerClose>
          <DrawerClose asChild>
            <Link href="#contact" className="hover:text-primary transition-colors w-full text-center">Contact</Link>
          </DrawerClose>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
            <Button variant="outline" className="w-full">Resume</Button>
          </a>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
