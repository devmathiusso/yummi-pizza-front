import api from '../api';

const fetchPizzas = async () => {
  return await api.get('/pizzas');
}

export default {
  fetchPizzas
}