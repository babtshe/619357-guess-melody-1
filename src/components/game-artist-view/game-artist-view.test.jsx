import React from 'react';
import renderer from 'react-test-renderer';
import {GameArtistView} from './game-artist-view';

const mock = {
  question: {
    audioSrc: `test.file`,
    artist: `Test Artist`,
    answers: [
      {
        imageSrc: `test.file-a`,
        name: `Artist A`,
      },
      {
        imageSrc: `test.file-b`,
        name: `Artist B`,
      },
      {
        imageSrc: `test.file-c`,
        name: `Artist C`,
      },
      {
        imageSrc: `test.file-d`,
        name: `Artist D`,
      },
    ]
  }
};

it(`GameGenreView is rendering correctly`, ()=> {
  const {question} = mock;
  const tree = renderer.create(<GameArtistView
    onAnswer = {jest.fn()}
    audioSrc = {question.audioSrc}
    artist = {question.artist}
    answers = {question.answers}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
