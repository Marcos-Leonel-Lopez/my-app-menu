import { ThemeProvider } from '@mui/system';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

//import NavBar from './Components/NavBar/NavBar';
//import CajaSearch from './Components/NavBar/CajaSearch';

import { createTheme } from '@mui/material/styles';
import ItemDetailConteiner from './Components/ItemDetailContainer/ItemDetailConteiner';

const theme = createTheme({
  palette: {
    primary: {
      light: '#c3402a',
      main: '#8b0000',
      dark: '#590000',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#2c2c2c',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <ItemListContainer />
      <ItemDetailConteiner/>
    </ThemeProvider>)
}

export default App;
