import React , {useContext} from 'react';
import { DarkModeContext } from '../context/useDarkModeContext';


export const ThemeButton = ({Icon, text}) => {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext);

  return (
    <button className='flex min-w-max  gap-2 items-center font-regular text-lg p-2 border-2 rounded-xl border-gray-400 hover:bg-primary-200 hover:text-dark-400 hover:dark:bg-white hover:dark:text-primary-200'
            aria-label={darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'} onClick={() => toggleDarkMode()}>
      {Icon} {text}
    </button>
  )
}
