import React, { SyntheticEvent } from 'react';

import {
  IActionMoviesCounter,
  IActionMoviesData,
  IActionMoviesDataClear,
  IActionMoviesDataLoadingError,
  IActionMoviesDataUpdate,
  IActionSearchStatus,
  IActionSearchValue,
  IActionSortStatus
} from '../interfaces/interfaces';

// Components
export type ButtonBigPropsType = {
  name: string
  clickHandler: (evt: SyntheticEvent) => void
  className?: string
}

export type SwitchPropsType = {
  active: string
  title: string
  namesOfButtons: Array<string>
  markOfButtons: Array<string>
  transferOfActiveButtonValue: (arg: string) => void
}

export type TitleChildrenPropsType = React.ReactElement | string

export type TitlePropsType = {
  renderItem: (arg: TitleChildrenPropsType) => React.ReactElement
  children: TitleChildrenPropsType
}

export type SearchFieldPropsType = {
  changeSearchValue: (label: string) => void
}

// Store
export type InitialStateValuesOfSwitchType = {
  title: string
  markOfButtons: Array<string>
  namesOfButtons: Array<string>
}

export type InitialStateType = {
  moviesData: Array<object> | null
  moviesDataLoadingError: boolean
  moviesDataUpdate: number | null
  moviesCounter: number
  sortStatus: string
  searchStatus: string
  searchValue: string
  valuesOfSearchSwitch: InitialStateValuesOfSwitchType
  valuesOfSortSwitch: InitialStateValuesOfSwitchType
}

export type TResponseReturnedByAPI = Promise<{[key: string]: any}>

export type SearchPropsType = {
  searchStatus: string
  changeSearchValue: (value: string) => void
  changeSearchStatus: (value: string) => void
  valuesOfSearchSwitch: InitialStateValuesOfSwitchType
}

export type RowPropsType = {
  children: Array<React.ReactElement> | React.ReactElement
  className?: string
}

export type MoviePosterPropsType = {
  src: string
  className?: string
  clickHandler?: () => void
}



// Actions
export type ActionType =
  IActionMoviesCounter |
  IActionMoviesData |
  IActionMoviesDataClear |
  IActionMoviesDataLoadingError |
  IActionMoviesDataUpdate |
  IActionSearchStatus |
  IActionSearchValue |
  IActionSortStatus

