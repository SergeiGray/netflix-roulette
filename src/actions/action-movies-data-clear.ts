import { MOVIES_DATA_CLEAR } from '../constants/constants';
import { IActionMoviesDataClear } from '../interfaces/interfaces';


const actionMoviesDataClear = (): IActionMoviesDataClear => ({
  type: MOVIES_DATA_CLEAR,
});

export default actionMoviesDataClear;