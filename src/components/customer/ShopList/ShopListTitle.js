import React from 'react';
import styled from 'styled-components';

function ShopTitle({ title, field }) {
  return (
    <TitleBox>
      <Title>{title}</Title>
      <Field>{field}</Field>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;

const Title = styled.div`
  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};

  margin-right: 5px;
`;

const Field = styled.div`
  color: ${props => props.theme.fontGray};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontLight};
`;

export default ShopTitle;
