import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

const AppHeader = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);    

  return (
    <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Text fontSize="2xl" fontFamily="Work sans">
          LikeMinded
        </Text>
        <Box
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            w="25%"
        >
            <Button variant="ghost">
                Chats
            </Button>
            <Button variant="ghost">
                Users
            </Button> 
        </Box>
        <div>
          <Menu>
            <MenuButton p={1}>
              Notif
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList pl={2}>
                <MenuItem>test
                </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
              />
            </MenuButton>
            <MenuList>
                test
              <MenuDivider />
              <MenuItem >Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
  )
}

export default AppHeader