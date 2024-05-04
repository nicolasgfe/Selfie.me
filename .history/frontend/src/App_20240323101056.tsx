import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from '@chakra-ui/react';

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

export default App;
