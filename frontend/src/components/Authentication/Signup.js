import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, Badge } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Autocomplete } from 'chakra-ui-simple-autocomplete';
import { CheckCircleIcon, CloseIcon, SmallAddIcon } from "@chakra-ui/icons";

const Signup = () => {
  const [show, setShow] = useState(false);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState();
  const [hobbies, setHobbies] = useState([]);
  //const [result, setResult] = useState([]);
  const options = [ ];

  const handleClick = () => setShow(!show);

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
            <Box maxW="lg">
                <Autocomplete
                options={options}
                result={hobbies}
                setResult={(options) => {
                    setHobbies(options);
                }}
                placeholder="Enter a Hobby"
                renderBadge={(option) => (
                    <Badge
                    borderRadius="full"
                    px="3" py="2"
                    colorScheme="blue"
                    mx={1} my={1}
                    cursor="pointer"
                    >
                    {option.label}
                    <CloseIcon ml={2} w={2} h={2} mb="4px" />
                    </Badge>
                )}
                createtext="Add Hobby"
                />
            </Box>
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