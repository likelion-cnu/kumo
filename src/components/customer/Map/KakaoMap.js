import React, { useEffect } from 'react';

const { kakao } = window;

function TestMap({ lat, lng }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const myMap = {
        err: 0,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }; // 현재 내 위치
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div

      const mapOption = {
        center: new kakao.maps.LatLng(myMap.latitude, myMap.longitude), // 지도의 중심 좌표
        level: 1, // 지도의 확대 레벨
      };

      const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

      // 마커를 표시할 위치와 title 객체 배열입니다
      const positions = [
        {
          title: '카카오',
          latlng: new kakao.maps.LatLng(35.1264101, 126.8788377),
        },
        {
          title: '생태연못',
          latlng: new kakao.maps.LatLng(35.1265999, 126.8789277), // 제주도 주소임
        },
        {
          title: '텃밭',
          latlng: new kakao.maps.LatLng(33.450879, 126.56994),
        },
        {
          title: '근린공원',
          latlng: new kakao.maps.LatLng(33.451393, 126.570738),
        },
      ];

      // 마커 이미지의 이미지 주소입니다
      const imageSrc =
        'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';

      for (let i = 0; i < positions.length; i += 1) {
        // 마커 이미지의 이미지 크기 입니다
        const imageSize = new kakao.maps.Size(24, 35);
        // 마커 이미지를 생성합니다
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
          map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
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

export default TestMap;
