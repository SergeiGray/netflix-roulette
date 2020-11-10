import React from 'react';

import './movie-page.scss';

const MoviePageTagline: React.FC<{tagline: string}> = ({tagline}): React.ReactElement | null => {
  return (
    tagline ?
    <p className='movie-page__tagline'>{tagline}</p> :
    null
  );
};

export default MoviePageTagline;