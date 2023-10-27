import React from 'react';
import { Input, Menu, Button } from 'semantic-ui-react';
import './TopMenu.css';
function TopMenu() {
  return (
    <Menu secondary>
      <Menu.Item>Dev @ Deakin</Menu.Item>
      <Input style={{ width: '60%', margin: "auto" }} iconPosition='left'
icon='search' placeholder='Search...' />
      <Menu.Menu position='right'>
        <Button primary>Post</Button>
        <Menu.Item name='login'>
          <a href='/login'>Login</a>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default TopMenu;