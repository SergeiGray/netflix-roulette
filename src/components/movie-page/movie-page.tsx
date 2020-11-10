import React from 'react';
import {IMoviePageData} from '../../interfaces/interfaces';

import MoviePoster from '../movie-poster';
import Title from '../common-components/title';
import MoviePageVote from './movie-page-vote';
import MoviePageTagline from './movie-page-tagline';
import MoviePageDate from './movie-page-date';
import MoviePageRuntime from './movie-page-rutime';
import MoviePageOverview from './movie-page-overview';

import './movie-page.scss';

const MoviePage: React.FC<{data: IMoviePageData}> = ({data}): React.ReactElement => {
  return (
    <div className='d-flex flex-row justify-content-between mt-5 mb-5 movie-page'>
      <div className='mr-5'>
        <MoviePoster src={data.poster_path} className={'movie-page__image'}/>
      </div>
      <div>
        <div className='row d-flex align-items-start'>
          <Title
            renderItem={ title => (<h2 className='movie-page__title'>{title}</h2>)}>
            {data.title}
          </Title>
          <MoviePageVote vote={data.vote_average}/>
        </div>
        <div className='row'>
          <MoviePageTagline tagline={data.tagline}/>
        </div>
        <div className='row'>
          <MoviePageDate date={data.release_date}/>
          <MoviePageRuntime runtime={data.runtime}/>
        </div>
        <div className='row'>
          <MoviePageOverview overview={data.overview}/>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;