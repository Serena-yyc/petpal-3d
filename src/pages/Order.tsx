import React from 'react';

interface Order {
  id: string;
  petName: string;
  productType: string;
  status: 'pending' | 'processing' | 'completed';
  date: string;
  total: number;
}

const Order: React.FC = () => {
  // 模拟订单数据
  const orders: Order[] = [
    {
      id: 'ORD-001',
      petName: '小白',
      productType: '3D打印模型',
      status: 'completed',
      date: '2026-04-20',
      total: 199
    },
    {
      id: 'ORD-002',
      petName: '小黑',
      productType: '定制钥匙扣',
      status: 'processing',
      date: '2026-04-22',
      total: 99
    },
    {
      id: 'ORD-003',
      petName: '小花',
      productType: '3D打印模型',
      status: 'pending',
      date: '2026-04-24',
      total: 249
    }
  ];
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'processing':
        return 'status-processing';
      case 'completed':
        return 'status-completed';
      default:
        return '';
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return '待处理';
      case 'processing':
        return '处理中';
      case 'completed':
        return '已完成';
      default:
        return status;
    }
  };
  
  return (
    <div className="order-page">
      <h2>我的订单</h2>
      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <h3>订单号: {order.id}</h3>
            <p>宠物名称: {order.petName}</p>
            <p>产品类型: {order.productType}</p>
            <p>下单日期: {order.date}</p>
            <p>总价: ¥{order.total}</p>
            <span className={`order-status ${getStatusClass(order.status)}`}>
              {getStatusText(order.status)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;