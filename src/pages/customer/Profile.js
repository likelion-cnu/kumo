/*eslint-disable */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../../components/customer/Header/Header';
import UsedCoupon from '../../components/customer/Profile/UsedCoupon';
import UserInfoButton from '../../components/customer/Profile/UserInfoButton';

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

  const [user, setUser] = useState([]);
  const [usedCoupons, setUsedCoupons] = useState([]);

  const loadProfile = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/profile/',
    );

    setUser(response.data);
  };

  const loadCouponHistory = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/couponhistory/',
    );

    setUsedCoupons(response.data);
  };

  useEffect(() => {
    loadProfile();
    loadCouponHistory();
  }, []);

  return (
    <Body>
      <Header />
      <UserInfoButton
        img={user.profile_img}
        level={user.level}
        nickname={user.nickname}
      />
      <UsedCouponsBox>
        <Text>쿠폰 사용 기록</Text>
        {usedCoupons.map(item => (
          <UsedCoupon
            key={item.id} //업주의 id 필요
            id={item.id}
            src={item.src} //shop_logo 필요
            title={item.shopname}
            date={item.created_at}
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
