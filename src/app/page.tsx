import About from "@/components/about/page";
import Contact from "@/components/contact/page";
import HomePage from "@/components/home/page";
import Nav from "@/components/Nav/page";
import Project from "@/components/project/page";
import { ModeToggle } from "@/components/ui/modetoggle";
import Image from "next/image";
import Skills from "@/components/skills/page";

export default function Home() {
  return (
    <div>
      <Nav/>
      <div id="home" className=" w-full h-screen" >
        <HomePage />
      </div>
      <div id="about" className="pt-[5rem] w-full h-screen">
        <About />
      </div>
       <div id="skills" className="pt-[5rem] w-full h-screen ">
        <Skills />
      </div>
      <div id="projects" className="pt-[5rem] w-full h-screen">
        <Project/>
      </div>
      <div id="contact" className="pt-[5rem] w-full h-screen ">
<Contact />
      </div>
     
    </div>
  );
}
