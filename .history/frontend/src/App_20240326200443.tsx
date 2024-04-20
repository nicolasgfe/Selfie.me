import React from 'react'
import { GlobalStyle, ThemeProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { defaultTheme } from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>

      <GlobalStyle />
    
  );
}

export default App;

