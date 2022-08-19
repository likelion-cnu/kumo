import React from 'react';
import styled from 'styled-components';

import Header from '../../components/shop/Header/Header';
import HomeAD from '../../components/shop/HomeShop/HomeAD';
import HomeButtons from '../../components/shop/HomeShop/HomeButtons';
import PageButton from '../../components/shop/HomeShop/PageButton';

function HomeShop() {
  return (
    <Body>
      <Header />
      <HomeAD />
      <HomeButtons />
      <Text>둘러보기</Text>
      <PageButton />
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

const Text = styled.div`
  width: 70%;

  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;

export default HomeShop;
