import React from 'react';
import {Route} from 'react-router-dom';

import Header from '../header';
import Title from '../common-components/title';
import Search from '../search';
import MoviePageController from '../movie-page-controller';
import MovieFormAddingController from '../movie-form-adding-controller';

import './top-part.scss';

const TopPart: React.FC  = (): React.ReactElement => {
  return (
      <div className='container-fluid d-flex flex-column top-part'>
        <div className='top-part__background'/>
        <div className='pl-5 pr-5'>
          <Header/>
        </div>
        <div className='container d-flex flex-grow-1'>
          <Route path='/' exact render={() => {
            return (
              <Title renderItem={ title => {
                return (<h1 className={'top-part-title w-100 d-flex justify-content-center align-items-center'}>{title}</h1>)
              }}>
                Welcome to Netflix Roulette
              </Title>
            )
          }}/>
          <Route path='/search' render={() => <Search/>}/>
          <Route path='/adding' render={() => <MovieFormAddingController/>}/>
          <Route path='/movie-page/:id' render={({match}) => {
            const id = match.params.id
            return <MoviePageController id={id}/>;
          }}/>
        </div>
      </div>
  );
};

export default TopPart;