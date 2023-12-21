import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

export abstract class API<DTO> {
  baseURL = 'http://localhost:5000';

  static axios = axios.create();

  abstract path: string;

  query<T = any, D = any>(config: AxiosRequestConfig<D>): Promise<AxiosResponse<T, D>> {
    const conf:AxiosRequestConfig = {
      ...config,
      baseURL: this.baseURL,
    };

    return API.axios.request<T, AxiosResponse<T, D>, D>(conf);
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
