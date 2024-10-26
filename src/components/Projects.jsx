import { FaGithub, FaLink } from "react-icons/fa";
import { projects } from "../data/Projects";
import { useState } from "react";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projectsToShow = showAllProjects ? projects.length : 3;

  const handleViewAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <div
      id="projects"
      className="mainContainer pt-20 lg:mx-40 md:mx-10 text-white"
    >
      <h1 className="text-center text-gold-200 text-5xl font-bold pb-10">
        Projects
      </h1>
      <div className="flex flex-col gap-10">
        {projects.slice(0, projectsToShow).map((project) => (
          <div
            key={project.id}
            className="grid xl:grid-cols-3 grid-cols-1 justify-center items-center gap-10 py-5 px-10 border border-gold-200 bg-gold-200 bg-opacity-10 rounded-3xl"
          >
            <div className="ring ring-gold-200 rounded-2xl xl:col-span-1 mx-auto">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-2 xl:col-span-2">
              <h1 className="text-3xl font-bold"> {project.title} </h1>
              <p className="text-gray-300"> {project.description} </p>
              <h2 className="text-lg font-semibold">Technologies I used</h2>
              <div className="flex flex-wrap items-center gap-4 py-2">
                {project.technologies.map((tool) => (
                  <a key={tool.id} href={tool.link}>
                    <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-full">
                      <img src={tool.icon} alt={tool.name} width={20} />
                      <p className="font-semibold text-black"> {tool.name} </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" className="lg:mt-0 mt-5">
                  <button className="flex items-center justify-center gap-3 border border-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-105">
                    <FaLink />
                    Go to {project.title}
                  </button>
                </a>
                <a href={project.github} target="_blank" className="lg:mt-0 mt-5">
                  <button className="flex items-center justify-center gap-3 border border-white rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-105">
                    <FaGithub />
                    Go to Github
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleViewAllProjects}
          className="flex items-center justify-center gap-3 bg-gold-100 bg-opacity-20 border border-gold-200 text-gold-200 font-semibold rounded-full px-4 py-2 transform transition-transform duration-300 hover:scale-105"
        >
          {showAllProjects ? "Hide Projects" : "View All Projects"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
