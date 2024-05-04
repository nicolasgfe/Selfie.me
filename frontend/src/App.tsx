import { ChakraProvider, GlobalStyle, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import AppProvider from './context';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <AppProvider>
          <Router />
        </AppProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ChakraProvider>
  );
}

export default App;

