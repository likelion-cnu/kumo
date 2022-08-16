import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SellerHeader from '../components/SellerHeader/SellerHeader';
import SellerDetailInfo from '../components/SellerDetail/SellerDetailInfo';
import SellerEventInfo from '../components/SellerDetail/SellerEventInfo';
import SellerReviewInfo from '../components/SellerDetail/SellerReviewInfo';

function Search() {
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
  const shopDetail = [
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
      star: '4.5',
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
      <SellerHeader />
      <ShopDetailBox>
        {shopInfo.map(item => (
          <SellerDetailInfo
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
        <Box>
          {shopDetail.map(item => (
            <SellerEventInfo event={item.event} />
          ))}
        </Box>
      </EventBox>
      <ReviewTop>
        <ReviewName>리뷰</ReviewName>
        <ReviewButton onClick={onClick}>등록하기</ReviewButton>
      </ReviewTop>
      <ReviewBox>
        {shopReview.map(item => (
          <SellerReviewInfo
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

  border-radius: 20px;
`;

const EventBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  border: ${props => props.theme.borderPurple};
  border-radius: ${props => props.theme.borderRadius};
  margin: auto;
  width: 90%;
  height: 80px;
  positon: relative;
  top: 300px;
  tes-align: center;
`;

const ReviewTop = styled.div`
  width: 80%;

  margin-top: 40px;
  display: flex;
  align-items: center;
`;

const ReviewName = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontBold};
`;

const ReviewButton = styled.div`
  width: 25%;
  height: 20px;

  display: flex;
  align-items: center;

  border-radius: 20px;
  border: ${props => props.theme.borderPurple};

  color: ${props => props.theme.mainPurple};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontBold};
`;

const ReviewBox = styled.div`
  width: 81%;

  margin: 10px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: ${props => props.theme.borderPurple};
`;

export default Search;
