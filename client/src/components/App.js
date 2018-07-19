import React from 'react';
import {Route} from 'react-router-dom';

import TopBar from './TopBar';
import AlbumsContainer from './AlbumsContainer';

import '../styles/App.css';

const App = () => (
  <div className='ui grid'>
    <TopBar />
    <div className='spacer row' />
    <div className='row'>
      {/* Instead of rendering component here, we use Route to render component*/}
      <Route path='/albums' component={AlbumsContainer}/>
    </div>
  </div>
);

export default App;
