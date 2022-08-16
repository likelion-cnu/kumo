import React from 'react';
import styled from 'styled-components';

import Header from '../../components/shop/Header/Header';
import HomeButtons from '../../components/shop/HomeShop/HomeButtons';

function HomeShop() {
  return (
    <Body>
      <Header />
      <HomeButtons />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

export default HomeShop;
