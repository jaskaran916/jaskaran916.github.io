// authService.js

// Assuming an endpoint for user authentication
export const authenticateUser = async (credentials) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
  
    if (!response.ok) {
      throw new Error('Authentication failed');
    }
  
    const data = await response.json();
    return data;
  };
  
  // Assuming an endpoint for user registration
  export const registerUser = async (userData) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  
    if (!response.ok) {
      throw new Error('Registration failed');
    }
  
    const data = await response.json();
    return data;
  };
  