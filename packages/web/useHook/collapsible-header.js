import React, { useState } from 'react'

const CollapsibleCtx = React.createContext(true, () => {});

const CollapsibleCtxConsumer = CollapsibleCtx.Consumer;

function CollapsibleProvider(props) {
  const { initialValue } = props;
  const [isCollapsible, setCollapsible] = useState(initialValue);

  return (
    <CollapsibleCtx.Provider value={{
      isCollapsible,
      setCollapsible
    }}>
      {props.children}
    </CollapsibleCtx.Provider>
  )
}

export {
  CollapsibleCtx,
  CollapsibleProvider,
  CollapsibleCtxConsumer
}
