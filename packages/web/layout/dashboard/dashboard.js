import './dashboard.scss'
import { Layout, Icon } from 'antd'
const { Header, Content } = Layout
import React, { Component } from 'react'
import { MenuItems } from '../../components/menu-items/menu'

class DashboardLayout extends Component {
  state = {
    collapsed: false,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  render() {
    const { collapsed } = this.state;
    const { children } = this.props
    return (
      <Layout style={{ height: '100vh' }}>
        <MenuItems
          toggle={this.toggle}
          isCollapse={collapsed}
        />
        <Layout>
          <Header className='header'>
            <Icon
              className='trigger pl-3'
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className='content'>{children}</Content>
        </Layout>
      </Layout>
    )
  }
}

export default DashboardLayout
