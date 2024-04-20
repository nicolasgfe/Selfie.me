import { Container, Header, Info, Logo, LogoDiv, TagDiv } from "./styles"
import logo from '../../assets/icons/logo.svg'
import { Box, HStack, Image, Select, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"
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
      </Header>
      <Box>
        
      </Box>

    </Container >
  )
}
