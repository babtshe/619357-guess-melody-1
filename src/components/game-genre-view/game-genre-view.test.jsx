import React from 'react';
import renderer from 'react-test-renderer';
import {GameGenreView} from './game-genre-view';

const mock = {
  question: {
    genre: `rock`,
    answers: [
      {
        src: `test.file`,
        genre: `dubstep`,
      },
      {
        src: `test.file`,
        genre: `metal`,
      },
      {
        src: `test.file`,
        genre: `rock`,
      },
      {
        src: `test.file`,
        genre: `classic`,
      },
    ]
  }
};

it(`GameGenreView is rendering correctly`, ()=> {
  const {question} = mock;
  const tree = renderer.create(<GameGenreView
    onAnswer = {jest.fn()}
    genre = {question.genre}
    answers = {question.answers}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
