import React from "react";
import about from "../assets/Aboutimg.svg";
import profile from "../assets/photo.jpg";

function About() {
  const intro = `Hi, my name is Gowtham. I’m a Full-Stack .NET Developer with professional experience delivering enterprise-grade applications.
   I specialize in building scalable, maintainable, and secure solutions across both frontend and backend, 
   with exposure to deployment processes and basic cloud knowledge (Azure). My vision is to develop efficient, scalable, and maintainable applications
    that are robust, practical, and innovative, providing real solutions that enhance user experiences and
     deliver a positive impact.`;

  const skills = [
    `Frontend: React.js (Vite + Tailwind CSS, Redux Toolkit, MUI), HTML5, CSS3, JavaScript, Bootstrap, Razor`,
    `Backend: C#, ASP.NET MVC, ASP.NET Core (MVC & Web API), Entity Framework Core, ADO.NET,
      Stored Procedures`,
    `Database: SQL Server, LINQ, Optimized Stored Procedures`,
    `Security & Auth: ASP.NET Identity, JWT, Refresh Tokens, Role-Based Access`,
    `Tools: Visual Studio 2022, VS Code, Git (GitHub, Azure Repos), Postman`,
  ];

  const certifications = [
    `React.js MasterClass – NoviTech R&D Pvt. Ltd. (Dec 2024 – Feb 2025)`,
  ];

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row bg-slate-600 px-5  md:px-5 py-10 "
    >
      {/* Left side image */}
      <div className="md:w-1/2 pb-5 flex justify-center items-center">
        {/* Illustration */}
        <img src={about} alt="About illustration" className="w-[50%] mb-4" />
        {/* Small profile photo */}
        <img
          src={profile}
          alt="Gowtham Profile"
          className="w-40 h-40 rounded-full border-4 border-primary shadow-lg"
        />
      </div>

      {/* Right side content */}
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl font-extrabold border-b-4 max-w-max border-primary mb-5">
            About Me
          </h1>

          <p className="text-base leading-relaxed mb-6 ">{intro}</p>

          <h2 className="text-2xl font-bold text-white border-b-2 border-primary max-w-max mb-4">
            Key Skills
          </h2>
          <ul className="list-disc list-inside space-y-3 mb-6 text-[14px]">
            {skills.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-white border-b-2 border-primary max-w-max mb-4">
            Certifications
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
