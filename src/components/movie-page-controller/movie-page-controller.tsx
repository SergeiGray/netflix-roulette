import React from 'react';
import {IMoviePageControllerProps} from '../../interfaces/interfaces';

import MoviePage from '../movie-page';
import ErrorMessage from '../error-message';
import Loader from '../loader';

import MoviesApi from '../../services/movies-api';
import MoviesService from '../../services/movies-service';
import withData from '../hoc-components/with-data';
import compose from '../hoc-components/compose';

const {getSpecificMovie} = new MoviesApi();
const {getSpecificMovieFromLocalStorage} = new MoviesService();

const MoviePageController: React.FC<IMoviePageControllerProps> = ({data, error}): React.ReactElement => {
  const page: React.ReactElement | null = data && !error ? <MoviePage data={data}/> : null;
  const loader: React.ReactElement | null = !data && !error ? <Loader/> : null;
  const errorMessage: React.ReactElement | null = error ? <ErrorMessage/> : null;

  return (
    <React.Fragment>
      {loader}
      {errorMessage}
      {page}
    </React.Fragment>
  );
};

const getMovieID = () => {
  return class extends React.PureComponent<{id: string}> {
    render() {
      const Wrapped = compose(
                        withData(getSpecificMovie.bind(null, this.props.id)),
                        withData(getSpecificMovieFromLocalStorage.bind(null, this.props.id)),
                      )
                      (MoviePageController);

      return <Wrapped {...this.props}/>
    };
  };
};

export default getMovieID();
