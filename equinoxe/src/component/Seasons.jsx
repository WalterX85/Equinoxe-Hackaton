import React from 'react';
import { NavLink } from 'react-router-dom';

function Seasons({ janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre }) {

  if (janvier === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (fevrier === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (mars === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (avril === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (mai === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (juin === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (juillet === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (aout === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (septembre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (octobre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (novembre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
  else if (decembre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }

  return (
	<div className="linkcontainer">
		<nav className="navlinks">
			<NavLink className="seasons-link janvier" activeClassName="active" exact to="/seasons/janvier">
			</NavLink>

			<NavLink className="seasons-link fevrier" activeClassName="active" exact to="/seasons/fevrier">
			</NavLink>

			<NavLink className="seasons-link mars" activeClassName="active" exact to="/seasons/mars">
			</NavLink>

			<NavLink className="seasons-link avril" activeClassName="active" exact to="/seasons/avril">
			</NavLink>

			<NavLink className="seasons-link mai" activeClassName="active" exact to="/seasons/mai">
			</NavLink>

			<NavLink className="seasons-link juin" activeClassName="active" exact to="/seasons/juin">
			</NavLink>

			<NavLink className="seasons-link juillet" activeClassName="active" exact to="/seasons/juillet">
			</NavLink>

			<NavLink className="seasons-link aout" activeClassName="active" exact to="/seasons/aout">
			</NavLink>

			<NavLink className="seasons-link septembre" activeClassName="active" exact to="/seasons/septembre">
			</NavLink>

			<NavLink className="seasons-link octobre" activeClassName="active" exact to="/seasons/octobre">
			</NavLink>

			<NavLink className="seasons-link novembre" activeClassName="active" exact to="/seasons/novembre">
			</NavLink>
			
			<NavLink className="seasons-link decembre" activeClassName="active" exact to="/seasons/decembre">
			</NavLink>
		</nav>

   	</div>

    
        )
};

export default Seasons;