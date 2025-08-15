import React, { useRef, useEffect } from 'react'
import "../App.css"

export function Skills() {
  const headingRef = useRef(null);
  const skillsGridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    if (skillsGridRef.current) observer.observe(skillsGridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="w-[90%] max-w-[80rem] mx-auto mb-[80px]">
      <h1 
        ref={headingRef}
        className="text-4xl font-semibold text-black dark:text-[#bbb0bc] text-center my-8 font-playfair opacity-0 translate-y-8 transition-all duration-700"
      >
        My Skills
      </h1>

      <div 
        ref={skillsGridRef}
        className="flex flex-wrap justify-center opacity-0 translate-y-8 transition-all duration-700 delay-200"
      >
        
    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s1.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>Python </p>
        </div>
      </div>
    </div>


    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s2.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>Java Script </p>
        </div>
      </div>
    </div>


    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s3.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>c/c++ </p>
        </div>
      </div>
    </div>


    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s4.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>HTML </p>
        </div>
      </div>
    </div>


    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s5.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>CSS </p>
        </div>
      </div>
    </div>


    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s6.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>POSTMAN </p>
        </div>
      </div>
    </div>

    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s7.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>Github </p>
        </div>
      </div>
    </div>

    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s8.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>SQL Database </p>
        </div>
      </div>
    </div>

    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s9.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>Linux </p>
        </div>
      </div>
    </div>

    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s10.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>Tailwind CSS </p>
        </div>
      </div>
    </div>

    <div class="w-[calc(15%-2rem)] m-6 ] cursor-pointer col-perspective
                max-lg:w-[calc(33.333%-2rem)]
                max-md:w-[calc(50%-2rem)]
                max-sm:w-[100px]  m-3 max-sm:mb-8">
      <div class="flip-container hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
       
        <div class="front bg-center bg-cover relative rounded-lg shadow-lg bg-[url('/assets/s11.jpeg')]
             hover:shadow-xl transition-shadow duration-300">
          <div class="inner text-center absolute inset-0 flex flex-col items-center justify-center text-white">
          </div>
        </div>
        
        <div class="back absolute inset-0 rounded-lg text-center flex items-center justify-center p-6 text-white hover:shadow-xl transition-shadow duration-300">
          <p>React </p>
        </div>
      </div>
    </div>
    

  </div>
</div>

    
  )
}

