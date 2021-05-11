import React from 'react';
import { NavLink } from 'react-router-dom';
import cssHeader from './css/cssHeader.css';

const Header = () => (
    <header className="header">
        <div className="headercomp">
        <nav className="navlist">
          <NavLink className="link" activeClassName="active" exact to="/">
            Home
          </NavLink>
          <h1>EQUINOXE</h1>
          <NavLink className="link" activeClassName="active" exact to="/seasons">
            Seasons
          </NavLink>
        </nav>
        </div>
    </header>
  );

export default Header;