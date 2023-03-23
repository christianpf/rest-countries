import React, {useState, useContext, createContext, useEffect} from 'react'

const DarkModeContext = createContext();

const DarkModeContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('darkMode') !== null) {
      setDarkMode(JSON.parse(localStorage.getItem('darkMode')));
    }
  }, [])

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
  )
}


export {DarkModeContext, DarkModeContextProvider};