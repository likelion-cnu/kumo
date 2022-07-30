import React from 'react';
import styled from 'styled-components';

function ShopListImg({ src }) {
  return <Img src={src} />;
}

const Img = styled.img`
  width: 27vw;
  height: 27vw;

  max-width: 125px;
  max-height: 125px;

  padding: 2%;

  object-fit: cover;

  border-radius: 20px;
`;

export default ShopListImg;
