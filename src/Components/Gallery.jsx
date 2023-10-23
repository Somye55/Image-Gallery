import { Box, Image, Img, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import { QueryContext } from "../Context/context";
import InfiniteScroll from "react-infinite-scroll-component";
import Paginate from "./Paginate";
import ImgModal from "./ImgModal";

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [imgId, setImgId] = useState('');
    const context = useContext(QueryContext);
    const {query,data,totalImgs,moreImgs,querySearch} = context;

    const onImgClick = (id) => {
      
      console.log(open)
      setOpen(true);
      setImgId(id);
    }
    

  return (
    <div>
      {!data && 
      <Text color={useColorModeValue("gray.600","white")} fontWeight={"bold"} align={'center'}>
        Beautiful, free images gifted by the world’s most generous community of photographers. Better than any royalty free or stock photos. 
      </Text>
      }
      <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={4} mb={20}>
        {data &&
          data.map((pic) => (
            <Box onClick={()=>(onImgClick(pic.id))} key={pic.id}>
            <ProgressiveImage
              src={pic.urls.regular}
              placeholder={pic.urls.small_s3}
              rootMargin="0% 0% 0%"
              threshold={[1]}
              key={pic.id}
              
            >
              {(src, loading) => (
                <Image
                  style={{ filter: loading ? "blur(10px)" : "none" }}
                  src={src}
                  alt="an image"
                  />
              )}
            </ProgressiveImage>
                  </Box>
          ))}
      </SimpleGrid>
      <ImgModal  imgId={imgId}/>

  <Paginate query={query} data={data} totalImgs={totalImgs} moreImgs={moreImgs} querySearch={querySearch}/>
    </div>
  );
};

export default Gallery;
