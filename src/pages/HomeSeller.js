import React from 'react';
import styled from 'styled-components';
import MyQrCode from '../components/Homecustomer/MyQrCode';
import SellerPageBtn from '../components/HomeSeller/SellerPageBtn';
import ShopHeader from '../components/SellerHeader/SellerHeader';

function HomeCustomer() {
  return (
    <Body>
      <ShopHeader />
      <MyQrCode />
      <SellerPageBtn />
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
