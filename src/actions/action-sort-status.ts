import { SORT_STATUS } from '../constants/constants';
import { IActionSortStatus } from '../interfaces/interfaces';

const actionSortStatus = (status: string): IActionSortStatus => ({
  type: SORT_STATUS,
  status: status,
});

export default actionSortStatus;