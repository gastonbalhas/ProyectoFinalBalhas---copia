import Navbar from "./components/NavBar";

function Footer() {
  return (
    <footer className="footer text-center bg-gradient-to-r from-orange-900 to-yellow-900 text-white p-4 w-full fixed bottom-0">
      <div className="flex justify-center items-center">
        <p>
          <span className="mr-2">&copy; copyright 2023 - TNG ESTUDIO </span>
        </p>
      </div>
      <div className="flex justify-center">
        <Navbar />
      </div>
    </footer>
  );
}

export default Footer;
