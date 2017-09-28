import React from 'react';
import { Paper, GridList, GridTile, AppBar, TextField } from 'material-ui';
import Logo from './logo-symbol.svg';

class ListView extends React.Component {
  render() {
    return (
      <div>
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
        <div>
          <Paper
            style={{
              backgroundColor: '#D6D8D8',
              position: 'absolute',
              width: '20%',
              top: '8%',
              left: 0,
              height: '100vh',
            }}
          />
          <div>
            <GridList
              cols={4}
              padding={40}
              style={{
                position: 'absolute',
                right: '2%',
                top: '15%',
                width: '78%',
              }}
            >
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
              <GridTile
                style={{ border: '1px solid #D6D8D8', borderRadius: '10px' }}
                title="color1"
              />
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
