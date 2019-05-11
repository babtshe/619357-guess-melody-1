import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GreetingView} from '../greeting-view/greeting-view';
import {GameGenreView} from '../game-genre-view/game-genre-view';
import {GameArtistView} from '../game-artist-view/game-artist-view';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLevel: -1,
    };
  }

  getGreetingView(time, errorCount, onClick) {
    return <GreetingView
      time = {time}
      errorCount = {errorCount}
      onClick = {onClick}
    />;
  }

  showGame(level, onClick) {
    switch (level.type) {
      case `genre`:
        return <GameGenreView
          genre={level.genre}
          answers={level.answers}
          onAnswer={onClick}
        />;
      case `artist`:
        return <GameArtistView
          audioSrc={level.audioSrc}
          answers={level.answers}
          onAnswer={onClick}
        />;
      default:
        return null;
    }
  }
  handleClick() {
    const {questions} = this.props;
    const {currentLevel} = this.state;
    this.setState({
      currentLevel: currentLevel + 1 >= questions.length
        ? -1 : (currentLevel + 1),
    });
  }
  render() {
    const {questions, gameTime, errorCount} = this.props;
    const {currentLevel} = this.state;
    if (currentLevel > -1) {
      return this.showGame(questions[currentLevel], this.handleClick.bind(this));
    }
    return this.getGreetingView(gameTime, errorCount, this.handleClick.bind(this));
  }
}

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export {App};
