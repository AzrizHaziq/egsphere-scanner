import { useState } from 'react';

function useToggle(bool = false) {
  const [ isCollapse, setCollapseState ] = useState(bool)

  function setCollapsed(setCollapsed) {
    setCollapseState(setCollapsed)
  }

  function toggle() {
    setCollapseState(!isCollapse)
  }

  return {
    isCollapse,
    setCollapsed,
    toggle
  }
}

export {
  useToggle
}
