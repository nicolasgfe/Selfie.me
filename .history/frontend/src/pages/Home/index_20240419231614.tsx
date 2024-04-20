import { Container, Header, Info, Logo, LogoDiv, TagDiv } from "./styles"
import logo from '../../assets/icons/logo.svg'
import { HStack, Image, Select, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react";
import { Profile } from "../profile";
import { OceanRocks } from "../../assets";


export const Home = () => {

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
          <Profile/>

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
        <Box //imagens postadas
          display={'flex'}
          alignItems={'center'}
          flexDirection={'row'}

          h={'100%'}
          w={'100%'}
          alignContent={'Center'}

          /*borderStyle="solid"
          borderColor="black"
          borderWidth="2px"
          borderRadius={'30px'}*/
          ml={'auto'}
          mb={'auto'}
          mr={'auto'}
        <Image
                    src={OceanRocks}
                    w={'40vw'}
                    h={'80vh'}
                    ml={'auto'}
                    mr={'auto'}
                    borderRadius={'20px'}
                    shadow={'10px 5px 20px #494949'}
                  />
        </div>
      </Header>
    </Container>
  )
}
