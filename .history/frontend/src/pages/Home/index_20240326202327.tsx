import { Container, Footer } from "./styles"

import backgorund from '../../assets/HomeBackground.jpg'

export const Home = () => {
    return (
        <Container>
            <Footer>
                <img src={backgorund} alt="Logo" />
            </Footer>
        </Container>
    )
}
