export interface ICampDetail {
  tags: string[];
  name: string;
  desc: string;
  startDate: string;
  process: string;
  seat: string;
  reviewMaterial: string[];
  headerImage: string;
  images: string[];
  reviews: IReviews[];
  faqs: IFaqs[];
  theme: ITheme[];
  buttonName: string;
}

export interface IReviews {
  content: string;
  reviewer: string;
}

export interface IFaqs {
  question: string;
  answer: string;
}

export interface ITheme {
  headerColor: string;
  reviewColor: string;
}
