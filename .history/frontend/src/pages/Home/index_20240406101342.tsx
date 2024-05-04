import { Container, Header, Info, Logo, LogoDiv, TagDiv } from "./styles"
import logo from '../../assets/logo.svg'
import { Button, HStack, Select, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"


export const Home = () => {

  function TagInput() {
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);

    const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setSelectedTag(e.target.value);
    };    

    const handleAddTag = () => {
      if (selectedTag.trim() !== '' && !tags.includes(selectedTag)) {
        setTags([...tags, selectedTag]);
        setSelectedTag('');
      }
    };

    const handleRemoveTag = (tagToRemove: string) => {
      setTags(tags.filter(tag => tag !== tagToRemove));
    };
  }


  return (
    <Container >
      <Header>
        <Info>
          <LogoDiv>
            <Logo src={logo} alt="Descrição da imagem" />
          </LogoDiv>

          <TagDiv>
            <HStack spacing={2}>
              <Select value={selected} onClick={() => handleTagChange()} placeholder="Selecione uma opção...">
                <option value="tag1">Tag 1</option>
                <option value="tag2">Tag 2</option>
                <option value="tag3">Tag 3</option>
                {/* Adicione outras opções conforme necessário */}
              </Select>
              <Button onClick={handleAddTag}>Adicionar</Button>
            </HStack>
            <div>
              {tags.map(tag => (
                <Tag key={tag} size="md" variant="subtle" colorScheme="blue">
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
