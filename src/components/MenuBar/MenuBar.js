import React from "react";
import { Menu } from "antd";

const menuBar = props => (
  <React.Fragment>
    <Menu
      mode="horizontal"
      onClick={e => props.clicked(e.key)}
      selectedKeys={[props.link]}
    >
      <Menu.Item key="todos">Todos</Menu.Item>
      <Menu.Item key="users">Users</Menu.Item>
    </Menu>
  </React.Fragment>
);

export default menuBar;
