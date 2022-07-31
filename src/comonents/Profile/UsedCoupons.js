import React from 'react';
import styled from 'styled-components';
import ShopListImg from '../MyStamp/ShopListImg';

function UsedCoupons({ src }) {
  return (
    <UsedCouponsBox>
      <UsedCoupon>
        <ShopListImg src={src} />
      </UsedCoupon>
    </UsedCouponsBox>
  );
}

const UsedCouponsBox = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UsedCoupon = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default UsedCoupons;
