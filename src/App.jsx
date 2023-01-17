import { ThemeProvider } from '@mui/system';
import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { createTheme } from '@mui/material/styles';
import ItemDetailConteiner from './Components/ItemDetailContainer/ItemDetailConteiner';
import {BrowserRouter , Routes, Route,} from 'react-router-dom';

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
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} / >
        <Route path='item/:id' element={<ItemDetailConteiner/>} />
        <Route path='/category/:category' element={<ItemListContainer />} / >
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    )
}

export default App;
