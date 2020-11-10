import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import TopPart from '../top-part';
import ControlPanel from '../control-panel';
import Movies from '../movies';
import Footer from '../footer';
import ErrorBoundary from '../../services/error-boundary';

import './app.scss';

const App: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <div className='container-fluid p-0'>
        <ErrorBoundary>
          <TopPart/>
        </ErrorBoundary>
        <ErrorBoundary>
          <ControlPanel/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Movies/>
        </ErrorBoundary>
        <Footer/>
      </div>
   </Router>
  );
};

export default App;