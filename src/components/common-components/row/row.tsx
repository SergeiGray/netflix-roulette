import React from 'react';
import { RowPropsType } from '../../../types/types';

import './row.scss';

const Row: React.FC<RowPropsType> = ({children, className}): React.ReactElement => {
  const styleComponent = `component-row ${className}`;
  const items =  React.Children.map(children, (item: React.ReactElement, index: number) => {
    return React.cloneElement(
      item,
      {
        key: index,
        className: `${item.props.className} component-row__item`
      }
    )
  });

  return (
    <div className={styleComponent}>
      {items}
    </div>
  );
};

Row.defaultProps = {
  className: ''
};

export default Row;