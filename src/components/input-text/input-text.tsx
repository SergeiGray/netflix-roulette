import React from 'react';
import {IInputTextProps} from '../../interfaces/interfaces';

import './input-text.scss';


const InputText =
  React.forwardRef<HTMLInputElement, IInputTextProps>((
    {value, valuesTransmitter, className}, ref): React.ReactElement => {
  const changeValue = (evt: React.SyntheticEvent): void => {
    const target = evt.target as HTMLInputElement;
    valuesTransmitter(target.value)
  };

  return <input
            ref={ref}
            type="text"
            className={`${className} component-input`}
            onChange={changeValue}
            value={value}/>
});

export default InputText;