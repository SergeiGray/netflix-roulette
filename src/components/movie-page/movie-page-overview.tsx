import React from 'react';

import './movie-page.scss';

const MoviePageOverview: React.FC<{overview: string}> = ({overview}): React.ReactElement | null => {
  return (
    overview ?
    <p className='movie-page__overview'>{overview}</p> :
    null
  );
};

export default MoviePageOverview;