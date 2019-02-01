import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import ForgotPassword from './forgot-password-form'
import { AuthLayout } from 'layout/auth/auth-layout'

export default () => (
  <AuthLayout>
    <Row>
      <Col span={24} lg={{ span: 16, offset: 4 }}>
        <Card style={{ borderRadius: '4px' }}>
          <h4 className='text-center'>Forgot Password</h4>
          <ForgotPassword />
        </Card>
      </Col>
    </Row>
  </AuthLayout>
)
