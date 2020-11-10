import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
  IMovieFormAddingControllerChangeMethods,
  IMovieFormAddingControllerChecksValue, IMovieFormAddingControllerChecksValues,
  IMovieFormAddingControllerMapDispatchToProps,
  IMovieFormAddingControllerProps,
  IMovieFormAddingPropsValue
} from '../../interfaces/interfaces';
import {ActionType} from '../../types/types'

import actionMoviesDataUpdate from '../../actions/action-movies-data-update';

import MovieFormAdding from '../movie-form-adding';
import MoviesService from '../../services/movies-service';
;

const {saveInLocalStorage: dataTransmitter} = new MoviesService();

const MovieFormAddingController: React.FC<IMovieFormAddingControllerProps> = (props): React.ReactElement => {
  const [data, setData] = useState<IMovieFormAddingPropsValue>({
    title: '',
    poster_path: '',
    genres: '',
    release_date: ''
  });
  const [error, setError] = useState<IMovieFormAddingControllerChecksValues>({
    status: false,
    items: []
  });
  const inputField = useRef<HTMLInputElement>(null);

  const focusInputField = (): void => {
    if (inputField.current) {
      inputField.current.focus()
    }
  };

  const changeTitle = (value: string): void => {
    setData( {
        ...data,
        title: value
    });
  };

  const changePosterPath = (value: string): void => {
    setData({
        ...data,
        poster_path: value
    });
  };

  const changeGenres = (value: string): void => {
    setData({
        ...data,
        genres: value
    });
  };

  const changeReleaseDate = (value: string): void => {
    setData({
        ...data,
        release_date: value
    });
  };

  const valueSender = (evt: SyntheticEvent): void => {
    evt.preventDefault();

    const error: IMovieFormAddingControllerChecksValues = checksValues(
      checksTitleValue(data.title),
      checksPosterPathValue(data.poster_path),
      checksGenresValue(data.genres),
      checksReleaseDateValue(data.release_date)
    );

    if (!error.status) {
      dataTransmitter(data);

      setData({
        title: '',
        poster_path: '',
        genres: '',
        release_date: ''
      });

      setError({
        status: false,
        items: []
      });

      props.changeStatusDataUpdate(Date.now());
    } else {
      setError({...error});
    }
  };

  const checksTitleValue = (value: string): IMovieFormAddingControllerChecksValue => {
    return value.trim().length === 0 ?
      {status: true,
        item: 'title'} :
      {status: false,
        item: ''} ;
  };

  const checksPosterPathValue = (value: string): IMovieFormAddingControllerChecksValue => {
    return value.match(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?\b\.jpg|.png$/gi) ?
      {status: false,
        item: ''} :
      {status: true,
        item: 'poster_path'};
  };

  const checksGenresValue = (value: string): IMovieFormAddingControllerChecksValue => {
    return value.match(/^\w+/gi) ?
      {status: false,
        item: ''} :
      {status: true,
        item: 'genres'};
  };

  const checksReleaseDateValue = (value: string): IMovieFormAddingControllerChecksValue => {
    return value.match(/^\d{4}-\d{2}-\d{2}/gi) ?
      {status: false,
        item: ''} :
      {status: true,
        item: 'release_date'};
  };

  const checksValues = (...values: Array<IMovieFormAddingControllerChecksValue>): IMovieFormAddingControllerChecksValues => {
    return values.reduce( (acc: IMovieFormAddingControllerChecksValues, check: IMovieFormAddingControllerChecksValue) => {
              if (check.status) {
                acc.status = true;
              }

              acc.items.push(check.item);

              return acc;
            }, {status: false, items: []});
  };

  const changeMethods: IMovieFormAddingControllerChangeMethods = {
    title: changeTitle,
    poster_path: changePosterPath,
    genres: changeGenres,
    release_date: changeReleaseDate
  };

  useEffect(() => {focusInputField()}, []);

  return (
    <MovieFormAdding
      ref={inputField}
      value={data}
      error={error}
      valuesTransmitters={changeMethods}
      valueSender={valueSender}
    />
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): IMovieFormAddingControllerMapDispatchToProps => {
  const changeStatusDataUpdate = bindActionCreators(actionMoviesDataUpdate, dispatch);

  return {changeStatusDataUpdate};
};

export default connect(null, mapDispatchToProps)(MovieFormAddingController);