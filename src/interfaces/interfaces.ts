import {
  MOVIES_COUNTER,
  MOVIES_DATA,
  MOVIES_DATA_CLEAR,
  MOVIES_DATA_LOADING_ERROR,
  MOVIES_DATA_UPDATE, SEARCH_STATUS, SEARCH_VALUE, SORT_STATUS
} from '../constants/constants';
import { SyntheticEvent } from 'react';
import { TResponseReturnedByAPI } from '../types/types';

// Components
interface IMovieData {
  title: string
  poster_path: string
  vote_average: number
  release_date: string
}

export interface IMovieCardData extends IMovieData {
  genres: string | Array<string>
  id: number
}

export interface IMoviePageData extends IMovieData {
  tagline: string
  runtime: number
  overview: string
}

export interface IMovieFormAddingPropsValue extends Omit<IMovieData, 'vote_average'> {
  genres: string
}

interface ISwitch {
  title: string
  markOfButtons: Array<string>
  namesOfButtons: Array<string>
}

export interface IMovieFormAddingControllerChangeMethods {
  title: (value: string) => void
  poster_path: (value: string) => void
  genres: (value: string) => void
  release_date: (value: string) => void
}

export interface ISearchMapStateToProps {
  valuesOfSearchSwitch: ISwitch
  searchStatus: string
}

export interface IControlPanelMapStateToProps {
  valuesOfSortSwitch: ISwitch
  sortStatus: string
}

export interface IControlPanelProps extends
  IControlPanelMapStateToProps,
  IControlPanelMapDispatchToProps {}

export interface IMovieCardsControllerMapStateToProps {
  data: Array<IMovieCardData> | null
  error: boolean
  updateDataStatus: number | null
  searchStatus: string
  searchValue: string
  sortStatus: string
}

export interface IWithDataHOCProps extends IMovieCardsControllerMapStateToProps{}

export interface IMovieCardsControllerProps extends
  IMovieCardsControllerMapStateToProps,
  IMovieCardsControllerMapDispatchToProps {}

export interface IMoviePageControllerProps {
  data: IMoviePageData
  error: boolean
}

export interface IInputTextProps {
  value: string
  valuesTransmitter: (value: string) => void
  className?: string
}

export interface IMovieFormAddingProps {
  value: IMovieFormAddingPropsValue
  error: IMovieFormAddingControllerChecksValues
  valuesTransmitters: IMovieFormAddingControllerChangeMethods
  valueSender: (evt: SyntheticEvent) => void
}

export interface IMovieFormAddingControllerProps extends IMovieFormAddingControllerMapDispatchToProps{}

export interface IMovieFormAddingControllerChecksValue {
  status: boolean
  item: string
}

export interface IMovieFormAddingControllerChecksValues {
  status: boolean
  items: Array<string>
}

// Map Dispatch
export interface ISearchMapDispatchToProps {
  changeSearchStatus: (arg: string) => void
  changeSearchValue: (arg: string) => void
}

export interface IControlPanelMapDispatchToProps {
  changeSortStatus: (arg: string) => void
}

export interface IMovieCardsControllerMapDispatchToProps {
  transferNumberOfMovies: (arg: number) => void
  getData: (getData: () => TResponseReturnedByAPI, getProperty?: string) => void
  clearMoviesData: () => void
}

export interface IMovieFormAddingControllerMapDispatchToProps {
  changeStatusDataUpdate: (date: number) => void
}

// Redux State
export interface IState {
  moviesData: Array<IMovieCardData> | null
  moviesDataLoadingError: boolean
  moviesDataUpdate: number | null
  moviesCounter: number
  sortStatus: string
  searchStatus: string
  searchValue: string
  valuesOfSearchSwitch: ISwitch
  valuesOfSortSwitch: ISwitch
}

// Redux Actions
export interface IActionMoviesCounter {
  readonly type: typeof MOVIES_COUNTER
  counter: number
}

export interface IActionMoviesData {
  readonly type: typeof MOVIES_DATA
  data: Array<object>
}

export interface IActionMoviesDataClear {
  readonly type: typeof MOVIES_DATA_CLEAR
}

export interface IActionMoviesDataLoadingError {
  readonly type: typeof MOVIES_DATA_LOADING_ERROR
  status: boolean
}

export interface IActionMoviesDataUpdate {
  readonly type: typeof MOVIES_DATA_UPDATE
  date: number
}

export interface IActionSearchStatus {
  readonly type: typeof SEARCH_STATUS
  status: string
}

export interface IActionSearchValue {
  readonly type: typeof SEARCH_VALUE
  value: string
}

export interface IActionSortStatus {
  readonly type: typeof SORT_STATUS
  status: string
}