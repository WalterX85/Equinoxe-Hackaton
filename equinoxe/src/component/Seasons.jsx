import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Seasons({ janvier, fevrier, mars, avril, mai, juin, juillet, aout, septembre, octobre, novembre, decembre }) {
  const [playing, setPlaying] = useState(false);

  /*if (janvier === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (fevrier === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (mars === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (avril === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (mai === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (juin === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (juillet === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (aout === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (septembre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (octobre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (novembre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }
   if (decembre === 'agroforesterie') {
	return <p>Vous avez gagné</p>;
  }*/

  if (playing) {
	return (
	<div className="linkcontainer">
		<button type="button" onClick={() => {
			setPlaying(false);
		}}>
			Revenir plus tard	
		</button>
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
	}
	let vineClass = 'ugly-vine';
	if (janvier && mars && mai) {
		vineClass = 'pretty-vine';
	}
	if (janvier && mars && mai && aout && novembre) {
		vineClass = 'beautifull-vine';
	}	
	return (
		<div className={vineClass}>
			<button type="button" onClick={() => {
				setPlaying(true);
			}}>
				Participer
			</button>
			<button type="button">
				Rencontrer nos vignerons
			</button>
		</div>
	)
};

export default Seasons;