import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Style.About.css';
import stingray from '@assets/stingray.webp';
import img2 from '@assets/2.png';
import img3 from '@assets/3.png';
import img4 from '@assets/4.png';
import { motion } from 'framer-motion';

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
            duration: 1,
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
        <div className='parallax-container text-white bg-custom-gradient lg:h-screen md:h-[800px] h-[600px]'
            style={{
                clipPath: 'polygon(100% 100%, 0% 100%, 0% 13.7%, 2% 13.19%, 4% 12.37%, 6% 11.45%, 8% 10.67%, 10% 10.21%, 12% 10.18%, 14% 10.6%, 16% 11.35%, 18% 12.28%, 20% 13.11%, 22% 13.66%, 24% 13.8%, 26% 13.5%, 28% 12.8%, 30% 11.91%, 32% 11.03%, 34% 10.39%, 36% 10.13%, 38% 10.33%, 40% 10.94%, 42% 11.81%, 44% 12.71%, 46% 13.43%, 48% 13.8%, 50% 13.7%, 52% 13.19%, 54% 12.37%, 56% 11.45%, 58% 10.67%, 60% 10.21%, 62% 10.18%, 64% 10.6%, 66% 11.35%, 68% 12.28%, 70% 13.11%, 72% 13.66%, 74% 13.8%, 76% 13.5%, 78% 12.8%, 80% 11.91%, 82% 11.03%, 84% 10.39%, 86% 10.13%, 88% 10.33%, 90% 10.94%, 92% 11.81%, 94% 12.71%, 96% 13.43%, 98% 13.8%, 100% 13.7%)',
            }}>
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
                }} className="content relative">
                <div
                    className="parallax-item item-1 flex relative lg:top-20 md:top-36 top-36 gap-[26rem] justify-center px-16"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={stingray} alt="Rocket" className="drop-shadow-customimg lg:w-[18em] md:w-[16em] w-[14em] h-auto relative lg:-left-9 md:-left-1 left-[120px] hover:-rotate-45 hover:duration-300 hover:drop-shadow-customimg2 animated-image" />
                    <img src={stingray} alt="Rocket" className="drop-shadow-customimg lg:w-[18em] md:w-[16em] w-[14em] h-auto relative lg:-right-9 md:-right-1 right-[120px] hover:rotate-12 hover:duration-300 hover:drop-shadow-customimg2 animated-image" />
                </div>

                <div className="info-container lg:w-[80%] md:w-[80%] h-auto m-auto px-[5em] text-[#e8e8e8] relative lg:top-0 md:top-20 top-32 w-[100%]">
                    <div className='flex flex-col items-center justify-center'>
                        {/* <img src={karina} alt="Rocket" className="drop-shadow-customimg w-[25em] h-auto relative -left-[16rem]" /> */}
                        <h1 className='lg:text-[4.5em] md:text-[3em] text-[1.5em] font-extrabold font-homemade'>HEY THERE!!!!</h1><br />
                    </div>
                </div>
                <p className='lg:text-[1.3em] md:text-[1.1em] text-[0.5em] font-extrabold lg:px-16 md:px-24 px-10 font-kalam relative lg:top-20 md:top-24 top-28 lg:w-[80%] m-auto'>As a computer science student, I'm actively pursuing a front-end developer internship. I have a foundational understanding of HTML and am currently advancing my skills in ReactJS, complemented by experience with Tailwind CSS. Eager to contribute my growing proficiency to dynamic web development projects.</p>

                <div
                    className="parallax-item2 item-2 flex justify-around relative"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={img2} alt="img" className="drop-shadow-customimg lg:w-[25em] md:w-[20em] w-[10em] absolute lg:-left-18 lg:-top-16 md:-left-36 md:-top-16 -left-16 top-28 hover:-rotate-45 hover:drop-shadow-customimg2 hover:duration-300 animated-imageY" />
                </div>
                <div
                    className="parallax-item2 item-2 flex justify-around relative"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={img3} alt="img" className="drop-shadow-customimg lg:w-[25em] md:w-[20em] w-[10em] absolute lg:-right-16 lg:-top-16 md:-right-32 md:-top-16 -right-16 top-28 hover:rotate-45 hover:drop-shadow-customimg2 hover:duration-300 animated-imageY" />
                </div>
                <div
                    className="parallax-item2 item-2 flex justify-around relative"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={img4} alt="img" className="drop-shadow-customimg lg:w-[25em] md:w-[20em] w-[10em] absolute lg:-top-[28rem] md:-top-[20rem] -top-[10rem] animated-image" />
                </div>
                <div className='justify-center flex flex-col gap-7 lg:mt-20 mt-40 md:mt-32'>
                    <h1 className='font-darumadrop lg:text-[3em] md:text-[2em] text-[1em]'>SKILLS</h1>
                    <div className='flex flex-wrap lg:gap-6 md:gap-5 gap-5 justify-center font-darumadrop lg:text-[1.5em] md:text-[1.2em] text-[0.7em]'>
                        <p className='skills'>ReactJS</p>
                        <p className='skills'>JavaScript</p>
                        <p className='skills'>TypeScript</p>
                        <p className='skills'>Tailwind</p>
                        <p className='skills'>HTML</p>
                        <p className='skills'>CSS</p>
                        <p className='skills'>Ant Design</p>
                    </div>
                </div>
            </motion.div>

        </div >
    );
}

export default About;
