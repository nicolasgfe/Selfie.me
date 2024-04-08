import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { logopreta, user, hearth } from "../../assets";

const Product = () => {
    return(
        <Box display={"flex"} alignItems={'center'} flexDirection={'column'} w={'100vw'} h={'100vh'}>

            {/*Head */}
            <Box 
                display={'flex'} 
                alignItems={'center'} 
                flexDirection={'inherit'} 
                top={'50px'} 
                position="relative" 
                width="100%" 
                height="100px">
                
                <Image 
                    position={'absolute'} 
                    left={'20px'} 
                    src={logopreta} 
                    w={"200px"}
                    top={'25px'}
                    />
                    
                
                <Box 
                    w={'40'}
                    h={'20'}
                    borderStyle="solid"
                    borderColor="blue.500" // Cor da borda
                    borderWidth="2px" // Largura da borda
                    borderRadius={'30px'} //curvas da borda
                    right={'40px'}
                    position={'absolute'}
                    alignContent={'center'}
                    display={'flex'}
                    >
                    <Image 
                        src={user} 
                        w={"50px"} 
                        h={"50px"}
                    />
                    
                    <Text
                        fontFamily={"fantasy"} //fonte utilizada
                        >
                        Leonardo Hartmann
                    </Text>

                    

                </Box>
            </Box>

            {/*Body */}
            <Box
                top={'150px'} 
                position="relative" 
                w={'1200px'}
                h={'100vh'}
                borderStyle="solid"
                borderColor="blue.500" // Cor da borda
                borderWidth="2px"
                >
                
                <Flex>
            
                    {/*Perfil puxar da API o nome e seguidores */}    
                    <Box
                        display={'flex'}
                        borderStyle="solid"
                        borderColor="blue.500" // Cor da borda
                        borderWidth="2px"
                        w={'300px'}
                        h={'10vh'}
                        alignItems={'center'}
                        >
                        
                        <Image 
                            src={user}
                            h={'80px'}
                        />

                        {/*nome e seguidores */}
                        <Box 
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'start'}
                            >

                            <Text 
                                color={'#000000'}
                                whiteSpace={'nowrap'}
                            />Leonardo Hartmann

                            <Text 
                                color={'#000000'}
                                whiteSpace={'nowrap'}

                            />4.2M Followers

                        </Box>

                    </Box>
                
                    {/*Imagem puxar da API as imagens */}
                    <Image
                        w={'40vw'}
                        h={'50vh'}
                        borderStyle="solid"
                        borderColor="blue.500" // Cor da borda
                        borderWidth="2px"
                        shadow={'10px 5px 20px #494949'}
                    />

                    
                    {/*VALOR DE VENDA - DOWLOAD - LIKE*/}
                    <Box
                        marginTop={'100px'}
                        marginLeft={'5%'}
                        >
                        {/*PREÇO */}
                        <Text
                            w={'200px'}
                            h={'80px'}
                            fontSize="3rem"
                            whiteSpace={'nowrap'}
                            borderStyle="solid"
                            borderColor="blue.500" // Cor da borda
                            borderWidth="2px"
                            textDecoration={'underline'}
                        >R$ 499
                        </Text>

                        {/*LIKE */}
                        <Image
                            src={hearth}
                            h={'5vh'}
                        />



                    </Box>
                </Flex>
                
            </Box>
           
        </Box>
        
    )
}

export default Product;