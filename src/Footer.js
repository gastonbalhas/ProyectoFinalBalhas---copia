import React from "react";
import Navbar from "./components/NavBar";

function Footer() {
  return (
    <footer className="footer text-center bg-gradient-to-r from-orange-900 to-yellow-900 text-white p-4 w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <p>
            <span className="mr-2">&copy; copyright 2023 - TNG ESTUDIO </span>
          </p>
          <Navbar />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
