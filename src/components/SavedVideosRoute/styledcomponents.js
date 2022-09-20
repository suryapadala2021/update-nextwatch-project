import React from 'react'

const NextWatchContext = React.createContext({
  isDark: false,
  changeTheme: () => {},
  savedVideos: [],
  addToSavedVideos: () => {},
})

export default NextWatchContext
