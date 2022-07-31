import React from 'react';
import styled from 'styled-components';
import UsedCoupon from '../comonents/Profile/UsedCoupons';

function Profile() {
  return (
    <Body>
      <UsedCoupon src=" " />
    </Body>
  );
}
const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

export default Profile;
