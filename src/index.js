import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app';
import {settings, questions} from './mocks/questions';

const init = (gameQuestions) => {
  ReactDOM.render(
      <App
        gameTime = {settings.gameTime}
        errorCount = {settings.errorCount}
        questions = {gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};

init(questions);
