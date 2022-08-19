/* eslint-disable */

import React, { useEffect, useState } from 'react';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import { MdFlipCameraAndroid } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Header from '../../components/shop/Header/Header';
import axios from 'axios';
import LOCAL from '../../CONSTANT/LOCAL';
import StampImg from '../../images/StampImg.png';

function QrScan() {
  const [userId, setUserId] = useState('No result');
  const [facingMode, setFacingMode] = useState('environment');
  const [isStamp, setIsStamp] = useState(true);
  const [stampCount, setStampCount] = useState(1);
  const [couponCount, setCouponCount] = useState(1);

  const [customerInfo, setCustomerInfo] = useState([]);

  const QrStyle = {
    height: '100%',
    margin: '0',
  };

  const loadCustomer = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/shop/qrcheck/' + 'customer' + '/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );

    console.log(response.data);
    setCustomerInfo(response.data);
  };

  const onScan = data => {
    if (data) {
      setUserId(data.text);
      loadCustomer();
    }
  };

  const onError = err => {
    console.log(err);
  };

  const onCameraButtonClick = () => {
    if (facingMode === 'environment') {
      setFacingMode('user');
    } else if (facingMode === 'user') {
      setFacingMode('environment');
    }
  };

  const onCloseButtonClick = () => {
    setUserId('No result');
  };

  const onStampCouponClick = event => {
    if (event.target.value === 'stamp') {
      setIsStamp(true);
    }
    if (event.target.value === 'coupon') {
      setIsStamp(false);
    }
  };

  const onMinusClick = event => {
    if (isStamp === true) {
      if (stampCount > 1) {
        setStampCount(stampCount - 1);
      }
    } else if (isStamp === false) {
      if (couponCount > 1) {
        setCouponCount(couponCount - 1);
      }
    }
  };

  const onPlusClick = () => {
    if (isStamp === true) {
      setStampCount(stampCount + 1);
    } else if (isStamp === false) {
      setCouponCount(couponCount + 1);
    }
  };

  const onSendClick = () => {
    if (isStamp === true) {
      //StampCount send
    } else if (isStamp === false) {
      //CouponCount send
    }

    setUserId('No result');
  };

  useEffect(() => {
    setStampCount(1);
    setCouponCount(1);
    setIsStamp(true);
  }, [userId]);

  return (
    <Body>
      <Header />
      {userId === 'No result' ? (
        <QrScanPage>
          <QrReader
            onScan={onScan}
            onError={onError}
            facingmode={facingMode}
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
            <ProfileImg src={customerInfo.cu_profile_img} />
            <CustomerInfo>
              <CustomerStampCoupon>
                <Coupon>
                  <Text>{customerInfo.cu_nickname}</Text>
                </Coupon>
                <Coupon>
                  <Title>🎟</Title>
                  <Text>{customerInfo.coupon_num} 장</Text>
                </Coupon>
                <Stamp>
                  <StampIcon src={StampImg} />
                  <StampBarBox>
                    <StampBar style={{ width: customerInfo.stamp_num }} />
                    <StampText>{customerInfo.stamp_num}</StampText>
                  </StampBarBox>
                </Stamp>
              </CustomerStampCoupon>
            </CustomerInfo>
          </QrResultBox>
          <StampCouponBox>
            <SelectButtonBox>
              <StampCouponButton
                isClicked={isStamp}
                value="stamp"
                onClick={onStampCouponClick}
              >
                Stamp
              </StampCouponButton>
              <StampCouponButton
                isClicked={!isStamp}
                value="coupon"
                onClick={onStampCouponClick}
              >
                Coupon
              </StampCouponButton>
            </SelectButtonBox>
            <CountBox>
              <MinusButton onClick={onMinusClick}>
                <RiArrowLeftSLine />
              </MinusButton>
              <Count>{isStamp === true ? stampCount : couponCount}</Count>
              <PlusButton onClick={onPlusClick}>
                <RiArrowRightSLine />
              </PlusButton>
            </CountBox>
            <SendButton onClick={onSendClick}>
              {isStamp === true ? '적립하기' : '사용하기'}
            </SendButton>
          </StampCouponBox>
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
  bottom: 70px;

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

const QrResultBox = styled.div`
  width: 90%;

  margin: 10px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProfileImg = styled.img`
  width: 27vw;
  height: 27vw;

  max-width: 125px;
  max-height: 125px;

  border-radius: 50%;

  object-fit: cover;

  padding: 2%;
`;

const CustomerInfo = styled.div`
  font-size: ${props => props.theme.fontMedium};

  color: ${props => props.theme.fontBlack};
`;

const CustomerStampCoupon = styled.div`
  width: 60%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Coupon = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

const Stamp = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;

  text-align: left;
`;

const Text = styled.div`
  width: 100%;

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};
  color: ${props => props.theme.fontGray};
  text-align: center;
`;

const StampIcon = styled.img`
  width: 30px;
`;

const StampBarBox = styled.div`
  width: 75%;
  height: 20px;

  border: ${props => props.theme.grayBarBorder};
  border-radius: 10px;

  position: relative;
`;

const StampBar = styled.div`
  height: 100%;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background-color: #d6c5ff;
`;

const StampText = styled.div`
  width: 100%;

  text-align: center;
  font-size: 10px;

  position: absolute;
  top: 0%;
`;

const StampCouponBox = styled.div`
  width: 90%;

  margin: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SelectButtonBox = styled.div`
  width: 90%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StampCouponButton = styled.button`
  width: 50%;
  height: 100%;

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontLight};
  background-color: ${props => props.theme.bgColor};
  color: ${props =>
    props.isClicked ? props.theme.mainPurple : props.theme.fontGray};

  border: none;
  border-bottom: ${props =>
    props.isClicked ? props.theme.borderPurple : '2px solid #D9D9D9'};
`;

const CountBox = styled.div`
  width: 100%;

  margin: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Count = styled.div`
  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontLarge};
`;

const MinusButton = styled.button`
  height: 100%;
  padding: 5px;

  border: none;
  background-color: ${props => props.theme.bgColor};

  font-size: ${props => props.theme.fontLarge};
  color: ${props => props.theme.fontGray};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlusButton = styled(MinusButton)``;

const SendButton = styled.button`
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 20px;

  background-color: ${props => props.theme.mainPurple};
  color: ${props => props.theme.bgColor};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};
`;

export default QrScan;
