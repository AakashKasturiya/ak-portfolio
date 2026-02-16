import React, { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-10 bg-black backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="/"
            className="animate-pulse text-4xl font-extrabold gradient-text text-transparent bg-clip-text"
          >
            AK
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-white hover:text-primary">Home</a>
            <a href="#about" className="nav-link text-white hover:text-primary">About</a>
            <a
              href="/Aakash-Kasturiya(Resume).pdf"
              className="nav-link text-white hover:text-primary"
              download
            >
              Resume
            </a>
            <a href="#projects" className="nav-link text-white hover:text-primary">Projects</a>
            <a href="#social" className="nav-link text-white hover:text-primary">Social</a>
            <a href="#contact" className="nav-link text-white hover:text-primary">Contact</a>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10"
            onClick={() => setIsMenuOpen(true)}
          >
            <i className="ri-menu-line text-xl text-white"></i>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-95 text-white px-6 py-10 space-y-6 transition-transform duration-300 transform z-50 ${
          isMenuOpen ? 'menu-slide-in' : 'menu-slide-out'
        }`}
        style={{ willChange: 'transform' }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-white z-60 p-2"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>

        {/* Mobile Nav Links */}
        <a href="#home" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" className="block nav-link" onClick={() => setIsMenuOpen(false)}>About</a>
        <a
          href="/Aakash-Kasturiya(Resume).pdf"
          className="block nav-link"
          download
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </a>
        <a href="#projects" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#social" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Social</a>
        <a href="#contact" className="block nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </header>
  );
};
