export interface Camp {
  id: number;
  name: string;
  type: string;
  status: 'ready' | 'open' | 'completed';
  field: string;
  skill: string;
  startDate: string;
  thumbnail: string;
}

export interface Community {
  id: number;
  name: string;
  tag: string[];
  title: string;
  content: string;
  comments: { profile: string; nickname: string; conetent: string }[];
}
