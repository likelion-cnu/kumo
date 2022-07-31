import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import ShopListBox from '../ShopList/ShopListBox';
import ShopListImg from '../ShopList/ShopListImg';
import ShopListTitle from '../ShopList/ShopListTitle';
import ShopListInfo from '../ShopList/ShopListInfo';

function ShopStamp({ id, title, field, src, coupon, stamp }) {
  const navigate = useNavigate();

  const toShopPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <ShopListBox onClick={toShopPage}>
      <ShopListTitle title={title} field={field} />
      <ShopListInfo>
        <ShopListImg src={src} />
        <StampCouponBox>
          <Coupon>
            <Title>☕️</Title>
            <BsDot />
            <Text>{coupon}</Text>
          </Coupon>
          <Stamp>
            <Title>스탬프</Title>
            <BsDot />
            <StampBarBox>
              <StampBar style={{ width: stamp }} />
              <StampText>{stamp}</StampText>
            </StampBarBox>
          </Stamp>
        </StampCouponBox>
      </ShopListInfo>
    </ShopListBox>
  );
}

const StampCouponBox = styled.div`
  width: 55%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  text-align: left;
`;

const Text = styled.div``;

const StampBarBox = styled.div`
  width: 65%;
  height: 90%;

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
  top: 9%;
`;

export default ShopStamp;
