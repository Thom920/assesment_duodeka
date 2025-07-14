import React from 'react';
import {BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import Home_page from './pages/Home_page.jsx';
import ToDo_page from './pages/ToDo_page.jsx';
import About_page from './pages/About_page.jsx';
import Contact_page from './pages/Contact_page.jsx';
import TodoItemTest from './pages/TodoItemTest.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">To-Do</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/test-todoitem">Test TodoItem</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home_page />} />
          <Route path="/todo" element={<ToDo_page />} />
          <Route path="/about" element={<About_page />} />
          <Route path="/contact" element={<Contact_page />} />
          <Route path="/test-todoitem" element={<TodoItemTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;