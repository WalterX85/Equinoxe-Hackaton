import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Seasons from './component/Seasons';
import Janvier from './component/Janvier';
import Fevrier from './component/Fevrier';
import Mars from './component/Mars';
import Avril from './component/Avril';
import Mai from './component/Mai';
import Juin from './component/Juin';
import Juillet from './component/Juillet';
import Aout from './component/Aout';
import Septembre from './component/Septembre';
import Octobre from './component/Octobre';
import Novembre from './component/Novembre';
import Decembre from './component/Decembre';
import Footer from './component/Footer';

const seasons = [
  // {
  //   month: 'janvier',
  //   Component: Janvier,
  // },
  // {
  //   month: 'fevrier',
  //   Component: Fevrier,
  // },
  // {
  //   month: 'mars',
  //   Component: Mars,
  // },
  // {
  //   month: 'avril',
  //   Component: Avril,
  // },
  // {
  //   month: 'mai',
  //   Component: Mai,
  // },
  // {
  //   month: 'juin',
  //   Component: Juin,
  // },
  // {
  //   month: 'juillet',
  //   Component: Juillet,
  // },
  // {
  //   month: 'aout',
  //   Component: Aout,
  // },
  // {
  //   month: 'septembre',
  //   Component: Septembre,
  // },
  // {
  //   month: 'octobre',
  //   Component: Octobre,
  // },
  // {
  //   month: 'novembre',
  //   Component: Novembre,
  // },
  // {
  //   month: 'decembre',
  //   Component: Decembre,
  // },
];

function App() {
  const [janvier, setJanvier] = useState();
  const [fevrier, setFevrier] = useState();
  const [mars, setMars] = useState();
  const [avril, setAvril] = useState();
  const [mai, setMai] = useState();
  const [juin, setJuin] = useState();
  const [juillet, setJuillet] = useState();
  const [aout, setAout] = useState();
  const [septembre, setSeptembre] = useState();
  const [octobre, setOctobre] = useState();
  const [novembre, setNovembre] = useState();
  const [decembre, setDecembre] = useState();


  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/seasons" exact>
          <Seasons janvier={janvier} />
          <Seasons fevrier={fevrier} />
          <Seasons mars={mars} />
          <Seasons avril={avril} />
          <Seasons mai={mai} />
          <Seasons juin={juin} />
          <Seasons juillet={juillet} />
          <Seasons aout={aout} />
          <Seasons septembre={septembre} />
          <Seasons octobre={octobre} />
          <Seasons novembre={novembre} />
          <Seasons decembre={decembre} />
        </Route>
        <Route path="/seasons/janvier" exact>
          <Janvier setJanvier={setJanvier} />
        </Route>
        <Route path="/seasons/fevrier" exact>
          <Fevrier setFevrier={setFevrier} />
        </Route>
        <Route path="/seasons/mars" exact>
          <Mars setMars={setMars} />
        </Route>  
        <Route path="/seasons/avril" exact>
          <Avril setAvril={setAvril} />
        </Route>
        <Route path="/seasons/mai" exact>
          <Mai setMai={setMai} />
        </Route>
        <Route path="/seasons/juin" exact>
          <Juin setJuin={setJuin} />
        </Route>
        <Route path="/seasons/juillet" exact>
          <Juillet setJuillet={setJuillet} />
        </Route>
        <Route path="/seasons/aout" exact>
          <Aout setAout={setAout} />
        </Route>
        <Route path="/seasons/septembre" exact>
          <Septembre setSeptembre={setSeptembre} />
        </Route>
        <Route path="/seasons/octobre" exact>
          <Octobre setOctobre={setOctobre} />
        </Route>
        <Route path="/seasons/novembre" exact>
          <Novembre setNovembre={setNovembre} />
        </Route>
        <Route path="/seasons/decembre" exact>
          <Decembre setNovembre={setNovembre} />
        </Route>
        {
          seasons.map((season) => (
            <Route path={`/seasons/${season.month}`} exact>
              <season.Component />
            </Route>
          ))
        }
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;