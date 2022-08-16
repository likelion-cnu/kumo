import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import ShopListImg from '../ShopList/ShopListImg';
import ShopListBox from '../ShopList/ShopListBox';
import ShopListTitle from '../ShopList/ShopListTitle';
import ShopListInfo from '../ShopList/ShopListInfo';

function SearchShopInfo({
  id,
  title,
  field,
  src,
  number,
  isOpen,
  distance,
  address,
}) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
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
            <IsOpen>{isOpen}</IsOpen>
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

export default SearchShopInfo;
