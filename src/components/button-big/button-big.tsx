import React from 'react';
import { ButtonBigPropsType } from '../../types/types';

import './button-big.scss';

const ButtonBig: React.FC<ButtonBigPropsType> = ({name, className, clickHandler}): React.ReactElement  => {
  return <button
          className={`${className} btn btn-danger component-button-big`}
          onClick={clickHandler}>
          {name}
        </button>
};

export default ButtonBig;