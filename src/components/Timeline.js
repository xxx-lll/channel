import React from 'react';
import './Timeline.css';

function Timeline({ tagName }) {
  // 模拟文章数据
  const articles = [
    {
      id: 1,
      title: '贤善人',
      content: '暇满人生极难得，既得能办人生利，倘若今生利未办，后世怎得此圆满。',
      date: '2024-01-15',
      type: '修行',
      links: [
        { text: '《建立一个禅修者的生活模式》', url: '#' },
        { text: '宁玛巴对初学者的教诲', url: '#' }
      ],
      tags: ['资粮', '忏悔', '功德', '行善', '断恶']
    },
    {
      id: 2,
      title: '出离心',
      content: '"如果一个人连出离心没有，说明他很爱恋这个世界。"',
      date: '2024-01-16',
      type: '佛法',
      links: [
        { text: '《心不要在梦境里边留恋》', url: '#' }
      ],
      tags: ['人生', '珍惜', '目标', '解脱', '无常']
    },
    {
      id: 3,
      title: '菩提心',
      content: '"没有菩提心，不管修任何法门，都只能成为外道..."',
      date: '2024-01-17',
      type: '佛法',
      links: [
        { text: '菩提心的重要性', url: '#' }
      ],
      tags: ['依止', '菩提心', '上师', '慈悲', '利他']
    },
    {
      id: 4,
      title: '空性见',
      content: '在修证上你按次第慢慢修就行了',
      date: '2024-01-18',
      type: '佛法',
      links: [
        { text: '《六祖坛经》释义', url: '#' },
        { text: '《中论》', url: '#' }
      ],
      tags: ['梦幻', '泡影', '清净', '平等', '虚幻']
    }
  ];

  // 根据标签名过滤文章
  const filteredArticles = articles.filter(article => 
    article.tags.includes(tagName)
  );

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <h1>标签：{tagName}</h1>
        <p className="timeline-count">共 {filteredArticles.length} 篇文章</p>
      </div>

      <div className="timeline">
        {filteredArticles.map(article => (
          <div key={article.id} className="timeline-item">
            <div className="timeline-marker">
              <div className={`marker ${article.type === '佛法' ? 'buddhism' : 'practice'}`}></div>
            </div>
            <div className="timeline-content">
              <div className="article-date">{article.date}</div>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-excerpt">{article.content}</p>
              <div className="article-links">
                {article.links.map((link, index) => (
                  <a key={index} href={link.url} className="article-link">
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="article-tags">
                {article.tags.map((tag, index) => (
                  <span key={index} className="article-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline; 