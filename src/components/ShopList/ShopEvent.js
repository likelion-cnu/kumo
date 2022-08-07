import React from 'react';
import styled from 'styled-components';

function ShopTitle({ event }) {
  return (
    <TitleBox>
      <Title>{event}</Title>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 12%;
`;

const Title = styled.div`
  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
  text-align: center;
`;

export default ShopTitle;
