import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListView from '../list-view';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Route exact path="/" component={ListView} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
