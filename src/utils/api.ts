import axios from 'axios';
// import Auth from '@app/utils/auth';

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  },
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(
  config => {
    config.headers = {
      // Authorization: `Bearer ${Auth.getToken()}`,
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    };

    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  response => response,
  async error => {
    // const token = Auth.getToken();
    // if (error.response.status === 401 && token) {
    //   return error;
    // }

    return Promise.reject(error);
  },
);

export default api;
