import React from 'react';

import './list.scss';

const List: React.FC<{children: Array<React.ReactElement>}> = ( { children } ): React.ReactElement => {
  const items: Array<React.ReactElement> =  React.Children.map( children,
    ( (child: React.ReactElement) => {
      return (
        <li className='list-group-item border-0 p-0 ml-1 mr-1 mb-4 bg-transparent' key={child.props.data.id}>
          {child}
        </li>
      )}
      )
  );

  return (
    <ul className='container d-flex flex-wrap justify-content-around list-group list-group-horizontal movies-list'>
      {items}
    </ul>
  );
};

export default List;