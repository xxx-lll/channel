import React, { useState } from 'react';
import './Tags.css';

function Tags() {
  const tagCategories = [
    {
      id: 1,
      title: '修行次第',
      tags: [
        { id: 1, name: '贪根', count: 3, type: '修行' },
        { id: 2, name: '忏悔', count: 5, type: '修行' },
        { id: 3, name: '功德', count: 4, type: '修行' },
        { id: 4, name: '行善', count: 6, type: '修行' },
        { id: 5, name: '断恶', count: 2, type: '修行' },
        { id: 6, name: '积累', count: 3, type: '修行' },
        { id: 7, name: '善良', count: 7, type: '修行' },
        { id: 8, name: '善缘', count: 4, type: '修行' },
        { id: 9, name: '随喜', count: 5, type: '修行' }
      ]
    },
    {
      id: 2,
      title: '生命意义',
      tags: [
        { id: 10, name: '人生', count: 8, type: '佛法' },
        { id: 11, name: '珍惜', count: 6, type: '佛法' },
        { id: 12, name: '目标', count: 4, type: '佛法' },
        { id: 13, name: '解脱', count: 7, type: '佛法' },
        { id: 14, name: '无常', count: 5, type: '佛法' },
        { id: 15, name: '轮回', count: 3, type: '佛法' },
        { id: 16, name: '因果', count: 9, type: '佛法' },
        { id: 17, name: '出离', count: 4, type: '佛法' },
        { id: 18, name: '戒', count: 6, type: '佛法' },
        { id: 19, name: '死', count: 2, type: '佛法' }
      ]
    },
    {
      id: 3,
      title: '修心要诀',
      tags: [
        { id: 20, name: '依止', count: 4, type: '修行' },
        { id: 21, name: '菩提心', count: 8, type: '佛法' },
        { id: 22, name: '忏悔', count: 5, type: '修行' },
        { id: 23, name: '业', count: 6, type: '佛法' },
        { id: 24, name: '资粮', count: 3, type: '修行' },
        { id: 25, name: '上师', count: 7, type: '佛法' },
        { id: 26, name: '自我', count: 4, type: '修行' },
        { id: 27, name: '找机', count: 2, type: '修行' },
        { id: 28, name: '慈悲', count: 9, type: '佛法' },
        { id: 29, name: '利他', count: 5, type: '佛法' }
      ]
    },
    {
      id: 4,
      title: '空性见',
      tags: [
        { id: 30, name: '梦幻', count: 3, type: '佛法' },
        { id: 31, name: '泡影', count: 4, type: '佛法' },
        { id: 32, name: '清净', count: 6, type: '佛法' },
        { id: 33, name: '平等', count: 5, type: '佛法' },
        { id: 34, name: '虚幻', count: 4, type: '佛法' },
        { id: 35, name: '实相', count: 7, type: '佛法' },
        { id: 36, name: '法执', count: 3, type: '佛法' },
        { id: 37, name: '妄想', count: 4, type: '佛法' },
        { id: 38, name: '分别', count: 5, type: '佛法' }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = tagCategories.map(category => ({
    ...category,
    tags: category.tags.filter(tag => 
      tag.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.tags.length > 0);

  const handleTagClick = (tag) => {
    // 跳转到标签详情页
    window.location.href = `/timeline/${tag.name}`;
  };

  return (
    <div className="tags-container">
      <div className="tags-header">
        <h1>标签</h1>
        <div className="tags-search">
          <input
            type="search"
            placeholder="搜索标签..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="categories-nav">
        <button
          className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
          onClick={() => setSelectedCategory(null)}
        >
          全部
        </button>
        {tagCategories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="tags-content">
        {(selectedCategory ? filteredCategories.filter(c => c.id === selectedCategory) : filteredCategories)
          .map(category => (
            <div key={category.id} className="category-section">
              <h2 className="category-title">{category.title}</h2>
              <div className="tags-cloud">
                {category.tags.map(tag => (
                  <button
                    key={tag.id}
                    onClick={() => handleTagClick(tag)}
                    className={`tag-item ${tag.type === '佛法' ? 'tag-buddhism' : 'tag-practice'}`}
                    style={{
                      fontSize: `${Math.max(1, Math.min(2, 1 + tag.count / 10))}em`
                    }}
                  >
                    {tag.name}
                    <span className="tag-count">{tag.count}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Tags; 