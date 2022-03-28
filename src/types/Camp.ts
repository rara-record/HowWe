export type CampType = 'popular' | 'sale';

export interface ICamp {
  id: number;
  name: string;
  type: string;
  status: string;
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}
