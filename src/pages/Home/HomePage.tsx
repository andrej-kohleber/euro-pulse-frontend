// src/pages/Home/HomePage.tsx
import React from 'react';
import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>🇪🇺 Euro Pulse - Главная</h1>
        <p className={styles.subtitle}>
          Добро пожаловать в европейский новостной журнал! 
          Актуальные новости, аналитика и события из стран Евросоюза.
        </p>
      </header>
      
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Последние новости из Европы</h2>
        <div className={styles.newsGrid}>
          <div className={styles.newsCard}>
            <h3 className={styles.newsTitle}>Экономический рост еврозоны</h3>
            <p className={styles.newsDescription}>
              Основные индексы демонстрируют положительную динамику 
              на фоне улучшения экономических показателей...
            </p>
          </div>
          
          <div className={styles.newsCard}>
            <h3 className={styles.newsTitle}>Новые регуляции ЕС в сфере AI</h3>
            <p className={styles.newsDescription}>
              Европейский парламент утвердил новые правила 
              регулирования искусственного интеллекта...
            </p>
          </div>
          
          <div className={styles.newsCard}>
            <h3 className={styles.newsTitle}>Климатические инициативы</h3>
            <p className={styles.newsDescription}>
              Страны ЕС договорились о новых мерах по сокращению 
              выбросов углекислого газа к 2030 году...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};