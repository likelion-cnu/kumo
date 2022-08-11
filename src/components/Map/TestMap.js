// import React, { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';

// const { kakao } = window;

// function KakaoMap() {
//   function Map() {
//     const [kakaoMap, setKakaoMap] = useState(null);
//     const container = useRef(null);

//     const initMap = () => {
//       const center = new kakao.maps.LatLng(
//         33.36256187769044,
//         126.52903781775196,
//       );
//       const options = {
//         center,
//         level: 8,
//       };
//       const map = new kakao.maps.Map(container.current, options);
//       setKakaoMap(map);
//     };

//     useEffect(() => {
//       navigator.geolocation.getCurrentPosition(position => {
//         const marker = new kakao.maps.Marker({
//           position: new kakao.maps.LatLng(
//             position.latitude,
//             position.longitude,
//           ),
//           title: position.longitude,
//           image: null,
//           clickable: true,
//         });

//         marker.setMap(kakaoMap);
//       });
//       initMap();
//     }, []);

//     return <MapContainer id="KakaoMap" ref={container} />;
//   }
// }

// const MapContainer = styled.div`
//   width: 100%;
//   height: 100vh;
// `;

// export default KakaoMap;
