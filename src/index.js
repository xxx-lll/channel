import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 预加载关键资源
const preloadResources = () => {
  // 预加载字体
  const fontUrls = [
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap'
  ];
  
  fontUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = url;
    document.head.appendChild(link);
  });
};

// 初始化应用
const initApp = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // 如果你想要测量性能
  reportWebVitals(console.log);
};

// 在空闲时间预加载资源
if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
  window.requestIdleCallback(preloadResources);
} else {
  setTimeout(preloadResources, 1);
}

// 启动应用
initApp();
