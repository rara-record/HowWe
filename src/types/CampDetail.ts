export interface ICampDetail {
  id: number;
  headline1: string;
  headline2: string;
  thumbnail: string;
  contentsImg: string;
  reviews: IReviews[];
  mento: Imento;
}

export interface IReviews {
  content: string;
  student: string;
}

export interface Imento {
  title: string;
  content: string;
  avatar: string;
  introduce: string[];
  career: string;
}
