import React from 'react';
import styled from 'styled-components';
import Header from '../../components/customer/Header/Header';

function Favorite() {
  return (
    <Body>
      <Header />
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

export default Favorite;
