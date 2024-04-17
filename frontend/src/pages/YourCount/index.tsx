import { Avatar, Box, Center, Image, Text, WrapItem, flexbox } from "@chakra-ui/react";


import { BaseThemeWithExtensions } from "@chakra-ui/react"
import { BgYourCOunt, perfilYour } from "../../assets";

export const YourCount = () => {
  const urlYourProfile = perfilYour;
  return(
    <Box //master
      display={'flex'}
      flexDirection={'column'}
      h={'100vh'}
      w={'100vw'}
      bgImage={BgYourCOunt}

    >
      <Box //junta nome informations e avatar
        display={'flex'}
        alignItems={'center'}
        flexDirection={'row'}

        h={'25vh'}
        w={'70vw'}
        alignContent={'Center'}

        borderStyle="solid"
        borderColor="black"
        borderWidth="2px"
        borderRadius={'30px'}
        ml={'auto'}
        mb={'auto'}
        mt={'200px'}
        mr={'auto'}

      >
        <Box //só avatar
        display={'flex'}
        flexDirection={'column'}
        alignContent={'center'}



        borderStyle="solid"
        borderColor="black"
        borderWidth="2px"
        borderRadius={'30px'}
        h={'100%'}
        w={'50%'}
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
          name='Leonardo Hartmann'
          src={urlYourProfile}
        />{''}
        </WrapItem>
        </Box>


        <Box //nome e informations
        borderStyle="solid"
        borderColor="black"
        borderWidth="2px"
        borderRadius={'5px'}
        display={'flex'}
        flexDirection={"column"}
        h={'100%'}
        w={'100%'}

        >
           <Box //nome
          borderStyle="solid"
          borderColor="black"
          borderWidth="2px"
          borderRadius={'5px'}
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

          <Box
          borderStyle="solid"
          borderColor="black"
          borderWidth="2px"
          borderRadius={'5px'}
          display={'flex'}
          flexDirection={"row"}
          h={'50%'}
          w={'100%'}
          >

          </Box>
        </Box>




      </Box>



    </Box>
  )
}
