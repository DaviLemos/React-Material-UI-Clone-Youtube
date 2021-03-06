import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import Home from './Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3ea6ff',
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#faf6f8',
        paper: darkMode ? '#232323' : '#fff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
