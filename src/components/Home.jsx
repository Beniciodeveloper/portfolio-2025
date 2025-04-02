import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import ScrollReveal from "./ScrollReveal"; // Certifique-se de importar o ScrollReveal

function Home() {
  return (
    <div className="bg-secondary w-full h-auto min-h-[500px] px-6 py-10 flex flex-col justify-center items-center md:px-20 md:flex-row md:justify-center md:items-center rounded-[66px] md:h-auto md:mb-30">
      {/* Conteúdo principal */}
      <div className="md:w-[50%] text-center  md:text-left ">
        {/* Animação de fade-in-left para o título */}
        <ScrollReveal delay={100}>
          <h1 className="text-[37px] color-primary mb-3 font-bold md:text-[55px] lg:text-[60px] animate-fade-in-left">
            Lucas Benicio
          </h1>
        </ScrollReveal>
        
        {/* Animação de fade-in-up para a descrição */}
        <ScrollReveal delay={200}>
          <div className="bg-primary text-white px-4 py-1 rounded-2xl text-[19px] mb-4 inline-block md:text-[20px] md:px-6 md:py-3 animate-fade-in-up">
            Desenvolvedor Front-end
          </div>
        </ScrollReveal>

        {/* Botões de redes sociais e download com animações */}
        <div className="flex gap-5 mt-6 justify-center md:justify-start md:absolute bottom-43 md:bottom-[250px] lg:bottom-68">
          {/* Animação de fade-in-up para o botão de download */}
          <ScrollReveal delay={300}>
            <a href="/curriculo_lucas_2025.pdf" download>
              <div className="w-[35px] h-[35px] bg-primary text-white rounded-full flex justify-center items-center shadow-xl">
                <FontAwesomeIcon icon={faDownload} className="text-[15px]" />
              </div>
            </a>
          </ScrollReveal>

          {/* Animações de fade-in-up para os ícones de redes sociais */}
          <ScrollReveal delay={400}>
            <a href="https://www.linkedin.com/in/lucas-benicio-4a6770233/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#111B89] text-[35px] shadow-xl rounded-full"
              />
            </a>
          </ScrollReveal>
          
          <ScrollReveal delay={500}>
            <a href="https://github.com/Beniciodeveloper" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#111B89] text-[35px] shadow-xl rounded-full"
              />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <a href="https://wa.me/71991017313" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-[#111B89] text-[35px] shadow-xl rounded-full"
              />
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Imagem do perfil com animação fade-in-right */}
      <div className="md:w-[50%] mt-10 flex justify-center md:justify-center">
        <ScrollReveal delay={700}>
          <img
            className="w-[300px] md:rounded-[178px] animate-fade-in-right"
            src="/foto-portfolio-1.png"
            alt="Foto do Lucas Benicio"
          />
        </ScrollReveal>
      </div>
    </div>
  );
}

export default Home;
