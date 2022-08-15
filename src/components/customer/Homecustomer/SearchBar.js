import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SearchBar() {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

  const onChange = e => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const onEnterPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const keyword = inputText.replace(/(\s*)/g, '');
      navigate({
        pathname: '/search',
        search: `?keyword=${keyword}`,
      });
    }
  };

  return (
    <SearchBarBox onKeyPress={onEnterPress}>
      <SearchInput type="text" value={inputText} onChange={onChange} />
    </SearchBarBox>
  );
}

const SearchBarBox = styled.form`
  width: 100%;
  height: 50px;

  margin: 15px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 100%;

  padding: 0 10px;

  border-radius: 20px;
  border: ${props => props.theme.borderPurple};

  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.fontBlack};

  &:focus {
    outline: none;
  }
`;

export default SearchBar;
