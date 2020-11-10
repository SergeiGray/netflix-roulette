import { MOVIES_DATA_UPDATE } from '../constants/constants';
import { IActionMoviesDataUpdate } from '../interfaces/interfaces';

const actionMoviesDataUpdate = (date: number): IActionMoviesDataUpdate => ({
  type: MOVIES_DATA_UPDATE,
  date: date,
});

export default actionMoviesDataUpdate;