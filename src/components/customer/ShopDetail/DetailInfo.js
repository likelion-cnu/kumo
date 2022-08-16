import React, { useState } from 'react';
import styled from 'styled-components';
import { BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import ShopListTitle from '../ShopList/ShopListTitle';

import StampImg from '../../../images/StampImg.png';

function DetailInfo({
  title,
  field,
  src,
  number,
  isOpen,
  distance,
  address,
  coupon,
  stamp,
}) {
  const [isLiked, setIsLiked] = useState(false);

  const onStarClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <ShopListBox>
      <InfoBox>
        <ShopDetailImg src={src} />
        <InfoTextBox>
          <InfoTitle>
            <ShopListTitle title={title} field={field} />
            <Star onClick={onStarClick} isLiked={isLiked}>
              {isLiked ? (
                <AiFillHeart size={20} />
              ) : (
                <AiOutlineHeart size={20} />
              )}
            </Star>
          </InfoTitle>
          <Info>
            <Icon>
              <BsTelephone />
            </Icon>
            <Number>{number}</Number>
          </Info>
          <Info>
            <Icon>
              <BiTime />
            </Icon>
            <IsOpen>{isOpen}</IsOpen>
          </Info>
          <Info>
            <Icon>
              <FiMapPin />
            </Icon>
            <AddressTextBox>
              <Distance>{distance}</Distance>
              <Address>{address}</Address>
            </AddressTextBox>
          </Info>
        </InfoTextBox>
      </InfoBox>
      <StampCouponBox>
        <Coupon>
          <Title>🎟</Title>
          <Text>{coupon} 장</Text>
        </Coupon>
        <Stamp>
          <StampIcon src={StampImg} />
          <StampBarBox>
            <StampBar style={{ width: stamp }} />
            <StampText>{stamp}</StampText>
          </StampBarBox>
        </Stamp>
      </StampCouponBox>
    </ShopListBox>
  );
}

const ShopListBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgColor};

  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${props => props.theme.borderGray};
`;

const InfoBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShopDetailImg = styled.img`
  width: 33vw;
  height: 33vw;

  max-width: 150px;
  max-height: 150px;

  padding: 2%;

  object-fit: cover;

  border-radius: 20px;
`;

const InfoTitle = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.5px;
`;

const Star = styled.button`
  margin-bottom: 8px;
  margin-right: 10px;

  border: none;

  background-color: ${props => props.theme.bgColor};
  color: ${props =>
    props.isLiked ? props.theme.heartRed : props.theme.fontGray};
`;

const InfoTextBox = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: ${props => props.theme.fontLight};
  font-size: ${props => props.theme.fontXSmall};
  color: ${props => props.theme.fontGray};
`;

const Info = styled.div`
  width: 100%;

  margin-bottom: 2.5px;

  display: flex;
`;

const Icon = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 5px;
`;

const Number = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
`;

const IsOpen = styled(Number)`
  font-weight: ${props => props.theme.fontBold};
`;

const AddressTextBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Address = styled(Number)``;

const Distance = styled(Number)`
  color: ${props => props.theme.mainPurple};
  font-weight: ${props => props.theme.fontRegular};
`;

const StampCouponBox = styled.div`
  width: 100%;
  height: 30%;

  margin: 10px 0;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Coupon = styled.div`
  flex: 1;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Stamp = styled.div`
  width: 100%;
  flex: 1;
  box-sizing: border-box;

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
  width: 40px;
  padding-right: 10px;
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
  top: 20%;
`;

export default DetailInfo;
