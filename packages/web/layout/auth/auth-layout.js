import React from 'react'
import './auth-layout.scss'
import Particle from 'Components/particle'

const AuthLayout = props => (
  <>
    <Particle />
    <div className='auth-layout-container'>
      <div className='auth-layout-center'>{props.children}</div>
    </div>
  </>
)

export { AuthLayout }
