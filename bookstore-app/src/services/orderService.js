// orderService.js

// Assuming an endpoint for placing an order
export const placeOrder = async (cartItems, shippingInfo) => {
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems, shippingInfo }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to place the order');
    }
  
    const data = await response.json();
    return data;
  };
  
  // Assuming an endpoint for fetching order history by user ID
  export const getOrderHistory = async (userId) => {
    const response = await fetch(`/api/orders/history/${userId}`);
    const data = await response.json();
    return data;
  };
  