import React from 'react';
import styled from 'styled-components';
import ShopStamp from '../components/MyStamp/ShopStamp';
import Header from '../components/Header/Header';

function MyStamp() {
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

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const MyStampBox = styled.div`
  width: 90%;

  margin: 20px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;
`;

export default MyStamp;
