import React, { useState } from "react";
import { Box, Button, Center } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";


const App = () => {
  const [gamesStart, setGameStart] = useState(false);
  const [numberSelected, setNumberSelected] = useState();
  const[dice,setDice]=useState(1)
  const [error,setError]=useState(null)
  const [score,setScore]=useState(0)

//For Change the route to main page
  const startGameChange = () => {
    setGameStart(true);
  };

  //For Select number in 1 to 6
  console.log(numberSelected);
  const onNumberClick = (value) => {
    setNumberSelected(value);
    setError(null)
  };

  //for generate random number 
  const genRandNo=()=>
  {
    if(numberSelected){
    const generateNo=Math.ceil(Math.random()*6)
    setDice(generateNo)
    console.log(generateNo)
    if(numberSelected===generateNo)
      {
        setScore((prev) => prev + generateNo)
      }
      else{
        setScore((prev) => prev - 2)
      }
    }
   


    else{
      setError("Select Number to Continoue")
    }
  }

  const numbers = [1, 2, 3, 4, 5,6];

  return (
    <>
      {gamesStart ? (
        <>
          <Stack
            justify="center"
            align="center"
            maxWidth={1300}
            mx="auto"
            h="100vh "
          >
            <Heading as="h1" color={error ? 'red':"black"} fontSize="5xl" mb="8">
              {error ? error:"Select your Number"}
            </Heading>
            <Flex>
              {numbers.map((value) => (
                <Flex
                  justify="center"
                  align="center"
                  background={numberSelected === value ? "green" : "black"}
                  color="white"
                  h="50px"
                  w="50px"
                  fontSize="x-large"
                  mr={4}
                  key={value}
                  borderRadius="md"
                  onClick={() => onNumberClick(value)}
                >
                  {value}
                </Flex>
              ))}
            </Flex>
            <Box onClick={genRandNo}>
              {" "}
              <Image src={`/dice/dice${dice}.png`}  />{" "}
            </Box>

            <Text as="p">Click on dice to roll</Text>
            <Text color={score>0 ? 'green':'red' } fontSize="8xl" fontWeight="bold">
              {score}
            </Text>
            <Text fontSize="6xl" fontWeight="bold">
              Total Score
            </Text>
            <Button onClick={()=>setScore(0)}>Reset Score</Button>
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
