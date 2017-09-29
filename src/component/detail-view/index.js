import React from 'react';
import { GridList, GridTile } from 'material-ui';
import NavContainer from '../nav-container';
import SidebarContainer from '../sidebar-container';

class DetailView extends React.Component {
  render() {
    return (
      <div>
        <NavContainer />
        <SidebarContainer />
      </div>
    );
  }
}

export default DetailView;
