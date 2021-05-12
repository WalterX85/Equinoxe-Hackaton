import React from 'react';

function Janvier({ setJanvier }) {
  return (
      <>
        <div className="box">
        <h1>Janvier</h1>
        <div className="test">
        <div className="jauges">
          <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
          <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
          <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
          <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
        </div>
          <div className="capital">
            <p>capital : 88283 €</p>
          </div>
        </div>
      </div>
        <div className="cards">
          <h2>CONSTRUCTION</h2>
          <h2>VEGETATION</h2>
        </div>
        <div className="details">
          <h2>Taille de la vigne</h2>
          <p>Il s'agit, en langue vigneron, de faire "pleurer la vigne" : il incise le cep, faisant ainsi apparaître des gouttes de sève et créant un chemin imposé au sarment.</p>
        </div>
        <button type="button" onClick={() => {
          setJanvier('agroforesterie');
        }}
        >
          Participer
        </button>
      </>
  )
};

export default Janvier;