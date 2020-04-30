import api from '../api';

const createOrder = async (orderData) => {
  return await api.post('/orders', orderData);
}

export default {
  createOrder
}