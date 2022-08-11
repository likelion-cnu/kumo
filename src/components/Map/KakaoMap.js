import React, { useEffect } from 'react';

const { kakao } = window;

function KakaoMap() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const myMap = {
        err: 0,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
      const mapContainer = document.getElementById('map');

      const mapOption = {
        center: new kakao.maps.LatLng(myMap.latitude, myMap.longitude),
        level: 1,
      };

      const map = new kakao.maps.Map(mapContainer, mapOption);

      // 마커가 표시 될 위치
      const markerPosition = new kakao.maps.LatLng(
        myMap.latitude,
        myMap.longitude,
      );

      // 마커를 생성
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      // 마커를 지도 위에 표시
      marker.setMap(map);
    });
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default KakaoMap;
