import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Alert, AlertIcon, Divider, Link, Image } from '@chakra-ui/react';
import { logobrancabordaazul } from '../../assets';

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

    // Simulação de uma requisição assíncrona de autenticação
    try {
      // Simulação de sucesso no login após 1 segundo
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Se o login for bem-sucedido, você pode redirecionar ou fazer outras ações necessárias
      setIsLoggedIn(true);
    } catch (error) {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }

    setIsLoading(false);
  };

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
    setEmail('');
    setPassword('');
    setError('');
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
          {isRegistering && (
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirmar Senha</FormLabel>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirme sua senha"
                isDisabled={isLoading}
              />
            </FormControl>
          )}
          <Button
            colorScheme="blue"
            isLoading={isLoading}
            loadingText="Processando..."
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isRegistering ? 'Registrar' : 'Entrar'}
          </Button>
          <Button variant="link" onClick={handleToggleMode} size="sm">
            {isRegistering ? 'Já possui uma conta? Faça login' : 'Não tem uma conta? Cadastre-se'}
          </Button>
          <Divider />
        </Stack>
        {isLoggedIn && (
        <Link href="/home" style={{ display: 'none' }} />
      )}
      </Box>


  );
};
