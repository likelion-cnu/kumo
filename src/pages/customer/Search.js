/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../../components/customer/Header/Header';
import SearchShopInfo from '../../components/customer/Search/SearchShopInfo';
import SearchBar from '../../components/customer/Homecustomer/SearchBar';

function Search() {
  /*
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
    },
  ];
  */

  const [searchParams, setSearchParams] = useSearchParams();
  const [shopInfo, setShopInfo] = useState([]);

  const loadSearchDate = async () => {
    const response = await axios.get(
      process.env.REACT_APP_KUMO_API + '/customer/search/',
      {
        params: {
          search: searchParams.get('keyword'),
        },
      },
    );
    setShopInfo(response.data);
  };

  useEffect(() => {
    loadSearchDate();
    console.log(shopInfo);
  }, [searchParams.get('keyword')]);

  return (
    <Body>
      <Header />
      <SearchBar />
      <SearchResultBox>
        {shopInfo.map(item => (
          <SearchShopInfo
            key={item.user}
            id={item.user}
            title={item.shop_name}
            field={item.shop_sector}
            src={item.shop_logo}
            number={item.shop_phone_num}
            isOpen="영업 중" //필요
            distance={'200m'} //필요
            address={'서울특별시 서대문구 가좌로 134'}
          />
        ))}
      </SearchResultBox>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const SearchResultBox = styled.div`
  width: 90%;

  margin: 0 20px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Search;
