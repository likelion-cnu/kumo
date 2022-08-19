/* eslint-disable */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/customer/Header/Header';
import DetailInfo from '../../components/customer/ShopDetail/DetailInfo';
import EventInfo from '../../components/customer/ShopDetail/EventInfo';
import ReviewInfo from '../../components/customer/ShopDetail/ReviewInfo';
import ImageInfo from '../../components/customer/ShopDetail/ImageInfo';
import LOCAL from '../../CONSTANT/LOCAL';

function ShopDetail() {
  /*
  const shopInfo = {
    id: 'gomada',
    title: '고마다',
    field: '카페',
    src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
    number: '010-9876-5432',
    isOpen: '영업 중',
    distance: '200m',
    address: '광주광역시 어쩌구저쩌구',
    coupon: '0',
    stamp: 7,
    img1: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
    img2: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
    img3: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
    img4: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
  };
  */
  /*
  const shopDetailInfo = {
    event: '스탬프 10번 적립 시 쿠폰 1장',
  };
  */
  /*
  const shopReview = [
    {
      id: '준수',
      star: '5.0',
      time: '7시간 전',
      comment: '최고의 가게 추천추천',
    },
    {
      id: '승건',
      star: '3.0',
      time: '1일 전',
      comment: '너무 맛있어요~',
    },
  ];
  */

  const fakeData = {
    shopname: 'tiger',
    shop_name: '호랑이 카페',
    shop_sector: '카페',
    shop_logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbILM_K0wODBZns2vgWXBUh7uA52j2awllkQ&usqp=CAU',
    coupon_num: '1',
    stamp_num: '2',
    shop_phone_num: '010-1111-1111',
    address: '서울특별시 서대문구 가좌로 134',
  };

  const navigate = useNavigate();

  const { shopId } = useParams();

  const [shopInfo, setShopInfo] = useState([]);
  const [shopReview, setShopReview] = useState([]);

  const onClick = () => {
    navigate('/review');
  };

  let localStorage = window.localStorage;

  const loadShopDetail = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/shop_detail/' + shopId + '/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );
    console.log(response);

    setShopInfo(response.data);
  };

  const loadShopReview = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/review_list/' + shopId + '/',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem(LOCAL.TOKEN)}`,
        },
      },
    );
    console.log(response.data);

    setShopReview(response.data);
  };

  useEffect(() => {
    // console.log(shopId);
    loadShopDetail();
    // console.log(shopInfo);
    // loadShopReview();
  }, [shopId]);

  return (
    <Body>
      <Header />
      <ShopDetailBox>
        <DetailInfo
          key={shopId}
          id={shopId}
          title={shopInfo.shop_name}
          field={shopInfo.shop_sector}
          src={process.env.REACT_APP_KUMO_API + shopInfo.src} // logo
          number={shopInfo.shop_phone_num}
          // isOpen={shopInfo.isOpen} // 프론트에서 처리하기
          // distance={shopInfo.distance} //몰라!
          address={shopInfo.address} //없음 아직
          coupon={shopInfo.coupon_num} //없음
          stamp={`${shopInfo.stamp_num * 10}%`} //없음
        />
      </ShopDetailBox>
      <EventBox>
        <EventInfo event={shopInfo.shop_introduction} />
      </EventBox>
      <ImageInfo
        img1={process.env.REACT_APP_KUMO_API + shopInfo.img1}
        img2={process.env.REACT_APP_KUMO_API + shopInfo.img2}
        img3={process.env.REACT_APP_KUMO_API + shopInfo.img3}
        img4={process.env.REACT_APP_KUMO_API + shopInfo.img4}
      />
      <ReviewTop>
        <ReviewTitle>Review</ReviewTitle>
        <ReviewButton onClick={onClick}>등록하기</ReviewButton>
      </ReviewTop>
      <ReviewBox>
        {shopReview.map(item => (
          <ReviewInfo
            id={item.id}
            star={item.review_star}
            time={item.time}
            comment={item.review_caption}
            key={item.id}
          />
        ))}
      </ReviewBox>
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

const ShopDetailBox = styled.div`
  width: 90%;

  margin: 20px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EventBox = styled.div`
  width: 80%;
  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border: ${props => props.theme.borderPurple};
  border-radius: 10px;
`;

const ReviewTop = styled.div`
  width: 80%;

  margin-top: 30px;
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewTitle = styled.div`
  display: flex;
  align-items: center;

  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;

const ReviewButton = styled.div`
  height: 30px;
  width: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: ${props => props.theme.borderPurple};

  background-color: ${props => props.theme.mainPurple};
  color: ${props => props.theme.bgColor};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontMedium};
  text-align: center;
`;

const ReviewBox = styled.div`
  width: 85%;
  margin: 15px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ShopDetail;
