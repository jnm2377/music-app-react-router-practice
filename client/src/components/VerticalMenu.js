import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/VerticalMenu.css';

const VerticalMenu = ({ albums }) => (
  <div className='ui secondary vertical menu'>
    <div className='header item'>
      Albums
    </div>
    {/* Render album menu here */}
  </div>
);

export default VerticalMenu;
