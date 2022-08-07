import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header/Header';
import DetailInfo from '../components/ShopDetail/DetailInfo';
import EventInfo from '../components/ShopDetail/EventInfo';

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
      // event: '스탬프 10번 적립 시 쿠폰 1장',
    },
  ];
  // const shopDetail = [
  //   {
  //     event: '스탬프 10번 적립 시 쿠폰 1장',
  //   },
  // ];

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
            // event={item.event}
          />
        ))}
      </ShopDetailBox>
      {/* <EventBox>
        {shopDetail.map(item => (
          <ShopEvent event={item.event} />
        ))}
      </EventBox> */}
      <EventInfo />
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

export default Search;
