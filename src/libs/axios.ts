import axios from 'axios';
import config from '../config';
import { getUserToken, setUserToken } from '../utils/auth';

const API = axios.create({
  baseURL: config.REACT_APP_API_PATH,
});

API.defaults.headers.common.Accept = 'application/json';
API.defaults.headers.common['Content-Type'] = 'application/json';
API.defaults.withCredentials = true;

// eslint-disable-next-line
API.interceptors.request.use(async (configuration: any) => {
  const token = getUserToken();
  if (configuration.method !== 'get') {
    // eslint-disable-next-line
    const secretToken: any = await API.get('auth/csrftoken');
    configuration.headers['X-CSRF-TOKEN'] = secretToken?.data?.csrfToken?.trim();
  }
  if (token) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  return configuration;
});

API.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== '/auth/login' && err.response) {
      if (err?.response?.data?.error?.name === 'TokenExpiredError' && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          // eslint-disable-next-line
          const rs: any = await API.post(`${config.REACT_APP_API_PATH}/auth/refresh`);
          if (rs && !rs.error) {
            setUserToken(rs.token);
            originalConfig.headers.Authorization = `Bearer ${rs.token}`;
          }

          return await API(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  },
);

export default API;
