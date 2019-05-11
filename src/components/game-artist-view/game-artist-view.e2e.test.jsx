import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GameArtistView} from './game-artist-view';

configure({adapter: new Adapter()});

const mock = {
  question: {
    audioSrc: `test.file`,
    artist: `Test Artist`,
    answers: [
      {
        imageSrc: `test.file`,
        name: `Test Artist`,
      },
    ],
  },
};

it(`when question is answered, form is not sent`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const gameArtist = mount(<GameArtistView
    onAnswer={onAnswer}
    audioSrc={question.audioSrc}
    artist={question.artist}
    answers={question.answers}
  />);
  const form = gameArtist.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`change`, {
    preventDefault: formSendPrevention
  });
  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
