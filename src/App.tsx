import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Customize from './pages/Customize';
import Order from './pages/Order';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">PetPal 3D</div>
          <nav className="nav">
            <Link to="/">首页</Link>
            <Link to="/customize">定制</Link>
            <Link to="/order">我的订单</Link>
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/customize" element={<Customize />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-section">
            <h4>联系我们</h4>
            <p>电话: 400-123-4567</p>
            <p>邮箱: info@petpal3d.com</p>
            <p>地址: 北京市朝阳区宠物大道123号</p>
          </div>
          <div className="footer-section">
            <h4>工作时间</h4>
            <p>周一至周五: 9:00-18:00</p>
            <p>周六至周日: 10:00-16:00</p>
          </div>
          <div className="footer-section">
            <h4>服务支持</h4>
            <p>定制咨询</p>
            <p>订单查询</p>
            <p>售后服务</p>
          </div>
          <div className="footer-bottom">
            <p>© 2026 PetPal 3D. 保留所有权利。</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;