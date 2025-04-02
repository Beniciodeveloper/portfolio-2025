import Technology from "./subcomp/Technology";
import ScrollReveal from "./ScrollReveal"; // Certifique-se de importar o ScrollReveal

const images = [
    { src: "/public/1-HTML.png", alt: "Imagem 1", name: "HTML" },
    { src: "/public/2-CSS.png", alt: "Imagem 2", name: "CSS" },
    { src: "/public/3-JS.png", alt: "Imagem 3", style: "w-[70px] h-[70px]", name: "JavaScript" },
    { src: "/public/4-REACT.png", alt: "Imagem 4", style: "w-[80px] h-[80px]", name: "React" },
    { src: "/public/5-TAILWIND.png", alt: "Imagem 5", name: "Tailwind" },
    { src: "/public/6-FIGMA.png", alt: "Imagem 6", style: "w-[70px] h-[70px]", name: "Figma" },
    { src: "/public/7-BOOTSTRAP.png", alt: "Imagem 7", style: "w-[80px] h-[70px]", name: "Bootstrap" },
    { src: "/public/8-GITHUB.png", alt: "Imagem 8", style: "w-[80px] h-[80px]", name: "GitHub" },
    { src: "/public/SHOPIFY.png", alt: "Imagem 9", style: "w-[70px] h-[80px]", name: "Shopify" },
    { src: "/public/WORDPRESS.png", alt: "Imagem 10", style: "w-[90px] h-[90px]", name: "WordPress" },
];

function AboutMe() {
    return (
        <div className="mt-15 text-center md:mb-30">
            {/* Título com animação fade-in-up */}
            <ScrollReveal delay={100}>
                <h1 className="text-[40px] font-semibold color-primary mb-3.5 md:text-[50px] animate-fade-in-up">
                    Sobre mim
                </h1>
            </ScrollReveal>

            {/* Descrição com animação fade-in-up */}
            <ScrollReveal delay={200}>
                <p className="color-primary font-medium mb-10 md:text-[18px] max-md:text-[15px] animate-fade-in-up">
                    Desenvolvedor Front-End com experiência na criação de interfaces modernas e responsivas. Especializado em React, JavaScript, Bootstrap e Tailwind com forte entendimento de UI/UX e boas práticas de desenvolvimento. Atualmente aprimorando conhecimentos em React, sempre buscando inovação e desempenho otimizado.
                </p>
            </ScrollReveal>

            {/* Galeria de imagens de tecnologia com animação fade-in-up */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-7 place-items-center md:gap-y-11">
                {images.map((image, index) => (
                    <ScrollReveal delay={index * 100} key={index}>
                        <Technology 
                            imageSrc={image.src} 
                            altText={image.alt} 
                            className={image.style ? image.style : ""} 
                            name={image.name}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}

export default AboutMe;