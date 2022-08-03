import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import List from '../List/List';

function SearchBar() {
  const [inputText, setInputText] = useState('');
  const inputHandler = e => {
    // convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Main>
      <Search>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="가게이름검색"
          // multiline
          // InputProps={{ style: { color: '#191A22' } }}
          // color="secondary"
          // focused
        />
      </Search>
      <List input={inputText} />
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;
  font-size: 20px;
`;

const Search = styled.div`
  width: 60%;
  height: 50%;
  color: 'white';
`;

export default SearchBar;
