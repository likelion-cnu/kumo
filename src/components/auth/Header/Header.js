import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

function Header() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <Navbar>
      <BackButton onClick={onClick}>
        <IoIosArrowBack size={20} />
      </BackButton>
      <NavbarName>KUMO</NavbarName>
    </Navbar>
  );
}

const Navbar = styled.div`
  width: 100%;
  height: 70px;

  position: fixed;
  top: 0;

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

  font-size: ${props => props.theme.fontLogo};
  letter-spacing: 1px;

  font-family: 'PyeongChangPeace-Bold';
  font-weight: 800;
  font-style: normal;

  color: ${props => props.theme.mainPurple};
`;

export default Header;
