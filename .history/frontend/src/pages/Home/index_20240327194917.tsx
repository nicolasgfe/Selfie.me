import { Container, Header, Info } from "./styles"
import backgorund from '../../assets/homebackground.jpg'

export const Home = () => {
    return (
        <Container >
            <Header>
              <Info>
                <div>
                  <image>src</image>
                </div>
                <label>Tags</label>
                <label>Login</label>
                <label>Icone</label>
              </Info>
            </Header>
        </Container>
    )
}
