import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

function MapHeader() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <MapNavbar>
      <BackButton onClick={onClick}>
        <IoIosArrowBack size={20} />
      </BackButton>
      <NavbarName>주변 가게</NavbarName>
    </MapNavbar>
  );
}

const MapNavbar = styled.div`
  width: 100%;
  height: 70px;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const BackButton = styled.div`
  width: 60%;
  display: flex;
  margin-left: 5%;
`;

const NavbarName = styled.div`
  width: 100%;
  display: flex;
  text-align: center;

  font-size: ${props => props.theme.fontMedium};
`;

export default MapHeader;
