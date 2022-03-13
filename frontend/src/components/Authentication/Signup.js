import { Box, Button, FormControl, FormLabel, HStack, Input, InputGroup, InputRightElement, Tag, TagCloseButton, TagLabel, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [hobbies, setHobbies] = useState();
  
  let hobbiesArray = ["Test1", "Test2", "Nouveau"];
  let hobbiesList = hobbiesArray.map((hobbiesArray) => 
    <HStack spacing={4}>
        <Tag
        size='lg'
        borderRadius='full'
        variant='solid'
        colorScheme='blue'
        >
        <TagLabel>{hobbiesArray}</TagLabel>
        <TagCloseButton />
        </Tag>
    </HStack>
  );

  const handleClick = () => setShow(!show);

  const addToHobbies = () => setShow(!show);

  const postDetails = (pics) => {

  };

  const submitHandler = () => {

  };

  return (
    <VStack spacing='6px'>
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size="md">
                <Input
                    type={show ? "text" : "password"}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size="md">
                <Input
                    type={show ? "text" : "password"}
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmpassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
            />
        </FormControl>
        <FormControl id="hobbies" paddingBottom="15px">
            <FormLabel>Hobbies</FormLabel>
            <InputGroup size="md" minWidth="500px">
                {hobbiesList}
                <Input
                    placeholder="Enter Your Hobbies"
                    onChange={(e) => setHobbies(e.target.value)}
                />
                <InputRightElement width="4rem">
                    <Button onClick={addToHobbies}>
                        Add
                    </Button>
                </InputRightElement>
            </InputGroup>
                
        </FormControl>

        <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup