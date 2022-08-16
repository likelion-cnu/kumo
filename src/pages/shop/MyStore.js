import React from 'react';
import styled from 'styled-components';
import Header from '../../components/shop/Header/Header';
import DetailInfo from '../../components/shop/MyStore/DetailInfo';
import ImageInfo from '../../components/shop/MyStore/ImageInfo';

function MyStore() {
  return (
    <Body>
      <Header />
      <Box>
        <DetailInfo />
        <ImageInfo />
      </Box>
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

const Box = styled.div`
  width: 90%;

  margin: 20px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MyStore;
