import { create } from 'apisauce';
import store from './store';
import { toggleLoading } from './actions/application';

const api = create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
  timeout: 30000
});

api.addRequestTransform(() => {
  store.dispatch(toggleLoading());
});

api.addResponseTransform(() => {
  store.dispatch(toggleLoading());
});

export default api;