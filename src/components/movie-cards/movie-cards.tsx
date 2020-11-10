import React from 'react';
import {IMovieCardData} from '../../interfaces/interfaces';

import List from '../common-components/list';
import MovieCard from '../movie-card';

const getMovieCards = (data: Array<IMovieCardData>): Array<React.ReactElement> => {
  return data.map(el => <MovieCard data={el}/>)
};

const MovieCards: React.FC<{data: Array<IMovieCardData>}> = ({data}): React.ReactElement => {
  const moviesCards: Array<React.ReactElement> = getMovieCards(data);

  return (
    <List>
      {moviesCards}
    </List>
  );
};


export default MovieCards;