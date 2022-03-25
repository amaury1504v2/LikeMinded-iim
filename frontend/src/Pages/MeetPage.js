import { Box } from '@chakra-ui/react';
import React from 'react'
import AppHeader from '../components/miscellaneous/AppHeader';
import UsersList from '../components/UsersList';
import { ChatState } from '../Context/ChatProvider';

const MeetPage = () => {

  const { user } = ChatState();
  console.log(user)
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(localStorage.getItem("userInfo"))

  return (
    <div style={{ width: "100%" }}>
      {userInfo && <AppHeader/>}
      <Box d="flex" justifyContent="center" w="100%" h="91.5vh" p="10px">
        {userInfo && <UsersList/>}
      </Box>
    </div>
  )
}

export default MeetPage