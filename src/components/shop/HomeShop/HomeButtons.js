import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function HomeButtons() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/qrscan');
  };

  return <ButtonBox onClick={onClick}>QR 촬영하기</ButtonBox>;
}

const ButtonBox = styled.button`
  width: 80%;
  height: 20vh;

  margin: 10% 0;

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;

  background-color: ${props => props.theme.bgColor};
`;

export default HomeButtons;
