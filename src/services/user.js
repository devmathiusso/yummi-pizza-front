import api from '../api';

const register = async (requestData) => {
  return await api.post('/auth/register', requestData);
}

const createAddress = async (addressData) => {
  return await api.post('/addresses', addressData);
}

const signIn = async (email, password) => {
  let response = await api.post('/auth/login', {
    email,
    password
  });

  const { access_token } = response.data;

  if (!access_token) {
    return {
      error: true
    }
  }

  localStorage.setItem('YummiPizza@jwt', access_token);

  response = await api.post('/auth/me', {}, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  const user = response.data;

  localStorage.setItem('YummiPizza@user', JSON.stringify(user));

  response = await api.post('/auth/address', {}, {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  localStorage.setItem('YummiPizza@userAddress', JSON.stringify(response.data.address));

  return user;
}

export default {
  register,
  createAddress,
  signIn
}