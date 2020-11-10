import React from 'react';
import MoviesApi from './movies-api';
import mockData from './mock-data-for-movies-api';

const moviesApi = new MoviesApi();

global.fetch = jest.fn().mockImplementation(() => {
  return {
    ok: true,
    json: () => mockData,
  };
});

describe('MoviesApi component', () => {
  it('should call fetch', () => {
    moviesApi.getMoviesData();

    expect(global.fetch).toHaveBeenCalled();
  });

  it('should call fetch with given argument', () => {
    moviesApi.getMoviesData('/test');

    expect(global.fetch).toHaveBeenCalledWith('https://reactjs-cdp.herokuapp.com/test')
  });

  it('should return data that was mocking in fetch', () => {
    return moviesApi.getMoviesData().then( data => {
      expect(data).toEqual(mockData);
    });
  });

  it('should return Error if fetch return reject', () => {
    global.fetch = jest.fn().mockImplementation(() => {
      return {
        ok: false,
        json: () => mockData,
      };
    });

    return moviesApi.getMoviesData()
      .then( data => {
      expect(data).toEqual(mockData);
    })
      .catch( error => {
        expect(error.toString()).toEqual('Error: Could not fetch https://reactjs-cdp.herokuapp.comundefined');
      });
  });

  it('should when calling the method getMovies call fetch with embedded arguments', () => {
    moviesApi.getMovies();

    expect(global.fetch).toHaveBeenCalledWith('https://reactjs-cdp.herokuapp.com/movies?limit=21')
  });

  it('should when calling the method getSpecificMovie call fetch with embedded arguments', () => {
    moviesApi.getSpecificMovie(21);

    expect(global.fetch).toHaveBeenCalledWith('https://reactjs-cdp.herokuapp.com/movies/21')
  });
});