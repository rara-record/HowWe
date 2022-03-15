export interface ISlider {
  id: number;
  title: string;
  thumbnail: string;
}

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
  tags: string[];
  title: string;
  content: string;
  comments: IComment[];
}

export interface IComment {
  profile: string;
  nickname: string;
  content: string;
}
