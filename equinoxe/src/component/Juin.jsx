import React from 'react';
import cssJuin from './css/cssJuin.css';
import { useHistory } from 'react-router-dom';

function Juin({ setJuin }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Juin</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 54283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Floraison</h2>
        <p>Les baies de raisins commencent à apparaitre. Les fleurs pointent leur nez lorsque la tempétature atteint environ 20°, puis ce sera au tour des grappes légèrement parfumées. </p>
      </div>
      <button type="button" onClick={() => {
          setJuin('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Juin;