import React from 'react';
import styled from 'styled-components';
import Header from '../../components/customer/Header/Header';
import ShopStamp from '../../components/customer/MyStamp/ShopStamp';

function Favorite() {
  const myStamp = [
    {
      id: 'gomada',
      title: '고마다',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      coupon: '0',
      stamp: 7,
    },
    {
      id: 'gomada',
      title: '고마다',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      coupon: '0',
      stamp: '6',
    },
    {
      id: 'gomada',
      title: '고마다',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      coupon: '0',
      stamp: '6',
    },
  ];

  return (
    <Body>
      <Header />
      <Text>즐겨찾기</Text>
      <MyStampBox>
        {myStamp.map(item => (
          <ShopStamp
            key={item.id}
            id={item.id}
            title={item.title}
            field={item.field}
            src={item.src}
            coupon={item.coupon}
            stamp={`${item.stamp * 10}%`}
          />
        ))}
      </MyStampBox>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const Text = styled.div`
  width: 130px;
  margin-top: 20px;
  padding-bottom: 12.5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.fontRegular};

  border-bottom: ${props => props.theme.grayBarBorder};
`;

const MyStampBox = styled.div`
  width: 90%;

  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Favorite;
