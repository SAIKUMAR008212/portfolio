import About from "@/components/about/page";
import Contact from "@/components/contact/page";
import HomePage from "@/components/home/page";
import Nav from "@/components/Nav/page";
import Project from "@/components/project/page";
import Skills from "@/components/skills/page";
import Services from "@/components/services/page";

export default function Home() {
  return (
    <div>
      <Nav/>
      <div id="home" className=" w-full h-screen" >
        <HomePage />
      </div>
      <div id="about" className="pt-[5rem] w-full h-full">
        <About />
      </div>
       <div id="skills" className="pt-[5rem] w-full h-full ">
        <Skills />
      </div>
      <div id="Projects" className="pt-[5rem] w-full h-full">
        <Project/>
      </div>
      <div id="services" className="pt-[5rem] w-full h-full ">
      <Services />
      </div>
      <div id="contact" className="pt-[5rem] w-full h-full ">
      <Contact />
      </div>
     
    </div>
  );
}
