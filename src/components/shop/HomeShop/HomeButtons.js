import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function HomeButtons() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/qrscan');
  };

  return (
    <MyQrCodeBox>
      <Text>QR 촬영하기</Text>
      <ButtonBox onClick={onClick}>
        <Icon>📷</Icon>
      </ButtonBox>
    </MyQrCodeBox>
  );
}

const MyQrCodeBox = styled.div`
  width: 80%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5% 0;
`;

const ButtonBox = styled.button`
  width: 100%;
  // max-width: 300px;
  height: 30vh;

  object-fit: contain;

  margin: 5%;

  border: ${props => props.theme.borderPurple};
  border-radius: 10px;

  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontBlack};
`;

const Text = styled.div`
  width: 100%;

  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.fontBold};

  color: ${props => props.theme.fontBlack};
`;

const Icon = styled.div`
  font-size: 50px;
`;

export default HomeButtons;
