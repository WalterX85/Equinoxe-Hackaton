import React from 'react';
import { NavLink } from 'react-router-dom';

function Seasons() {
  return (
	<div className="linkcontainer">
		<nav className="navlinks">
			<NavLink className="link janvier" activeClassName="active" exact to="/seasons/janvier">
			</NavLink>

			<NavLink className="link fevrier" activeClassName="active" exact to="/seasons/fevrier">
			</NavLink>

			<NavLink className="link mars" activeClassName="active" exact to="/seasons/mars">
			</NavLink>

			<NavLink className="link avril" activeClassName="active" exact to="/seasons/avril">
			</NavLink>

			<NavLink className="link mai" activeClassName="active" exact to="/seasons/mai">
			</NavLink>

			<NavLink className="link juin" activeClassName="active" exact to="/seasons/juin">
			</NavLink>

			<NavLink className="link juillet" activeClassName="active" exact to="/seasons/juillet">
			</NavLink>

			<NavLink className="link aout" activeClassName="active" exact to="/seasons/aout">
			</NavLink>

			<NavLink className="link septembre" activeClassName="active" exact to="/seasons/septembre">
			</NavLink>

			<NavLink className="link octobre" activeClassName="active" exact to="/seasons/octobre">
			</NavLink>

			<NavLink className="link novembre" activeClassName="active" exact to="/seasons/novembre">
			</NavLink>
			
			<NavLink className="link decembre" activeClassName="active" exact to="/seasons/decembre">
			</NavLink>
		</nav>

   	</div>

    
        )
};

export default Seasons;