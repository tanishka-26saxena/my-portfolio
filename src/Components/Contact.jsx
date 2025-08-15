import React, { useRef, useEffect } from "react";

export function Contact() {
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);

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

    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#cec3b3] dark:bg-[#1a1a1a] text-[#f0f0f0] flex flex-col">
      {/* Main container */}
      <div className="relative w-full max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[80vh] gap-8 p-8">
        <div className="absolute inset-0 mt-[40px] h-9/10 w-full bg-[#cec3b3] dark:bg-[#2a2a2a] bg-cover bg-center "></div>
        
        {/* Left: Map & Info */}
        <div className="relative w-full h-full flex flex-col justify-between">
          {/* Contact heading, address and contacts at bottom left */}
          <div 
            ref={contactInfoRef}
            className="relative z-10 text-left p-6 text-black dark:text-white mt-60 opacity-0 translate-y-8 transition-all duration-700"
          >
            <h1 className="text-4xl font-bold mb-4">Let us get in touch !</h1>

            {/* Contacts */}
            <div className="text-black dark:text-white">
              <p className="text-black dark:text-white">
                tanishka26saxena@gmail.com<br />
                +91 99196 33309
              </p>
              <div className="flex items-center gap-4 mt-4 text-black dark:text-white">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-2xl">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://github.com/tanishka-26saxena" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-2xl">
                  <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="mailto:hello@name.com" aria-label="Email" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 text-2xl">
                  <ion-icon name="mail-outline"></ion-icon>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Feedback Form */}
        <div 
          ref={formRef}
          className="relative z-20 bg-white text-gray-900 shadow-lg p-8 w-full max-w-md self-center opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          <h2 className="text-lg font-semibold mb-6">Contact Me</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent text-gray-900 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent text-gray-900 placeholder-gray-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent text-gray-900 placeholder-gray-500"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:outline-none py-2 bg-transparent text-gray-900 placeholder-gray-500"
            ></textarea>

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
