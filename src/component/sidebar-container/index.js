import React from 'react';
import { Paper } from 'material-ui';

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorData: [],
      sideColors: [
        { name: 'Red' },
        { name: 'Orange' },
        { name: 'Yellow' },
        { name: 'Green' },
        { name: 'Blue' },
        { name: 'Purple' },
        { name: 'Brown' },
        { name: 'Grey' },
      ],
    };
  }
  render() {
    return (
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
            fontFamily: 'Source Serif Pro',
          }}
          onClick={this.handleColorFilter}
        >
          {this.state.sideColors.map(sideColor => (
            <input
              key={sideColor.name}
              type="button"
              value={sideColor.name}
              style={{
                display: 'block',
                border: 'none',
                outline: 'none',
                backgroundColor: '#D6D8D8',
                fontFamily: 'Source Serif Pro',
                fontSize: '1em',
              }}
            />
          ))}
        </ul>
      </Paper>
    );
  }
}

export default SidebarContainer;
