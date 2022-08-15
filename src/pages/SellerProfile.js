import React from 'react';
import styled from 'styled-components';
import ShopHeader from '../components/SellerHeader/SellerHeader';
import IssuedCoupon from '../components/SellerProfile/IssuedCoupon';
import ShopInfoButton from '../components/SellerProfile/SellerInfoButton';

function ShopProfile() {
  const user = {
    level: '프리미엄 멤버쉽',
    nickname: '풀덤',
  };

  const issueCoupons = [
    {
      id: '철수',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      menu: '아메리카노',
      date: '2021.08.14 09:45',
    },
    {
      id: '주원',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      menu: '돌체라뗴',
      date: '2021.08.14 10:45',
    },
  ];

  return (
    <Body>
      <ShopHeader />
      <ShopInfoButton level={user.level} nickname={user.nickname} />
      <H1>쿠폰 발행 히스토리</H1>
      <UsedCouponsBox>
        {issueCoupons.map(item => (
          <IssuedCoupon
            key={item.id}
            id={item.id}
            src={item.src}
            menu={item.menu}
            date={item.date}
          />
        ))}
      </UsedCouponsBox>
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

const H1 = styled.div`
  margin-top: 5%;
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
  color: ${props => props.theme.fontBlack};
`;

const UsedCouponsBox = styled.div`
  width: 90%;

  margin: 20px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;
`;

export default ShopProfile;
