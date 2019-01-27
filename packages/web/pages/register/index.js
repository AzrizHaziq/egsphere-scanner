import React from 'react'
import { Row, Col, Card } from 'antd'
import RegisterForm from './register-form'
import { AuthLayout } from 'Layout/auth/auth'

export default () => (
  <AuthLayout>
    <Row>
      <Col span={24} lg={{ span: 16, offset: 4 }}>
        <Card style={{ borderRadius: '4px' }}>
          <h4 className='text-center'>Register</h4>
          <RegisterForm />
        </Card>
      </Col>
    </Row>
  </AuthLayout>
)
