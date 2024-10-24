import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
const backendUrl = "https://api.smeduconsultant.com";
import axios from "axios";

const Layout = ({ children }) => {
  const [logo, setLogo] = useState({ image: "" });
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const logoResponse = await axios.get(`${backendUrl}/api/logo`);
      setLogo(logoResponse.data);
    };

    fetchData();
  }, []);

  const getActiveClass = (path) =>
    location.pathname === path
      ? "text-gray-300 border-b-2 border-white"
      : "hover:text-gray-300";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header & Navbar */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-500 p-4 flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 z-50">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <img
              src={logo.image}
              alt="SM-Ed-Consultant"
              className="h-20 w-20 object-contain"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-white">
              SM Educational Consultant
            </span>
            <span className="text-xs font-extrabold text-white">
              (STRIVING FOR EXCELLENCE IN ACCREDITATION)
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <Link to="/" className={`px-2 py-1 ${getActiveClass("/")}`}>
            Home
          </Link>
          <Link
            to="/services"
            className={`px-2 py-1 ${getActiveClass("/services")}`}
          >
            Our Services
          </Link>
          <Link to="/team" className={`px-2 py-1 ${getActiveClass("/team")}`}>
            Our Team
          </Link>
          <Link to="/audit" className={`px-2 py-1 ${getActiveClass("/audit")}`}>
            Academic Audit
          </Link>
          <Link to="/about" className={`px-2 py-1 ${getActiveClass("/about")}`}>
            About Us
          </Link>
          <Link
            to="/contact"
            className={`px-2 py-1 ${getActiveClass("/contact")}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Appears below the header */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 text-white p-4 fixed top-32 left-0 w-full z-50">
          <Link
            to="/"
            className={`block px-4 py-2 ${getActiveClass("/")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`block px-4 py-2 ${getActiveClass("/services")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Services
          </Link>
          <Link
            to="/team"
            className={`block px-4 py-2 ${getActiveClass("/team")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Team
          </Link>
          <Link
            to="/audit"
            className={`block px-4 py-2 ${getActiveClass("/audit")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Academic Audit
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-2 ${getActiveClass("/about")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-2 ${getActiveClass("/contact")}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow w-full h-full overflow-auto mt-28">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative w-16 h-16 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <img
                src={logo.image}
                alt="SM-Ed-Consultant"
                className="h-20 w-20 object-contain"
              />
            </div>
            <span className="text-xl font-bold">
              SM Educational Consultant
            </span>
            <span className="text-xs text-white">
              (STRIVING FOR EXCELLENCE IN ACCREDITATION)
            </span>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/services" className="hover:text-gray-300">
              Our Services
            </Link>
            <Link to="/team" className="hover:text-gray-300">
              Our Team
            </Link>
            <Link to="/audit" className="hover:text-gray-300">
              Academic Audit
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h2 className="text-lg font-semibold">Connect with Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter size={24} />
              </a>
            </div>
            <p>Chennai, India</p>
            <p>Email: smeduconsultant@gmail.com</p>
            <p>Phone: +91 9245664761</p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SM Educational Consultant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
