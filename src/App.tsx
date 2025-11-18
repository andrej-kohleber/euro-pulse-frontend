import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Временная навигация для теста */}
        <nav style={{ padding: '20px', background: '#f5f5f5' }}>
          <Link to="/" style={{ marginRight: '15px' }}>🏠 Главная</Link>
          <Link to="/news" style={{ marginRight: '15px' }}>📰 Новости</Link>
          <Link to="/article/1">📄 Статья 1</Link>
        </nav>
        
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
