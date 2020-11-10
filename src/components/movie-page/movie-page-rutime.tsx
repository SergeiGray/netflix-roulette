import React from 'react';

import './movie-page.scss';

const MoviePageRuntime: React.FC<{runtime: number}> = ({runtime}): React.ReactElement | null => {
  return (
    runtime ?
    <p className='movie-page__runtime'>{runtime} min</p> :
    null
  );
};

export default MoviePageRuntime;