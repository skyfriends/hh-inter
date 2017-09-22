import React from 'react';
import { Drawer } from 'material-ui';

class ListView extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            position: 'absolute',
            top: 0,
            backgroundColor: 'blue',
            height: '40%',
          }}
        >
          <p>Kjdjkfhjdhfjkdfd</p>
        </div>
        <Drawer containerStyle={{ backgroundColor: 'lightgrey' }} />
      </div>
    );
  }
}

export default ListView;
