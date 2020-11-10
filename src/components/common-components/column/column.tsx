import React from 'react';

import './column.scss';

const Column: React.FC<{children: React.FC}> = ({children}): React.ReactElement => {
  return (
    <div className='column'>
      {children}
    </div>
  );
};

export default Column;