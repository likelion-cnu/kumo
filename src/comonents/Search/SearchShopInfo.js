import React from 'react';
import styled from 'styled-components';
import { BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import ShopListImg from '../MyStamp/ShopListImg';

function SearchShopInfo() {
  return (
    <Box>
      <TitleBox>
        <Title>dd</Title>
        <Field>dd</Field>
      </TitleBox>
      <ImgInfoBox>
        <ShopListImg />
        <InfoText>
          <Number>
            <Icon>
              <BsTelephone />
            </Icon>
            <NumberText>010-2389-4343</NumberText>
          </Number>
          <IsOpen>
            <Icon>
              <BiTime />
            </Icon>
            <IsOpenText>영업 중</IsOpenText>
          </IsOpen>
          <DistanceAddressBox>
            <Icon>
              <FiMapPin />
            </Icon>
            <AddressTextBox>
              <Distance>200m</Distance>
              <Address>광주광역시 어쩌고저쩌고 얼ㅇ너ㅐ</Address>
            </AddressTextBox>
          </DistanceAddressBox>
        </InfoText>
      </ImgInfoBox>
    </Box>
  );
}

const Box = styled.div`
  width: 80%;
  height: 175px;

  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: ${props => props.theme.borderGray};
`;

const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
`;

const Title = styled.div`
  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};

  margin-right: 2.5%;
`;

const Field = styled.div`
  color: ${props => props.theme.fontGray};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontLight};
`;

const ImgInfoBox = styled.div``;

const InfoText = styled.div``;

const Number = styled.div``;

const Icon = styled.div``;

const NumberText = styled.div``;

const IsOpen = styled.div``;

const IsOpenText = styled.div``;

const DistanceAddressBox = styled.div``;

const AddressTextBox = styled.div``;

const Address = styled.div``;

const Distance = styled.div``;

export default SearchShopInfo;
