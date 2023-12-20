import type { PositionDTO } from './types';
import { API } from './api';

export class PositionAPI extends API<PositionDTO> {
  path = '/positions';
  
  async rename(id: string, name: string): Promise<string> {
    const result = await this.query<{name: string}, {name: string}>({
      url: `${this.path}/${id}/rename`,
      data: { name },
      method: 'PATCH'
    });

    return result.data.name;
  }

  async setIngredients(id: string, ingredients: string[]): Promise<string[]> {
    const result = await this.query<{ingredients: string[]}, {ingredients: string[]}>({
      url: `${this.path}/${id}/ingredients`,
      data: { ingredients },
      method: 'PATCH'
    })

    return result.data.ingredients;
  }

  async changePrice(id: string, price: number): Promise<number> {
    const result = await this.query<{price: number}, {price: number}>({
      url: `${this.path}/${id}/ingredients`,
      data: { price },
      method: 'PATCH'
    })

    return result.data.price;
  }

  async changePhoto(id: string, photo: string): Promise<string> {
    const result = await this.query<{photo: string}, {photo: string}>({
      url: `${this.path}/${id}/photo`,
      data: { photo },
      method: 'PATCH'
    })

    return result.data.photo;
  }
}
