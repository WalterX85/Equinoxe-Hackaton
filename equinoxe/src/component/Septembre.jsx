import React from 'react';
import cssSeptembre from './css/cssSeptembre.css';
import { useHistory } from 'react-router-dom';

function Septembre({ setSeptembre }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Septembre</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 5283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Vendanges</h2>
        <p>Le vigneron n'attends que cette période et il a travailler dur toute l'année tout le reste de l'année pour vivre cet intense moment. En général les vendanges débutent à la mi-septembre, au plus haut de la maturité du raisin.</p>
      </div>
      <button className="meetbutton" type="button" onClick={() => {
          setSeptembre('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Septembre;