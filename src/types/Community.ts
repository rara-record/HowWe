export interface ICommunity {
  id: number;
  tags: string[];
  title: string;
  name: string;
  comments: IComment[];
}

export interface IComment {
  profile: string;
  nickname: string;
  content: string;
}
