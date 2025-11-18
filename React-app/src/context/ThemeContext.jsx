import {createContext, useContext, useState} from 'react';

const ThemeContext = createContext();  // Create the context

export const useTheme = () => useContext(ThemeContext); // create wrapper to use context from theme



// ThemeProvider to provide theme and other variables to children components
export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}