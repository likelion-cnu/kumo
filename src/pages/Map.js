import React from 'react';
import styled from 'styled-components';
import MapHeader from '../components/Map/MapHeader';
import KakaoMap from '../components/Map/KakaoMap';

function Map() {
  return (
    <Body>
      <MapHeader />
      <KakaoMap />
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

export default Map;
