/* eslint-disable */

import React, { useEffect, useState } from 'react';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import Header from '../../components/shop/Header/Header';

function QrScan() {
  const [qrcode, setQrcode] = useState('No result');

  const onScan = data => {
    if (data) {
      setQrcode(data.text);
    }
  };

  const onError = err => {
    console.log(err);
  };

  const QrStyle = {
    height: '80vh',
    margin: '10px 0',
  };

  return (
    <Body>
      <Header />
      <QrReader onScan={onScan} onError={onError} style={QrStyle} />
      <div>{qrcode}</div>
      <CameraButton>dd</CameraButton>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CameraButton = styled.button`
  /* position: absolute;
  top: 80%; */
`;

export default QrScan;
