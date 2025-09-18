import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const config = {
    text: "Interested in collaborating or discussing a project? Feel free to reach out.",
    email: "gowthamcoder91@gmail.com",
    phone: "+91 9344447120",
    linkedin: "https://www.linkedin.com/in/gowtham-kumar-a20614385",
    github: "https://github.com/Gowthamkumar91",
    whatsapp: "https://wa.me/919344447120", // WhatsApp direct link
  };

  return (
    <section
      id="contact"
      className="flex flex-col bg-slate-800 text-white px-5 py-32"
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold border-b-4 mb-5 w-[160px] border-gray-400">
          Contact
        </h1>
        <p className="pb-5">{config.text}</p>

        {/* Email */}
        <p className="py-2 flex items-center gap-2">
          <FaEnvelope className="text-secondary" />
          <span className="font-bold">Email:</span> {config.email}
        </p>

        {/* Phone */}
        <p className="py-2 flex items-center gap-2">
          <FaPhone className="text-secondary" />
          <span className="font-bold">Phone:</span> {config.phone}
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-6 text-2xl">
          <a
            href={config.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-200 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href={config.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-200 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href={`mailto:${config.email}`}
            className="hover:text-amber-200 transition-colors"
          >
            <FaEnvelope />
          </a>
          <a
            href={config.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-200 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
