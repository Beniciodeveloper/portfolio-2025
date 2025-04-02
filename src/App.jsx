import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact'; // Página de Contato

function App() {
  return (
    <Router>
      <Header />

      {/* Definindo as rotas */}
      <Routes>
        {/* Página inicial com componentes estáticos */}
        <Route path="/" element={<><Home /><AboutMe /><Projects /></>} />

        {/* Página de Contato */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;