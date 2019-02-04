import * as Yup from 'yup'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ErrorMessage } from 'Components/form/error-message'
import { Modal, Button, Icon, Col, Input } from 'antd'
const InputGroup = Input.Group

const AddNewMachine = ({ isModalOpen, setModal }) => {
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const [loadingTestConnection, setLoadingTestConnection] = useState(false)

  const handleCancel = () => setModal(false)
  const handleOk = e => console.log(e)

  function handleTestConnection(e) {
    setLoadingTestConnection(true)

    setTimeout(() => setLoadingTestConnection(false), 1000)
  }

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        ip1: '',
        ip2: '',
        ip3: '',
        ip4: '',
        port: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
      }}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <Modal
          visible={isModalOpen}
          onCancel={handleCancel}
          title={<Title />}
          footer={[
            <Button key='back' onClick={handleCancel} htmlType='button'>
              Cancel
            </Button>,
            <Button
              key='test-connection'
              type='primary'
              loading={loadingTestConnection}
              onClick={handleTestConnection}
              htmlType='button'
            >
              Test Connection
            </Button>,
            <Button
              key='submit'
              type='primary'
              loading={loadingSubmit}
              onClick={handleSubmit}
              htmlType='submit'
            >
              Submit
            </Button>,
          ]}
        >
          <div className='mb-3'>
            <label htmlFor='username'>Username: </label>
            <Input name='username' onChange={handleChange} placeholder='root' />
            <ErrorMessage name='username' />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password: </label>
            <Input.Password
              id='password'
              placeholder='password'
              name='password'
              className='mb-1'
              onChange={handleChange}
            />
            <ErrorMessage name='password' />
          </div>
          <div className='mb-3'>
            <label htmlFor='ip-address'>IP Address: </label>
            <InputGroup id='ip-address'>
              <Col span={4}>
                <Input
                  name='ip1'
                  maxLength={3}
                  type='number'
                  onChange={handleChange}
                  placeholder='162'
                />
              </Col>
              <Col span={4}>
                <Input
                  name='ip2'
                  type='number'
                  maxLength={3}
                  onChange={handleChange}
                  placeholder='198'
                />
              </Col>
              <Col span={4}>
                <Input
                  name='ip3'
                  minLength={1}
                  maxLength={3}
                  type='number'
                  onChange={handleChange}
                  placeholder='2'
                />
              </Col>
              <Col span={4}>
                <Input
                  name='ip4'
                  maxLength={3}
                  type='number'
                  onChange={handleChange}
                  placeholder='254'
                />
              </Col>
            </InputGroup>
            <ul className='list-unstyled p-0'>
              <li>
                <ErrorMessage name='ip1' />
              </li>
              <li>
                <ErrorMessage name='ip2' />
              </li>
              <li>
                <ErrorMessage name='ip3' />
              </li>
              <li>
                <ErrorMessage name='ip4' />
              </li>
            </ul>
          </div>
          <div className='mb-3'>
            <label htmlFor='port'>Port: </label>
            <Input
              placeholder='eg: 32'
              id='port'
              name='port'
              type='number'
              onChange={handleChange}
            />
            <ErrorMessage name='port' />
          </div>
        </Modal>
      )}
    </Formik>
  )
}

const Title = () => (
  <>
    <Icon
      type='cloud'
      className='pr-1'
      theme='twoTone'
      twoToneColor='#1890ff'
    />
    <span className='text-primary'>Add new Machine</span>
  </>
)

const IP = Yup.number()
  .moreThan(0, 'IP should be more than or 0')
  .lessThan(255, 'IP should be less than or 255')
  .required()

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string()
    .min(3, 'Password should be longer than 3 characters')
    .required(),
  ip1: IP,
  ip2: IP,
  ip3: IP,
  ip4: IP,
  port: Yup.number()
    .integer('Port must be in number')
    .moreThan(0, 'Port Number should be more than or 0')
    .lessThan(65536, 'Port Number should be less than or 65536')
    .required(),
})

export { AddNewMachine }
