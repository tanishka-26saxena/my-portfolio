import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export function Certificates() {
  const team = [
    { id: 1, name: "AWS Academy Graduate", role: "AWS Academy Cloud Foundations", img: "/assets/c1.png" },
    { id: 2, name: "Infosys Springboard", role: "Object Oriented Programming using Python", img: "/assets/c2.png" },
    { id: 3, name: "Infosys Springboard", role: "Data Structures and Algorithms using Python", img: "/assets/c3.png" },
    { id: 4, name: "Indian Institute of Technology and Managment", role: "Diploma in Programming", img: "/assets/c4.jpg" },
    { id: 5, name: "Indian Institute of Technology and Managment", role: "Diploma in Data Science", img: "/assets/c5.jpg" },
  ];

  const [active, setActive] = useState(0);
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
    <div id="certificates" className="h-screen ml-[40px] mb-[100px] mr-[40px] dark:text-[#bbb0bc] flex flex-col md:flex-row-reverse items-center justify-center">
      {/* Heading */}
      <div ref={headingRef} className="text-3xl md:text-5xl md:w-2/5 md:ml-[40px] font-semibold font-playfair md:flex md:justify-center md:items-center relative opacity-0 translate-y-8 transition-all duration-700">
            <span className="opacity-0 md:opacity-20 text-6xl md:text-8xl absolute -top-10 -z-0">MY WINS</span>
            <span className="relative z-10">Certificates and Achievements</span>
                
            </div>

      {/* Right section */}
      <div ref={contentRef} className="relative text-md md:w-3/5 font-playfair md:mt-0 mt-[20px] md:text-left md:pr-[40px] pt-[30px] md:pt-0 opacity-0 translate-y-8 transition-all duration-700 delay-200">

        {/* Border line */}
        <div className="
          absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#cec3b3] to-transparent
          md:top-0 md:right-0 md:left-auto md:w-[4px] md:h-full md:bg-gradient-to-b md:from-transparent md:via-[#cec3b3] md:to-transparent
        " />

        {/* Slider */}
        <div className="group mt-[40px] relative overflow-visible">
          {/* arrows */}
          <button
            className="cert-prev absolute -left-6 top-1/2 -translate-y-1/2 bg-[#6d7ea6] text-white w-10 h-10 rounded-full shadow-lg z-20 grid place-items-center md:opacity-0 md:group-hover:opacity-100 transition"
            aria-label="Previous"
          >
            ❮
          </button>
          <button
            className="cert-next absolute -right-6 top-1/2 -translate-y-1/2 bg-[#6d7ea6] text-white w-10 h-10 rounded-full shadow-lg z-20 grid place-items-center md:opacity-0 md:group-hover:opacity-100 transition"
            aria-label="Next"
          >
            ❯
          </button>

          <Swiper
  modules={[Navigation, Pagination, EffectCoverflow]}
  loop
  centeredSlides
  spaceBetween={20}
  effect="coverflow"
  coverflowEffect={{
    rotate: 0,
    stretch: -20,
    depth: 160,
    modifier: 1.4,
    slideShadows: false,
  }}
  navigation={{ nextEl: ".cert-next", prevEl: ".cert-prev" }}
  pagination={{ el: ".cert-pagination", clickable: true }}
  onSwiper={(sw) => setActive(sw.realIndex)}
  onSlideChange={(sw) => setActive(sw.realIndex)}
  className="overflow-visible"
  breakpoints={{
    320: { slidesPerView: 1.2, spaceBetween: 10 }, // phones
    640: { slidesPerView: 2, spaceBetween: 15 },   // small tablets
    1024: { slidesPerView: 'auto', spaceBetween: 20 } // desktop
  }}
>
  {team.map((m) => (
    <SwiperSlide
      key={m.id}
      className="!w-[70%] sm:!w-[240px] md:!w-[280px] overflow-visible"
    >
      <div className="rounded-2xl shadow-xl bg-white p-3 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
        <img
          src={m.img}
          alt={m.name}
          className="w-full h-[280px] md:h-[320px] object-cover rounded-xl"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

         
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="h-[2px] w-10 bg-[#6d7ea6]/40" />
              <h3 className="text-lg md:text-xl font-semibold">{team[active]?.name}</h3>
              <div className="h-[2px] w-10 bg-[#6d7ea6]/40" />
            </div>
            <p className="text-xs tracking-[0.25em] text-gray-500 uppercase">{team[active]?.role}</p>

            <div className="cert-pagination mt-4 flex justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
