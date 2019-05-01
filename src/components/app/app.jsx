import React from 'react';
import PropTypes from 'prop-types';
import {GreetingView} from '../greeting-view/greeting-view';

const App = (props) => {
  const {gameTime, errorCount} = props;
  return <GreetingView
    time = {gameTime}
    errorCount = {errorCount}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export {App};
