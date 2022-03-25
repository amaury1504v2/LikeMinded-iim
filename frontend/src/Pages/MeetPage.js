import { Box } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/miscellaneous/AppHeader';
import UsersList from '../components/UsersList';
import { ChatState } from '../Context/ChatProvider';

const MeetPage = () => {

  const history = useHistory();

  //const { user } = ChatState();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) {
    history.push("/");
  }

  return (
    <div style={{ width: "100%" }}>
      {user && <AppHeader/>}
      <Box d="flex" justifyContent="center" w="100%" h="91.5vh" p="10px">
        {user && <UsersList/>}
      </Box>
    </div>
  )
}

export default MeetPage