import { Container, Header, Info, Logo, Logo-Container } from "./styles"
import logo from '../../assets/logo.svg'

export const Home = () => {
  return (
    <Container >
      <Header>
        <Info>
          <Logo-Container>
            <Logo src={logo} alt="Descrição da imagem" />
          </Logo-Container>
          <label>Tags</label>
          <label>Login</label>
          <label>Icone</label>
        </Info>
      </Header>
    </Container>
  )
}
