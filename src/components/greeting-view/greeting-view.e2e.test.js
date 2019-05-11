import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GreetingView} from './greeting-view';

Enzyme.configure({adapter: new Adapter()});


it(`GreetingView button click is working`, () => {
  const clickHandler = jest.fn();
  const greetingView = shallow(
      <GreetingView
        time = {1}
        errorCount = {3}
        onClick = {clickHandler}
      />);
  const startButton = greetingView.find(`.welcome__button`);
  startButton.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
