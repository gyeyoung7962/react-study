import React from "react";
import {
  Center,
  ChakraProvider,
  Checkbox,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Textarea,
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
      <hr />
      <Checkbox>lorem</Checkbox>
      <Checkbox>lorem1</Checkbox>
      <Checkbox>lorem2</Checkbox>
      <Checkbox>lorem3</Checkbox>
      <hr />
      <RadioGroup>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
      </RadioGroup>
      <hr />
      <Textarea></Textarea>
    </ChakraProvider>
  );
}

export default App;
