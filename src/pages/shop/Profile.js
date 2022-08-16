import React from 'react';
import styled from 'styled-components';
import Header from '../../components/shop/Header/Header';
import IssuedCoupon from '../../components/shop/Profile/IssuedCoupon';
import InfoButton from '../../components/shop/Profile/InfoButton';

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
    {
      id: '주원',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      menu: '돌체라뗴',
      date: '2021.08.14 10:45',
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
      <Header />
      <InfoButton level={user.level} nickname={user.nickname} />
      <Text>쿠폰 발행 히스토리</Text>
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

const Text = styled.div`
  margin-top: 5%;
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
  color: ${props => props.theme.fontGray};

  border-bottom: ${props => props.theme.grayBarBorder};
`;

const UsedCouponsBox = styled.div`
  width: 90%;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ShopProfile;
