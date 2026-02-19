// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { useEffect, useRef } from 'react';
import "./Hero/Hero.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import profile from "../assets/hero/hero.png";
import { getExperienceYears } from "../utils/experience";

const SpaceShip = () => {
  const typingRef = useRef(null);
  const experienceYears = getExperienceYears();
  
    useEffect(() => {
      const typingText = typingRef.current;
      const phrases = [
        "Frontend Developer",
        "React Specialist",
        "Tech Influencer",
        "YouTube Content Creator",
      ];
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
  
      function typeText() {
        const currentPhrase = phrases[phraseIndex];
  
        if (isDeleting) {
          typingText.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          typingText.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }
  
        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          typingSpeed = 1000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          typingSpeed = 500; // Pause before typing next phrase
        }
  
        setTimeout(typeText, typingSpeed);
      }
  
      typeText();
    }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 relative overflow-hidden">
      {/* Stars Background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-6 h-screen flex items-center relative z-10">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-white space-y-6">
                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
                     <span className="block">Hello, I'm</span>
                     <span className="gradient-text block">Aakash Kasturiya</span>
                   </h1>
         
                   <div className="h-8 mb-6">
                     <span ref={typingRef} className="text-xl"></span>
                     <span className="typing-cursor">|</span>
                   </div>
         
                   <p className="text-gray-300 mb-8 text-lg">
                     With over {experienceYears}+ years of experience crafting exceptional web
                     experiences, I transform complex problems into elegant, intuitive
                     interfaces. Passionate about clean code, performance optimization,
                     and staying at the cutting edge of frontend development.
                   </p>
         
                   <div className="flex space-x-4 mb-8">
                     <a
                       href="https://www.linkedin.com/in/aakash-kasturiya/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-white rounded-md "
                     >
                       <TiSocialLinkedin className="text-3xl text-[#6B4BFF]" />
                     </a>
                     <a
                       href="https://www.youtube.com/@aakashkasturiyavlogs"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-white rounded-md"
                     >
                       <TiSocialYoutube className="text-3xl text-[#6B4BFF]" />
                     </a>
                     <a
                       href="https://github.com/AakashKasturiya"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="social-icon w-12 h-12 flex items-center justify-center bg-opacity-20 bg-white rounded-md"
                     >
                       <TiSocialGithub className="text-3xl text-[#6B4BFF]" />
                     </a>
                   </div>
         
                   <div className="flex space-x-4">
                     <a
                       href="/Aakash_Kasturiya_(Frontend-Developer).pdf"
                       className="px-6 py-3 bg-[#6B4BFF] hover:bg-opacity-800 text-white font-medium rounded-md whitespace-nowrap"
                       download
                     >
                       Resume Download
                     </a>
                     <a
                       href="#contact"
                       className="px-6 py-3 bg-transparent border border-primary text-primary hover:bg-[#6B4BFF] hover:bg-opacity-10 font-medium rounded-md whitespace-nowrap"
                     >
                       Contact Me
                     </a>
                   </div>
          </div>

          {/* Floating Technologies */}
          <div className="md:w-1/2 relative h-[600px]">
                <div className="absoulte">
                      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow">
                        <img
                          src={profile}
                          alt="James Wilson"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-black bg-opacity-70 px-4 py-2 !rounded-button glow-border">
                        <span className="text-sm font-medium">{experienceYears}+ Years Experience</span>
                      </div>
                    </div>
            {/* HTML Planet */}
            <div className="absolute top-0 right-0 planet-orbit">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <i className="fab fa-html5 text-3xl"></i>
              </div>
            </div>

            {/* CSS Planet */}
            <div className="absolute top-1/4 right-1/4 planet-orbit-reverse">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <i className="fab fa-css3-alt text-2xl"></i>
              </div>
            </div>

            {/* JavaScript Planet */}
            <div className="absolute bottom-1/4 right-1/3 planet-orbit">
              <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <i className="fab fa-js text-4xl"></i>
              </div>
            </div>

            {/* React Planet */}
            <div className="absolute bottom-1/3 right-1/4 planet-orbit-reverse">
              <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <i className="fab fa-react text-3xl"></i>
              </div>
            </div>

            {/* Node Planet */}
            <div className="absolute bottom-0 right-0 planet-orbit">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white cursor-pointer transform hover:scale-110 transition-transform duration-300">
                <i className="fab fa-node-js text-2xl"></i>
              </div>
            </div>

            {/* Spaceship */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 spaceship-hover">
              <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                <i className="fas fa-user-astronaut text-6xl text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stars {
          background: transparent url('https://readdy.ai/api/search-image?query=beautiful%20starry%20night%20sky%20with%20twinkling%20stars%2C%20deep%20space%20background%2C%20high%20resolution%2C%20digital%20art&width=1920&height=1080&seq=1&orientation=landscape') repeat;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          animation: twinkle 200s linear infinite;
        }

        @keyframes twinkle {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -10000px 5000px;
          }
        }

        .planet-orbit {
          animation: orbit 20s linear infinite;
        }

        .planet-orbit-reverse {
          animation: orbit 25s linear infinite reverse;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
          }
        }

        .spaceship-hover {
          animation: hover 3s ease-in-out infinite;
        }

        @keyframes hover {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
}

export default SpaceShip;
