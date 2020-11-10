import { MOVIES_DATA } from '../constants/constants';
import { IActionMoviesData } from '../interfaces/interfaces';

const actionMoviesData = (data: Array<object>): IActionMoviesData => ({
  type: MOVIES_DATA,
  data: data,
});

export default actionMoviesData;