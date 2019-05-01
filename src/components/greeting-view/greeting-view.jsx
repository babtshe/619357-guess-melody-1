import React from 'react';
import PropTypes from 'prop-types';

const GreetingView = (props) => {
  const {time, errorCount} = props;
  return <section className="welcome">
    <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <button className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За&nbsp;{time}&nbsp;минут нужно ответить на&nbsp;все вопросы.</li>
      <li>Можно допустить {errorCount}&nbsp;ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

GreetingView.propTypes = {
  time: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export {GreetingView};
