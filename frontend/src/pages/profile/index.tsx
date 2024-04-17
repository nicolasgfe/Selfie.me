import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { user } from "../../assets"

export const Profile = () => {
  return(
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
            <Text>
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
            <Text>
              Quit
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
