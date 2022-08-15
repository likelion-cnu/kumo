import React from 'react';
import styled from 'styled-components';

function TitleBox({ title, text }) {
  return (
    <WelcomeBox>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </WelcomeBox>
  );
}

const WelcomeBox = styled.div`
  width: 80%;
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-bottom: 10px;
  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontXLarge};
`;

const Text = styled.div`
  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontSmall};
`;

export default TitleBox;
