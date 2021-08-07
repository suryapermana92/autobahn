import React from "react";

const TabBar = ({ tabNames, selectedTabIndex, onPress }) => {
  return (

    <div className={`tabBar`}>
      {tabNames.map((tab, index) => {
        return (
          <div className={`tabBar-item ${selectedTabIndex === index ? 'tabBar-on' : 'tabBar-off'}`} onClick={() => onPress(tab.value)}>
            <div>{tab.name}</div>
          </div>
        )
      })}
    </div>
  )
}

export default TabBar