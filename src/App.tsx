import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importe corretamente o componente HomePage
import PostPage from './pages/PostPage'; // Importe corretamente o componente PostPage
import NotFoundPage from './pages/NotFoundPage'; // Importe corretamente o componente NotFoundPage
import PortfolioNavbar from './components/NavBar';
import ProjetosPage from './pages/ProjetosPage';
import ContatoPage from './pages/ContatoPage';

function App() {
  return (
    <Router>
      <div>
        <PortfolioNavbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
