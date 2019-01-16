import React from 'react'
import { Card } from 'antd'
import { Row, Col } from 'antd'
import { AuthLayout } from 'layout/auth'
import ForgotPassword from './forgot-password-form'

export default () => (
  <AuthLayout>
    <Row>
      <Col span={24} lg={{ span: 10, offset: 7 }}>
        <Card style={{ borderRadius: '4px' }}>
          <h4 className='text-center'>Forgot Password</h4>
          <ForgotPassword />
        </Card>
      </Col>
    </Row>
  </AuthLayout>
)
