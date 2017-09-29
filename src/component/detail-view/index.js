import React from 'react';
import { Link } from 'react-router-dom';
import { GridList, GridTile } from 'material-ui';

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: null };
  }
  render() {
    console.log(this.props.state.colorData);
    return (
      <div>
        <GridList
          cols={1}
          cellHeight={400}
          padding={40}
          style={{
            position: 'absolute',
            right: '2%',
            top: '15%',
            width: '78%',
          }}
        >
          <GridTile
            style={{
              border: '1px solid #D6D8D8',
              borderRadius: '10px',
              backgroundColor: this.props.backgroundColor,
            }}
            titleBackground={'#fff'}
            titleStyle={{
              color: '#373C3C',
              fontFamily: 'Source Serif Pro',
            }}
            title={this.props.backgroundColor}
          />
        </GridList>
        <GridList
          cols={5}
          padding={40}
          style={{
            position: 'absolute',
            right: '2%',
            top: '75%',
            width: '78%',
          }}
        >
          <GridTile
            style={{
              border: '1px solid #D6D8D8',
              borderRadius: '10px',
              backgroundColor: this.props.state.colorData[5].name,
            }}
            titleBackground={'#fff'}
            titleStyle={{
              color: '#373C3C',
              fontFamily: 'Source Serif Pro',
            }}
            title={this.props.state.colorData[5].name}
          />
          <GridTile
            style={{
              border: '1px solid #D6D8D8',
              borderRadius: '10px',
              backgroundColor: this.props.state.colorData[6].name,
            }}
            titleBackground={'#fff'}
            titleStyle={{
              color: '#373C3C',
              fontFamily: 'Source Serif Pro',
            }}
            title={this.props.state.colorData[6].name}
          />
          <GridTile
            style={{
              border: '1px solid #D6D8D8',
              borderRadius: '10px',
              backgroundColor: this.props.state.colorData[7].name,
            }}
            titleBackground={'#fff'}
            titleStyle={{
              color: '#373C3C',
              fontFamily: 'Source Serif Pro',
            }}
            title={this.props.state.colorData[7].name}
          />
          <GridTile
            style={{
              border: '1px solid #D6D8D8',
              borderRadius: '10px',
              backgroundColor: this.props.state.colorData[8].name,
            }}
            titleBackground={'#fff'}
            titleStyle={{
              color: '#373C3C',
              fontFamily: 'Source Serif Pro',
            }}
            title={this.props.state.colorData[8].name}
          />
          <GridTile
            style={{
              border: '1px solid #D6D8D8',
              borderRadius: '10px',
              backgroundColor: this.props.state.colorData[9].name,
            }}
            titleBackground={'#fff'}
            titleStyle={{
              color: '#373C3C',
              fontFamily: 'Source Serif Pro',
            }}
            title={this.props.state.colorData[9].name}
          />
        </GridList>
      </div>
    );
  }
}

export default DetailView;
