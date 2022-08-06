import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import Event from '../components/ShopDetail/Event';

function ShopDetail() {
  // 이벤트 가져오기 ~~~
  return (
    <Body>
      <Header />
      <Event />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

export default ShopDetail;
