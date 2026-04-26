import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Customize: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // 场景设置
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf9f9f9);
    
    // 相机设置
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    
    // 渲染器设置
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    canvasRef.current.appendChild(renderer.domElement);
    
    // 创建一个简单的宠物模型（球体作为示例）
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x4CAF50,
      roughness: 0.7
    });
    const petModel = new THREE.Mesh(geometry, material);
    scene.add(petModel);
    
    // 添加光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      petModel.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    
    animate();
    
    // 清理函数
    return () => {
      if (canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);
  
  return (
    <div className="customize-container">
      <div className="model-preview" ref={canvasRef}>
        {/* 3D模型将在这里渲染 */}
      </div>
      <div className="customize-controls">
        <h2>定制选项</h2>
        
        <div className="control-group">
          <label htmlFor="pet-type">宠物类型</label>
          <select id="pet-type">
            <option value="dog">狗</option>
            <option value="cat">猫</option>
            <option value="other">其他</option>
          </select>
        </div>
        
        <div className="control-group">
          <label htmlFor="size">尺寸 (cm)</label>
          <input type="range" id="size" min="5" max="30" defaultValue="15" />
        </div>
        
        <div className="control-group">
          <label htmlFor="color">颜色</label>
          <input type="color" id="color" defaultValue="#4CAF50" />
        </div>
        
        <div className="control-group">
          <label htmlFor="material">材质</label>
          <select id="material">
            <option value="pla">PLA</option>
            <option value="abs">ABS</option>
            <option value="resin">树脂</option>
          </select>
        </div>
        
        <button className="cta-button" style={{ marginTop: '1rem' }}>
          添加到购物车
        </button>
      </div>
    </div>
  );
};

export default Customize;