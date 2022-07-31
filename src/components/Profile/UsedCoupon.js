import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import ShopListImg from '../ShopList/ShopListImg';

function UsedCoupons({ id, src, title, date }) {
  const navigate = useNavigate();

  const toShopPage = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <UsedCouponBox onClick={toShopPage}>
      <ShopListImg src={src} />
      <TextBox>
        <TitleBox>
          <Title>{title}</Title>
          <Icon>
            <FiChevronRight />
          </Icon>
        </TitleBox>
        <Date>{date}</Date>
      </TextBox>
    </UsedCouponBox>
  );
}

const UsedCouponBox = styled.button`
  width: 90%;

  padding: 10px 0;

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.bgColor};

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${props => props.theme.borderGray};
`;

const TextBox = styled.div`
  margin-left: 10px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  margin-bottom: 2.5px;
`;

const Title = styled.div`
  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
`;

const Icon = styled.div`
  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontSmall};
`;

const Date = styled.div`
  text-align: left;

  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontXSmall};
  font-weight: ${props => props.theme.fontLight};
`;

export default UsedCoupons;
