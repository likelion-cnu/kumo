/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ShopStamp from '../../components/customer/MyStamp/ShopStamp';
import Header from '../../components/customer/Header/Header';
import LOCAL from '../../CONSTANT/LOCAL';

function MyStamp() {
  /*
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
  */

  const [myStamp, setMyStamp] = useState([]);

  const loadMyStamp = async () => {
    let localStorage = window.localStorage;
    console.log(localStorage.getItem(LOCAL.TOKEN));

    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/stamp/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );
    setMyStamp(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    loadMyStamp();
    console.log(myStamp);
  }, []);

  return (
    <Body>
      <Header />
      <Text>My Stamp</Text>
      <MyStampBox>
        {myStamp.map(item => (
          <ShopStamp
            key={item.shopname}
            id={item.shopname}
            title={item.title} //가게 이름 필요
            field={item.field} //가게 sector 필요
            src={item.src}
            coupon={item.coupon_num}
            stamp={`${item.stamp_num * 10}%`}
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

export default MyStamp;
