import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ListView from '../list-view';
import DetailView from '../detail-view';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <MuiThemeProvider>
            <main>
              <Route exact path="/" component={ListView} />
              <Route exact path="/detail" component={DetailView} />
            </main>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
