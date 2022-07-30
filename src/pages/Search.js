import React from 'react';
import styled from 'styled-components';
import SearchShopInfo from '../comonents/Search/SearchShopInfo';

function Search() {
  return (
    <Body>
      <SearchShopInfo />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

export default Search;
