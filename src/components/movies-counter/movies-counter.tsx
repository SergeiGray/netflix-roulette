import React from 'react';
import {connect} from 'react-redux';
import {IState} from '../../interfaces/interfaces';

import './movies-counter.scss';


const MoviesCounter: React.FC<{counter: number}> = ({counter}): React.ReactElement => {
  return <span className='movies-counter'>{counter} movie found</span>;
};

const mapStateToProps = (state: IState): {counter: number} => {
  return {
    counter: state.moviesCounter
  };
};

export default connect(mapStateToProps)(MoviesCounter);
