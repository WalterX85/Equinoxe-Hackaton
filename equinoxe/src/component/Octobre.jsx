import React from 'react';
import cssOctobre from './css/cssOctobre.css';
import { useHistory } from 'react-router-dom';


function Octobre({ setOctobre }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Octobre</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 105283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Mise en chai</h2>
        <p>Il s'agit de surveiller chaque jour le vin dans des cuves ou barriques et d'en controler les sucres et les fermentations alcooliques. Un travail lourd et décisif.</p>
      </div>
      <button className="meetbutton" type="button" onClick={() => {
          setOctobre('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Octobre;