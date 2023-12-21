import { UserAPI } from '@/shared';
import { defineStore } from 'pinia';

const starageKey = 'tt'

const setAuthHeaders = (token: string) => {
  const interceptorID = UserAPI.axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
  UserAPI.authInterceptorID = interceptorID;
}

export const useUser = defineStore('user', {
  state: () => {
    let isAuthorized = false;

    const savedToken = localStorage.getItem(starageKey);
    if (savedToken) {
      isAuthorized = true;
      setAuthHeaders(savedToken);
    }

    return {
      isAuthorized,
    }
  },
  actions: {
    async login(loginDTO: {login: string, password: string}) {
      const userAPI = new UserAPI();
      const token = await userAPI.login(loginDTO);
      localStorage.setItem(starageKey, token);
      setAuthHeaders(token);
      
      this.$state.isAuthorized = true;
    },
    logout() {
      UserAPI.axios.interceptors.request.eject(UserAPI.authInterceptorID as number);
      localStorage.removeItem(starageKey);
      this.$state.isAuthorized = false;
    },
  }
})
