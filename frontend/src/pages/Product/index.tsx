import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { logopreta, user, cart, cartshop, download, OceanRocks, heartregular, heartsolid } from "../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeartButton = ({ liked = false, onClick = () => {} }) => {
  return (
    <Button
      w={'70px'}
      h={'50px'}
      ml={'auto'}
      mr={'auto'}
      bgColor={'transparent'}
      borderRadius={'10px'}
      display={'flex'}
      onClick={onClick}
    >
      <Image
        src={liked ? heartsolid : heartregular}
        ml={'auto'}
        mr={'auto'}
        h={'40px'}
        w={'40px'}
      />
    </Button>
  );
};

export const Product = () => {
  const [liked, setLiked] = useState(false);

  const handleDownload = () => {

    const imageUrl = 'http://localhost:3000/static/media/OceanRocks.432c3b6fd48a7e73c43f.jpg';

    const link = document.createElement('a');
    link.href = imageUrl;

    link.download = 'image.jpg';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }

  const handleLike = () => {
    setLiked(!liked);
  };

    return(
        <Box
          display={"flex"}
          alignItems={'center'}
          flexDirection={'column'}
          w={'100vw'}
          h={'100vh'}
        >
          <Box
              display={'flex'}
              ml={'auto'}
              mr={'auto'}
              alignItems={'center'}
              flexDirection={'row'}
              mt={'50px'}
              position="relative"
              w={"1700px"}
              h={"100px"}
          >
            <Link to={'/'}>
              <Image
                ml={'auto'}
                position={'absolute'}
                left={'20px'}
                src={logopreta}
                w={"200px"}
                top={'25px'}
              />
            </Link>
              <Box
                  w={'300px'}
                  h={'80px'}
                  right={'40px'}
                  position={'absolute'}
                  display={'flex'}
                  flexDirection={'row'}
              >
                <Flex
                  display={'flex'}
                  mt={'auto'}
                  mb={'auto'}
                  w={"80px"}
                  h={"80px"}
                  >
                  <Image src={user} />
                </Flex>
                <Flex
                  display={'flex'}
                  flexDirection={'column'}
                  mt={'auto'}
                  mb={'auto'}
                >
                  <Flex
                    display={'flex'}
                    whiteSpace={'nowrap'}
                    w={'180px'}
                    h={'30px'}
                    mb={'3px'}
                  >
                    <Text fontSize={'1.6rem'} fontFamily={'Fjalla One'} fontWeight={'900'}>
                      Leonardo Hartmann
                    </Text>
                  </Flex>
                  <Flex>
                    <Button
                      display={'flex'}
                      w={'120px'}
                      h={'20px'}
                      ml={'auto'}
                      mr={'auto'}
                      whiteSpace={'nowrap'}
                      bgColor={'transparent'}
                    >
                      <Text color={'black'}>
                        Your Account
                      </Text>
                    </Button>
                    <Button
                      display={'flex'}
                      w={'70px'}
                      h={'20px'}
                      ml={'auto'}
                      mr={'auto'}
                      whiteSpace={'nowrap'}
                      bgColor={'transparent'}
                    >
                      <Text color={'black'}>
                        Quit
                      </Text>
                    </Button>
                  </Flex>
                </Flex>
              </Box>
          </Box>
          <Box
              top={'150px'}
              position="relative"
              w={'1600px'}
              h={'100vh'}
          >
              <Flex>
                  <Box
                    display={'flex'}
                    w={'300px'}
                    h={'10vh'}
                    alignItems={'center'}
                    ml={'auto'}
                    mr={'auto'}
                  >
                    <Image src={user} h={'80px'}/>
                    <Flex
                      display={'flex'}
                      flexDirection={'column'}
                      mt={'auto'}
                      mb={'auto'}
                    >
                      <Flex
                        display={'flex'}
                        whiteSpace={'nowrap'}
                        w={'170px'}
                        h={'30px'}
                      >
                        <Text fontSize={'1.4rem'} fontFamily={'Fjalla One'} fontWeight={'500'}>
                          Leonardo Hartmann
                        </Text>
                      </Flex>
                      <Flex
                        display={'flex'}
                        whiteSpace={'nowrap'}
                        w={'170px'}
                        h={'20px'}
                      >
                        <Text fontSize={'1rem'} fontFamily={'Fjalla One'} fontWeight={'200'}>
                          1.4M Followers
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Image
                    src={OceanRocks}
                    w={'40vw'}
                    h={'80vh'}
                    ml={'auto'}
                    mr={'auto'}
                    borderRadius={'20px'}
                    shadow={'10px 5px 20px #494949'}
                  />
                  <Flex
                    marginTop={'100px'}
                    marginLeft={'5%'}
                    flexDirection={'column'}
                  >
                      <Box
                        display={'flex'}
                        w={'300px'}
                        h={'80px'}
                      >
                          <Text
                            ml={'auto'}
                            mr={'auto'}
                            textDecoration={'underline'}
                            fontSize={'4rem'}
                            fontFamily={'Bree Serif'}
                            whiteSpace={'nowrap'}
                            color={'#29ABE2'}
                          >
                              R$ 499,00
                          </Text>
                      </Box>
                      <Box
                        display={'flex'}
                        flexDirection={'row'}
                        w={'300px'}
                        h={'80px'}
                        fontSize="3.5rem"
                        alignItems={'center'}
                      >
                          <Button
                              w={'230px'}
                              h={'40px'}
                              ml={'auto'}
                              mr={'auto'}
                              bgColor={'#29ABE2'}
                              borderRadius={'10px'}
                              fontSize="1.5rem"
                              alignContent={'baseline'}
                              display={'flex'}
                              >
                              <Flex
                                  ml={'auto'}
                                  mr={'auto'}
                              >
                                  <Image
                                      src={cart}
                                      h={'40px'}
                                      w={'40px'}
                                  />
                                  <Text
                                      ml={'auto'}
                                      mr={'auto'}
                                      fontSize="1.5rem"
                                      whiteSpace={'nowrap'}
                                      color={'white'}
                                  >
                                      Comprar
                                  </Text>
                              </Flex>
                          </Button>
                          <Button
                            w={'50px'}
                            h={'40px'}
                            ml={'auto'}
                            mr={'auto'}
                            bgColor={'#29ABE2'}
                            borderRadius={'10px'}
                            display={'flex'}
                          >
                            <Image
                              src={cartshop}
                              ml={'auto'}
                              mr={'auto'}
                              h={'40px'}
                              w={'40px'}
                            />
                          </Button>
                      </Box>
                      <Box
                          display={'flex'}
                          flexDirection={'row'}
                          w={'300px'}
                          h={'30px'}
                          fontSize="3.5rem"
                          whiteSpace={'nowrap'}
                          alignItems={'center'}
                          ml={'5px'}
                      >
                          <Button
                              w={'230px'}
                              h={'40px'}
                              ml={'auto'}
                              mr={'auto'}
                              bgColor={'#2bb900'}
                              borderRadius={'10px'}
                              fontSize="1.5rem"
                              display={'flex'}
                              onClick={handleDownload}
                          >
                              <Flex
                                  alignItems={'center'}
                              >
                                  <Image
                                      src={download}
                                      ml={'auto'}
                                      mr={'auto'}
                                      h={'40px'}
                                      w={'40px'}
                                  />
                                  <Text
                                      ml={'auto'}
                                      mr={'auto'}
                                      fontSize="1.5rem"
                                      whiteSpace={'nowrap'}
                                      color={'white'}
                                  >
                                      Download
                                  </Text>
                              </Flex>
                          </Button>
                          <HeartButton liked={liked} onClick={handleLike} />
                      </Box>
                  </Flex>
              </Flex>
          </Box>
      </Box>
    )
}
