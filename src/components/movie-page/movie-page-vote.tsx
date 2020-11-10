import React from 'react';

import './movie-page.scss';

const MoviePageVote: React.FC<{vote: number}> = ({vote}): React.ReactElement | null => {
  return (
    vote ?
    <p className='movie-page__rating'>{vote}</p> :
    null
  );
};

export default MoviePageVote;