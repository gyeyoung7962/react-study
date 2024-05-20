import React from "react";
import {
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function App(props) {
  return (
    <ChakraProvider>
      <label htmlFor={"input1"}>이름</label>
      <input id={"input1"} />
      <hr />
      <Center
        w={{
          base: "100%",
          md: "50%",
        }}
      >
        <FormControl>
          <FormLabel>이름</FormLabel>
          <input />
        </FormControl>
      </Center>
    </ChakraProvider>
  );
}

export default App;
