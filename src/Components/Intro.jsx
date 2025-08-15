import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../App.css";
import DarkMode from "./DarkMode.jsx";

export const Intro = () => {
  const dotRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "<span class='font-monte'> Full Stack</span><br><span class='font-playfair italic '>Developer</span>",
        "<span class='font-monte'> UI/UX</span><br><span class='font-playfair italic'>Designer</span>",
        "<span class='font-monte'>n AIML</span><br> <span class='font-playfair italic'>Enthusiast</span>",
        "<span class='font-monte'> DS</span><br><span class='font-playfair italic'>Student</span>"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    const OFFSET_X = 30;
    const OFFSET_Y = 15;
    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX + OFFSET_X}px`;
        dotRef.current.style.top = `${e.clientY + OFFSET_Y}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    // Observe elements for animation
    if (titleRef.current) observer.observe(titleRef.current);
    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      typed.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="intro" className="relative flex flex-col">
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-4">
        <div className="flex items-center ml-[40px] gap-3">
          <div className="text-black text-xl font-impact dark:text-[#bbb0bc]">PORTFOLIO</div>
          <div
            ref={dotRef}
            className="h-[10px] w-[10px] bg-black rounded-full pointer-events-none "
            style={{ transition: "all 0.3s ease", pointerEvents: "none", transform: "translate(-50%, -50%)", position: "fixed", left: "50px", top: "45px", zIndex: 50 }}
          />
        </div>
        <div className="flex items-center gap-3 mr-[40px]">
          <DarkMode />
          <div className="relative group">
                         <button className="text-white w-[110px] h-[40px] bg-black px-4 py-2 rounded-[20px] dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300 flex flex-row justify-center items-center">
              <div className="text-white dark:text-gray-800 text-[11px] hover:text-white w-3/4 text-[15px] flex font-babas font-bold">MENU </div>
              <img className="h-[12px] w-[12px] w-1/4" src="public/assets/main-menu.png" alt="" />
            </button>
            <ul className="absolute right-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-md overflow-hidden">
              <li><a href="#intro" className="block px-4 py-2 hover:bg-gray-100 text-black">Home</a></li>
              <li><a href="#about" className="block px-4 py-2 hover:bg-gray-100 text-black">About</a></li>
              <li><a href="#skills" className="block px-4 py-2 hover:bg-gray-100 text-black">Skills</a></li>
              <li><a href="#projects" className="block px-4 py-2 hover:bg-gray-100 text-black">Projects</a></li>
              <li><a href="#certificates" className="block px-4 py-2 hover:bg-gray-100 text-black">Certificates</a></li>
              <li><a href="#contact" className="block px-4 py-2 hover:bg-gray-100 text-black">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#f0f0f0] dark:bg-[#131313]">
        <div className="flex flex-col ml-[40px] mr-[40px] items-center justify-center md:flex-row md:items-start md:justify-start md:w-4/5 md:px-[10px] md:mr-[50px]">
          <div className="flex flex-col mt-[90px]">
            <div className="text-[1.5rem] text-center dark:text-[#bbb0bc] md:text-left font-playfair opacity-0 translate-y-8 transition-all duration-700" ref={titleRef}>Hey. I'm Tanishka.</div>
            <div className="text-[2.5rem] text-center dark:text-[#bbb0bc] md:text-left md:text-[4rem] font-monte md:mb-[20px] h-[160px] overflow-hidden leading-tight font-bold opacity-0 translate-y-8 transition-all duration-700 delay-200" ref={descriptionRef}>
              A<span className="auto-type text-black dark:text-[#bbb0bc] font-bold"></span>
            </div>
            <div className="font-playfair text-center text-black dark:text-[#bbb0bc] md:text-left text-[1.2rem] mt-[5px] mb-[30px] leading-[30px] opacity-0 translate-y-8 transition-all duration-700 delay-400" ref={paragraphRef}>
            I’m Tanishka Chowdhry Saxena, an aspiring software engineer passionate about crafting intelligent, scalable, and user-friendly digital solutions. 
            </div>
            <div className="flex items-center justify-center md:items-start md:justify-start opacity-0 translate-y-8 transition-all duration-700 delay-600" ref={buttonRef}>
              <button className="flex flex-row w-[120px] h-[40px] rounded-[20px] items-center justify-center bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer transition-colors duration-300 ease-in-out ">
                <div className="text-white dark:text-black text-[11px] hover:text-white w-3/4 text-[15px] flex items-center justify-center font-babas font-bold">RESUME</div>
                <div className="h-[25px] w-[25px] rounded-full bg-white   mr-[10px] items-center justify-center flex">
                  <img className="h-[10px] w-[10px] " src="public/assets/next.png" alt="" />
                </div>
              </button>
            </div>
          </div>

          <img
            src="/assets/me.jpg"
            className="mt-[50px] w-[300px] md:mt-[0px] md:w-[450px] md:h-[550px]  object-cover rounded-t-[200px] md:rounded-t-[0px] rounded-b-[200px] opacity-5 animate-fadeIn animate-delay-700"
            alt="Me"
          />
        </div>
        <div className="flex flex-row items-center justify-center w-full mb-[100px] mt-[20px] md:flex-col md:items-end md:justify-end md:w-1/4 md:mr-[40px] md:mt-[80px] p-[20px] opacity-0 translate-y-8 transition-all duration-700 delay-800" ref={statsRef}>          
          <div className="flex h-[80px] w-[120px] md:w-fit flex-col padding-[10px]" >
            <span className="flex items-center justify-center md:justify-end text-[2rem] dark:text-[#bbb0bc] font-monte font-bold ">4+</span>
            <span className="flex items-center justify-center md:justify-end font-playfair text-[1rem] text-gray-500 text-center md:text-right">Projects Completed</span>
        </div>
      
        <div className="flex h-[80px] w-[120px] md:w-fit flex-col padding-[10px]" >
            <span className="flex items-center justify-center md:justify-end text-[2rem] dark:text-[#bbb0bc] font-monte font-bold ">2</span>
            <span className="flex items-center justify-center md:justify-end font-playfair text-[1rem] text-gray-500 text-center md:text-right">Internships Completed</span>
        </div>
        
        <div className="flex h-[80px] w-[120px] md:w-fit flex-col padding-[10px]" >
            <span className="flex items-center justify-center md:justify-end text-[2rem] dark:text-[#bbb0bc] font-monte font-bold ">10+</span>
            <span className="flex items-center justify-center md:justify-end font-playfair text-[1rem] text-gray-500 text-center md:text-right">Technologies Used</span>
        </div>
        
        <div className="flex h-[80px] w-[120px] md:w-fit flex-col padding-[10px]" >
            <span className="flex items-center justify-center md:justify-end text-[2rem] dark:text-[#bbb0bc] font-monte font-bold ">300+</span>
            <span className="flex items-center justify-center md:justify-end font-playfair text-[1rem] text-gray-500 text-center md:text-right">DSA Problems</span>
        </div>

        </div>
      </div>
    </div>
  );
};