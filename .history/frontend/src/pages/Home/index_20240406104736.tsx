import { Container, Header, Info, Logo, LogoDiv, TagDiv } from "./styles"
import logo from '../../assets/logo.svg'
import { Button, HStack, Select, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"


export const Home = () => {

  const [selectedTag, setSelectedTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTag = e.target.value;
    // Verifica se a opção selecionada é vazia ou igual ao placeholder
    if (newTag.trim() !== '' && newTag !== 'Tags') {
      setTags([...tags, newTag]);
      setSelectedTag('');
    }
  };


  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };



  return (
    <Container >
      <Header>
        <Info>
          <LogoDiv>
            <Logo src={logo} alt="Descrição da imagem" />
          </LogoDiv>

          <TagDiv>
            <HStack spacing={2}>
              <Select
                value={selectedTag}
                onChange={handleTagChange}
                border="none"
                textColor="white"
                size="lg">
                <option value="" disabled hidden>Tags</option>
                <option value="tag1" style={{ color: 'black' }}>Tag 1</option>
                <option value="tag2" style={{ color: 'black' }}>Tag 2</option>
                <option value="tag3" style={{ color: 'black' }}>Tag 3</option>
                {/* Adicione outras opções conforme necessário */}
              </Select>
              {/* <Button onClick={handleAddTag}>Adicionar</Button> */}
            </HStack>
            <div>
              {tags.map(tag => (
                <Tag key={tag} size="md" variant="subtle" colorScheme="gray" borderRadius="full">
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveTag(tag)} />
                </Tag>
              ))}
            </div>
          </TagDiv>

          <label>Login</label>
          <label>Icone</label>
        </Info>
      </Header>
    </Container>
  )
}
