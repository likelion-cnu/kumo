import React from 'react';
import styled from 'styled-components';
import MapHeader from '../components/Map/MapHeader';
import KakaoMap from '../components/Map/KakaoMap';

function Map() {
  // const shopPositions = [
  //   {
  //     title: '카카오',
  //     latlng: { lat: 35.1264101, lng: 126.8788377 },
  //   },
  //   {
  //     title: '생태연못',
  //     latlng: { lat: 35.1264201, lng: 126.8788177 },
  //   },
  //   {
  //     title: '텃밭',
  //     latlng: { lat: 35.1264301, lng: 126.8788477 },
  //   },
  //   {
  //     title: '근린공원',
  //     latlng: { lat: 35.1264401, lng: 126.8788277 },
  //   },
  // ];

  return (
    <Body>
      <MapHeader />
      <KakaoMap />
      {/* /* {shopPositions.map(item => (
          <ShopPositon key={item.title} latlng={item.latlng} />
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

// const ShopPositon = styled.div``;

export default Map;
