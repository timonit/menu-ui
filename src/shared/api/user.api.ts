import type { PositionDTO } from './types';
import { API } from './api';
import type { AxiosRequestConfig } from 'axios';

export class UserAPI extends API<PositionDTO> {
  path = '/user';

  static authInterceptorID?: number;

  set authInterceptorID(value: number) {
    UserAPI.authInterceptorID = value;
  }

  get authInterceptorID(): number | undefined {
    return UserAPI.authInterceptorID;
  }
  
  async login(loginDTO: {login: string, password: string}): Promise<any> {
    const result = await this.query<any, {login: string, password: string}>({
      url: `${this.path}/login`,
      data: loginDTO,
      method: 'POST'
    });

    return result.data;
  }
}
