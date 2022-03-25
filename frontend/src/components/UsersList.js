import { Box, Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'

const UsersList = () => {

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  return (
    <Box w="25%">
      UsersList
      <Box d="flex" justifyContent="space-between" alignItems="center" pb={2}>
        <i class="fas fa-search"></i>
        <Input
          placeholder="Search by name/email/hobby"
          bg="white"
          mr={2}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
          <Button>Search</Button>
      </Box>
    </Box>
    
  )
}

export default UsersList