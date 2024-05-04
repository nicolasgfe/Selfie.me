import React from 'react'
import { ChakraProvider, GlobalStyle, ThemeProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ChakraProvider>
  );
}

export default App;

