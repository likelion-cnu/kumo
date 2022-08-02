import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <Navbar>
      <NavbarLogo>
        <Fonts>
          <a href="/">KUMO</a>
        </Fonts>
      </NavbarLogo>
      <NavbarMenu>
        <MenuIcon />
      </NavbarMenu>
    </Navbar>
  );
}

// 상단 고정
const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  padding: 0px 60px;
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

// 로고
const NavbarLogo = styled.div`
  font-size: ${props => props.theme.fontLogo};
  letter-spacing: 1px;
  font-family: 'PyeongChangPeace-Bold';
  font-weight: 800;
  font-style: normal;
  color: ${props => props.theme.mainPurple};
`;

// 메뉴
const NavbarMenu = styled.div`
  color: ${props => props.theme.mainPurple};
  height: 140px;
  display: flex;
  align-items: center;
`;

export default Header;
