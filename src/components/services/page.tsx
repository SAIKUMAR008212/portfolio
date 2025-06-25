// Services.tsx or Services.jsx

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const ColoredIcons = {
  code: (
    // Browser/monitor icon for Web Development
    <svg className="w-10 h-10 p-2 bg-blue-100 text-blue-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="4" width="18" height="14" rx="2" strokeWidth="2" />
      <path d="M8 20h8" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 18v2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  design: (
    // Paint brush icon for UI/UX Design
    <svg className="w-10 h-10 p-2 bg-pink-100 text-pink-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M15.232 5.232l3.536 3.536-9.192 9.192a2 2 0 01-2.828 0l-0.708-0.708a2 2 0 010-2.828l9.192-9.192z" strokeWidth="2"/>
      <path d="M16 7l1 1" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  backend: (
    // Server icon for Backend Development
    <svg className="w-10 h-10 p-2 bg-green-100 text-green-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="4" width="18" height="6" rx="2" strokeWidth="2"/>
      <rect x="3" y="14" width="18" height="6" rx="2" strokeWidth="2"/>
      <circle cx="8" cy="7" r="1" fill="currentColor"/>
      <circle cx="8" cy="17" r="1" fill="currentColor"/>
    </svg>
  ),
  data: (
    // Bar chart icon for Data Analysis
    <svg className="w-10 h-10 p-2 bg-yellow-100 text-yellow-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="4" y="10" width="4" height="8" rx="1" strokeWidth="2"/>
      <rect x="10" y="6" width="4" height="12" rx="1" strokeWidth="2"/>
      <rect x="16" y="2" width="4" height="16" rx="1" strokeWidth="2"/>
    </svg>
  ),
  devops: (
    // Gear/settings icon for DevOps
    <svg className="w-10 h-10 p-2 bg-purple-100 text-purple-600 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <circle cx="12" cy="12" r="3" strokeWidth="2"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" strokeWidth="2"/>
    </svg>
  ),
};

const services = [
  
  {
  icon: ColoredIcons.code,
  quote: "I build responsive and scalable full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). I handle both client and server-side development, ensuring secure authentication, smooth UI flow, and real-time data integration.",
  name: "Web Development",
  title: "MERN Stack Projects",
},
{
  icon: ColoredIcons.design,
  quote: "I design clean, responsive user interfaces using Figma and convert them into modern HTML, CSS, and JavaScript code. My designs prioritize user experience, accessibility, and cross-device compatibility for web and mobile screens.",
  name: "UI/UX Design",
  title: "Figma to Code",
},
{
  icon: ColoredIcons.data,
  quote: "I analyze and visualize data using Python libraries like Pandas, Matplotlib, Seaborn, and Plotly. From cleaning datasets to building interactive charts, I turn raw data into actionable insights with clarity and precision.",
  name: "Data Analysis",
  title: "Python & Visualization",
},
{
  icon: ColoredIcons.devops,
  quote: "I manage code versions using Git and GitHub, following best practices in collaboration, branching, and pull requests. I ensure clean commit history, resolve conflicts, and maintain team productivity across projects.",
  name: "Version Control",
  title: "Git & GitHub",
}

];


export default function Services() {
  return (
    <div>
      <div className=" mx-auto max-w-6xl rounded-md flex flex-col antialiased bg-background items-center justify-center relative overflow-hidden">
        {/* <h1 className="text-primary text-3xl font-bold">Services</h1> */}
        <p className="text-3xl md:text-3xl font-bold text-primary mb-4">What I can do for you</p>
        <InfiniteMovingCards
          items={services}
          direction="right"
          speed="normal"
          className="w-full h-full"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
