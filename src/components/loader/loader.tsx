import React from 'react';

import './loader.scss';

const Loader: React.FC = (): React.ReactElement => {
  const petals: Array<React.ReactElement> = Array.from( {length: 12}, () => <div/>)

  return (
    <div className='spinner'>
      <div className={`lds-spinner`}>
        {petals}
      </div>
    </div>);
};

export default Loader;