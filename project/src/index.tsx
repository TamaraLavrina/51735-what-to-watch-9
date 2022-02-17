import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const MainScreenData = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};


ReactDOM.render(
  <React.StrictMode>
    <App
      filmCardTitle={MainScreenData.name}
      filmCardGenre={MainScreenData.genre}
      filmCardYear={MainScreenData.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
