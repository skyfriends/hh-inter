import React from 'react';
import superagent from 'superagent';
import { Paper, GridList, GridTile, AppBar, FlatButton } from 'material-ui';
import Logo from './logo-symbol.svg';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorData: [] };
  }
  componentWillMount() {
    superagent
      .get('http://localhost:3000/api/colors')
      .then(res => this.setState({ colorData: res.body }));
  }
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
              width: '20%',
              height: '100vh',
            }}
          >
            <div
              style={{
                margin: '0 auto',
                position: 'relative',
                width: '70%',
                top: '4%',
                fontSize: '1em',
                border: '2px solid black',
                textAlign: 'center',
                padding: '2px',
                borderRadius: '8px',
                backgroundColor: '#fff',
                fontFamily: 'Source Serfif Pro',
                fontWeight: 700,
              }}
            >
              <p>Random Color</p>
            </div>
            <ul
              style={{
                position: 'relative',
                top: '6%',
                fontSize: '1.2em',
                listStyle: 'none',
                lineHeight: '200%',
                fontFamily: 'Source Serfif Pro',
              }}
            >
              <li>Red</li>
              <li>Orange</li>
              <li>Yellow</li>
              <li>Green</li>
              <li>Blue</li>
              <li>Purple</li>
              <li>Brown</li>
              <li>Gray</li>
            </ul>
          </Paper>
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
              {this.state.colorData.map(color => (
                <GridTile
                  key={color._id}
                  style={{
                    border: '1px solid #D6D8D8',
                    borderRadius: '10px',
                    backgroundColor: color.name,
                  }}
                  titleBackground={'#fff'}
                  titleStyle={{
                    color: '#373C3C',
                    fontFamily: 'Source Serif Pro',
                  }}
                  img={color.name}
                  title={color.name}
                />
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
