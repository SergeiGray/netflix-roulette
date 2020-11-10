import React, {Component} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import {
  IMovieCardsControllerMapDispatchToProps,
  IMovieCardsControllerMapStateToProps,
  IMovieCardsControllerProps,
  IState
} from '../../interfaces/interfaces';
import { ActionType, TResponseReturnedByAPI } from '../../types/types';

import actionMoviesCounter from '../../actions/action-movies-counter';
import actionMoviesServices from '../../actions/action-movies-services';
import actionMoviesDataClear from '../../actions/action-movies-data-clear';

import MovieCards from '../movie-cards';
import ErrorMessage from '../error-message';
import NoFoundMessage from '../no-found-message';
import Loader from '../loader';

import MoviesApi from '../../services/movies-api';
import MoviesService from '../../services/movies-service';
import withSearch from '../hoc-components/with-search';
import withSort from '../hoc-components/with-sort';
import compose from '../hoc-components/compose';

const {getMovies} = new MoviesApi();
const {getFromLocalStorage} = new MoviesService();

class MovieCardsController extends Component<IMovieCardsControllerProps, {}> {
  getNewData() {
    this.props.getData(getMovies, 'data');
    this.props.getData(getFromLocalStorage);
  }

  componentDidMount() {
    this.getNewData();
  }

  componentDidUpdate(prevProps: IMovieCardsControllerProps) {
    if (this.props.updateDataStatus !== prevProps.updateDataStatus) {
      this.props.clearMoviesData();
      this.getNewData();
    }
  }

  render() {
    const {data, error, transferNumberOfMovies} = this.props;

    let cards: React.ReactElement | null = data && !error ? <MovieCards data={data}/> : null;
    const loader: React.ReactElement | null = !data && !error ? <Loader/> : null;
    const errorMessage: React.ReactElement | null = error ? <ErrorMessage/> : null;
    const noFoundMessage: React.ReactElement | null = data && !error && data.length === 0 ? <NoFoundMessage/> : null;

    data && !error ? transferNumberOfMovies(data.length) : transferNumberOfMovies(0);

    return (
      <React.Fragment>
        {loader}
        {errorMessage}
        {noFoundMessage}
        {cards}
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state: IState): IMovieCardsControllerMapStateToProps => ({
  data: state.moviesData,
  error: state.moviesDataLoadingError,
  updateDataStatus: state.moviesDataUpdate,
  searchStatus: state.searchStatus,
  searchValue: state.searchValue,
  sortStatus: state.sortStatus,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): IMovieCardsControllerMapDispatchToProps => {
  const transferNumberOfMovies: (arg: number) => void = bindActionCreators(actionMoviesCounter, dispatch);
  const getData: (getData: () => TResponseReturnedByAPI, getProperty?: string) => void =
    bindActionCreators(actionMoviesServices, dispatch);
  const clearMoviesData: () => void = bindActionCreators(actionMoviesDataClear, dispatch)

  return {transferNumberOfMovies, getData, clearMoviesData};
};

export default compose(
                  connect(mapStateToProps, mapDispatchToProps),
                  withSearch,
                  withSort,
                )(MovieCardsController);
