import React, { useEffect, useRef } from 'react';
import "../App.css";

export function Projects() {
  const sliderRef = useRef(null);
  const headingRef = useRef(null);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    function activate(e) {
      const items = slider.querySelectorAll('.item');
      if (e.target.matches('.next')) {
        slider.append(items[0]);
      }
      if (e.target.matches('.prev')) {
        slider.prepend(items[items.length - 1]);
      }
    }

    document.addEventListener('click', activate, false);

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
    if (sliderContainerRef.current) observer.observe(sliderContainerRef.current);

    // Cleanup event listener and observer on unmount
    return () => {
      document.removeEventListener('click', activate, false);
      observer.disconnect();
    };
  }, []);

  return (
    <div className='h-screen'> 
      <div ref={headingRef} className='text-center text-3xl md:text-5xl font-semibold text-black dark:text-[#bbb0bc] font-playfair opacity-0 translate-y-8 transition-all duration-700'>Projects</div>
    <div ref={sliderContainerRef} className="h-[550px] grid place-items-center overflow-hidden opacity-0 translate-y-8 transition-all duration-700 delay-200">
    <div className="relative w-full h-3/4 shadow-[0_3px_10px_rgba(0,0,0,0.3)] p-4 rounded-lg ">
      <ul className="slider" ref={sliderRef}>
        <li className="item bg-[url('/assets/p1.png')] w-[200px] h-[300px] list-none absolute top-1/2 -translate-y-1/2 z-[1] 
             bg-center bg-cover rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)]
             transition-[transform,left,top,width,height] duration-[750ms] ease-in-out">
          <div className='content w-[min(30vw,400px)] absolute top-1/2 left-12 -translate-y-1/2 
            font-[400] text-[0.85rem] font-sans text-white 
            [text-shadow:0_3px_8px_rgba(0,0,0,0.5)] opacity-0 hidden '>
            <h2 className="title font-[arial-black] uppercase">"E-Library Management System"</h2>
            <p className="description leading-[1.7] my-4 mb-6 text-[0.8rem]">Developed comprehensive online library system with responsive UI, user authentication, book management, and advanced search functionality.elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="flex gap-3">
              <button onClick={() => window.open("https://e-library-p6zk.onrender.com/", "_blank")}
               className="w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-white rounded 
                   p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">View Live</button>
              <button onClick={() => window.open("https://github.com/tanishka-26saxena/E-library", "_blank")}
                   className="w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-white rounded 
                   p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">Github link</button>
            </div>
          </div>
        </li>
        <li className="item bg-[url('public/assets/p3.jpeg')] w-[200px] h-[300px] list-none absolute top-1/2 -translate-y-1/2 z-[1] 
             bg-center bg-cover rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)]
             transition-[transform,left,top,width,height] duration-[750ms] ease-in-out">
          <div className='content w-[min(30vw,400px)] absolute top-1/2 left-12 -translate-y-1/2 
            font-[400] text-[0.85rem] font-sans text-white 
            [text-shadow:0_3px_8px_rgba(0,0,0,0.5)] opacity-0 hidden '>
            <h2 className="title font-[arial-black] uppercase">"System Threat Forecasting"</h2>
            <p className="description leading-[1.7] my-4 mb-6 text-[0.8rem]">Built ML model detecting infections with 62% accuracy, achieved top 20% in Kaggle competition. Implements advanced feature engineering and ensemble methods.</p>
            <div className="flex gap-3">
              <button onClick={() => window.open("https://github.com/tanishka-26saxena/Spam-Threat-Detection", "_blank")}
                className="w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-white rounded 
                   p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">Github link</button>
            </div>
          </div>
        </li>
        <li className="item bg-[url('public/assets/p2.jpeg')] w-[200px] h-[300px] list-none absolute top-1/2 -translate-y-1/2 z-[1] 
             bg-center bg-cover rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)]
             transition-[transform,left,top,width,height] duration-[750ms] ease-in-out">
          <div className='content w-[min(30vw,400px)] absolute top-1/2 left-12 -translate-y-1/2 
            font-[400] text-[0.85rem] font-sans text-white 
            [text-shadow:0_3px_8px_rgba(0,0,0,0.5)] opacity-0 hidden '>
            <h2 className="title font-[arial-black] uppercase">"Quiz Master App"</h2>
            <p className="description leading-[1.7] my-4 mb-6 text-[0.8rem]">Real-time quiz app with role-based modules and automated reports. Features live scoring, user management, and comprehensive analytics dashboard.</p>
            <div className="flex gap-3">
              <button className="w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-white rounded 
                   p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">View Live</button>
              <button onClick={() => window.open("https://github.com/tanishka-26saxena/22f3003208", "_blank")}
                   className="w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-white rounded 
                   p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">Github link</button>
            </div>
          </div>
        </li>
        <li className="item bg-[url('public/assets/p4.jpeg')] w-[200px] h-[300px] list-none absolute top-1/2 -translate-y-1/2 z-[1] 
             bg-center bg-cover rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)]
             transition-[transform,left,top,width,height] duration-[750ms] ease-in-out">
          <div className='content w-[min(30vw,400px)] absolute top-1/2 left-12 -translate-y-1/2 
            font-[400] text-[0.85rem] font-sans text-white 
            [text-shadow:0_3px_8px_rgba(0,0,0,0.5)] opacity-0 hidden '>
            <h2 className="title font-[arial-black] uppercase">"Sales & Stock Optimization"</h2>
            <p className="description leading-[1.7] my-4 mb-6 text-[0.8rem]">Optimized stock management system improving turnover by 18% and reducing wastage by 25%. Implemented predictive analytics for inventory forecasting and demand planning. Developed comprehensive reporting dashboards and automated alerts for stock levels.</p>
          </div>
        </li>
        <li className="item bg-[url('public/assets/p5.jpeg')] w-[200px] h-[300px] list-none absolute top-1/2 -translate-y-1/2 z-[1] 
             bg-center bg-cover rounded-[20px] shadow-[inset_0_20px_30px_rgba(255,255,255,0.3)]
             transition-[transform,left,top,width,height] duration-[750ms] ease-in-out">
          <div className='content w-[min(30vw,400px)] absolute top-1/2 left-12 -translate-y-1/2 
            font-[400] text-[0.85rem] font-sans text-white 
            [text-shadow:0_3px_8px_rgba(0,0,0,0.5)] opacity-0 hidden '>
            <h2 className="title font-[arial-black] uppercase">"Object Detection model"</h2>
            <p className="description leading-[1.7] my-4 mb-6 text-[0.8rem]">Developed a real-time object detection system using the YOLO model to accurately identify and localize multiple objects in images and videos.</p>
            <div className="flex gap-3">
              <button 
               className="w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-white rounded 
                   p-3 cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-colors duration-300">Github link</button>
            </div>
          </div>
        </li>
        
        
      </ul>
      <nav className="nav absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] select-none flex">
        <ion-icon className="btn prev bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] 
           border-2 border-[rgba(0,0,0,0.6)] mx-1 p-3 rounded-full cursor-pointer 
           hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-300 hover:scale-105" name="arrow-back-outline"></ion-icon>
        <ion-icon className="btn next bg-[rgba(255,255,255,0.5)] text-[rgba(0,0,0,0.7)] 
           border-2 border-[rgba(0,0,0,0.6)] mx-1 p-3 rounded-full cursor-pointer 
           hover:bg-[rgba(255,255,255,0.3)] transition-colors duration-300 hover:scale-105" name="arrow-forward-outline"></ion-icon>
        </nav>
    </div>
    </div>
    </div>
  )
}
