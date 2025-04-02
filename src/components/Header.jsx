import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ScrollReveal from "./ScrollReveal"; // Certifique-se de importar o ScrollReveal

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between mb-5 p-5 md:mb-25">
      {/* Logo com animação fade-in-left */}
      <ScrollReveal delay={100}>
        <a href="/"><img className="w-[150px]" src="./beniciodev preto.svg" alt="Logo" /></a>
      </ScrollReveal>

      {/* Botão de Menu para Mobile */}
      <button
        className="md:hidden text-2xl focus:outline-none z-51 absolute right-5 top-5" // Ajuste z-50 e top-5
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      {/* Menu Desktop com animação */}
      <nav className="hidden md:flex gap-10 text-lg">
        <ul className="flex gap-8">
          <ScrollReveal delay={100}>
            <li>
              <Link to="/" className="text-lg">Home</Link>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <li>
              <Link to="/" className="text-lg">Sobre</Link>
            </li>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <li>
              <Link to="/" className="text-lg">Projetos</Link>
            </li>
          </ScrollReveal>
        </ul>
      </nav>

      {/* Botão "Entrar em contato" Desktop com animação */}
      <ScrollReveal delay={500}>
        <Link
          to="/contact"
          className="hidden md:block text-white text-lg bg-primary py-1 px-3 rounded-3xl"
        >
          Entrar em contato
        </Link>
      </ScrollReveal>

      {/* Menu Mobile com animação */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#C5D4F0] bg-opacity-75 z-50 flex flex-col items-center justify-center gap-6 text-black text-xl md:hidden">
          <ScrollReveal delay={200}>
            <ul className="text-center space-y-6">
              <li>
                <Link to="/" className="text-lg text-[30px]" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-lg text-[30px]" onClick={() => setMenuOpen(false)}>
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/" className="text-lg text-[30px]" onClick={() => setMenuOpen(false)}>
                  Projetos
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          {/* Botão Mobile "Entrar em contato" com animação */}
          <ScrollReveal delay={600}>
            <Link
              to="/contact"
              className="bg-primary py-2 px-4 rounded-3xl text-white text-[25px]"
              onClick={() => setMenuOpen(false)}
            >
              Entrar em contato
            </Link>
          </ScrollReveal>
        </div>
      )}
    </header>
  );
}

export default Header;