import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Alert, AlertIcon, Divider, Image } from '@chakra-ui/react';
import { logobrancabordaazul } from '../../assets';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleLogin = async () => {
    setError('');
    setIsLoading(true);

    if (!validateForm()) {
      setError('Por favor, preencha todos os campos.');
      setIsLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsLoggedIn(true);
    } catch (error) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }

    setIsLoading(false);
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Image
        src={logobrancabordaazul}
      />
      <Stack spacing={4}>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isDisabled={isLoading}
            autoFocus={!isRegistering}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Senha</FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isDisabled={isLoading}
          />
        </FormControl>
        <Button
          colorScheme="blue"
          isLoading={isLoading}
          loadingText="Processando..."
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isRegistering ? 'Registrar' : 'Entrar'}
        </Button>
        <Button variant="link" size="sm">
          <Link to={"/sigin"} >
            Não tem uma conta? Cadastre-se
          </Link>
        </Button>
        <Divider />
      </Stack>
      {/* {isLoggedIn && (
        <Link href="/home" style={{ display: 'none' }} />
      )} */}
    </Box>


  );
};
