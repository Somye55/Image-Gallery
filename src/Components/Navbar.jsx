import { HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Link, Stack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import ModeToggle from "./ModeToggle";

const MenuToggle = () => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <IconButton
        aria-label="Toggle menu"
        icon={<HamburgerIcon />}
        display={{ base: "block", md: "none" }}
        onClick={onToggle}
      />
    );
  };


  const NavBarContainer = ({ children, ...props }) => {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={4}
        bg={["primary.500", "primary.500", useColorModeValue("blue.400","purple.800"),useColorModeValue("blue.400","purple.800")]}
        color={["white", "white", "primary.700", "primary.700"]}
        {...props}
      >
        {children}
      </Flex>
    );
  };


const MenuLinks = () => {
    return (
      <Stack
      spacing={4}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
      >
        <ModeToggle/>
       <Link href="/">Home</Link>
       <Link href="/">Products</Link>
       <Link href="/">Downloads</Link>
      </Stack>
    );
  };

const Navbar = () => {
  return (
    <NavBarContainer>
      <Box>
        <Image src='https://seeklogo.com/images/U/unsplash-logo-15686E6905-seeklogo.com.png' w={20}/>
      </Box>
      <MenuToggle />
      <MenuLinks />
    </NavBarContainer>
  );
};

export default Navbar;
