import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"; 
import axios from "axios";
import './LayoutStyle.css' 

const backendUrl = "https://api.smeduconsultant.com";

const Layout = ({ children }) => {
  const [logo, setLogo] = useState({ image: "" });
  const [FooterHero, setFooterHero] = useState({ title: "", description: "" });
  const [ContactInfo, setContactInfo] = useState({ address: "", email: "", phno: "" });
  const [links, setLinks] = useState([]);
  const [SMLinks, setSMLinks] = useState([]);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Ref to track the position of the hamburger icon
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const logoResponse = await axios.get(`${backendUrl}/api/logo`);
      const footerHeroResponse = await axios.get(`${backendUrl}/api/footerHero`);
      const contactInfoResponse = await axios.get(`${backendUrl}/api/contactInfo`);
      const linksResponse = await axios.get(`${backendUrl}/api/links`);
      const SMLinksResponse = await axios.get(`${backendUrl}/api/smlinks`);

      setSMLinks(SMLinksResponse.data);
      setLinks(linksResponse.data);
      setFooterHero(footerHeroResponse.data);
      setContactInfo(contactInfoResponse.data);
      setLogo(logoResponse.data);
    };

    fetchData();
  }, []);

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "text-gray-300 border-b-2 border-white"
      : "hover:text-gray-300";
  };

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'facebook':
        return <FaFacebookF size={24} />;
      case 'linkedin':
        return <FaLinkedinIn size={24} />;
      case 'instagram':
        return <FaInstagram size={24} />;
      case 'twitter':
        return <FaTwitter size={24} />;
      default:
        return null;
    }
  };

  // This function will be used to open the menu relative to the position of the hamburger button
  const handleHamburgerClick = () => {
    const rect = hamburgerRef.current.getBoundingClientRect();
    setMenuPosition({ top: rect.bottom + window.scrollY });  // Add scroll position to make it work even when scrolling
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false); // Close the menu when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuRef.current) {
      const menuHeight = mobileMenuRef.current.scrollHeight;
      const viewportHeight = window.innerHeight - 128;

      // If the menu is taller than the viewport, make it scrollable
      if (menuHeight > viewportHeight) {
        mobileMenuRef.current.style.maxHeight = `${viewportHeight}px`; // Adjust as needed
        mobileMenuRef.current.style.overflowY = 'auto'; // Enable vertical scrolling
      } else {
        mobileMenuRef.current.style.maxHeight = 'none'; // No scroll needed
      }
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-500 p-4 flex items-center justify-between shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-4">
          <div className="relative w-24 h-24 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
            <img src={logo.image} alt="SM-Ed-Consultant" className="h-20 w-20 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-white bg-clip-text text-transparent bg-white tracking-wider drop-shadow-md">
              <span className="text-white text-2xl font-black tracking-wide">SM</span> Educational Consultant
            </span>
            <span className="text-xs font-extrabold text-white bg-clip-text text-transparent bg-white tracking-wider drop-shadow-md">
              (STRIVING FOR EXCELLENCE IN ACCREDITATION)
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-white font-medium">
          <Link to="/" className={`px-2 py-1 ${getActiveClass("/")}`}>Home</Link>
          <Link to="/services" className={`px-2 py-1 ${getActiveClass("/services")}`}>Our Services</Link>
          <Link to="/team" className={`px-2 py-1 ${getActiveClass("/team")}`}>Our Team</Link>
          <Link to="/audit" className={`px-2 py-1 ${getActiveClass("/audit")}`}>Academic Audit</Link>
          <Link to="/about" className={`px-2 py-1 ${getActiveClass("/about")}`}>About Us</Link>
          <Link to="/contact" className={`px-2 py-1 ${getActiveClass("/contact")}`}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            ref={hamburgerRef}  // Assign the ref to the hamburger button
            className="text-white focus:outline-none"
            id="mobile-menu-button"
            aria-label="Open Menu"
            onClick={handleHamburgerClick}  // Use the new handler for the button click
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden bg-blue-600 text-white space-y-4 p-4 absolute z-50 mt-12 left-0 right-0 mobile-menu"
          style={{ top: `${menuPosition.top}px` }}  // Position the menu based on where the hamburger button was clicked
        >
          <Link to="/" className={`block px-4 py-2 ${getActiveClass("/")}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" className={`block px-4 py-2 ${getActiveClass("/services")}`} onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
          <Link to="/team" className={`block px-4 py-2 ${getActiveClass("/team")}`} onClick={() => setIsMobileMenuOpen(false)}>Our Team</Link>
          <Link to="/audit" className={`block px-4 py-2 ${getActiveClass("/audit")}`} onClick={() => setIsMobileMenuOpen(false)}>Academic Audit</Link>
          <Link to="/about" className={`block px-4 py-2 ${getActiveClass("/about")}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className={`block px-4 py-2 ${getActiveClass("/contact")}`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow w-full h-full overflow-auto mt-28">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8 mt-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative w-16 h-16 bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <img src={logo.image} alt="SM-Ed-Consultant" className="h-20 w-20 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">{FooterHero.title}</span>
              <span className="text-xs font-bold text-white bg-clip-text text-transparent bg-white tracking-wider drop-shadow-md">
                ({FooterHero.description})
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start text-center md:text-start space-y-2">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            {links.map((linkData) => (
              <div key={linkData._id}>
                <Link to={linkData.linkAddress} className={`px-2 py-1 ${getActiveClass(linkData.linkAddress)}`}>{linkData.name}</Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center lg:items-start text-center md:text-left space-y-2">
            <h2 className="text-lg font-semibold">Connect with Us</h2>
            {SMLinks.map((sml) => (
              <div className="flex space-x-4" key={sml._id}>
                <a href={sml.linkAddress} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  {getIcon(sml.platformName)}
                </a>
              </div>
            ))}
            <p className="mt-4">{ContactInfo.address}</p>
            <p>Email: <a href={ContactInfo.email} className="hover:text-gray-300">{ContactInfo.email}</a></p>
            <p>Phone: {ContactInfo.phno}</p>
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
