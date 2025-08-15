import React, { useEffect, useRef } from 'react'
import "../App.css"

export const Cards = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

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
    if (card1Ref.current) observer.observe(card1Ref.current);
    if (card2Ref.current) observer.observe(card2Ref.current);
    if (card3Ref.current) observer.observe(card3Ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

 return (
 <div className='ml-[40px] mr-[40px] mt-[100px]'>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-[100px]">
   <div className='relative opacity-0 translate-y-8 transition-all duration-700' ref={card1Ref}> 
     <div className='rounded-lg bg-[#cec3b3] dark:bg-white/20 p-3 hover:scale-105 hover:shadow-xl transition-all duration-300'>
       <h3 className="text-xl font-semibold text-black dark:text-white ">Graduation</h3>
       <h2 className='text-md font-semibold font-playfair text-black dark:text-white'>B.Tech. in Artificial Intelligence and <br />Machine Learning</h2>
       <h1 className='text-md font-semibold font-playfair text-black dark:text-white'>Institute of technology and Management</h1>
       <p className='text-black dark:text-white text-sm'>C.G.P.A - 8.3</p>
     </div>
     <img src="assets/itm.jpeg"
       className="absolute top-[-25px] right-[-25px] h-[80px] w-[80px] rounded-full object-cover border-2 border-white dark:border-gray-800" alt="" />
   </div>
   <div className='relative opacity-0 translate-y-8 transition-all duration-700 delay-200' ref={card2Ref}> 
     <div className='rounded-lg bg-[#cec3b3] dark:bg-white/20 p-3 hover:scale-105 hover:shadow-xl transition-all duration-300'>
       <h3 className="text-xl font-semibold text-black dark:text-white ">Diploma</h3>
       <h2 className='text-md font-semibold font-playfair text-black dark:text-white'>Diploma in Programing</h2>
       <h1 className='text-md font-semibold font-playfair text-black dark:text-white'>Indian Institute of technology, <br/>Madras</h1>
       <p className='text-black dark:text-white text-sm'>C.G.P.A - 8.3</p>
     </div>
     <img src="assets/iit.png"
       className="absolute top-[-25px] right-[-25px] h-[80px] w-[80px] rounded-full object-cover border-2 border-white dark:border-gray-800" alt="" />
   </div>
  <div className='relative opacity-0 translate-y-8 transition-all duration-700 delay-400' ref={card3Ref}> 
     <div className='rounded-lg bg-[#cec3b3] dark:bg-white/20 p-3 hover:scale-105 hover:shadow-xl transition-all duration-300'>
       <h3 className="text-xl font-semibold text-black dark:text-white ">Diploma</h3>
       <h2 className='text-md font-semibold font-playfair text-black dark:text-white'>Diploma in Data Science</h2>
       <h1 className='text-md font-semibold font-playfair text-black dark:text-white'>Indian Institute of technology, <br/> Madras</h1>
       <p className='text-black dark:text-white text-sm'>C.G.P.A - 8.3</p>
     </div>
     <img src="assets/iit.png"
       className="absolute top-[-25px] right-[-25px] h-[80px] w-[80px] rounded-full object-cover border-2 border-white dark:border-gray-800" alt="" />
   </div>


 </div>
 </div>

 )
}