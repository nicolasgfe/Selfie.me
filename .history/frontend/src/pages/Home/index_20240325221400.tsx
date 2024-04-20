import { Box, Text } from "@chakra-ui/react"

export const Home = () => {
    return (
        <Box backgroundColor={"#001489"}
            fontFamily={"mono"}
            w="100vw" 
            h="100vh" 
            display="flex" 
            alignItems="center" 
            flexDirection="column">            
            
            <Box w="20vw"
             h="10vh"
            display="flex"
            alignItems="center" 
            flexDirection="revert">
                
                <Text color={"#ffffff"}>
                    Page home
                </Text>

            </Box>

        </Box>
    )
}