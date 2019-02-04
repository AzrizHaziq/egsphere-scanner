import React from 'react'
import { ErrorMessage as ErrorMessageFormik } from 'formik'

const ErrorMessage = ({ name }) => (
  <ErrorMessageFormik
    name={name}
    render={e => <span className='text-danger'>{e}</span>}
  />
)

export { ErrorMessage }
