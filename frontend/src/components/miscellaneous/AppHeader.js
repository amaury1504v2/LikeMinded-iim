import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';

const AppHeader = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    history.push("/");
  };

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
                <i class="far fa-comment"></i>
                <p>Chats</p>
            </Button>
            <Button variant="ghost">
                <i class="fas fa-users"></i>
                <p>Users</p>
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
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
                <ProfileModal user={user}>
                    <MenuItem>Profile</MenuItem>
                </ProfileModal>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
  )
}

export default AppHeader