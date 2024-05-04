import { Container, Header, Info, Logo, LogoDiv, TagDiv } from "./styles"
import logo from '../../assets/logo.svg'
import { Select } from "@chakra-ui/react"
import { useState } from "react"


export const Home = () => {

  function TagInput() {
    const [selectedTag, setSelectedTag] = useState('');
    const [tags, setTags] = useState([]);

    const handleTagChange = (e) => {
      setSelectedTag(e.)
    }
  }
    

  return (
    <Container >
      <Header>
        <Info>
          <LogoDiv>
            <Logo src={logo} alt="Descrição da imagem" />
          </LogoDiv>

          <TagDiv>
            <Select variant='unstyled' placeholder='Tags'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          </TagDiv>
          
          <label>Login</label>
          <label>Icone</label>
        </Info>
      </Header>
    </Container>
  )
}
