import React from 'react';
import renderer from 'react-test-renderer';
import {GreetingView} from './greeting-view';

it(`GreetingView renders just fine`, () => {
  const tree = renderer
    .create(
        <GreetingView
          time = {1}
          errorCount = {3}
          onClick = {jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
