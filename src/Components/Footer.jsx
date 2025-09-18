import React from "react";

function Footer() {
  return (
    <div id="footer" className="py-4 bg-[#3a3c3c] text-center text-white">
      &copy; {new Date().getFullYear()} Gowtham
    </div>
  );
}

export default Footer;
