import api from '../api';

const fetchPaymentMethods = async () => {
  return await api.get('/payment-methods');
}

export default {
  fetchPaymentMethods
}