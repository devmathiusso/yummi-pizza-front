import { create } from 'apisauce';

export default create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
  timeout: 30000
})