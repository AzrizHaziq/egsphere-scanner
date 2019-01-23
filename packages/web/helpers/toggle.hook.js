import { useState } from 'react';

function useToggle(bool = false) {
  const [ isCollapsed, setCollapsedState ] = useState(bool)

  function setCollapsed(setCollapsed) {
    setCollapsedState(setCollapsed)
  }

  function toggle() {
    setCollapsedState(!isCollapsed)
  }

  return {
    isCollapsed,
    setCollapsed,
    toggle
  }
}

export {
  useToggle
}
