import React from 'react';

import Logo from '../logo';

import './footer.scss';

const Footer: React.FC  = (): React.ReactElement => {
  return (
    <div className='d-flex justify-content-center align-items-center footer'>
      <Logo />
    </div>
  );
};

export default Footer;