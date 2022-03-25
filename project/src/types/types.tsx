type PromoCardType = {
  id: number;
  title: string;
};

type CardType = {
  backgroundColor: string;
  backgroundImg: string;
  description: string;
  director: string;
  duration: number;
  genre: string;
  id: number;
  isInMyList: boolean;
  movieLink: string;
  poster: string;
  previewImg: string;
  previewVideoLink: string;
  rating: number;
  releaseDate: number;
  scores: number;
  starring: string[];
  title: string;
};

type AuthData = {
  login: string;
  password: string;
};

type UserData = {
  id: number;
  email: string;
  token: string;
};

export type { AuthData, PromoCardType, CardType, UserData };
