export type PositionDTO = {
  id: string;
  name: string;	
  price: number;	
  photo?: string;	
  ingredients: string[],	
}

export type CategoryDTO = {
  id: string;
  name: string;
  description?: string;
  positions: PositionDTO[];
}
