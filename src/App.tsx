import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import Navigation from './components/Navigation/Navigation';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
