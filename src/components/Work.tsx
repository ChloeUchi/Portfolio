import { useEffect, useState } from "react";
import assignment2 from '@assets/Assignment2.png'
import digimon from '@assets/digimon.png'
import flexWorkshop from '@assets/flexWorkshop.png'
import flexWorkshop2 from '@assets/flexWorkshop2.png'
import pokemonWorkshop from '@assets/pokemonWorkshop.png'
import tailwindWorkshop from '@assets/tailwindWorkshop.png'
import assignment4 from '@assets/redux.png'
import routerworkshop from '@assets/react-router.png'
import assignment3 from '@assets/assignment3.png'

import { FaGithub } from "react-icons/fa";
import './Style.Work.css'
import { motion } from "framer-motion";
const Work = () => {
    const [visibleCards, setVisibleCards] = useState(4);
    const loadMoreCards = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
    };
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const cards = [
        { title: "Vocabulary Match", description: "Vocabulary Match challenge assignment using React TypeScript and fetching data from json file", imageUrl: assignment2 },
        { title: "Digimon Card", description: "Workshop API using React TypeScript to fetch API", imageUrl: digimon },
        { title: "Flex Layout Workshop", description: "Workshop of using flex layout", imageUrl: flexWorkshop },
        { title: "Flex Layout Workshop", description: "Workshop of using flex layout", imageUrl: flexWorkshop2 },
        { title: "Pokemon API v2", description: "Workshop API using axios to fetch data from pokemon api v2", imageUrl: pokemonWorkshop },
        { title: "Tailwind workshop", description: "Workshop using tailwind css", imageUrl: tailwindWorkshop },
        { title: "Quiz Web App", description: "Create web application with Ant design framework and Tailwind css dark mode", imageUrl: assignment4 },
        { title: "Daily news website", description: "Create daily news website use react router dom", imageUrl: routerworkshop },
        { title: "Pokemon API v1", description: "Workshop using tailwind css", imageUrl: assignment3 },
    ];
    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setIsLargeScreen(true);
            setVisibleCards(cards.length);
        } else {
            setIsLargeScreen(false);
            setVisibleCards(4);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="curved bg-[#5e628f]"

        >
            <br />
            <h1 className='lg:text-[3em] md:text-[2em] text-[1em] font-extrabold font-darumadrop text-[#e3e5ff] text-center drop-shadow-xl'>My Works</h1>
            <br /><br />
            <div className="flex flex-col items-center">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-around'>
                    {cards.slice(0, visibleCards).map((card, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} key={index} className="card lg:w-[399.5px] lg:h-[230px] md:w-[350px] md:h-[200px] w-[271px] h-[154px] relative overflow-hidden rounded-lg transition-transform duration-600 hover:rotate-[-3deg]  hover:scale-105 shadow-lg"
                            style={{ backgroundImage: `url(${card.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="card__content">
                                <p className="card__title lg:text-[24px] md:text-[19.2px] text-[16px] font-darumadrop uppercase">{card.title}</p>
                                <p className="card__description lg:text-[17px] md:text-[12.7px] text-[9.8px] font-sans font-bold text-start">{card.description}</p>
                                <div className="flex justify-between relative lg:top-14 md:top-16 top-9 lg:text-[20px] md:text-[16px] text-[12px] font-darumadrop">Open on Github <a href="https://github.com/ChloeUchi" className="w-6 h-auto"><FaGithub /></a></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <br />
                {!isLargeScreen && visibleCards < cards.length && (
                    <button onClick={loadMoreCards} className="mt-4 px-4 py-2 font-bold bg-[#373960] text-white rounded-full hover:bg-[#33344c] active:bg-[#8d8fb3] active:text-[#373960] font-sans">
                        Load More
                    </button>
                )}
            </div>
        </div >
    )
}

export default Work