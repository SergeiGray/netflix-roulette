import { SEARCH_VALUE } from '../constants/constants';
import { IActionSearchValue } from '../interfaces/interfaces';

const actionSearchValue = (value: string): IActionSearchValue => ({
  type: SEARCH_VALUE,
  value: value,
});

export default actionSearchValue;