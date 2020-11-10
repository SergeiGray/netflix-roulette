import { MOVIES_DATA_LOADING_ERROR } from '../constants/constants';
import { IActionMoviesDataLoadingError } from '../interfaces/interfaces';

const actionMoviesDataLoadingError = (status: boolean): IActionMoviesDataLoadingError => ({
  type: MOVIES_DATA_LOADING_ERROR,
  status: status,
});

export default actionMoviesDataLoadingError;