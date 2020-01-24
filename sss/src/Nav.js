import React from "react";

import "./App.css";

import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function Nav() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <Link to="/champions">Champions</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default Nav;
