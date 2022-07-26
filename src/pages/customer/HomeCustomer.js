import React from 'react';
import styled from 'styled-components';
import MyQrCode from '../../components/customer/Homecustomer/MyQrCode';
import PageButton from '../../components/customer/Homecustomer/PageButton';
import Header from '../../components/customer/Header/Header';
import SearchBar from '../../components/customer/Homecustomer/SearchBar';

function HomeCustomer() {
  return (
    <Body>
      <Header />
      <SearchBar />
      <MyQrCode />
      <Text>둘러보기</Text>
      <PageButton />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.div`
  width: 70%;

  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;

export default HomeCustomer;
