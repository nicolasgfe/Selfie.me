import { Box, Flex, Image } from "@chakra-ui/react";
import { logo, user } from "../../assets";

const Product = () => {
    return(
        <Box display={"flex"} w={'100vw'} h={'100vh'}>

            <Flex display={"flex"}
                flexDirection={"inherit"}
                w={'1200'}
                h={'10vh'}
                >
                
                <Image marginStart={'20'} src={logo} w={"200px"} h={"200px"}/>

                <Image marginEnd={'-20'} src={user} w={"200px"} h={"200px"}/>
                
            </Flex>

           
        
        </Box>
    )
}

export default Product;