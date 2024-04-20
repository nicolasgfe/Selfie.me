import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

const ImageGrid = ({ images }) => {
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4} position={'relative'} ml={'auto'} mt={'auto'} mr={'auto'} mb={'auto'} borderRadius={"20px"} marginTop={'20px'} maxW="100vh" overflowX="hidden">
      {images.map((image, index) => (
        <GridItem key={index}>
          <img src={image.src} alt={image.alt} style={{ width: '100%', height: 'auto' }} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default ImageGrid;
