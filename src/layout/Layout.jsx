import React, { useContext } from 'react'
import { DarkModeContext } from '../context/useDarkModeContext';

const Layout = ({children}) => {
  
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className={`wrapper  ${darkMode ? 'dark' : ''}`}>
        {children}
    </div>
  )

}

export default Layout;
