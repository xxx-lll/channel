import React from 'react';
import './App.css';
import flag from './images/flag.jpg';  // 导入图片

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <div className="logo">NING</div>
          <div className="nav-items">
            <a href="#" className="nav-item">标签</a>
            <a href="#" className="nav-item">列表</a>
            <a href="#" className="nav-item">阅读</a>
            <a href="#" className="nav-item">分类</a>
            <a href="#" className="nav-item">我的</a>
          </div>
        </nav>
      </header>
      <main className="main-content">
        <div className="content-container">
          <div className="banner-container">
            <img src={flag} alt="社会主义核心价值观" className="banner-image" />
          </div>
          <h1 className="main-title">社会主义核心价值观</h1>
          
          <div className="values-section">
            <p className="value-row">富强、民主、文明、和谐</p>
            <p className="value-row">自由、平等、公正、法治</p>
            <p className="value-row">爱国、敬业、诚信、友善</p>
          </div>

          <div className="article-section">
            <h2 className="section-title">十善业包括那十善</h2>
            <p className="source">来源：<a href="#" className="source-link">登封市官网</a></p>
            
            <div className="content-text">
              <p>（身的三种）一、不杀生；二、不偷盗；三、不邪淫</p>
              <p>（语言的四种）四、不恶口；五、不两舌；六、不妄语；七、不绮语</p>
              <p>（意的三种）八、不贪；九、不嗔；十、不痴</p>
            </div>

            <h2 className="section-title">或称十善业道</h2>
            <div className="content-text">
              <p>一、不杀生而慈心于仁</p>
              <p>二、不偷盗而义利节用</p>
              <p>三、不邪淫而贞良守礼</p>
              <p>四、不妄语而诚实无欺</p>
              <p>五、不两舌而无争是非</p>
              <p>六、不恶口而出言慈和</p>
              <p>七、不绮语而言说有礼</p>
              <p>八、不堕贪而慈心舍施</p>
              <p>九、不嗔恚而慈忍积福</p>
              <p>十、不愚痴而多闻增智</p>
            </div>

            <div className="blessing">
              <p>祈愿祖国繁荣昌盛，人民幸福安康！</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
