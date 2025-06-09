import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHamburger, setShowHamburger] = useState(window.innerWidth < 1330);

  useEffect(() => {
    const handleResize = () => {
      setShowHamburger(window.innerWidth < 1330);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // or 'auto' if you prefer instant scroll
    });
  };

  return (
    <header className="sticky top-0 bg-white shadow-md px-4 md:px-10 py-2 flex justify-between items-center z-50">
      <Link to="/" onClick={handleScrollTop}>
        <div className="flex items-center">
          <img src={logo} alt="Onism Tour" className="h-18" />
        </div>
      </Link>


      {/* Desktop Navigation */}
      <nav className={`hidden ${showHamburger ? "md:hidden" : "md:flex"} text-md  items-center space-x-6`}>
        <Link to="/" className="relative text-gray-700 font-medium hover:text-semibold group">
          Himachal Trips
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all hover:text-black duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/ladakh-and-spiti-trips" className="relative text-gray-700 font-medium hover:text-black group">
          Ladakh and Spiti Trips
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link to="/kashmir-trips" className="relative text-gray-700 font-medium hover:text-black group">
          Kashmir Trips
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>

        <div className="flex items-center space-x-4 ml-6">
          <a href="tel:+919459618859" className="flex items-center space-x-2 text-gray-700 hover:text-black">
            <FaPhoneAlt className="text-gray-500" />
            <span>+91-94596-18859</span>
          </a>
          <a href="tel:+918580787596" className="flex items-center space-x-2 text-gray-700 hover:text-black">
            <FaPhoneAlt className="text-gray-500" />
            <span>+91-8580787596</span>
          </a>
          <a href="mailto:info@onismtourhimachal.in" className="flex items-center space-x-2 text-gray-700 hover:text-black">
            <FaEnvelope className="text-gray-500" />
            <span>info@onismtourhimachal.in</span>
          </a>
        </div>
      </nav>

      {/* Hamburger Button */}
      {showHamburger && (
        <button className="text-gray-700 focus:outline-none border border-gray-400 rounded-md p-2 text-2xl" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <img src={logo} alt="Onism Tour" className="h-20" />
          <button className="text-gray-700 text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col text-xl font-bold p-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium hover:text-black">
            Himachal Trips
          </Link>
          <Link to="/ladakh-and-spiti-trips" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium hover:text-black">
            Ladakh and Spiti Trips
          </Link>
          <Link to="/kashmir-trips" onClick={() => setIsOpen(false)} className="text-gray-700 font-medium hover:text-black">
            Kashmir Trips
          </Link>
          <div className="mt-4 border-t  pt-4">
            <a href="tel:+919459618859" className="flex items-center py-3 space-x-2 text-gray-700 hover:text-black">
              <FaPhoneAlt className="text-gray-500" />
              <span>+91-94596-18859</span>
            </a>
            <a href="tel:+918580787596" className="flex items-center py-3 space-x-2 text-gray-700 hover:text-black">
              <FaPhoneAlt className="text-gray-500" />
              <span>+91-8580787596</span>
            </a>
            <a href="mailto:info@onismtourhimachal.in" className="flex items-center py-3 space-x-2 text-gray-700 hover:text-green-600">
              <FaEnvelope className="text-gray-500" />
              <span>info@onismtourhimachal.in</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
