import { Avatar, Box, Center, Divider, Image, Stack, Text, WrapItem, flexbox } from "@chakra-ui/react";

import ImageGrid from './Interface/ImageGrid';
import { BaseThemeWithExtensions } from "@chakra-ui/react"
import { BgYourCOunt, perfilYour, bixoveio, camiao, macaco, murrodospreso, torredebabel, logosonora, logoexpoflor, mia, music, onibus } from "../../assets";

export const YourCount = () => {
  const urlYourProfile = perfilYour;

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
  return (
    <Box //master

      w="100vw"
      h="100vh"
      overflow="hidden"
      position="relative"
      background="linear-gradient(0deg, #29abe2,#023dff)"
    >
      <Box //profile and images
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}

        h={'100vh'}
        w={'70vw'}
        alignContent={'Center'}

        /*borderStyle="solid"
        borderColor="black"
        borderWidth="2px"
        borderRadius={'30px'}*/
        ml={'auto'}
        mb={'auto'}
        mt={'200'}
        mr={'auto'}

      >


        <Box //junta nome informations e avatar
          display={'flex'}
          alignItems={'center'}
          flexDirection={'row'}

          h={'25vh'}
          w={'70vw'}
          alignContent={'Center'}

          /*borderStyle="solid"
          borderColor="black"
          borderWidth="2px"
          borderRadius={'30px'}*/
          ml={'auto'}
          mb={'auto'}
          mr={'auto'}

        >
          <Box //só avatar
            display={'flex'}
            flexDirection={'column'}
            alignContent={'center'}

            /*borderStyle="solid"
            borderColor="yellow"
            borderWidth="2px"
            borderRadius={'30px'}*/
            h={'100%'}
            w={'20%'}
          >
            <WrapItem //avatar
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              alignContent={'center'}
              mt={'auto'}
              mb={'auto'}
              ml={'auto'}
              mr={'auto'}
            >
              <Avatar
                w={'190px'}
                h={'190px'}
                name='Jhonatan Rizzi'
                src={urlYourProfile}
              />{''}
            </WrapItem>
          </Box>



          <Box //nome e informations
            /*borderStyle="solid"
            borderColor="green"
            borderWidth="2px"
            borderRadius={'5px'}*/
            display={'flex'}
            flexDirection={"column"}
            h={'100%'}
            w={'100%'}

          >
            <Box //nome
              /*borderStyle="solid"
              borderColor="white"
              borderWidth="2px"
              borderRadius={'5px'}*/
              display={'flex'}
              flexDirection={"row"}
              h={'50%'}
              w={'100%'}
            >
              <Text
                display={'flex'}
                alignItems={'center'}
                alignContent={'center'}
                flexDirection={'row'}
                fontSize={80}
                fontFamily={'Arial'}
                fontWeight={'bold'}
                textColor={'#ffffff'}
                //textShadow="6px 6px 8px rgb(0, 0, 0)"


                ml={'auto'}
                mt={'auto'}
                mb={'auto'}
                mr={'auto'}

              >Roberson</Text>

            </Box>
            <Box //informations general
              /*borderStyle="solid"
              borderColor="white"
              borderWidth="2px"
              borderRadius={'5px'}*/
              display={'flex'}
              flexDirection={"row"}
              h={'50%'}
              w={'100%'}
            >
              <Box //informations 01
                /*borderStyle="solid"
                borderColor="red"
                borderWidth="2px"
                borderRadius={'5px'}*/
                display={'flex'}
                flexDirection={"row"}
                h={'100%'}
                w={'100%'}
              >
                <Text
                  display={'flex'}
                  alignItems={'center'}
                  alignContent={'center'}
                  flexDirection={'row'}
                  fontSize={30}
                  fontFamily={'Arial'}
                  fontWeight={'bold'}
                  textColor={'#ffffff'}
                  //textShadow="6px 6px 8px rgb(0, 0, 0)"


                  ml={'auto'}
                  mt={'auto'}
                  mb={'auto'}
                  mr={'auto'}

                >1,4M Folowers

                </Text>

              </Box>
              <Box>
                <Stack direction='row' h='100px' p={4}>
                  <Divider orientation='vertical' color={"black"} borderWidth={'3px'} />
                </Stack>
              </Box>

              <Box //informations 02
                /*borderStyle="solid"
                borderColor="red"
                borderWidth="2px"
                borderRadius={'5px'}*/
                display={'flex'}
                flexDirection={"row"}
                h={'100%'}
                w={'100%'}
              >
                <Text
                  display={'flex'}
                  alignItems={'center'}
                  alignContent={'center'}
                  flexDirection={'row'}
                  fontSize={30}
                  fontFamily={'Arial'}
                  fontWeight={'bold'}
                  textColor={'#ffffff'}
                  //textShadow="6px 6px 8px rgb(0, 0, 0)"


                  ml={'auto'}
                  mt={'auto'}
                  mb={'auto'}
                  mr={'auto'}

                >600 Archives
                </Text>

              </Box>
              <Box>
                <Stack direction='row' h='100px' p={4}>
                  <Divider orientation='vertical' color={"black"} borderWidth={'3px'} />
                </Stack>
              </Box>
              <Box //informations 03
                /*borderStyle="solid"
                borderColor="red"
                borderWidth="2px"
                borderRadius={'5px'}*/
                display={'flex'}
                flexDirection={"row"}
                h={'100%'}
                w={'100%'}
              >
                <Text
                  display={'flex'}
                  alignItems={'center'}
                  alignContent={'center'}
                  flexDirection={'row'}
                  fontSize={30}
                  fontFamily={'Arial'}
                  fontWeight={'bold'}
                  textColor={'#ffffff'}
                  //textShadow="6px 6px 8px rgb(0, 0, 0)"


                  ml={'auto'}
                  mt={'auto'}
                  mb={'auto'}
                  mr={'auto'}

                >100k Downloads

                </Text>
              </Box>


            </Box>
          </Box>




        </Box>
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

        >
          <ImageGrid images={images} />

        </Box>

      </Box>


    </Box>
  )
}
