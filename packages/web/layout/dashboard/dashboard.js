import './dashboard.scss'
import { Layout } from 'antd'
const { Content } = Layout
import React, { Component } from 'react'
import { MenuItems } from '../../components/menu-items/menu'
import { EGSphereHeader } from '../../components/header/header';




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
    const { children } = this.props
    const { collapsed } = this.state

    return (
      <Layout style={{ height: '100vh' }}>
        <MenuItems
          toggle={this.toggle}
          isCollapse={collapsed}
        />
        <Layout>
          <EGSphereHeader />
          <Content className='content'>{children}</Content>
        </Layout>
      </Layout>
    )
  }
}

export default DashboardLayout
