import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import tailwindConfig from "../../vite.config";
console.log(tailwindConfig)


function Footer() {
    return (
        <div className="bg-primary h-[200px] w-full absolute left-0 mt-30 flex justify-center items-center flex-col">
            <p className="mb-2 text-[18px] text-white">Lucas Benicio Santos</p>
            <p className="mb-5 text-white">lucasbenicio60@gmail.com</p>

            <div className="flex gap-7 ">
                <a href="https://www.linkedin.com/in/lucas-benicio-4a6770233/" target="_blank">
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-white text-[35px] max-lg:text-[30px] shadow-xl rounded-4xl max-md:text-[35px]"
                    />
                </a>
                <a href="https://github.com/Beniciodeveloper" target="_blank">
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="text-white text-[35px] max-lg:text-[30px] shadow-xl rounded-4xl max-md:text-[35px]"
                    />
                </a>
                <a href="https://wa.me/71991017313" target="_blank">
                    <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-white text-[35px] max-lg:text-[30px] shadow-xl rounded-4xl max-md:text-[35px]"
                    />
                </a>
            </div>
        </div>
    );
}

export default Footer;