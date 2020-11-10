import reducer from './reducer';
import store from '../store/store';

import actionMoviesCounter from '../actions/action-movies-counter';
import actionMoviesData from '../actions/action-movies-data';
import actionMoviesDataClear from '../actions/action-movies-data-clear';
import actionMoviesDataLoadingError from '../actions/action-movies-data-loading-error';
import actionMoviesDataUpdate from '../actions/action-movies-data-update';
import actionMoviesServices from '../actions/action-movies-services';
import actionSearchStatus from '../actions/action-search-status';
import actionSearchValue from '../actions/action-search-value';
import actionSortStatus from '../actions/action-sort-status';

describe('Reducer', () => {
  it('should return the initial state if the action is not defined', () => {
    const initialState = store();
    const action = {type: 'TEST'};

    expect(reducer(undefined, action)).toEqual(initialState);
  });

  it('should return the changed state if the action actionMoviesCounter is defined', () => {
    const action = actionMoviesCounter(20);
    const newState = reducer(undefined, action);

    expect(newState.moviesCounter).toEqual(action.counter);
  });

  it('should return the changed state if the action actionMoviesData is defined', () => {
    const action = actionMoviesData(20);
    const newState = reducer(undefined, action);

    expect(newState.moviesData).toEqual(action.data);
  });

  it('should return the changed state if the action actionMoviesDataClear is defined', () => {
    const action = actionMoviesDataClear();
    const newState = reducer(undefined, action);

    expect(newState.moviesData).toEqual(null);
  });

  it('should return the changed state if the action actionMoviesDataLoadingError is defined', () => {
    const action = actionMoviesDataLoadingError(true);
    const newState = reducer(undefined, action);

    expect(newState.moviesDataLoadingError).toEqual(true);
  });

  it('should return the changed state if the action actionMoviesDataUpdate is defined', () => {
    const action = actionMoviesDataUpdate(20);
    const newState = reducer(undefined, action);

    expect(newState.moviesDataUpdate).toEqual(20);
  });

  it('should return the changed state if the action actionSearchStatus is defined', () => {
    const action = actionSearchStatus(true);
    const newState = reducer(undefined, action);

    expect(newState.searchStatus).toEqual(true);
  });

  it('should return the changed state if the action actionSearchValue is defined', () => {
    const action = actionSearchValue(true);
    const newState = reducer(undefined, action);

    expect(newState.searchValue).toEqual(true);
  });

  it('should return the changed state if the action actionSortStatus is defined', () => {
    const action = actionSortStatus(true);
    const newState = reducer(undefined, action);

    expect(newState.sortStatus).toEqual(true);
  });

  it('should call the transmitted callback in actionMoviesServices', () => {
    const mockCallback = jest.fn().mockResolvedValueOnce();
    const actionForThunk = actionMoviesServices(mockCallback);
    actionForThunk((action) => reducer(undefined, action));

    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  it('should return the changed state if the action actionMoviesServices is defined', done => {
    const getState = () => ({moviesData: [21]});
    const data = {data: [20]};
    const getProperty = 'data';

    const getData = () => Promise.resolve(data);
    const actionForThunk = actionMoviesServices(getData, getProperty);

    const dispatchCallback = (action) => {
      expect(action).toEqual({"data": [20, 21], "type": "MOVIES_DATA"});
      done();
    };

    actionForThunk(dispatchCallback, getState);
  });
});