import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/mocks';


ReactDOM.render(
  <React.StrictMode>
    <App
      PromoCard = {films[0]}
      CatalogFilms = {films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
