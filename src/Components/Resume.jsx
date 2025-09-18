import React from "react";
import CVPreview from "../assets/ResumePreview.png"; // Resume preview image
import ResumeFile from "../assets/Resume.pdf"; // Actual resume PDF

function Resume() {
  const config = {
    text: "You can view and download my resume",
  };

  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-slate-600 px-5 py-10"
    >
      {/* Resume Preview */}
      <div className="md:w-1/2 pb-5 flex justify-start md:pr-60 md:justify-end">
        <img
          className="w-[300px] py-5 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          src={CVPreview}
          alt="Resume Preview"
        />
      </div>

      {/* Resume Text + Download */}
      <div className="md:w-1/2 flex justify-start md:pl-50">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-white border-b-4 max-w-max border-primary">
            Resume
          </h1>
          <p className="text-white mt-5 mb-3">{config.text}</p>
          <a
            className="btn-border px-5 py-2 text-white font-semibold rounded-md transition hover:bg-primary hover:text-amber-400 w-max"
            href={ResumeFile}
            download="Gowtham_Resume.pdf"
          >
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
