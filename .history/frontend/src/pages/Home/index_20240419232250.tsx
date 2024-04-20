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
 
    </Header>
    </Container >
  )
}
