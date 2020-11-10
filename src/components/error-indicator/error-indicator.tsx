import React from 'react';

import './error-indicator.scss';
import countdown from './image/countdown.png';

const ErrorIndicator: React.FC = (): React.ReactElement => {
  return (
    <div className='error-indicator text-danger'>
      <img src={countdown} alt="Error"/>
      <span>An error occurred.</span>
      <span>The support team is already working on the fix.</span>
    </div>
  );
};

export default ErrorIndicator;