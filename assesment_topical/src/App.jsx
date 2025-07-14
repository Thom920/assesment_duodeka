import React from 'react';
import {browserRouter as Router,
    Routes,
    Route,
    Navlink,
} from 'react-router-dom';
import Home_page from './pages/Home_page.jsx';
import ToDo_page from './pages/ToDo_page.jsx';
import About_page from './pages/About_page.jsx';
import Contact_page from './pages/Contact_page.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/todo">To-Do</Navlink>
          <Navlink to="/about">About</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </nav>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/todo" element={<ToDo_page />} />
          <Route path="/about" element={<About_page />} />
          <Route path="/contact" element={<Contact_page />} />
        </Routes>
      </div>
    </Router>
  );
}