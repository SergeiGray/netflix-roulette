import React from 'react';

import './movie-page.scss';

const MoviePageDate: React.FC<{date: string}> = ({date}): React.ReactElement | null => {
  return (
    date ?
    <p className='mr-4 movie-page__date'>{date.slice(0, 4)}</p> :
    null
  );
};

export default MoviePageDate;