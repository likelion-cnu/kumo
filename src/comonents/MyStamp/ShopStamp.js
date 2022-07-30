import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ListBox from './ListBox';
import ShopListImg from './ShopListImg';
import ShopListTitle from './ShopListTitle';

function ShopStamp({ id, title, field, src, coupon, stamp }) {
  const navigate = useNavigate();

  const toShopPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <ListBox onClick={toShopPage}>
      <ShopListTitle title={title} field={field} />
      <ImgCouponBox>
        <ShopListImg src={src} />
        <CouponBox>
          <Coupon>☕️ · {coupon}</Coupon>
          <Stamp>
            <StampTitle>스탬프 ·</StampTitle>
            <StampBarBox>
              <StampBar style={{ width: stamp }} />
              <StampText>{stamp}</StampText>
            </StampBarBox>
          </Stamp>
        </CouponBox>
      </ImgCouponBox>
    </ListBox>
  );
}

const ImgCouponBox = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CouponBox = styled.div`
  width: 55%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Coupon = styled.div`
  width: 100%;
`;

const Stamp = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StampTitle = styled.div`
  width: 40%;
`;

const StampBarBox = styled.div`
  width: 60%;
  height: 100%;

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
