import { type PositionDTO } from './types';
import { type CategoryDTO } from '.';
import { API } from './api';

export class CategoryAPI extends API<CategoryDTO> {
  path = '/categories';

  async rename(id: string, name: string): Promise<string> {
    const result = await this.query<{name: string}, {name: string}>({
      url: `${this.path}/${id}/rename`,
      data: { name },
      method: 'PATCH'
    });

    return result.data.name;
  }

  async changeDescription(id: string, description: string): Promise<string> {
    const result = await this.query<{description: string}, {description: string}>({
      url: `${this.path}/${id}/description`,
      data: { description },
      method: 'PATCH'
    });

    return result.data.description;
  }

  async addPosition(id: string, positionDTO: Omit<PositionDTO, 'id'>): Promise<string[]> {
    const result = await this.query<{positions: string[]}, Omit<PositionDTO, 'id'>>({
      url: `${this.path}/${id}/positions`,
      data: positionDTO,
      method: 'POST'
    });

    return result.data.positions;
  }

  async removePositionFrom(id: string, positionID: string): Promise<void> {
    await this.query({
      url: `${this.path}/${id}/positions/${positionID}`,
      method: 'DELETE'
    });
  }
}
