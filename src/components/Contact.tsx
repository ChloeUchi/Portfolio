
import './Style.Contact.css'


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

    )
}

export default Contact