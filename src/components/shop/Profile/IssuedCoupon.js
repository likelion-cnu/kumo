import React from 'react';
import styled from 'styled-components';
import ShopListImg from '../../customer/ShopList/ShopListImg';

function IssuedCoupon({ id, src, menu, date }) {
  return (
    <UsedCouponBox>
      <ShopListImg src={src} />
      <TextBox>
        <TitleBox>
          <ID>{id}</ID>
        </TitleBox>
        <Menu>{menu}</Menu>
        <Date>{date}</Date>
      </TextBox>
    </UsedCouponBox>
  );
}

const UsedCouponBox = styled.button`
  width: 90%;
  padding: 15px 0;
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

const ID = styled.div`
  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
`;

const Menu = styled.div`
  text-align: left;
  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontXSmall};
  font-weight: ${props => props.theme.fontLight};
`;

const Date = styled.div`
  text-align: left;
  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontXSmall};
  font-weight: ${props => props.theme.fontLight};
`;

export default IssuedCoupon;
