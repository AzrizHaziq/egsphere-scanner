import './dashboard.scss'
import { Layout } from 'antd'
const { Content } = Layout
import React from 'react'
import { Toggle } from './../../helpers/toggle.context'
import { MenuItems } from '../../components/menu-items/menu'
import { EGSphereHeader } from '../../components/header/header'

const DashboardLayout = ({ children }) => {
  return (
    <Toggle>
      <Layout style={{ height: '100vh' }}>
        <MenuItems />
        <Layout>
          <EGSphereHeader />
          <Content className='content'>{children}</Content>
        </Layout>
      </Layout>
    </Toggle>
  )
}

export default DashboardLayout
