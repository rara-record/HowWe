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

export interface ICommunity {
  id: number;
  name: string;
  tag: string[];
  title: string;
  content: string;
  comments: { profile: string; nickname: string; conetent: string }[];
}
