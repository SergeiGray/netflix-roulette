import store from '../store/store';
import { ActionType, InitialStateType } from '../types/types';

const initialState = store();

const reducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'MOVIES_COUNTER':
      return {...state, moviesCounter: action.counter};
    case 'MOVIES_DATA_UPDATE':
      return {...state, moviesDataUpdate: action.date};
    case 'SORT_STATUS':
      return {...state, sortStatus: action.status};
    case 'SEARCH_STATUS':
      return {...state, searchStatus: action.status};
    case 'SEARCH_VALUE':
      return {...state, searchValue: action.value};
    case 'MOVIES_DATA':
      return {...state, moviesData: action.data};
    case 'MOVIES_DATA_LOADING_ERROR':
      return {...state, moviesDataLoadingError: action.status};
    case 'MOVIES_DATA_CLEAR':
      return {...state,  moviesData: null};
    default:
      return state;
  }
};

export default reducer;