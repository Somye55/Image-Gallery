import { Container, Fade, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import State from "./Context/state";
import ImgModal from "./Components/ImgModal";

function App() {
  const [pics, setPics] = useState();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
     
        <State>
          <>
            <Navbar />
            <Header />
            <Container maxW="Container.sm" p={20}>
              <Gallery />
            </Container>
            <ImgModal/>
          </>
        </State>
    </>
  );
}

export default App;
