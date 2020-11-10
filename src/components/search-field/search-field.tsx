import React, { useState, useEffect, useRef, Ref, SyntheticEvent } from 'react';
import { SearchFieldPropsType } from '../../types/types';

import Row from '../common-components/row';
import InputText from '../input-text';
import ButtonBig from '../button-big';

import './search-field.scss';

const SearchField: React.FC<SearchFieldPropsType> = ({changeSearchValue}): React.ReactElement => {
  const [label, setLabel] = useState<string>('');
  const inputField = useRef<HTMLInputElement>(null);

  const focusInputField = (): void =>  {
    if (inputField.current) {
      inputField.current.focus()
    }
  };

  const changeInputValue = (value: string): void => setLabel(value);

  const sendInputValue = (evt: SyntheticEvent): void => {
    evt.preventDefault();

    changeSearchValue(label);
    setLabel('');
  };

  useEffect(() => {focusInputField()}, []);

  return (
    <Row className={'fix'}>
      <InputText
        ref={inputField}
        value={label}
        valuesTransmitter={changeInputValue}
        className={'col-8'}/>
      <ButtonBig
        name={'Search'}
        clickHandler={sendInputValue}/>
    </Row>
  );
};

export default SearchField;
