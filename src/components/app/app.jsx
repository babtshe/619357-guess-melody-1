import React from 'react';
import PropTypes from 'prop-types';
import {GreetingView} from '../greeting-view/greeting-view';

const App = (props) => {
  const {gameTime, errorCount} = props;
  const startGame = (evt) => {
    evt.preventDefault();
  };
  return <GreetingView
    time = {gameTime}
    errorCount = {errorCount}
    handleClick = {startGame}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export {App};
