import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import App from './components/app/app';
import { films } from './mocks/mocks';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App PromoCard={films[0]} CatalogFilms={films} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
