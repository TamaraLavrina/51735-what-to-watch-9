import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const PromoCard = {
  image: 'the-grand-budapest-hotel-poster.jpg',
  name: 'The Grand Budapest Hotel poster',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App PromoCard = {PromoCard} />
  </React.StrictMode>,
  document.getElementById('root'));
