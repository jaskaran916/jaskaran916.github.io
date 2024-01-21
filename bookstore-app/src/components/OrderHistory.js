import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getOrderHistory } from '../services/orderService';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    // Fetch order history for the authenticated user from the backend
    const fetchOrderHistory = async () => {
      const data = await getOrderHistory(userId);
      setOrders(data);
    };

    fetchOrderHistory();
  }, [userId]);

  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order) => (
        <div key={order.id}>
          {/* Display individual orders in the history */}
          <p>Order ID: {order.id}</p>
          {/* Display other order details */}
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
