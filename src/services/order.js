import api from '../api';

const createOrder = async (orderData) => {
  return await api.post('/orders', orderData);
}

const currentUserOrders = async () => {
  const jwtToken = localStorage.getItem('YummiPizza@jwt');
  return await api.post('/auth/orders', {}, {
    headers: {
      'Authorization': `Bearer ${jwtToken}`
    }
  })
}

export default {
  createOrder,
  currentUserOrders
}