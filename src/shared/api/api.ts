import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios, { AxiosError } from 'axios';

export abstract class API<DTO> {
  baseURL = import.meta.env.VITE_API_URL;

  static axios = axios.create();

  abstract path: string;

  async query<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> {
    const conf:AxiosRequestConfig = {
      ...config,
      baseURL: this.baseURL,
    };

    try {
      const result = await API.axios.request<T, AxiosResponse<T, D>, D>(conf);
      return result;
    } catch(err) {
      if (err instanceof AxiosError && err.status == 403) {
        console.log(err);
        location.assign('/');
      }
      throw err;
    }
  }

  async getAll(): Promise<DTO[]> {
    const result = await this.query<DTO[]>({url: `${this.path}`});

    return result.data;
  }

  async getByID(id: string): Promise<DTO> {
    const result = await this.query<DTO>({url: `${this.path}/${id}`});

    return result.data;
  }

  async remove(id: string): Promise<void> {
    await this.query({ url: `${this.path}/${id}`, method: 'DELETE' });
  }

  async create(dto: Omit<DTO, 'id'>): Promise<DTO> {
    const result = await this.query<DTO, Omit<DTO, 'id'>>({
      url: `${this.path}`,
      data: dto,
      method: 'POST'
    });

    return result.data;
  }
}
