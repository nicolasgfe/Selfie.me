import { Container, Header, Info } from "./styles"
import backgorund from '../../assets/homebackground.jpg'

export const Home = () => {
    return (
        <Container >
            <Header>
              <Info>
                <div>
                <Image src={myImage} alt="Descrição da imagem" />
                </div>
                <label>Tags</label>
                <label>Login</label>
                <label>Icone</label>
              </Info>
            </Header>
        </Container>
    )
}
