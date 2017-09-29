import React from 'react';
import { AppBar } from 'material-ui';
import Logo from './logo-symbol.svg';

class NavContainer extends React.Component {
  render() {
    return (
      <div id="nav-bar">
        <AppBar
          style={{ backgroundColor: '#373C3C' }}
          iconElementLeft={<Logo />}
          iconStyleLeft={{ padding: '8px' }}
          iconElementRight={
            <input
              type="text"
              style={{
                borderStyle: 'none',
                padding: '10px',
                borderRadius: '8px',
                width: '200px',
              }}
              placeholder="Search"
            />
          }
          iconStyleRight={{ padding: '15px' }}
        />
      </div>
    );
  }
}

export default NavContainer;
