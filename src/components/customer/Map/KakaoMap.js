import {
  Map,
  // MarkerWithCustomOverlayStyle,
  // RemovableCustomOverlayStyle,
  MapMarker,
  useMap,
  CustomOverlayMap,
} from 'react-kakao-maps-sdk';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';

import ShopListImg from '../ShopList/ShopListImg';
import ShopListBox from '../ShopList/ShopListBox';
import ShopListTitle from '../ShopList/ShopListTitle';
import ShopListInfo from '../ShopList/ShopListInfo';

const { kakao } = window;

function EventMarkerContainer({
  id,
  title,
  field,
  src,
  number,
  isopen,
  distance,
  address,
  position,
}) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${id}`);
  };
  const map = useMap();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={marker => {
          setIsOpen(true);
          map.panTo(marker.getPosition());
        }}
      />
      {isOpen && (
        <CustomOverlayMap position={position} xAnchor={0.5} yAnchor={1.3}>
          <div style={{ minWidth: '200px' }}>
            <button
              alt="close"
              width="14"
              height="13"
              type="button"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                cursor: 'pointer',
                border: '1px solid #F5F5F5',
                borderRadius: '20px',
              }}
              onClick={() => setIsOpen(false)}
            >
              close
            </button>
            <ShopListBox onClick={onClick}>
              <ShopListTitle title={title} field={field} />
              <ShopListInfo>
                <ShopListImg src={src} />
                <InfoTextBox>
                  <Info>
                    <Icon>
                      <BsTelephone />
                    </Icon>
                    <Number>{number}</Number>
                  </Info>
                  <Info>
                    <Icon>
                      <BiTime />
                    </Icon>
                    <IsOpen>{isopen}</IsOpen>
                  </Info>
                  <Info>
                    <Icon>
                      <FiMapPin />
                    </Icon>
                    <AddressTextBox>
                      <Distance>{distance}</Distance>
                      <Address>{address}</Address>
                    </AddressTextBox>
                  </Info>
                </InfoTextBox>
              </ShopListInfo>
            </ShopListBox>
          </div>
        </CustomOverlayMap>
      )}
    </>
  );
}

const InfoTextBox = styled.div`
  width: 55%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: ${props => props.theme.fontLight};
  font-size: ${props => props.theme.fontXSmall};
  color: ${props => props.theme.fontGray};
`;

const Info = styled.div`
  width: 100%;

  margin-bottom: 2.5px;

  display: flex;
`;

const Icon = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 5px;
`;

const Number = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
`;

const IsOpen = styled(Number)`
  font-weight: ${props => props.theme.fontBold};
`;

const AddressTextBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Address = styled(Number)``;

const Distance = styled(Number)`
  color: ${props => props.theme.mainPurple};
  font-weight: ${props => props.theme.fontRegular};
`;

function KakaoMap() {
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        position => {
          setState(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        err => {
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState(prev => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  }, []);

  // 마커를 표시할 위치와 title 객체 배열입니다
  const data = [
    {
      id: 'gomada',
      title: '고마다1',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      number: '010-9876-5432',
      isOpen: '영업 중',
      distance: '200m',
      address: '광주광역시 어쩌구저쩌구',
      latlng: { lat: 35.1265999, lng: 126.8789277 },
    },
    {
      id: 'gomada',
      title: '고마다2',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      number: '010-9876-5444',
      isOpen: '영업 중',
      distance: '200m',
      address: '광주광역시 어쩌구저쩌구',
      latlng: { lat: 35.1264101, lng: 126.8788377 }, // 제주도 주소임
    },
    {
      id: 'gomada',
      title: '고마다3',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      number: '010-9876-5432',
      isOpen: '영업 중',
      distance: '200m',
      address: '광주광역시 어쩌구저쩌구',
      latlng: { lat: 35.1267999, lng: 126.8799277 },
    },
    {
      id: 'gomada',
      title: '고마다4',
      field: '카페',
      src: 'https://image.idus.com/image/files/f934efdc5fd94c559e80a11c2a3bee46_720.jpg',
      number: '010-9876-5444',
      isOpen: '영업 중',
      distance: '200m',
      address: '광주광역시 어쩌구저쩌구',
      latlng: { lat: 35.1269999, lng: 126.8779277 },
    },
  ];

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={state.center}
      style={{
        // 지도의 크기
        width: '100%',
        height: '900px',
      }}
      level={2} // 지도의 확대 레벨
    >
      {data.map(value => (
        <EventMarkerContainer
          key={`EventMarkerContainer-${value.latlng.lat}-${value.latlng.lng}`}
          id={value.id}
          title={value.title}
          field={value.field}
          src={value.src}
          number={value.number}
          isopen={value.isOpen}
          distance={value.distance}
          address={value.address}
          position={value.latlng}
        />
      ))}
    </Map>
  );
}

export default KakaoMap;
