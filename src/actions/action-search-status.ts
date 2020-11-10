import { SEARCH_STATUS } from '../constants/constants';
import { IActionSearchStatus } from '../interfaces/interfaces';

const actionSearchStatus = (status: string): IActionSearchStatus => ({
  type: SEARCH_STATUS,
  status: status,
});

export default actionSearchStatus;