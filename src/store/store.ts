import { InitialStateType } from '../types/types';

const store = (): InitialStateType => ({
  moviesData: null,
  moviesDataLoadingError: false,
  moviesDataUpdate: null,
  moviesCounter: 0,
  sortStatus: 'release_date',
  searchStatus: 'title',
  searchValue: '',
  valuesOfSearchSwitch: {
    title: 'Search by',
    markOfButtons:['title', 'genres'],
    namesOfButtons:['Title', 'Genres']
  },
  valuesOfSortSwitch: {
    title: 'Sort by',
    markOfButtons:['release_date', 'vote_average'],
    namesOfButtons: ['Release date', 'Rating']
  },
});

export default store;