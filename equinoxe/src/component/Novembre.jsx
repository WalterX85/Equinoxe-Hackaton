import React from 'react';
import cssNovembre from './css/cssNovembre.css';

function Novembre() {
  return (
    <>
    <div className="box">
      <h1>Novembre</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 98283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Préparer l'hiver</h2>
        <p>C'est la fin de la vinification, les fermentations touchent à leur fin. Le vigneron se prépare au grand repos de l'hiver.</p>
      </div>
    </>
  )
};

export default Novembre;