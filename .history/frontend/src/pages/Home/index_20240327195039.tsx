import { Container, Header, Info, Logo } from "./styles"
import logo from '../../assets/'

export const Home = () => {
    return (
        <Container >
            <Header>
              <Info>
                <div>
                <Logo src={} alt="Descrição da imagem" />
                </div>
                <label>Tags</label>
                <label>Login</label>
                <label>Icone</label>
              </Info>
            </Header>
        </Container>
    )
}
