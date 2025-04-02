import Project from "./subcomp/Project";
import ScrollReveal from "./ScrollReveal"; // Certifique-se de importar o ScrollReveal

const projects = [
    { src: "/psicology.png", titlle: "Landing page Psicologia", text: "- Página de contato feita com React e Tailwind com alta conversão", link:"https://gentle-soul-landing-page.vercel.app/" },
    { src: "/odonto.png", titlle: "Landing page Odontológica", text: "- Página de contato feita com React e Tailwind com alta conversão", link:"https://odonto-prime-web-space.vercel.app/" },
    { src: "/TAXXPAY.png", titlle: "Taxpay", text: "- Projeto profissional desenvolvido com Nuxt, Vue.js e Bootstrap", link:"https://taxxpay.com.br" },
    { src: "/CARDAPIO.png", titlle: "Cárdapio online", text: "- E-commerce web com integração de pedidos ao whatsapp", link:"https://beniciodeveloper.github.io/cardapio-online/" },
];

function Projects() {
    return (
        <div className="mt-15 text-center">
            {/* Título da seção Projetos com animação fade-in-up */}
            <ScrollReveal delay={100}>
                <h1 className="text-[40px] font-semibold color-primary mb-3.5 md:text-[50px] animate-fade-in-up">
                    Projetos
                </h1>
            </ScrollReveal>

            {/* Grid de projetos com animação fade-in-up */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 place-items-center md:gap-y-11 p-4 ">
                {projects.map((project, index) => (
                    <ScrollReveal delay={index * 200} key={index}>
                        <Project 
                            link={project.link}
                            imageSrc={project.src} 
                            altText={project.alt} 
                            titlle={project.titlle} 
                            text={project.text}
                        />
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
}

export default Projects;
