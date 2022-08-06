import React from 'react';
import styled from 'styled-components';

function MyQrCode() {
  const myQrCode =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png';

  return (
    <MyQrCodeBox>
      <Text>내 큐알 코드</Text>
      <QrImg src={myQrCode} />
    </MyQrCodeBox>
  );
}

const MyQrCodeBox = styled.div`
  width: 70%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 5% 0;
`;

const Text = styled.div`
  width: 100%;

  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.fontBold};

  color: ${props => props.theme.fontBlack};
`;

const QrImg = styled.img`
  width: 100%;

  object-fit: contain;

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;

  margin: 5%;
`;

export default MyQrCode;
