import React from "react";
import Image from "next/image";
import { Employer, Project, Status } from "./components";
import { Me, Mountain } from "./svgs";
import Link from "next/link";
export default function Home() {
  const status = "online";

  return (
    <div className="relative flex flex-col">
      <div className="relative h-[calc(100vh-30px)] flex flex-col">
        <div className="h-full justify-center flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="mt-20 px-28 text-black text-center font-inter font-bold">
							Computer Scientist, Software Engineer & Creator{" "}
            </h1>
            <h2 className="px-10 text-black text-center font-inter font-medium">
							I craft simple solution with code
            </h2>
          </div>
          <div className="flex flex=row w-full justify-center">
            <Me />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row w-full justify-center">
              <Status status={status} />
            </div>
            <div className="flex flex-row w-full justify-center">
              <Image
                src={"/twitch-24.png"}
                alt="Twitch Logo"
                width={24}
                height={24}
              />
              <Image
                src={"/linkedin-24.png"}
                alt="LinkedIn Logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-3px] left-0 w-full h-24">
          <Mountain />
        </div>
      </div>
      <div className="h-full w-full bg-[#1E2A47] py-32" id="about">
        <p className="text-white text-xl font-inter text-center max-w-2xl mx-auto px-8 leading-relaxed">
          Hi, I'm Lucas; I freelance developer passionate about creating
          innovative software solutions. I specialize in full-stack. I enjoy
          tackling complex problems and bringing my ideas to life through code.
        </p>
      </div>
      {/* card */}
      <div className="relative -mt-16 flex justify-center w-full">
        <div className="bg-white rounded-t-[10px] px-12 py-16 sm:px-20 max-w-3xl w-full mx-8  border border-grey-300">
          <div className="flex flex-col items-center gap-20">
            {/* Computer Scientist Section */}
            <div className="flex flex-col items-center">
              <div className="bg-[#E1F3FF] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-6">
                <Image
                  src="/computer-scientist.svg"
                  alt="Computer Scientist Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center text-[#1E2A47] mb-4">Computer Scientist</h1>
              <p className="text-center text-[#666666] max-w-lg mb-8">
                I enjoy tackling complex problems and diving deep into the field of Computer Science
              </p>
              <div className="w-full max-w-lg space-y-6">
                <div>
                  <h2 className="font-medium mb-2 text-green-300 text-center">Areas of Interest</h2>
                  <p className="text-[#666666]  text-black text-center">Programming Languages & Interpreters</p>
                </div>
                <div>
                  <h2 className="text-[#4FA3E3] font-medium mb-2 text-center text-green-300">Languages & Tools</h2>
                  <p className="text-[#666666] text-center text-black">C++, Python, Java</p>
                </div>
              </div>
            </div>

            {/* Line */}
            <div className="-mx-12 px-4 w-[calc(100%+6rem)]">
              <div className="w-full h-[.5px] bg-gray-300"/>
            </div>
            {/* Line */}    

            {/* Software Engineer Section */}
            <div className="flex flex-col items-center">
              <div className="bg-[#E1F3FF] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-6">
                <Image
                  src="/software-engineer.svg"
                  alt="Software Engineer Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center text-[#1E2A47] mb-4">Software Engineer</h1>
              <p className="text-center text-[#666666] max-w-lg mb-8">
                I like to code things from scratch and bring ideas to life with well-structured, performant software
              </p>
              <div className="w-full max-w-lg space-y-6">
                <div>
                  <h2 className="text-[#4FA3E3] font-medium mb-2 text-green-300 text-center">Key Skills</h2>
                  <div className="text-[#666666] space-y-1">
                    <p className="text-center text-black">Full Stack Development</p>
                    <p className="text-center text-black">NVIM optimization & developer tooling</p>
                    <p className="text-center text-black">Git, CI/CD and version control</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-[#4FA3E3] font-medium mb-2 text-green-300 text-center">Tech Stack</h2>
                  <div className="text-[#666666] space-y-1">
                    <p className="text-center text-black">Frontend & Mobile: React Native</p>
                    <p className="text-center text-black">Backend & Systems: C++</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Line */}
             <div className="-mx-12 px-4 w-[calc(100%+6rem)]">
              <div className="w-full h-[.5px] bg-gray-300"/>
            </div>
            {/* Line */}   

            {/* Creator Section */}
            <div className="flex flex-col items-center">
              <div className="bg-[#E1F3FF] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-6">
                <Image
                  src="/creator.png"
                  alt="Creator Icon"
                  width={40}
                  height={40}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center text-[#1E2A47] mb-4">Creator</h1>
              <p className="text-center text-[#666666] max-w-lg mb-8">
                Documenting my development journey through content creation. My focus is on real-time problem-solving, intentional development and building in public
              </p>
              <div className="w-full max-w-lg space-y-6">
                <div>
                  <h2 className="text-[#4FA3E3] font-medium mb-2 text-green-300 text-center">Content & Engagement</h2>
                  <div className="text-[#666666] space-y-4">
                    <div>
                      <p className="font-medium text-center text-black">Live Streaming on Twitch</p>
                      <p className="text-center text-black">Real-time software development, debugging, and problem solving</p>
                    </div>
                    <div>
                      <p className="font-medium text-center text-black text-green-300">YouTube Content</p>
                      <p className="text-center text-black">Edited videos covering a wide variety of software development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      
      {/* Work Experience Section */}
      <div className="bg-white py-20 px-8" id="experience">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#1E2A47] mb-12">Work Experience</h2>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Employer
              name="When Pigs Fly Breads"
              role="Software Engineer"
              description="Led development of inventory management system and e-commerce platform"
              imagePath="/when-pigs-fly.png"
              achievements={[
                "Developed and implemented inventory management system",
                "Built e-commerce platform from scratch",
                "Improved order processing efficiency by 40%",
                "Integrated payment processing and shipping solutions"
              ]}
            />
            
            <Employer
              name="Ceritas"
              role="Full Stack Developer"
              description="Developed and maintained healthcare management platform"
              imagePath="/ceritas.png"
              achievements={[
                "Built responsive web applications using React",
                "Implemented secure patient data management system",
                "Optimized database queries improving performance by 50%",
                "Developed RESTful APIs using Node.js"
              ]}
            />
          </div>
        </div>
      </div>
      
      {/* Projects Section */}
      <div className="py-20 px-8" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-[#1E2A47] mb-12">Projects</h2>
          
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Project
              name="Portfolio Website"
              description="Personal portfolio website built with Next.js and TailwindCSS"
              imagePath="/portfolio.png"
              features={[
                "Modern, responsive design",
                "Server-side rendering with Next.js",
                "Custom animations and transitions",
                "Optimized performance and accessibility"
              ]}
            />
            
            <Project
              name="Task Management App"
              description="Full-stack task management application with real-time updates"
              imagePath="/task-app.png"
              features={[
                "Real-time updates using WebSocket",
                "User authentication and authorization",
                "Drag and drop interface",
                "Data persistence with PostgreSQL"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Interested in working together section */}
      <div className="py-20 px-8 bg-[#F8F9FA]" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#1E2A47] mb-4">Interested in working together?</h2>
          <p className="text-[#666666] mb-8">Let's discuss what you need done!</p>
          <a 
            href="/contact" 
            className="inline-block bg-[#4FA3E3] text-white py-3 px-8 rounded-md hover:bg-[#3A8AC7] transition-colors duration-200"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1E2A47] text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8">
                  <Me />
                </div>
                <span className="text-xl font-semibold">Lucas Raza</span>
              </div>
              <p className="text-gray-300 mb-6">
                Crafting innovative software solutions with passion and precision.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
                <div>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                </div>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition-colors hover:bg-gray-300">
                  <Image
                    src="/linkedin-24.png"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100"
                  />
                </a>
                <a href="#"  className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition-colors hover:bg-gray-300">
                  <Image
                    src="/twitch-24.png"
                    alt="Twitch"
                    width={24}
                    height={24}
                    className="opacity-80 hover:opacity-100"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Lucas Raza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
