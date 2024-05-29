import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Style.About.css';
// import stingray from '@assets/stingray.webp';
import img2 from '@assets/2.png';
import img3 from '@assets/3.png';
// import sun from '@assets/4.png';
import { motion } from 'framer-motion';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';
import { RiJavascriptFill } from "react-icons/ri";
import svg2 from '@assets/2.svg'
import svg3 from '@assets/3.svg'
import svg4 from '@assets/4.svg'
import tailwindIcon from '@assets/tailwind-css-svgrepo-com.svg'
import { SiAntdesign } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import myPics from '@assets/myPics.jpg'

const About = () => {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const handleMouseMove = (event: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = event;

        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;

        setOffsetX(xPos);
        setOffsetY(yPos);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        gsap.to(".animated-image", {
            y: 10,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
    }, []);
    useEffect(() => {
        gsap.to(".animated-imageY", {
            x: 20,
            duration: 1,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
    }, []);

    return (
        <div className='parallax-container text-white bg-custom-gradient h-full bg-[#5e628f] border-[#e7e7e7] border-t-[15px] border-l-[15px] border-r-[15px]'
        >
            <svg className='background-svg' viewBox='0 0 400 1000' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence
                        type='fractalNoise'
                        baseFrequency='3.5'
                        numOctaves='4'
                        stitchTiles='stitch' />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className="content relative mt-5">

                <div className="info-container lg:w-[80%] md:w-[80%] h-auto m-auto px-[5em] text-[#e8e8e8] relative  w-[100%]">
                    <div className='flex flex-col items-center justify-center'>
                        <h1 className='lg:text-[4.5em] md:text-[3em] text-[1em] font-extrabold font-homemade'>HEY THERE!!</h1><br />
                    </div>
                </div>
                <div
                    className="parallax-item2 item-2 flex justify-around relative"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={img2} alt="img" className="drop-shadow-customimg lg:w-[25em] md:w-[20em] w-[10em] absolute lg:-left-18 lg:-top-16 md:-left-24 md:top-64 -left-20 top-14 hover:-rotate-45 hover:drop-shadow-customimg2 hover:duration-300 animated-imageY" />
                </div>
                <div
                    className="parallax-item2 item-2 flex justify-around relative lg:hidden md:hidden"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={img3} alt="img" className="drop-shadow-customimg lg:w-[25em] md:w-[20em] w-[10em] absolute lg:-right-16 lg:-top-16 md:-right-32 md:-top-16 -right-12 -top-8 -rotate-45 hover:rotate-45 hover:drop-shadow-customimg2 hover:duration-300 animated-imageY" />
                </div>
                <div className='text-about flex lg:gap-2 md:gap-2 gap-10 lg:flex-row md:flex-row flex-col-reverse m-auto items-center justify-center relative lg:top-24 md:top-16'>
                    <div className='lg:w-[80%] lg:px-10 md:w-[90%] w-[100%] flex m-auto'>
                        <p className='lg:text-[1.4em] md:text-[1.2em] text-[0.6em] font-extrabold  font-kalam relative m-auto'>My name is <span className='uppercase bg-gradient-to-r from-[#ffa2aa] via-[#fd98ff] to-[#6c7dff] text-transparent bg-clip-text drop-shadow-customshadow'>Chonthicha Hintao</span> or you can call me <span className='uppercase underline'>CHLOE</span> <br /> as a computer science student, I'm actively pursuing a front-end developer internship. I have a foundational understanding of HTML and am currently advancing my skills in ReactJS, complemented by experience with Tailwind CSS. Eager to contribute my growing proficiency to dynamic web development projects.</p>
                    </div>
                    <div className='flex items-center justify-center '
                        style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}>
                        <img src={myPics} alt="" className='lg:w-[300px] lg:h-[300px] md:w-[230px] md:h-[230px] w-[150px] h-[150px]' />
                    </div>
                </div>
                <div className='justify-center flex flex-col gap-7 lg:mt-20 mt-40 md:mt-32'>
                    <div className="h-[100%] w-[100%] text-[#eeeeee] " >
                        <h1 className='font-darumadrop lg:text-[3.5em] md:text-[2.5em] text-[1.5em] lg:mt-20 md:mt-12 -mt-14'>SKILLS</h1>

                        <div className="h-[100%] flex flex-col justify-center lg:mt-20 md:mt-12 mt-5" >
                            <MouseParallaxContainer
                                className="parallax w-[100%]"
                                containerStyle={{
                                    display: "grid",
                                    gridTemplateColumns: "auto auto auto auto auto auto auto auto"
                                }}
                                globalFactorX={0.3}
                                globalFactorY={0.3}
                                resetOnLeave
                            >
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.3}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <img className='lg:h-[105px] md:h-[65px] h-[30px]' src={svg2} alt="" />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.5}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <RiJavascriptFill className='lg:h-[105px] md:h-[65px] h-[30px] w-auto fill-[#888b62]' />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.7}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <img className='lg:h-[105px] md:h-[65px] h-[30px] w-auto' src={svg3} alt="" />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.9}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <img className='lg:h-[105px] md:h-[65px] h-[30px] w-auto' src={svg4} alt="" />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%] "
                                    factorX={0.9}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <img src={tailwindIcon} alt="" className='lg:h-[105px] md:h-[65px] h-[30px]  w-auto ' />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.7}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <SiAntdesign className='lg:h-[105px] md:h-[65px] h-[30px] w-auto fill-[#888b62]' />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.5}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <FaHtml5 className='lg:h-[105px] md:h-[65px] h-[30px] w-auto fill-[#888b62]' />
                                </MouseParallaxChild>
                                <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
                                    factorX={0.3}
                                    factorY={0.5}
                                    style={{ filter: "invert(1)" }} >
                                    <FaCss3Alt className='lg:h-[105px] md:h-[65px] h-[30px] w-auto fill-[#888b62]' />
                                </MouseParallaxChild>
                            </MouseParallaxContainer>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div >
    );
}

export default About;
