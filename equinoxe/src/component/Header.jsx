import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header className="header">
      <div className="gridstyle">
        <h1>WELCOME TO EQUINOXE</h1>
      </div>
      <div className="thefourth">
        <nav className="navlist">
  
          <NavLink className="link" activeClassName="active" exact to="/">
            Home
          </NavLink>
  
          <NavLink className="link" activeClassName="active" exact to="/seasons">
            Seasons
          </NavLink>
        </nav>
      </div>
    </header>
  );

export default Header;