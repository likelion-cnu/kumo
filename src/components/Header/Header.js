import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
// import { maxWidth } from '@mui/system';

function Header() {
  const [menu, setmenu] = useState(false);

  return (
    <Navbar>
      <NavbarLogo>
        <Fonts>
          <a href="/">KUMO</a>
        </Fonts>
      </NavbarLogo>
      <NavbarMenu menu={menu}>
        <NavbarMenuLi>
          <a href="/">마이프로필</a>
        </NavbarMenuLi>
        <NavbarMenuLi>
          <a href="/">내스탬프</a>
        </NavbarMenuLi>
        <NavbarMenuLi>
          <a href="/">고객센터</a>
        </NavbarMenuLi>
      </NavbarMenu>
      <NavbarToogleBtn
        href="#"
        onClick={() => {
          setmenu(!menu);
        }}
      >
        <MenuIcon />
      </NavbarToogleBtn>
    </Navbar>
  );
}

// 상단 고정
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  padding: 8px 12px;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }
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
  padding: 8px 24px;
  color: ${props => props.theme.mainPurple};
`;

// 메뉴
const NavbarMenu = styled.div`
  display: flex;
  list-style: none;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: ${({ menu }) => {
      return menu === false ? 'none' : 'flex';
    }};
  }
`;

const NavbarMenuLi = styled.div`
  padding: 8px;

  &: hover {
    background-color: #d49466;
    border-radius: 4px;
  }

  @media ${props => props.theme.mobile} {
    width: 100%;
    height: 4px;
    padding: 20px 12px;
    text-align: center;
  }
`;

const NavbarToogleBtn = styled.div`
  display: none;
  color: ${props => props.theme.mainPurple};
  position: absolute;
  right: 40px;
  font-size: 24px;

  @media ${props => props.theme.mobile} {
    display: block;
  }
`;

export default Header;
