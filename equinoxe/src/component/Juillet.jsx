import React from 'react';
import cssJuillet from './css/cssJuillet.css';
import { useHistory } from 'react-router-dom';

function Juillet({ setJuillet }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Juillet</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 47283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Surveillance</h2>
        <p>Il est temps pour le vigneron de traiter ses vignes contre d'éventuelles agressions et de couper les sarments qui seraient trop long.</p>
      </div>
      <button className="meetbutton" type="button" onClick={() => {
          setJuillet('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Juillet;