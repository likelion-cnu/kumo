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
      <NavbarName>
        <Fonts>KUMO</Fonts>
      </NavbarName>
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

// 폰트
const Fonts = styled.div`
  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
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
