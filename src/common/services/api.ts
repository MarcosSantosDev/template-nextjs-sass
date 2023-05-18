import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

import { BASE_URL } from '@/common/constants/environment-variables';

const axiosiInstance = axios.create({
  baseURL: BASE_URL,
});

const api = (httpInstance: AxiosInstance) => {
  return {
    get<T>(url: string, config: AxiosRequestConfig = {}) {
      return httpInstance.get<T>(url, config);
    },
    put<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return httpInstance.put<T>(url, body, config);
    },
    post<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return httpInstance.post<T>(url, body, config);
    },
    delete<T>(url: string, config: AxiosRequestConfig = {}) {
      return httpInstance.delete<T>(url, config);
    },
  };
};

export default api(axiosiInstance);
