import { AspectRatio, Box, Center, Container, Flex, Heading, Image, Input, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { QueryContext } from "../Context/context";

const Header = () => {
    const [query, setQuery] = useState('');
    const context = useContext(QueryContext);
    const {querySearch} = context;
    const handleChange = (e) => {
      const page = 1;
      const value = e.target.value
        e.preventDefault();
        setQuery(e.target.value)
        querySearch(value,page)
    }
  return (
    <div>
  <Center
      bgImage="https://images.unsplash.com/photo-1682687218904-de46ed992b58?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=M3w1MTc4NDl8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5Nzc0NDI3MXw\u0026ixlib=rb-4.0.3\u0026q=80\u0026w=400"
      bgSize="cover"
      bgPosition="center"
      height="220px"
      width="100vw"
      alignSelf={'center'}
      my={5}
    >
        <Flex align={'center'} direction={'column'} gap={4} color={useColorModeValue('white','black')}>
            <Heading>
                DOWNLOAD HIGH QUALITY IMAGES BY CREATORS
            </Heading>
            <Text>
                Over 2.4 millions+ stock images by our talented community
            </Text>
      <Input zIndex={10} w={'80%'} color={'gray'} placeholder="Search high resolution images, categories, wallpapers" bg="white"  _placeholder={{ color: "gray.400" }}
      _hover={{ bg: "white" }}
      _focus={{ bg: "white" }} border={'none'} 
      name="query"
      value={query}
      onChange={(e)=>handleChange(e)}
      
      />
    </Flex>
    </Center>
    
    </div>
  );
};

export default Header;
