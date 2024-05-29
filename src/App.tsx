import React, { useRef, useEffect, useState } from 'react';
import About from "@components/About";
import Contact from "@components/Contact";
import Work from "@components/Work";
import Home from "@components/Home";
import LocomotiveScroll from 'locomotive-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
import universe from '@assets/universe.png';
import facebook from '@assets/facebook.webp';
import instagram from '@assets/instagram.png';
import github from '@assets/github copy.png';
import Preloader from '@components/Preloader';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<LocomotiveScroll | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Home');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!isLoading) {
      if (containerRef.current) {
        scrollRef.current = new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
        });
      }

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 640);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
      };

      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      const sections = document.querySelectorAll('[data-scroll-section] > div');
      sections.forEach(section => observer.observe(section));

      return () => {
        if (scrollRef.current) {
          scrollRef.current.destroy();
        }
        window.removeEventListener('resize', handleResize);
        observer.disconnect();
      };
    }
  }, [isLoading]);

  const scrollTo = (id: string) => {
    if (scrollRef.current) {
      const target = document.getElementById(id);
      if (target) {
        scrollRef.current.scrollTo(target);
        setIsMenuOpen(false);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div data-scroll-container ref={containerRef} className='h-[110em] bg-[#e7e7e7]'>
      <div data-scroll-section>
        <nav id="navbar" className='opacity-100 z-50 text-[#25274a] font-serif'>
          <div className="nav-content flex justify-between items-center h-[3.5em] font-extrabold lg:text-[1.5em] md:text-[1.2em] text-[1em] lg:px-20 md:px-16 px-7 bg-[#e7e7e7] font-darumadrop">
            <div>
              <a onClick={() => scrollTo("Home")} className="cursor-pointer"><img src={universe} alt="Logo" className='w-[2em] h-auto' /></a>
            </div>
            {isSmallScreen ? (
              <div className="relative text-[#fff]">
                <button
                  className="hamburger p-2 focus:outline-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <GiHamburgerMenu className='text-[#25274a]' />
                </button>
                <div
                  className={`fixed top-0 right-0 h-full w-[45%] bg-[#2b2e5b] shadow-xl z-50 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                  <div className="p-4 flex flex-col space-y-4">
                    <button
                      className="hamburger p-2 focus:outline-none"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      <FaArrowLeft />
                    </button>
                    <a
                      onClick={() => scrollTo("Work")}
                      className={`cursor-pointer hover:text-[#9da2de] active:text-[#bcc1f1] ${activeSection === 'Work' ? 'text-[#fff]' : ''}`}
                    >work</a>
                    <a
                      onClick={() => scrollTo("About")}
                      className={`cursor-pointer hover:text-[#9da2de] active:text-[#bcc1f1] ${activeSection === 'About' ? 'text-[#fff]' : ''}`}
                    >about</a>
                    <a
                      onClick={() => scrollTo("Contact")}
                      className={`cursor-pointer hover:text-[#9da2de] active:text-[#bcc1f1] ${activeSection === 'Contact' ? 'text-[#fff]' : ''}`}
                    >Contact</a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="links flex lg:gap-20 md:gap-10 gap-10 items-center select-none">
                <a
                  onClick={() => scrollTo("Work")}
                  className={`cursor-pointer flex items-center gap-1 hover:text-[#9da2de] hover:underline hover:underline-offset-4 active:text-[#bcc1f1] ${activeSection === 'Work' ? 'text-[#fff]' : ''}`}
                >
                  work</a>
                <a
                  onClick={() => scrollTo("About")}
                  className={`cursor-pointer flex items-center gap-1 hover:text-[#9da2de] hover:underline hover:underline-offset-4 active:text-[#bcc1f1] ${activeSection === 'About' ? 'text-[#fff]' : ''}`}
                >
                  about</a>
                <a
                  onClick={() => scrollTo("Contact")}
                  className={`cursor-pointer flex items-center gap-1 hover:text-[#9da2de] hover:underline hover:underline-offset-4 active:text-[#bcc1f1] ${activeSection === 'Contact' ? 'text-[#fff]' : ''}`}
                >
                  Contact</a>
                <div className='flex gap-7 items-center'>
                  <a href="https://www.instagram.com/chloe.jmy/" target="_blank" ><img src={instagram} alt="ig logo" className='w-7 h-auto' /></a>
                  <a href="https://github.com/ChloeUchi" target="_blank"><img src={github} alt="github logo" className='w-7 h-auto' /></a>
                  <a href="https://www.facebook.com/chonthichahinthao/" target="_blank"><img src={facebook} alt="facebook logo" className='w-12 h-auto' /></a>
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="content p-0 m-0">
          <div className="about-container" id="Home">
            <Home />
          </div>
          <div className="work-container" id="Work">
            <Work />
          </div>
          <div className="about-container" id="About">
            <About />
          </div>
          <div className="contact-container" id="Contact">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
