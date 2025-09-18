import React from "react";
import Hero_Img from "../assets/hero.svg";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  const config = {
    text: "Full-Stack Software Developer | React & .NET Core",
  };

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row px-5 py-20 md:py-32 mt-16 bg-[#0F766E] justify-center items-center gap-8"
    >
      {/* Left: Text + Social */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-white text-4xl md:text-5xl font-herofont">
          Hi, <br />
          <span className="text-orange-300">I'm Gowtham</span>
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl">{config.text}</p>

        {/* Social Icons */}
        <div className="flex mt-6">
          <a
            href="mailto:gowthamcoder91@gmail.com"
            className="mr-4 hover:text-amber-300 transition duration-300"
          >
            <FaEnvelope className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/gowtham-kumar-a20614385"
            className="mr-4 hover:text-amber-300 transition duration-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="https://github.com/Gowthamkumar91"
            className="mr-4 hover:text-amber-300 transition duration-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Right: Hero Image */}
      <div className="md:w-1/3 flex justify-center items-center">
        <motion.img
          className="w-40 sm:w-56 md:w-[400px] lg:w-[500px]"
          src={Hero_Img}
          alt="hero_img"
          initial={{ opacity: 1 }}
          animate={{ y: [0, -8, 0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </section>
  );
}

export default Hero;
