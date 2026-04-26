import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>欢迎来到 PetPal 3D 🐾</h1>
        <p>用 3D 打印，留住爱宠的每一个可爱瞬间</p>
        <Link to="/customize" className="cta-button">
          立即开启定制
        </Link>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h3>📸 宠物形象定制</h3>
          <p>上传宠物照片，定制专属3D模型，捕捉爱宠的独特魅力</p>
        </div>
        <div className="feature-card">
          <h3>👁️ 3D模型在线预览</h3>
          <p>实时查看3D模型效果，调整细节，确保满意后再下单</p>
        </div>
        <div className="feature-card">
          <h3>🚀 在线下单与打印</h3>
          <p>一键下单，专业打印，全国包邮，快速送达您的手中</p>
        </div>
      </section>
      
      <section className="services">
        <h2>服务优势</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>🎯 1:1 还原神态</h3>
            <p>专业建模师手工精修，确保每个细节都完美还原爱宠的神态</p>
          </div>
          <div className="service-card">
            <h3>🌱 环保材料</h3>
            <p>采用优质环保PLA材料，安全无毒，对宠物和环境友好</p>
          </div>
          <div className="service-card">
            <h3>📦 全国包邮</h3>
            <p>无论您在哪里，我们都提供全国包邮服务，让您轻松收到成品</p>
          </div>
          <div className="service-card">
            <h3>⏱️ 快速交付</h3>
            <p>7-10个工作日完成制作，让您尽快收到爱宠的3D模型</p>
          </div>
        </div>
      </section>
      
      <section className="process">
        <h2>定制流程</h2>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>上传照片</h3>
            <p>上传清晰的宠物照片，多角度展示效果更佳</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>建模定制</h3>
            <p>专业团队根据照片创建3D模型，您可在线调整细节</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>打印制作</h3>
            <p>使用专业3D打印机制作，确保模型质量</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>包装发货</h3>
            <p>精心包装后发货，全国包邮，期待您的收货</p>
          </div>
        </div>
      </section>
      
      <section className="portfolio">
        <h2>案例展示</h2>
        <div className="portfolio-placeholder">
          <p>🎉 更多精彩案例即将上线</p>
          <p>敬请期待我们的宠物定制作品展示</p>
        </div>
      </section>
    </div>
  );
};

export default Home;