/*eslint-disable*/

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LOCAL from '../../../CONSTANT/LOCAL';

function MyQrCode() {
  const [myQrCode, setMyQrCode] = useState('');

  const loadMyQr = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/home/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );

    setMyQrCode(process.env.REACT_APP_KUMO_API + response.data[0].image);
  };

  useEffect(() => {
    loadMyQr();
  }, [myQrCode]);

  return (
    <MyQrCodeBox>
      <Text>내 큐알 코드</Text>
      <QrImg src={myQrCode} />
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
  border-radius: 10px;

  margin: 5%;
`;

export default MyQrCode;
