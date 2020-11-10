import React from 'react';
import {Link} from 'react-router-dom';

import Row from '../common-components/row';
import Logo from '../logo';
import SearchButtonMagnifier from '../search-button-magnifier';
import MovieFormAddingButton from '../movie-form-adding-button/movie-form-adding-button';

import './header.scss';

const Header: React.FC  = (): React.ReactElement => {
  return (
    <Row className={'space align-center header'}>
      <Link to='/'>
        <Logo/>
      </Link>
      <div>
        <Link to='/search/'>
          <SearchButtonMagnifier/>
        </Link>
        <Link to='/adding/'>
          <MovieFormAddingButton/>
        </Link>
      </div>
    </Row>
  );
};

export default Header;