// src/pages/Home/HomePage.tsx
import React from 'react';

export const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🇪🇺 Euro Pulse - Главная</h1>
      <p>Добро пожаловать в европейский новостной журнал!</p>
      
      <section style={{ marginTop: '30px' }}>
        <h2>Последние новости из Европы</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '20px',
          marginTop: '20px'
        }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Новость 1</h3>
            <p>Здесь будет краткое описание новости из Европы...</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Новость 2</h3>
            <p>Еще одна важная новость европейского масштаба...</p>
          </div>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h3>Новость 3</h3>
            <p>Актуальные события из Брюсселя и других столиц ЕС...</p>
          </div>
        </div>
      </section>
    </div>
  );
};