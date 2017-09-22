import React from 'react';
import { Sidebar, Segment, Button, Menu, Header } from 'semantic-ui-react';

class ListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Sidebar</Button>
        <Sidebar.Pushable
          as={Segment}
          style={{ height: '-webkit-fill-available' }}
        >
          <Sidebar
            as={Menu}
            width="thin"
            defaultVisible
            visible
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="color1">Color1</Menu.Item>
            <Menu.Item name="color2">Color2</Menu.Item>
            <Menu.Item name="color3">Color3</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">MainFiller</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default ListView;
