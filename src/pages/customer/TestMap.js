import React from 'react';
import styled from 'styled-components';
import MapHeader from '../../components/customer/Map/MapHeader';
// import KakaoMap from '../../components/customer/Map/KakaoMap';
import TestMap from '../../components/customer/Map/TestMap';

const { kakao } = window;

function Map() {
  // const positions = [
  //   {
  //     id: 'gomada',
  //     title: '고마다',
  //     field: '카페',
  //     src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
  //     number: '010-9876-5432',
  //     isOpen: '영업 중',
  //     distance: '200m',
  //     address: '광주광역시 어쩌구저쩌구',
  //     latlng: new kakao.maps.LatLng(35.1264101, 126.8788377),
  //   },
  //   {
  //     id: 'gomadaa',
  //     title: '고마다',
  //     field: '카페',
  //     src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
  //     number: '010-9876-5432',
  //     isOpen: '영업 중',
  //     distance: '200m',
  //     address: '광주광역시 어쩌구저쩌구',
  //     latlng: new kakao.maps.LatLng(35.1265999, 126.8789277), // 제주도 주소임
  //   },
  //   {
  //     id: 'gomadad',
  //     title: '고마다',
  //     field: '카페',
  //     src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
  //     number: '010-9876-5432',
  //     isOpen: '영업 중',
  //     distance: '200m',
  //     address: '광주광역시 어쩌구저쩌구',
  //     latlng: new kakao.maps.LatLng(35.123014, 126.8828595),
  //   },
  //   {
  //     id: 'gomadac',
  //     title: '고마다',
  //     field: '카페',
  //     src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
  //     number: '010-9876-5432',
  //     isOpen: '영업 중',
  //     distance: '200m',
  //     address: '광주광역시 어쩌구저쩌구',
  //     latlng: new kakao.maps.LatLng(35.123014, 126.8829595),
  //   },
  // ];

  return (
    <Body>
      <MapHeader />
      <TestMap />
      {/* {positions.map(item => (
        <TestMap
          key={item.id}
          id={item.id}
          title={item.title}
          field={item.field}
          src={item.src}
          number={item.number}
          isOpen={item.isOpen}
          distance={item.distance}
          address={item.address}
          latlng={item.latlng}
        />
      ))} */}
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const MapBox = styled.div``;

export default Map;
