import React from 'react';
import styled from 'styled-components';
import MyQrCode from '../components/Homecustomer/MyQrCode';
import PageButton from '../components/Homecustomer/PageButton';
import Header from '../components/Header/Header';

function HomeCustomer() {
  return (
    <Body>
      <Header />
      <MyQrCode />
      <PageButton />
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

export default HomeCustomer;
