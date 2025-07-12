import React from 'react';
import './Reading.css';

function Reading() {
  const articles = [
    {
      id: 1,
      title: '网站使用指南',
      category: '指南',
      date: '2024-01-15',
      link: '#'
    },
    {
      id: 2,
      title: '星路',
      category: '修行',
      date: '2024-01-16',
      link: '#'
    },
    {
      id: 3,
      title: '大乘菩萨的出离心',
      category: '佛法',
      date: '2024-01-17',
      link: '#'
    },
    {
      id: 4,
      title: '出离心的重要性',
      category: '佛法',
      date: '2024-01-18',
      link: '#'
    },
    {
      id: 5,
      title: '法界之心 第一部 空花',
      category: '佛法',
      date: '2024-01-19',
      link: '#'
    },
    {
      id: 6,
      title: '法界之心 第二部 如月',
      category: '佛法',
      date: '2024-01-20',
      link: '#'
    },
    {
      id: 7,
      title: '修行次第 —— 六波罗蜜多',
      category: '修行',
      date: '2024-01-21',
      link: '#'
    }
  ];

  return (
    <div className="reading-container">
      <div className="reading-header">
        <h1>阅读</h1>
        <div className="reading-filters">
          <select className="category-filter">
            <option value="">全部分类</option>
            <option value="指南">指南</option>
            <option value="修行">修行</option>
            <option value="佛法">佛法</option>
          </select>
          <input type="search" placeholder="搜索文章..." className="search-input" />
        </div>
      </div>
      
      <div className="articles-grid">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <div className="article-category">{article.category}</div>
            <h2 className="article-title">{article.title}</h2>
            <div className="article-date">{article.date}</div>
            <a href={article.link} className="read-more">阅读全文 →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reading; 