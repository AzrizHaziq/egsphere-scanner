import React from 'react'
import { useToggle } from './toggle.hook'

const ToggleContext = React.createContext({})

const ToggleProvider = ToggleContext.Provider
const ToggleConsumer = ToggleContext.Consumer

function Toggle({ children }) {
  const { isCollapse, toggle, setCollapsed } = useToggle(false)

  return (
    <ToggleProvider
      value={{
        isCollapse,
        toggle,
        setCollapsed,
      }}
    >
      {children}
    </ToggleProvider>
  )
}

export { Toggle, ToggleContext, ToggleConsumer }
