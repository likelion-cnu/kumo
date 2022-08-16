import React from 'react';
import styled from 'styled-components';

function TextLeft() {
  return <Text />;
}

const Text = styled.div`
  margin-top: 10%;
  margin-bottom: 5px;

  display: flex;
  align-items: left;

  color: ${props => props.theme.fontWhite};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;

export default TextLeft;
