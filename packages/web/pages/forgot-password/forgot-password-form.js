import React from 'react'
import Link from 'next/link'
import { Form, Icon, Input, Button, Row, Col } from 'antd'

class ForgotPasswordForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className='login-form'>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [
              {
                required: true,
                message: 'Please input your email!',
              },
            ],
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='abc@example.com'
            />,
          )}
        </Form.Item>

        <Form.Item style={{ marginBottom: 0 }}>
          <Button
            block
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          <Row>
            <Col span={12}>
              <Link href='/login'>
                <a>Back to login</a>
              </Link>
            </Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <Link href='/register'>
                <a>Register</a>
              </Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: 'forgot_password' })(ForgotPasswordForm)
