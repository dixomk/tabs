import React, { useState, useCallback, useMemo } from 'react';
import { TabsContext } from './TabsContext';

const Tabs = ({ activeIndex: activeIndexProps, onActive, children }) => {
  const [activeIndex, setActiveIndex] = useState(activeIndexProps || 0);
  const [activeContent, setActiveContent] = useState();
  const [activeTitle, setActiveTitle] = useState();

  const tabRefs = useMemo(
    () => React.Children.map(children, () => React.createRef()),
    [children],
  );
  const getTabsContext = useCallback(
    (index) => {
      const activateTab = (nextIndex) => {
        setActiveIndex(nextIndex);
        onActive?.(nextIndex);
      };

      return {
        activeIndex,
        active: activeIndex === index,
        index,
        ref: tabRefs[index],
        onActivate: () => activateTab(index),
        setActiveContent,
        setActiveTitle,
      };
    },
    [activeIndex, onActive, tabRefs],
  );

  const tabs = React.Children.map(children, (child, index) => (
    <TabsContext.Provider value={getTabsContext(index)}>
      {child
        ? 
          React.cloneElement(child, { active: activeIndex === index })
        : child}
    </TabsContext.Provider>
  ));

  return (
    <div className='tabs'>
      <div role='tablist'>
        {tabs}
      </div>
      <div className='tab-panel' role="tabpanel" area-label={`${activeTitle || ''}`}>
        {activeContent}
      </div>
    </div>
  )
}

export default Tabs;