import React from 'react';
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

const seasons = [
  {
    month: 'janvier',
    component: Janvier,
  },
  {
    month: 'fevrier',
    Component: Fevrier,
  },
  {
    month: 'mars',
    Component: Mars,
  },
  {
    month: 'avril',
    Component: Avril,
  },
  {
    month: 'mai',
    Component: Mai,
  },
  {
    month: 'juin',
    Component: Juin,
  },
  {
    month: 'juillet',
    Component: Juillet,
  },
  {
    month: 'aout',
    Component: Aout,
  },
  {
    month: 'septembre',
    Component: Septembre,
  },
  {
    month: 'octobre',
    Component: Octobre,
  },
  {
    month: 'novembre',
    Component: Novembre,
  },
  {
    month: 'decembre',
    Component: Decembre,
  },
];

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/seasons" exact>
          <Seasons />
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
