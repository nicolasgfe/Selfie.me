import React from 'react'
import { ChakraProvider, GlobalStyle, ThemeProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { defaultTheme } from './theme/theme';

function App() {
  return (
    <ChakraProvider
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

      <GlobalStyle />
    
  );
}

export default App;

