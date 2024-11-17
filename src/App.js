import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Lebenslauf from './Lebenslauf';
import Motivation from './pages/Motivation';
import Footer from './Footer'; // Importiere die Footer-Komponente import './App.css';

//import './App.css';

function App() {
    return (
        <Router>
            <div>
               
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Bewerbungsseite</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Startseite</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Kontakt</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/motivation">Motivation</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/lebenslauf">Lebenslauf</Link>
                                </li>
                                <li>
                                <div class="xing-button">
    <a href="https://www.xing.com/profile/Andreas_Christ43" target="_blank"> <img src="https://cdn.icon-icons.com/icons2/201/PNG/512/xing_512_24330.png" alt="Folgen auf Xing" /></a>
</div>

                                </li>
 
                            </ul>
                        </div>
                    </div>
                </nav>
                
                
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/lebenslauf" element={<Lebenslauf />} />
                    <Route path="/motivation" element={<Motivation />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


