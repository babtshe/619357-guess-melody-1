import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

it(`App renders just fine`, () => {
  const tree = renderer
    .create(<App
      gameTime = {1}
      errorCount = {3}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

