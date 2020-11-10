import React from 'react';
import {withRouter} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';
import {IMovieCardData} from '../../interfaces/interfaces';

import MoviePoster from '../movie-poster';
import Row from '../common-components/row';
import Title from '../common-components/title';
import MovieCardReleaseDate from './movie-card-release-date';
import MovieCardGenres from './movie-card-genres';
import MovieCardRating from './movie-card-rating';

import ErrorBoundary from '../../services/error-boundary';

import './movie-card.scss';

type PathParamsType = {
    history: string
}

type PropsType = RouteComponentProps<PathParamsType> & {
    data: IMovieCardData
}

const MovieCard: React.FC<PropsType> = ({data, history}): React.ReactElement | null  => {
  if (!data) return null;

  const {title, poster_path, release_date, genres, vote_average, id} = data;
  const changeMovieID = (): void => {
    history.push(`/movie-page/${id}`)
  };

  return (
    <ErrorBoundary>
      <div className='d-flex flex-column h-100 movies-card' key={id}>
        <MoviePoster
          src={poster_path}
          className={'mb-3 movies-card__image'}
          clickHandler={changeMovieID}/>
        <div className='d-flex flex-column justify-content-between flex-grow-1'>
          <Row className={'space'}>
            <Title
              renderItem={title => (<h3 className='movie-card-title'>{title}</h3>)}>
              {title}
            </Title>
            <MovieCardReleaseDate date={release_date}/>
          </Row>
          <Row className={'space movies-card__bottom-row'}>
            <MovieCardGenres genres={genres}/>
            <MovieCardRating rating={vote_average}/>
          </Row>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default withRouter(MovieCard);