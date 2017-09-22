import React from 'react';
import { Paper, GridList, GridTile, AppBar } from 'material-ui';
import Logo from '../../../logo-symbol.svg';

class ListView extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          showMenuIconButton={false}
          style={{ backgroundColor: '#373C3C' }}
          iconElementLeft={<Logo />}
        />
        <div>
          <Paper
            style={{
              backgroundColor: '#D6D8D8',
              position: 'absolute',
              width: '20%',
              top: '10%',
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
