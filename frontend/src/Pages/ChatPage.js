import { Box } from "@chakra-ui/react";
import ChatBox from "../components/ChatBox";
import AppHeader from "../components/miscellaneous/AppHeader";
import MyChats from "../components/MyChats";
import { ChatState } from "../Context/ChatProvider"

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <AppHeader/>}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats  />}
        {user && (
          <ChatBox  />
        )}
      </Box>
    </div>
  )
}

export default ChatPage