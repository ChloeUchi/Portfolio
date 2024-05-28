
import './Style.Contact.css'


const Contact = () => {
    return (
        <div className="lg:h-[100px] md:h-[80px] h-[70px] flex-col flex items-center bg-[#e7e7e7]">
            <div className="flex justify-around m-auto lg:w-[40%] w-[100%]">
                <a href="https://github.com/ChloeUchi" target="_blank" className="text-style">Github</a>
                <a href="https://www.instagram.com/chloe.jmy/" target="_blank" className="text-style">Instagram</a>
                <a href="https://www.facebook.com/chonthichahinthao/" target="_blank" className="text-style">Facebook</a>
                <a href="mailto:chonthicha.hi@kkumail.com" className="text-style">Email</a>
            </div>
        </div>

    )
}

export default Contact