import actionMoviesData from './action-movies-data';
import actionMoviesDataLoadingError from './action-movies-data-loading-error';
import {IActionMoviesData, IActionMoviesDataLoadingError} from '../interfaces/interfaces';
import {TResponseReturnedByAPI} from '../types/types';

const actionMoviesServices = (getData: () => TResponseReturnedByAPI, getProperty?: string) => {
  return (dispatch: (action: IActionMoviesData | IActionMoviesDataLoadingError) => void, getState: () => any) => {
    getData()
      .then( (data: any) => {
        const {moviesData: oldData} = getState();
        let property = getProperty ? data[getProperty] : data;

        if (oldData) {
          property = [...property, ...oldData];
        }

        dispatch(actionMoviesData(property));
      })
      .catch( () => {
         dispatch(actionMoviesDataLoadingError(true));
      });
  }
};

export default actionMoviesServices;