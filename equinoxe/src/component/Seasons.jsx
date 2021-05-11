import React from 'react';
import { NavLink } from 'react-router-dom';

function Seasons() {
  return (
		<>
		<nav>
	<NavLink className="link january" activeClassName="active" exact to="/seasons/janvier">
		Janvier
	</NavLink>
	<NavLink className="link fevrier" activeClassName="active" exact to="/seasons/fevrier">
		Février
	</NavLink>
	<NavLink className="link mars" activeClassName="active" exact to="/seasons/mars">
		Mars
	</NavLink>
	<NavLink className="link avril" activeClassName="active" exact to="/seasons/avril">
		Avril
	</NavLink>
	<NavLink className="link mai" activeClassName="active" exact to="/seasons/mai">
		Mai
	</NavLink>
	<NavLink className="link juin" activeClassName="active" exact to="/seasons/juin">
		Juin
	</NavLink>
	<NavLink className="link juillet" activeClassName="active" exact to="/seasons/juillet">
		Juillet
	</NavLink>
	<NavLink className="link aout" activeClassName="active" exact to="/seasons/aout">
		Aout
	</NavLink>
	<NavLink className="link septembre" activeClassName="active" exact to="/seasons/septembre">
		Septembre
	</NavLink>
	<NavLink className="link octobre" activeClassName="active" exact to="/seasons/octobre">
		Octobre
	</NavLink>
	<NavLink className="link novembre" activeClassName="active" exact to="/seasons/novembre">
		Novembre
	</NavLink>
	<NavLink className="link decembre" activeClassName="active" exact to="/seasons/decembre">
		Décembre
	</NavLink>
	</nav>

    </>

    
        )
};

export default Seasons;