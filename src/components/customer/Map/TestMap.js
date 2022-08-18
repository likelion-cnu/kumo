import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { kakao } = window;

function TestMap({ id }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${id}`);
  };

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
          id: 'gomada',
          title: '고마다',
          field: '카페',
          src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
          number: '010-9876-5432',
          isOpen: '영업 중',
          distance: '200m',
          address: '광주광역시 어쩌구저쩌구',
          latlng: new kakao.maps.LatLng(35.1264101, 126.8788377),
        },
        {
          id: 'gomada',
          title: '고마다',
          field: '카페',
          src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
          number: '010-9876-5444',
          isOpen: '영업 중',
          distance: '200m',
          address: '광주광역시 어쩌구저쩌구',
          latlng: new kakao.maps.LatLng(35.1265999, 126.8789277), // 제주도 주소임
        },
        {
          id: 'gomada',
          title: '고마다',
          field: '카페',
          src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
          number: '010-9876-5432',
          isOpen: '영업 중',
          distance: '200m',
          address: '광주광역시 어쩌구저쩌구',
          latlng: new kakao.maps.LatLng(35.123014, 126.8828595),
        },
        {
          id: 'gomada',
          title: '고마다',
          field: '카페',
          src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
          number: '010-9876-5444',
          isOpen: '영업 중',
          distance: '200m',
          address: '광주광역시 어쩌구저쩌구',
          latlng: new kakao.maps.LatLng(35.123014, 126.8829595),
        },
      ];

      // 지도에 마커를 표시하는 함수입니다
      function displayMarker(data) {
        const marker = new kakao.maps.Marker({
          map,
          position: data.latlng,
        });
        // 마커 위에 커스텀오버레이를 표시합니다
        // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
        const overlay = new kakao.maps.CustomOverlay({
          xAnchor: 0.5,
          yAnchor: 2,
          position: marker.getPosition(),
        });

        const content = document.createElement('div');
        content.innerHTML = data.title;
        content.style.cssText =
          'background: #FDFCFF; border: 1px solid #F5F5F5; border-Radius: 10px; color: #191A22';

        const field = document.createElement('div');
        field.innerHTML = data.field;

        const num = document.createElement('div');
        num.innerHTML = data.number;

        // const num = document.createElement('div');
        // num.innerHTML = data.number;

        const pic = document.createElement('img');
        pic.innerHTML = data.src;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '닫기';
        closeBtn.style.cssText = 'align-items: right';
        closeBtn.onclick = function () {
          overlay.setMap(null);
        };

        content.appendChild(field);
        content.appendChild(num);
        content.appendChild(closeBtn);
        content.appendChild(pic);
        overlay.setContent(content);

        kakao.maps.event.addListener(marker, 'click', () => {
          overlay.setMap(map);
        });
        kakao.maps.event.addListener(map, 'click', function () {
          overlay.setMap(null);
        });
      }
      for (let i = 0; i < positions.length; i += 1) {
        const data = positions[i];
        displayMarker(data);
      }
    });
  }, []);

  return <Map id="map" />;
}

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export default TestMap;
