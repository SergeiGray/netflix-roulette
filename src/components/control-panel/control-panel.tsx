import React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect} from 'react-redux';
import {
  IActionSortStatus,
  IControlPanelMapDispatchToProps,
  IControlPanelMapStateToProps,
  IControlPanelProps
} from '../../interfaces/interfaces';
import { ActionType, InitialStateType } from '../../types/types';

import actionSortStatus from '../../actions/action-sort-status';

import MoviesCounter from '../movies-counter';
import Switch from '../common-components/switch';
import Row from '../common-components/row';

import './control-panel.scss';

const ControlPanel: React.FC<IControlPanelProps> =
  ({ valuesOfSortSwitch, sortStatus, changeSortStatus }): React.ReactElement => {
  return (
    <div className='container-fluid control-panel'>
      <div className='container'>
        <Row className={'space align-center'}>
          <MoviesCounter/>
          <Switch
            active={sortStatus}
            title={valuesOfSortSwitch.title}
            markOfButtons={valuesOfSortSwitch.markOfButtons}
            namesOfButtons={valuesOfSortSwitch.namesOfButtons}
            transferOfActiveButtonValue={changeSortStatus}/>
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (state: InitialStateType): IControlPanelMapStateToProps => ({
  sortStatus: state.sortStatus,
  valuesOfSortSwitch: state.valuesOfSortSwitch,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionType>): IControlPanelMapDispatchToProps => {
  const changeSortStatus: (arg: string) => void = bindActionCreators(actionSortStatus, dispatch);

  return {
    changeSortStatus
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);