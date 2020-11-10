import { MOVIES_COUNTER } from '../constants/constants';
import { IActionMoviesCounter } from '../interfaces/interfaces';

const actionMoviesCounter = (counter: number = 0): IActionMoviesCounter => ({
  type: MOVIES_COUNTER ,
  counter: counter
});



export default actionMoviesCounter;