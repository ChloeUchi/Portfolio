// import { MouseParallaxChild, MouseParallaxContainer } from "react-parallax-mouse";
import './Style.Contact.css'
// import svg1 from '@assets/1.svg'
// import svg2 from '@assets/2.svg'
// import svg3 from '@assets/3.svg'
// import svg4 from '@assets/4.svg'
// import svg5 from '@assets/5.svg'


const Contact = () => {
    return (
        <div className="lg:h-[100px] md:h-[80px] h-[70px] flex-col flex items-center bg-[#e7e7e7]">
            <div className="flex justify-around m-auto lg:w-[40%] w-[100%]">
                <a href="https://github.com/ChloeUchi" target="_blank" className="font-bold bg-gradient-to-r from-[#ffa2aa] via-[#fd98ff] to-[#6c7dff] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Github</a>
                <a href="https://www.instagram.com/chloe.jmy/" target="_blank" className="font-bold bg-gradient-to-r from-[#ffa2aa] via-[#fd98ff] to-[#6c7dff] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Instagram</a>
                <a href="https://www.facebook.com/chonthichahinthao/" target="_blank" className="font-bold bg-gradient-to-r from-[#ffa2aa] via-[#fd98ff] to-[#6c7dff] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Facebook</a>
                <a href="mailto:chonthicha.hi@kkumail.com" className="font-bold bg-gradient-to-r from-[#ffa2aa] via-[#fd98ff] to-[#6c7dff] text-transparent bg-clip-text lg:text-[1.4em] md:text-[1.2em] text-[1em]">Email</a>
            </div>
        </div>
        // <div className="h-screen">
        //     <div className="h-[100%] w-[100%] bg-[#45456d] text-[#fff] " >
        //         <div className="h-[100%] flex flex-col justify-center" >
        //             <MouseParallaxContainer
        //                 className="parallax w-[100%]"
        //                 containerStyle={{
        //                     display: "grid",
        //                     gridTemplateColumns: "auto auto auto auto auto"
        //                 }}
        //                 globalFactorX={0.3}
        //                 globalFactorY={0.3}
        //                 resetOnLeave
        //             >
        //                 <MouseParallaxChild className="w-[100%] h-[100%] absolute"
        //                     factorX={0.6}
        //                     factorY={0.1}
        //                     style={{
        //                         background:
        //                             "url(https://images.unsplash.com/photo-1611502867268-9193c5c45f09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
        //                         backgroundPositionY: "50%",
        //                         transform: "scale(1.2)",
        //                         filter: "blur(4px) brightness(50%)",
        //                         backgroundSize: "auto",
        //                         backgroundRepeat: "repeat",
        //                         backfaceVisibility: "hidden"
        //                     }}
        //                 />
        //                 <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
        //                     factorX={0.5}
        //                     factorY={0.5}
        //                     style={{ filter: "invert(1)" }} >
        //                     <img height="50%" src={svg1} alt="" />
        //                 </MouseParallaxChild>
        //                 <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
        //                     factorX={0.7}
        //                     factorY={0.5}
        //                     style={{ filter: "invert(1)" }} >
        //                     <img height="50%" src={svg2} alt="" />
        //                 </MouseParallaxChild>
        //                 <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
        //                     factorX={0.9}
        //                     factorY={0.5}
        //                     style={{ filter: "invert(1)" }} >
        //                     <img height="50%" src={svg3} alt="" />
        //                 </MouseParallaxChild>
        //                 <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
        //                     factorX={0.7}
        //                     factorY={0.5}
        //                     style={{ filter: "invert(1)" }} >
        //                     <img height="50%" src={svg4} alt="" />
        //                 </MouseParallaxChild>
        //                 <MouseParallaxChild className="flex items-center justify-center w-auto h-[100%]"
        //                     factorX={0.5}
        //                     factorY={0.5}
        //                     style={{ filter: "invert(1)" }} >
        //                     <img height="50%" src={svg5} alt="" />
        //                 </MouseParallaxChild>
        //             </MouseParallaxContainer>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Contact