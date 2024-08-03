import React, { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex, Heading, Stack ,Text} from "@chakra-ui/react";
import Home from "./home";

const App = () => {
  const [gamesStart, setGameStart] = useState(false);
  const [numberSelected,setNumberSelected]=useState()

  const startGameChange = () => {
    setGameStart(true);
  };
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      {gamesStart ? (
        <>
          <Stack justify='center' align='center' maxWidth={1300} mx='auto' h='100vh ' >
            <Heading as='h1' fontSize='6xl' mb='8'>Select A Number</Heading>
            <Flex>
              {numbers.map((value) => (
                <Flex
                  justify="center"
                  align="center"
                  background="black"
                  color="white"
                  h="50px"
                  w="50px"
                  fontSize="x-large"
                  mr={4}
                  key={value}
                  borderRadius="md"
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box>
              {" "}
              <Image src="/dice/dice1.png" />{" "}
            </Box> 

            <Text as="p">Click on dice to roll</Text>
            <Text fontSize='8xl' fontWeight='bold'>0</Text>
            <Text fontSize='6xl' fontWeight='bold'>Total Score</Text>
            <Button>Reset Score</Button>

          </Stack>
        </>
      ) : (
        <Flex align="center" justify="center">
          <Image width="50%" src="/dice/dices.png" />
          <Stack>
            <Heading fontSize="xx-large" as="h1">
              The Dice Game
            </Heading>
            <Button
              bg="black"
              color="white"
              _hover={{ bg: "green" }}
              onClick={startGameChange}
            >
              Start Game
            </Button>
          </Stack>
        </Flex>
      )}
    </>
  );
};
export default App;
