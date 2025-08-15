import React, { useEffect, useRef } from "react";
import "../App.css";

export function AboutMe() {
    const headingRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
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
        if (headingRef.current) observer.observe(headingRef.current);
        if (contentRef.current) observer.observe(contentRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="about" className="ml-[40px] mr-[40px] flex flex-col md:flex-row items-center justify-center text-center text-black dark:text-[#bbb0bc] mb-[100px]">
            
            {/* Heading */}
            <div ref={headingRef} className="text-3xl md:text-5xl md:w-2/5 md:ml-[40px] font-semibold font-playfair md:flex md:justify-center md:items-center relative opacity-0 translate-y-8 transition-all duration-700">
            <span className="opacity-0 md:opacity-20 text-6xl md:text-8xl absolute -top-10 -z-0">THIS IS ME</span>
            <span className="relative z-10">About Me</span>
                
            </div>

            {/* Content */}
            <div ref={contentRef} className="relative text-md md:w-3/5 font-playfair md:mt-0 mt-[20px] md:text-left md:pl-[40px] pt-[30px] md:pt-0 opacity-0 translate-y-8 transition-all duration-700 delay-200">
                
                {/* Border Line - switches position with screen size */}
                <div 
                    className="
                        absolute 
                        top-0 left-0
                        w-full h-[3px] 
                        bg-gradient-to-r from-transparent via-[#cec3b3] to-transparent
                        md:w-[4px] md:h-full 
                        md:bg-gradient-to-b md:from-transparent md:via-[#cec3b3] md:to-transparent
                    ">
                </div>

                I'm Tanishka Chowdhry Saxena, an aspiring Software Engineer passionate about creating intelligent and scalable software solutions. With experience in machine learning, full-stack development, and data-driven problem solving, I've worked on projects ranging from real-time gesture recognition to earthquake prediction and interactive web applications.
                
                <br /><br />
                Skilled in Python, C++, Flask, Vue 3, SQL, Pandas, and Scikit-learn, I bring a strong foundation in data structures, algorithms, and system design. As a GDSC Co-Lead and AIML Lead for Google Developer Groups on Campus, I've led workshops for 500+ students and organized large-scale hackathons.
                
                <br /><br />
                When I'm not coding or solving problems on LeetCode, I'm exploring new technologies and building AI-driven projects that make an impact.
            </div>
        </div>
    );
}
