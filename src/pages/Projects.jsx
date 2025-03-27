import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Booklink from "../assets/booklink.png";
import Deadlock from "../assets/deadlock.png";
import Volunteer from "../assets/handson.png";

const Projects = () => {
  const projects = [
    {
      title: "DEADLOCK Zombie Shooter",
      description: "A 2D Shooting game made with iGraphics engine using OpenGL library in C and C++. Features include intuitive mouse-controlled aiming, bouncing bullets that add a unique challenge, multiple levels with different zombie adversaries, immersive soundtracks and visuals, and easy installation.",
      tags: ["C++", "OpenGL", "iGraphics"],
      year: "2023",
      githubLink: "https://github.com/jnkarim/DeadLock-Zombie-Shooter",
      image: Deadlock
    },
    {
      title: "BookLink",
      description: "An innovative web platform designed to facilitate the seamless exchange and borrowing of books within a community. By allowing users to upload images of their book collections, browse available titles, and initiate secure book transactions, BookLink aims to promote accessibility to literature while reducing the cost and waste associated with book purchases.",
      tags: ["React", "Laravel", "MySQL"],
      year: "2024 - Ongoing",
      githubLink: "https://github.com/jnkarim/BookLink",
      image: Booklink
    },
    {
      title: "Hands-On Volunteering Platform",
      description: "A web-based application that connects volunteers with events and initiatives in their communities. The platform allows organizations to create events and volunteers to explore, join, and participate in these events.",
      tags: ["React", "Node.js", "MongoDB"],
      year: "2025",
      githubLink: "https://github.com/jnkarim/HandsOn-volunteering-platform",
      image: Volunteer
    }
  ];

  return (
<div className="bg-[#121212] text-white  md:-mt-32 lg:-mt-64 xl:-mt-128">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8">
        <div className="flex">
          <div className="hidden md:block w-[255px] flex-shrink-0"></div>

          <div className="flex-1 bg-[#1e1e1e] text-white shadow-lg py-6 md:py-8 px-4 md:px-10 md:ml-8 rounded-lg">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Projects
            </h1>

            <div className="border-b-4 md:border-b-6 border-yellow-400 w-[50px] mb-4 md:mb-6 rounded-lg"></div>

            <div className="space-y-6 md:space-y-12">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-4 md:gap-8 bg-[#262626] p-4 md:p-8 rounded-lg hover:bg-[#2e2e2e] transition-colors duration-300"
                >
                  <div className="w-full md:w-2/5 flex-shrink-0">
                    <div className="w-full flex justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="max-w-full max-h-[200px] md:max-h-[300px] object-contain"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-3/5">
                    <div className="flex flex-col md:flex-row md:justify-between items-start gap-2 mb-3 md:mb-4">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xl md:text-2xl font-bold hover:text-yellow-400 transition-colors flex items-center"
                      >
                        {project.title}
                        <FaExternalLinkAlt className="ml-2 text-xs md:text-sm" />
                      </a>
                      <span className="text-gray-400 text-sm">{project.year}</span>
                    </div>

                    <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-2 md:mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-[#1e1e1e] text-yellow-400 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;