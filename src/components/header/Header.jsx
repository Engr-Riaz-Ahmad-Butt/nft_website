import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { navLinks } from "../data-display/data";

function Header() {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative w-full bg-gradient-to-b from-black to-transparent via-transparent">
      <div className="relative container mx-auto py-3 sm:py-4">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-contain bg-no-repeat flex-shrink-0">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* Hamburger menu */}
            <button
              className="lg:hidden text-white text-2xl sm:text-3xl p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span>{isMenuOpen ? "\u2716" : "\u2630"}</span>
            </button>

            {/* Navigation Links (only visible on large screens) */}
            <nav className="hidden lg:flex space-x-4 xl:space-x-6 py-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={`font-inter text-sm xl:text-base font-semibold ${
                    activeLink === href ? "text-[#FD1640]" : "text-white"
                  } hover:text-[#FD1640] transition-colors`}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </nav>
            {/* Connect Wallet Button */}
            <button className="hidden lg:block w-40 xl:w-52 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-sm xl:text-lg p-2 xl:p-3 rounded-lg hover:shadow-lg transition-shadow">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Mobile Menu - shown when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-6 overflow-y-auto">
            <button
              className="absolute top-6 right-6 text-white text-3xl p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            {/* Navigation Links */}
            <div className="space-y-6 text-center">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => {
                    setActiveLink(href);
                    setIsMenuOpen(false);
                  }}
                  className={`font-inter text-lg sm:text-xl font-semibold block ${
                    activeLink === href ? "text-[#FD1640]" : "text-white"
                  } hover:text-[#FD1640] transition-colors`}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Connect Wallet Button */}
            <button className="w-48 sm:w-56 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-base sm:text-lg p-3 rounded-lg hover:shadow-lg transition-shadow mt-6">
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
