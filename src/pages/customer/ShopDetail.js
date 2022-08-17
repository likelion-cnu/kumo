import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/customer/Header/Header';
import DetailInfo from '../../components/customer/ShopDetail/DetailInfo';
import EventInfo from '../../components/customer/ShopDetail/EventInfo';
import ReviewInfo from '../../components/customer/ShopDetail/ReviewInfo';

function ShopDetail() {
  const shopInfo = [
    {
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
    },
  ];
  const shopDetailInfo = [
    {
      event: '스탬프 10번 적립 시 쿠폰 1장',
    },
  ];
  const shopReview = [
    {
      id: '준수',
      star: '5.0',
      time: '7시간 전',
      comment: 'ㅇㄹㅇㄹㅇㄹㅇㄹㅇㄹ df dfdsdfd dd si',
    },
    {
      id: '승건',
      star: '3.0',
      time: '1일 전',
      comment: 'fwfeffefeefeefefeeef',
    },
  ];
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Body>
      <Header />
      <ShopDetailBox>
        {shopInfo.map(item => (
          <DetailInfo
            key={item.id}
            id={item.id}
            title={item.title}
            field={item.field}
            src={item.src}
            number={item.number}
            isOpen={item.isOpen}
            distance={item.distance}
            address={item.address}
            coupon={item.coupon}
            stamp={`${item.stamp * 10}%`}
          />
        ))}
      </ShopDetailBox>
      <EventBox>
        {shopDetailInfo.map(item => (
          <EventInfo event={item.event} />
        ))}
      </EventBox>
      <ReviewTop>
        <ReviewTitle>Review</ReviewTitle>
        <ReviewButton onClick={onClick}>등록하기</ReviewButton>
      </ReviewTop>
      <ReviewBox>
        {shopReview.map(item => (
          <ReviewInfo
            id={item.id}
            star={item.star}
            time={item.time}
            comment={item.comment}
          />
        ))}
      </ReviewBox>
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
