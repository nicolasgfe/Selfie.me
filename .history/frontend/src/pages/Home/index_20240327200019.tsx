import { Container, Header, Info, Logo } from "./styles"
import logo from '../../assets/logo.svg'

export const Home = () => {
    return (
        <Container >
            <Header>
              <Info>
                <Logo-Container>
                <Logo src={logo} alt="Descrição da imagem" />
                </div>
                <label>Tags</label>
                <label>Login</label>
                <label>Icone</label>
              </Info>
            </Header>
        </Container>
    )
}
