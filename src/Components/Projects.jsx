import React from "react";
import organicFood from "../assets/OrganicProduct.png";

function Projects() {
  const description = `Featured demo project: an Organic Food E-Commerce application built with ASP.NET Core MVC, SQL Server, and Entity Framework (with Stored Procedures).
   Designed to showcase my ability to build scalable web apps with order booking, payment flow, and an admin dashboard.`;

  const config = {
    projects: [
      {
        img: organicFood,
        text: "Organic Food E-Commerce Project (Built with ASP.NET Core MVC, SQL Server, and Entity Framework with Stored Procedures)",
        link: "https://github.com/Gowthamkumar91/OrganicProduct", // update later with real repo
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col px-10 py-20 justify-center bg-slate-800 text-white"
    >
      <div className="w-full">
        <div className="flex flex-col justify-center pb-7">
          <h1 className="text-4xl font-extrabold text-white border-b-4 max-w-max border-primary">
            Projects
          </h1>
          <p className="pt-3">{description}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-5">
          {config.projects.map((project, index) => (
            <div key={index} className="relative">
              <img
                className="w-full md:w-[400px] h-auto rounded-lg shadow-lg"
                src={project.img}
                alt="Organic Food E-Commerce Project Screenshot"
              />
              <div className="project-description">
                <p className="text-center py-5 px-5">{project.text}</p>
                <div className="flex justify-center">
                  <a
                    className="btn btn-border"
                    target="_blank"
                    href={project.link}
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
