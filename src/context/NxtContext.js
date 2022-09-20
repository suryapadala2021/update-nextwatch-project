import React from 'react'

const NxtWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
  activeTab: 'HOME',
  changeActiveTab: () => {},
})

export default NxtWatchContext
