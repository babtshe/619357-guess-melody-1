import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';

const init = () => {
  const settings = {
    gameTime: 10,
    errorCount: 33,
  };
  ReactDOM.render(
      <App
        gameTime = {settings.gameTime}
        errorCount = {settings.errorCount}
      />,
      document.querySelector(`.main`)
  );
};

init();
