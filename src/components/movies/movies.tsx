import React from 'react';

import MovieCardsController from '../movie-cards-controller';

import './movies.scss';

const Movies: React.FC<object> = (props): React.ReactElement => {
  return (
    <div className='movies'>
      <MovieCardsController {...props}/>
    </div>
  );
};

export default Movies;