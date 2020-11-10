import React from 'react';
import { TitlePropsType } from '../../../types/types';

import './title.scss';


const Title: React.FC<TitlePropsType> = ({renderItem, children}): React.ReactElement => {
  const element = renderItem(children);

  return (
    element
  );
};

export default Title;