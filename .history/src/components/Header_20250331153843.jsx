import { Link } from "react-router-dom"; // Usando Link para navegação
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import "../index.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between mb-5 p-5 md:mb-25">
      <div className="text-xl font-bold">MeuPortfólio</div>

      <button
        className="md:hidden text-2xl focus:outline-none z-51"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      <nav className="hidden md:flex gap-10 text-lg">
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="text-lg">Home</Link>
          </li>
          <li>
            <Link to="/" className="text-lg">Sobre</Link>
          </li>
          <li>
            <Link to="/" className="text-lg">Projetos</Link>
          </li>
        </ul>
      </nav>

      {/* Botão "Entrar em contato" com Link para a página de Contato */}
      <Link
        to="/contact"
        className="hidden md:block text-white text-lg bg-primary py-1 px-3 rounded-3xl"
      >
        Entrar em contato
      </Link>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#C5D4F0] bg-opacity-75 z-50 flex flex-col items-center justify-center gap-6 text-black text-xl md:hidden">
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

          {/* Botão Mobile "Entrar em contato" */}
          <Link
            to="/contact"
            className="bg-primary py-2 px-4 rounded-3xl text-white text-[25px]"
            onClick={() => setMenuOpen(false)}
          >
            Entrar em contato
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;