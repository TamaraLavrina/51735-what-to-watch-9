type CardType = {
  backgroundColor: string;
  backgroundImage: string;
  description: string;
  director: string;
  runTime: number;
  genre: string;
  id: number;
  isFavorite: boolean;
  videoLink: string;
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

 type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type { AuthData, CardType, UserData, Review };
