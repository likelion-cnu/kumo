/*eslint-disable */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../../components/customer/Header/Header';
import UsedCoupon from '../../components/customer/Profile/UsedCoupon';
import UserInfoButton from '../../components/customer/Profile/UserInfoButton';
import LOCAL from '../../CONSTANT/LOCAL';

function Profile() {
  /*
  const user = {
    level: 1,
    nickname: '짱구',
  };
  

  const usedCoupons = [
    {
      id: 'gomada',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      title: '고마다',
      date: '2021.08.14 09:45',
    },
    {
      id: 'gomada',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      title: '고마다',
      date: '2021.08.14 09:45',
    },
    {
      id: 'gomada',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      title: '고마다',
      date: '2021.08.14 09:45',
    },
    {
      id: 'gomada',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      title: '고마다',
      date: '2021.08.14 09:45',
    },
    {
      id: 'gomada',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      title: '고마다',
      date: '2021.08.14 09:45',
    },
  ];
  */

  const fakeUser = {
    nickname: '호랑이',
  };

  const [user, setUser] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);

  let localStorage = window.localStorage;

  const loadProfile = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/profile/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );

    setUser(response.data[0]);
    console.log(response);
  };

  const loadCouponHistory = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/couponhistory/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );

    setUsedCoupons(response.data);
    console.log(response);
  };

  useEffect(() => {
    loadProfile();
    loadCouponHistory();
  }, []);

  return (
    <Body>
      <Header />
      <UserInfoButton
        key={user.nickname}
        img={process.env.REACT_APP_KUMO_API + user.profile_img}
        level={user.level}
        nickname={user.nickname}
      />
      <UsedCouponsBox>
        <Text>쿠폰 사용 기록</Text>
        {usedCoupons.map(item => (
          <UsedCoupon
            key={item.shopname}
            id={item.shopname}
            src={process.env.REACT_APP_KUMO_API + item.shop_logo} //shop_logo 필요
            title={item.shop_name} //null
            date={item.created_at}
          />
        ))}
      </UsedCouponsBox>
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

const UsedCouponsBox = styled.div`
  width: 90%;
  margin: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  width: 130px;
  margin: 20px 0;
  padding-bottom: 12.5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};

  border-bottom: ${props => props.theme.grayBarBorder};
`;

export default Profile;
