import React from 'react';
import {IMovieFormAddingProps} from '../../interfaces/interfaces';

import Title from '../common-components/title';
import Row from '../common-components/row';
import InputText from '../input-text';
import ButtonBig from '../button-big';

import './movie-form-adding.scss';

const MovieFormAdding =
  React.forwardRef<HTMLInputElement, IMovieFormAddingProps>(({value, error, valuesTransmitters, valueSender}, ref) => {
  const inputErrorTitle: string = error.items.includes('title') ? 'error' : '';
  const inputErrorPosterPath: string = error.items.includes('poster_path') ? 'error' : '';
  const inputErrorReleaseDate: string = error.items.includes('release_date') ? 'error' : '';
  const inputErrorGenres: string = error.items.includes('genres') ? 'error' : '';

  return (
    <form className='container movie-form-adding'>
      <Row className={'mb-4'}>
        <Title
          renderItem={ title => (<h1 className={'top-part-title'}>{title}</h1>)}>
          Add your movie
        </Title>
      </Row>
      <Row className={'fix wrap mb-4'}>
        <label className=' movie-form-adding__label'>
          <span>Enter the name of the movie. <br/> Input format "Name of film"</span>
          <InputText
            ref={ref}
            value={value.title}
            valuesTransmitter={valuesTransmitters.title}
            className={inputErrorTitle}/>
            <span className='movie-form-adding__error-message'>This field is filled in incorrectly.</span>
        </label>
        <label className=' movie-form-adding__label'>
          <span>Enter the poster url of the movie. <br/> Input format "https://image.tmdb.org/movie_poster.jpg"</span>
          <InputText
            value={value.poster_path}
            valuesTransmitter={valuesTransmitters.poster_path}
            className={inputErrorPosterPath}/>
            <span className='movie-form-adding__error-message'>This field is filled in incorrectly.</span>
        </label>
      </Row>
      <Row className={'fix wrap'}>
        <label className='movie-form-adding__label'>
          <span>Enter the release date of the movie. <br/> Input format "2020-02-02"</span>
          <InputText
            value={value.release_date}
            valuesTransmitter={valuesTransmitters.release_date}
            className={inputErrorReleaseDate}/>
            <span className='movie-form-adding__error-message'>This field is filled in incorrectly.</span>
        </label>
        <label className='movie-form-adding__label'>
          <span>Enter the genres of the movie. <br/> Input format "Comedy"</span>
          <InputText
            value={value.genres}
            valuesTransmitter={valuesTransmitters.genres}
            className={inputErrorGenres}/>
            <span className='movie-form-adding__error-message'>This field is filled in incorrectly.</span>
        </label>
        <ButtonBig
          name={'Add'}
          className={'align-self-end'}
          clickHandler={valueSender}/>
      </Row>
    </form>
  );
});

export default MovieFormAdding;