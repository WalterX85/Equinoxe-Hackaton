import React from 'react';
import cssMars from './css/cssMars.css';
import { useHistory } from 'react-router-dom';

function Mars({ setMars }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Mars</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 71283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Labourer la terre</h2>
        <p>Juste avant le printemps, avant le réveil de la nature et donc des vignes, le moment est idéal pour labourer la terre.</p>
      </div>
      <button className="meetbutton" type="button" onClick={() => {
          setMars('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Mars;