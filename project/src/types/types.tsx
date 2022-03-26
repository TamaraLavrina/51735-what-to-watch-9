type PromoCardType = {
  id: number;
  name: string;
};

type CardType = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  runTime: number;
  genre: string;
  id: number;
  isFavorite: boolean;
  movieLink: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  scoresCount: number;
  starring: string[];
  name: string;
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
