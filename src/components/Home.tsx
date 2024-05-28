import React, { useEffect, useRef, useState } from "react";
import rocket from '@assets/rocket.webp';
import { motion, useScroll, useTransform } from "framer-motion";
import './Style.Home.css';
import fullBg from '@assets/image-full.png'
import bottomBg from '@assets/image-bottom.png'
import img1 from '@assets/1.png'
import { gsap } from 'gsap';
import { TypeAnimation } from "react-type-animation";


const Home: React.FC = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const handleMouseMove = (event: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;

    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;

    setOffsetX(xPos);
    setOffsetY(yPos);


  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    gsap.to(".animated-image", {
      // y: 20,
      x: 10,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);
  useEffect(() => {
    gsap.to(".animated-rocket", {
      y: 20,
      // x: 10,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <div ref={ref} className="bg-[#5e628f] lg:h-screen md:h-screen h-[600px] overflow-hidden relative grid place-items-center"
    //  style={{ clipPath }}
    >
      <div className="content"
        style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
      >
        <div className="relative px-16 pb-10 w-fit m-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            className="lg:text-[7em] md:text-[4.8em] text-[2em] font-extrabold drop-shadow-custom font-titan bg-gradient-to-r from-[#cbd0f7] via-[#f6b1f7] to-[#fac3c6] text-transparent bg-clip-text"
          >
            Hi, <br /> I'm CHLOE
          </motion.div>
          <motion.div className="lg:text-[2.2em] md:text-[1.6em] text-[0.6em] font-darumadrop text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }}
            style={{ y: textY }}

          >
            <TypeAnimation
              sequence={[
                'hello guy!!', // Types 'One'
                2000, // Waits 1s
                'Front-End Developer portfolio', // Deletes 'One' and types 'Two'
                5000, // Waits 2s

              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{ y: textY }}
        className="relative z-10"
      >
        <img src={rocket} alt="Rocket" className="drop-shadow-customimg lg:w-[33%] h-auto md:w-[66%] w-[75%] m-auto relative lg:bottom-32 bottom-28 md:bottom-80 animated-rocket"
          style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }} />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${fullBg})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(${bottomBg})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />

      <div
        className="parallax-item2 item-2 flex justify-around absolute top-0 md:top-2 md:-right-7 lg:right-20 lg:top-10 -right-10 rotate-45 z-30"
        style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
      >
        <img src={img1} alt="img" className="drop-shadow-customimg w-[15em] md:w-[35em] h-auto animated-image" />
      </div>
    </div>
  );
};

export default Home;
