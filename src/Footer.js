import React from "react";
import Navbar from "./components/NavBar";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-900 to-yellow-900 text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-2">&copy; copyright 2023 - TNG ESTUDIO</p>
          <Navbar />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
