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
      <div className="relative w-full py-2 sm:py-3 md:py-4">
        <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-contain bg-no-repeat flex-shrink-0">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-6">
            {/* Hamburger menu */}
            <button
              className="lg:hidden text-white text-2xl sm:text-3xl p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span>{isMenuOpen ? "✕" : "☰"}</span>
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
          <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 w-screen h-screen z-40 bg-black bg-opacity-95 overflow-hidden">
            {/* Close Button */}
            <div className="flex justify-end p-3 sm:p-4">
              <button
                className="text-white text-3xl sm:text-4xl w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Menu Content */}
            <div className="h-[calc(100vh-60px)] flex flex-col items-center justify-center space-y-6 sm:space-y-8 px-4">
              {/* Navigation Links */}
              <div className="space-y-4 sm:space-y-6 text-center">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => {
                      setActiveLink(href);
                      setIsMenuOpen(false);
                    }}
                    className={`font-inter text-lg sm:text-2xl font-semibold block ${
                      activeLink === href ? "text-[#FD1640]" : "text-white"
                    } hover:text-[#FD1640] transition-colors`}
                    aria-label={label}
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Connect Wallet Button */}
              <button className="w-40 sm:w-48 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-sm sm:text-base p-2 sm:p-3 rounded-lg hover:shadow-lg transition-shadow">
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
