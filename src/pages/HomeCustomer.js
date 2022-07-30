import React from 'react';
import styled from 'styled-components';
import MyQrCode from '../comonents/Homecustomer/MyQrCode';

function HomeCustomer() {
  return (
    <Body>
      <MyQrCode />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomeCustomer;
