import React from "react";
import { Button, ChakraProvider } from "@chakra-ui/react";
import { MoonIcon, PlusSquareIcon } from "@chakra-ui/icons";

function App(props) {
  return (
    <ChakraProvider>
      <div>
        <MoonIcon />
      </div>
      <div>
        <Button leftIcon={<PlusSquareIcon />}>버튼</Button>
      </div>
    </ChakraProvider>
  );
}

export default App;
