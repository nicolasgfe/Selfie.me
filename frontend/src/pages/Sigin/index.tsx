import { Box, Button, Input, Stack, Divider, Image, FormErrorMessage, FormControl, FormLabel } from '@chakra-ui/react';
import { logobrancabordaazul } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api';
import { toastError } from '../../error/toatest';

type RegisterForm = {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
}

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório!"),
  sobrenome: yup.string().required("Sobrenome é obrigatório!"),
  email: yup.string().email().required("Email é obrigatório!"),
  senha: yup.string().required("Senha é obrigatório!"),
})


export const Sigin = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<RegisterForm>({
    resolver: yupResolver(schema)
  })
  const errors = formState.errors;

  const handleToggleMode = () => {
    navigate("/login")
  };

  const onSubmit = async (data: RegisterForm) => {
    try {
      await api.post("/usuario", data);
    } catch (error) {
      toastError(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
        <Image
          src={logobrancabordaazul}
        />
        <Stack spacing={4}>
          <FormControl isInvalid={!!errors.nome}>
            <FormLabel>Nome</FormLabel>
            <Input
              id={"nome"}
              placeholder="Digite seu nome"
              {...register("nome")}
            />
            <FormErrorMessage>{errors.nome?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.sobrenome}>
            <FormLabel>Sobrenome</FormLabel>
            <Input
              id="sobrenome"
              placeholder="Digite seu Sobrenome"
              {...register("sobrenome")}
            />
            <FormErrorMessage>{errors.sobrenome?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input
              id={"email"}
              placeholder="Digite seu Email"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.senha}>
            <FormLabel>Senha</FormLabel>
            <Input
              id={"senha"}
              type="password"
              placeholder="Digite sua senha"
              {...register("senha")}
            />
            <FormErrorMessage>{errors.senha?.message}</FormErrorMessage>
          </FormControl>
          <Divider />
          <Button type='submit' colorScheme="blue">
            Registre-se
          </Button>
        </Stack>
        <Button variant="link" onClick={handleToggleMode} size="sm">
          Já possui uma conta? Faça login
        </Button>
      </Box>
    </form>
  );
};
