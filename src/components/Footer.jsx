import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./ScrollReveal"; // Certifique-se de importar o ScrollReveal

function Footer() {
    return (
        <div className="bg-primary h-[200px] w-full absolute left-0 mt-30 flex justify-center items-center flex-col">
            
            {/* Informações de texto com animação fade-in-up */}
            <ScrollReveal delay={100}>
                <p className="mb-2 text-[18px] text-white animate-fade-in-up">
                    Lucas Benicio Santos
                </p>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
                <p className="mb-5 text-white animate-fade-in-up">
                    lucasbenicio60@gmail.com
                </p>
            </ScrollReveal>

            {/* Ícones de redes sociais com animação fade-in-up */}
            <div className="flex gap-7">
                <ScrollReveal delay={300}>
                    <a href="https://www.linkedin.com/in/lucas-benicio-4a6770233/" target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-white text-[35px] max-lg:text-[30px] shadow-xl rounded-4xl max-md:text-[35px]"
                        />
                    </a>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <a href="https://github.com/Beniciodeveloper" target="_blank">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="text-white text-[35px] max-lg:text-[30px] shadow-xl rounded-4xl max-md:text-[35px]"
                        />
                    </a>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                    <a href="https://wa.me/71991017313" target="_blank">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className="text-white text-[35px] max-lg:text-[30px] shadow-xl rounded-4xl max-md:text-[35px]"
                        />
                    </a>
                </ScrollReveal>
            </div>
        </div>
    );
}

export default Footer;