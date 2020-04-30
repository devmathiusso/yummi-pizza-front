import api from '../api';

const register = async (requestData) => {
  return await api.post('/auth/register', requestData);
}

const createAddress = async (addressData) => {
  return await api.post('/addresses', addressData);
}

export default {
  register,
  createAddress
}