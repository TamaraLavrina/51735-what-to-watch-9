const filmsList = [
  {
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
    filmImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },

  {
    filmTitle: 'Bohemian Rhapsody',
    filmImage: 'img/bohemian-rhapsody.jpg',
  },

  {
    filmTitle: 'Macbeth',
    filmImage: 'img/macbeth.jpg',
  },

  {
    filmTitle: 'Aviator',
    filmImage: 'img/aviator.jpg',
  },
  {
    filmTitle: 'We need to talk about Kevin',
    filmImage: 'img/we-need-to-talk-about-kevin.jpg',
  },

  {
    filmTitle: 'What We Do in the Shadows',
    filmImage: 'img/what-we-do-in-the-shadows.jpg',
  },

  {
    filmTitle: 'Revenant',
    filmImage: 'img/revenant.jpg',
  },

  {
    filmTitle: 'Johnny English',
    filmImage: 'img/johnny-english.jpg',
  },

  {
    filmTitle: 'Shutter Island',
    filmImage: 'img/shutter-island.jpg',
  },

  {
    filmTitle: 'Pulp Fiction',
    filmImage: 'img/pulp-fiction.jpg',
  },

  {
    filmTitle: 'No Country for Old Men',
    filmImage: 'img/no-country-for-old-men.jpg',
  },

  {
    filmTitle: 'Snatch',
    filmImage: 'img/snatch.jpg',
  },

  {
    filmTitle: 'Moonrise Kingdom',
    filmImage: 'img/moonrise-kingdom.jpg',
  },

  {
    filmTitle: 'Seven Years in Tibet',
    filmImage: 'img/seven-years-in-tibet.jpg',
  },

  {
    filmTitle: 'Midnight Special',
    filmImage: 'img/midnight-special.jpg',
  },

  {
    filmTitle: 'War of the Worlds',
    filmImage: 'img/war-of-the-worlds.jpg',
  },

  {
    filmTitle: 'Dardjeeling Limited',
    filmImage: 'img/dardjeeling-limited.jpg',
  },

  {
    filmTitle: 'Orlando',
    filmImage: 'img/orlando.jpg',
  },

  {
    filmTitle: 'Mindhunter',
    filmImage: 'img/mindhunter.jpg',
  },

  {
    filmTitle: 'Midnight Special',
    filmImage: 'img/midnight-special.jpg',
  },
];

enum Genres {
  'All genres',
  'Comedies',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers'
}


const PromoBudapest = {
  image: 'the-grand-budapest-hotel-poster.jpg',
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

export type PromoCardType = {
  image?: string,
  name: string,
  genre: string,
  year: number,
}

export {Genres,  PromoBudapest, filmsList };
