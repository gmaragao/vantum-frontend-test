import React from 'react';
import 'antd/dist/antd.css';
import '../../index.css';
import './App.css';
import { Link } from 'react-router-dom';

import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default class LayoutApp extends React.Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header
            className="layout"
            style={{
              position: 'fixed',
              zIndex: 1,
              width: '100%'
            }}
          >
            <div className="logo">
              <Link to="/">
                <img
                  className="vantum-logo"
                  src={process.env.PUBLIC_URL + '/logoVantum.png'}
                  alt="vantum-logo"
                />
              </Link>
            </div>
            <Menu
              selectedKeys={this.state}
              mode="horizontal"
              className="menu-links"
            >
              <Menu.Item key="register">
                <Link to="/register" />
                Cadastrar
              </Menu.Item>
              <Menu.Item key="users">
                <Link to="/users" />
                Usuários
              </Menu.Item>
              <Menu.Item key="about-us">
                <Link to="/about-us" />
                Sobre-nós
              </Menu.Item>
            </Menu>
          </Header>
          <Content
            style={{
              background: '#228B22',
              padding: '0 0px',
              marginTop: 64,
              minHeight: 510
            }}
          >
            {this.props.children}
          </Content>
          <Footer className="footer">
            Vantum © 2019 <br /> Handcrafted with &#10084; by{' '}
            <a
              href="https://www.linkedin.com/in/gabriel-m-aragao/"
              target=" _blank"
            >
              Gabriel Aragão
            </a>
          </Footer>
        </Layout>
      </div>
    );
  }
}
