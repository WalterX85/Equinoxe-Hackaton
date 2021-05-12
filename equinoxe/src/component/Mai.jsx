import React from 'react';
import cssMai from './css/cssMai.css';

function Mai() {
  return (
    <>
    <div className="box">
      <h1>Mai</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 62283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Protéger</h2>
        <p>Le vigneron va tout faire pour éviter à ses vignes de se faire attaquer par le terrible Mildiou ou l'oidium. Il fera des labours pour le désherbage ou choisira des pulvérisations</p>
      </div>
    </>
  )
};

export default Mai;