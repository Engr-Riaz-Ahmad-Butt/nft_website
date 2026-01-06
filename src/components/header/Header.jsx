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
    <header className="relative w-full bg-gradient-to-b from-black to-transparent via-transparent py-3 sm:py-4">
      <div className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-8">
        <div className="w-full flex justify-between items-center">
          <div className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-contain bg-no-repeat flex-shrink-0">
            <img src={Logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex items-center space-x-2 sm:space-x-6">
            {/* Hamburger menu */}
            <button
              className="lg:hidden text-white text-lg xs:text-xl sm:text-2xl p-1 hover:bg-white hover:bg-opacity-10 rounded transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span>{isMenuOpen ? "✕" : "☰"}</span>
            </button>

            {/* Navigation Links (only visible on large screens) */}
            <nav className="hidden lg:flex space-x-2 xl:space-x-6 py-2">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setActiveLink(href)}
                  className={`font-inter text-xs xl:text-base font-semibold ${
                    activeLink === href ? "text-[#FD1640]" : "text-white"
                  } hover:text-[#FD1640] transition-colors`}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </nav>
            {/* Connect Wallet Button */}
            <button className="hidden lg:block w-36 xl:w-52 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-xs xl:text-lg p-2 xl:p-3 rounded-lg hover:shadow-lg transition-shadow whitespace-nowrap">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Mobile Menu - shown when isMenuOpen is true */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 w-full h-full z-40 bg-black bg-opacity-95 overflow-hidden">
            {/* Close Button */}
            <div className="flex justify-end p-2 xs:p-3 sm:p-4">
              <button
                className="text-white text-lg xs:text-2xl sm:text-3xl w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:bg-white hover:bg-opacity-10 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Menu Content */}
            <div className="h-[calc(100vh-60px)] flex flex-col items-center justify-center space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 px-3 xs:px-4 sm:px-6">
              {/* Navigation Links */}
              <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-center">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => {
                      setActiveLink(href);
                      setIsMenuOpen(false);
                    }}
                    className={`font-inter text-base xs:text-lg sm:text-2xl font-semibold block ${
                      activeLink === href ? "text-[#FD1640]" : "text-white"
                    } hover:text-[#FD1640] transition-colors`}
                    aria-label={label}
                  >
                    {label}
                  </a>
                ))}
              </div>

              {/* Connect Wallet Button */}
              <button className="w-36 xs:w-40 sm:w-48 bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white text-xs xs:text-sm sm:text-base p-2 sm:p-3 rounded-lg hover:shadow-lg transition-shadow whitespace-nowrap">
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
