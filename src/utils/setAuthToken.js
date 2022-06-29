import api from './api';

const setAuthToken = token => {
  if (token) {
    api.interceptors.request.use(function (config) {
      config.headers.Authorization =  localStorage.getItem('token');
    
      return config;
    });
    localStorage.setItem('token', "Bearer "+token);
  }
};

export default setAuthToken;
