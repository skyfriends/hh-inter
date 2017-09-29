import React from 'react';
import superagent from 'superagent';
import Pagination from 'react-js-pagination';
import { GridList, GridTile } from 'material-ui';
import NavContainer from '../nav-container';
import SidebarContainer from '../sidebar-container';
import '../../style/main.scss';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorData: [], activePage: 1 };
    this.handlePagination = this.handlePagination.bind(this);
  }
  componentWillMount() {
    superagent
      .get('http://localhost:3000/api/colors')
      .then(res => this.setState({ colorData: res.body }));
  }

  handlePagination(pageNumber) {
    this.setState({ activePage: pageNumber });
    superagent
      .get('http://localhost:3000/api/colors')
      .query({ page: pageNumber })
      .then(res => this.setState({ colorData: res.body }));
  }

  render() {
    return (
      <div>
        <NavContainer />
        <div>
          <SidebarContainer />
        </div>
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
                title={color.name}
              />
            ))}
          </GridList>
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={12}
            totalItemsCount={9852}
            pageRangeDisplayed={8}
            onChange={this.handlePagination}
            hideNavigation
            itemClass="page-number"
            linkClass="page-link"
            activeClass="page-number-active"
            activeLinkClass="page-link-active"
          />
        </div>
      </div>
    );
  }
}

export default ListView;
