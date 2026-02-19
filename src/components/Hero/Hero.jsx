import { useEffect, useRef } from "react";
import "./Hero.css";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import profile from "../../assets/hero/hero.png";
import BgVideo from "../../assets/hero/bg-video.mp4";
import { getExperienceYears } from "../../utils/experience";

export const Hero = () => {
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
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-32 md:pt-20 "
    >
      {/* <div className="absolute inset-0 z-0">
        <div
          style={{
            backgroundImage:
              "url('https://readdy.ai/api/search-image?query=futuristic%2520space%2520background%2520with%2520stars%2520and%2520nebula%252C%2520deep%2520space%2520with%2520subtle%2520purple%2520and%2520blue%2520cosmic%2520clouds%252C%2520high%2520quality%2520digital%2520art%252C%2520dark%2520theme%252C%2520perfect%2520for%2520website%2520background&width=1920&height=1080&seq=1&orientation=landscape')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-40"
        ></div>
      </div> */}

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={BgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
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
            experiences, <br></br>I transform complex problems into elegant,
            intuitive interfaces. Passionate about clean code, performance
            optimization, and staying at the cutting edge of frontend
            development.
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
              className="px-6 py-3 bg-transparent border-button text-primary hover:bg-[#6B4BFF] hover:bg-opacity-10 font-medium rounded-md whitespace-nowrap"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center float-animation">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow">
              <img
                src={profile}
                alt="Aakash Kasturiya"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-black bg-opacity-70 px-4 py-2 !rounded-button glow-border">
              <span className="text-sm font-medium">{experienceYears}+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block z-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 scroll-down-animation">
        <a
          href="#projects"
          className="flex flex-col items-center gradient-text"
        >
          <span className="text-lg mb-2">Scroll Down</span>
          <i className="ri-arrow-down-line text-xl"></i>
        </a>
      </div>
    </section>
  );
};
