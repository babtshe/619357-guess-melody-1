import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GameGenreView} from './game-genre-view';

configure({adapter: new Adapter()});

const mock = {
  question: {
    genre: `classic`,
    answers: [
      {
        src: `test.file`,
        genre: `classic`,
      },
    ],
  },
};

it(`when question is answered, form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const gameGenre = mount(<GameGenreView
    onAnswer = {onAnswer}
    genre = {question.genre}
    answers = {question.answers}
  />);
  const form = gameGenre.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention
  });
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
