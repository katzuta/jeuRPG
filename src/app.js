import React from 'react';
import {render} from 'react-dom';

import {Header, Footer, Historique, ZoneMonstres} from './components';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ZoneMonstres />
        <Historique />
        <Footer />
      </div>
    );
  }
}


render(<App/>, document.getElementById('app'));
