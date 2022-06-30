import axios from 'axios';
// import https from 'https';
// import store from '../store';
// import { GET_NEWS } from '../actions/types';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    'Access-Control-Allow-Methods': 'GET, POST',
    'Accept': 'application/json'
  },  
  withCredentials: true,
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.request.use(function (config) {
//   config.headers.Authorization =  localStorage.getItem('token');

//   return config;
// });

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      // store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

export default api;
