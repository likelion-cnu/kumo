/* eslint-disable */

import React, { useEffect, useState } from 'react';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import { MdFlipCameraAndroid } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Header from '../../components/shop/Header/Header';

function QrScan() {
  const [userId, setUserId] = useState('No result');
  const [facingMode, setFacingMode] = useState('rear');

  const QrStyle = {
    height: '100%',
    margin: '0',
  };

  const onScan = data => {
    if (data) {
      setUserId(data.text);
    }
  };

  const onError = err => {
    console.log(err);
  };

  const onCameraButtonClick = () => {
    if (facingMode === 'rear') {
      setFacingMode('front');
    } else if (facingMode === 'front') {
      setFacingMode('rear');
    }
  };

  const onCloseButtonClick = () => {
    setUserId('No result');
  };

  useEffect(() => {
    console.log(userId);
  }, [userId]);

  return (
    <Body>
      <Header />
      {userId === 'No result' ? (
        <QrScanPage>
          <QrReader
            onScan={onScan}
            onError={onError}
            facingMode={facingMode}
            style={QrStyle}
          />
          <CameraButton onClick={onCameraButtonClick}>
            <MdFlipCameraAndroid />
          </CameraButton>
        </QrScanPage>
      ) : (
        <QrResultPage>
          <CloseIcon onClick={onCloseButtonClick}>
            <AiOutlineCloseCircle />
          </CloseIcon>
          <QrResultBox>
            <QrResultInfo>고객의 ID는...</QrResultInfo>
            <QrResultId>{userId}</QrResultId>
          </QrResultBox>
        </QrResultPage>
      )}
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

const QrScanPage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

const CameraButton = styled.button`
  position: absolute;
  bottom: 20px;

  width: 60px;
  height: 60px;

  border: none;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;

  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontGray};

  :active {
    color: ${props => props.theme.mainPurple};
  }
`;

const QrResultPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseIcon = styled(CameraButton)``;

const QrResultBox = styled.div``;

const QrResultInfo = styled.div`
  font-size: ${props => props.theme.fontSmall};

  color: ${props => props.theme.fontGray};

  margin-bottom: 10px;
`;

const QrResultId = styled.div`
  font-size: ${props => props.theme.fontLarge};

  color: ${props => props.theme.fontBlack};
`;

export default QrScan;
