import { Container, Header, Info, Logo, LogoDiv } from "./styles"
import logo from '../../assets/logo.svg'

export const Home = () => {
  return (
    <Container >
      <Header>
        <Info>
          <LogoDiv>
            <Logo src={logo} alt="Descrição da imagem" />
          </LogoDiv>
          <select>
            <option value="valor 1">Primeira</option>
            <option value="valor 2">Segunda</option>
            <option value="valor 3">Terceira</option>
            <option value="valor 4"></option>
          </select>
          <label>Login</label>
          <label>Icone</label>
        </Info>
      </Header>
    </Container>
  )
}
