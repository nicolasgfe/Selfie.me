import { Container, Footer, Image } from "./styles"

import backgorund from '../../assets/HomeBackground.jpg'

export const Home = () => {
    return (
        <Container >
            <Footer>
                <Image>
                <img src={backgorund} alt="Logo"/>
                </Image>
            </Footer>
        </Container>
    )
}
