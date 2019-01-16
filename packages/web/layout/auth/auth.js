import './auth.scss'
import React from 'react'
import Particle from './../../components/particle'

const AuthLayout = props => (
  <>
    <Particle />
    <div className='auth-layout-container'>
      <div className='auth-layout-center'>{props.children}</div>
    </div>
  </>
)

export { AuthLayout }
