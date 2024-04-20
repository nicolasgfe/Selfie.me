import { Container, Header, Info, Input, Logo, LogoDiv, SearchBarDiv, SelectOnBarDiv, TagDiv } from "./styles"
import logo from '../../assets/icons/logo.svg'
import { Box, Divider, HStack, Image, Select, Stack, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react";
import { Profile } from "../profile";
import { BgYourCOunt, perfilYour, bixoveio, camiao, macaco, murrodospreso, torredebabel, logosonora, logoexpoflor, mia, music, onibus } from "../../assets";
import ImageGrid from "../YourCount/Interface/ImageGrid";




export const Home = () => {

  const images = [
    { src: bixoveio, alt: 'Imagem 1' },
    { src: camiao, alt: 'Imagem 2' },
    { src: macaco, alt: 'Imagem 3' },
    { src: murrodospreso, alt: 'Imagem 4' },
    { src: logosonora, alt: 'Imagem 5' },
    { src: logoexpoflor, alt: 'Imagem 6' },
    { src: mia, alt: 'Imagem 7' },
    { src: music, alt: 'Imagem 8' },
    { src: onibus, alt: 'Imagem 9' },
    { src: torredebabel, alt: 'Imagem 10' },
    { src: BgYourCOunt, alt: 'Imagem 11' },


  ];

  const [selectedTag, setSelectedTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleTagChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newTag = e.target.value;
    if (newTag.trim() !== '' && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setSelectedTag('');
    }
  };


  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Container >
      <Header>
        <Info>
          <LogoDiv>
            <Logo src={logo} alt="Descrição da imagem" />
          </LogoDiv>
          <Profile />

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
              </Select>
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
        </Info>
        <SearchBarDiv>
          <SelectOnBarDiv>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="">Todo conteúdo</option>
            <option value="option1">Opção 1</option>
            <option value="option2">Opção 2</option>
            <option value="option3">Opção 3</option>
          </select>
          </SelectOnBarDiv>
          <Box>
                <Stack direction='row' h='100' p={4}>
                  <Divider orientation='vertical' color={"black"} borderWidth={'3px'} />
                </Stack>
              </Box>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Pesquise variádas imagens e vídeos de alta qualidade"
          />
        </SearchBarDiv>

      </Header>


    </Container >
  )
}
