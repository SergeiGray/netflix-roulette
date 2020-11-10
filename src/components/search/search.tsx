import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';
import { ISearchMapDispatchToProps, ISearchMapStateToProps } from '../../interfaces/interfaces';
import { ActionType, InitialStateType, SearchPropsType } from '../../types/types';

import actionSearchStatus from '../../actions/action-search-status';
import actionSearchValue from '../../actions/action-search-value';

import SearchField from '../search-field';
import Switch from '../common-components/switch';
import Title from '../common-components/title';
import Row from '../common-components/row';

import './search.scss';

const Search: React.FC<SearchPropsType> = (
  { valuesOfSearchSwitch, searchStatus, changeSearchValue, changeSearchStatus }): React.ReactElement => {
  return (
    <form className='container search'>
      <Row className={'mb-5'}>
        <Title
          renderItem={ title => (<h1 className={'top-part-title'}>{title}</h1>)}>
          Find your movie
        </Title>
      </Row>
      <Row className={'mb-4'}>
        <SearchField changeSearchValue={changeSearchValue}/>
      </Row>
      <Switch
        active={searchStatus}
        title={valuesOfSearchSwitch.title}
        markOfButtons={valuesOfSearchSwitch.markOfButtons}
        namesOfButtons={valuesOfSearchSwitch.namesOfButtons}
        transferOfActiveButtonValue={changeSearchStatus} />
    </form>
  );
};

const mapStateToProps = (state: InitialStateType): ISearchMapStateToProps => ({
  searchStatus: state.searchStatus,
  valuesOfSearchSwitch: state.valuesOfSearchSwitch,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): ISearchMapDispatchToProps => {
  const changeSearchStatus: (arg: string) => void = bindActionCreators(actionSearchStatus, dispatch);
  const changeSearchValue: (arg: string) => void = bindActionCreators(actionSearchValue, dispatch);

  return {
    changeSearchStatus,
    changeSearchValue
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);