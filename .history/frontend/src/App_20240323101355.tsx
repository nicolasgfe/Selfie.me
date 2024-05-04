import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GlobalStyle, ThemeProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

