import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

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
          <a href="/my-stamp">내 스탬프</a>
        </NavbarMenuLi>
        <NavbarMenuLi>
          <a href="/favorite">즐겨찾기</a>
        </NavbarMenuLi>
        <NavbarMenuLi>
          <a href="/profile">마이 프로필</a>
        </NavbarMenuLi>
      </NavbarMenu>
      <NavbarToogleBtn
        href="#"
        onClick={() => {
          setmenu(!menu);
        }}
      >
        <HiOutlineMenuAlt3 />
      </NavbarToogleBtn>
    </Navbar>
  );
}

const Navbar = styled.div`
  width: 100%;
  height: 70px;

  margin-top: 10px;
  padding: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.bgColor};

  @media ${props => props.theme.mobile} {
    position: relative;
  }
`;

const NavbarLogo = styled.div`
  font-size: ${props => props.theme.fontLogo};
  letter-spacing: 1px;

  font-family: 'PyeongChangPeace-Bold';
  font-weight: 800;
  font-style: normal;

  color: ${props => props.theme.mainPurple};
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

const NavbarMenu = styled.div`
  display: flex;
  list-style: none;

  @media ${props => props.theme.mobile} {
    flex-direction: column;
    align-items: center;

    width: 100%;

    position: absolute;
    top: 100%;
    left: 0;

    background-color: ${props => props.theme.bgColor};
    border-top: ${props => props.theme.borderGray};

    z-index: 10;

    display: ${({ menu }) => {
      return menu === false ? 'none' : 'flex';
    }};
  }
`;

const NavbarMenuLi = styled.div`
  padding: 10px;

  @media ${props => props.theme.mobile} {
    width: 100vw;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: ${props => props.theme.fontMedium};
    color: ${props => props.theme.fontBlack};
    text-align: center;

    border-bottom: ${props => props.theme.borderGray};
  }
`;

const NavbarToogleBtn = styled.div`
  display: none;
  color: ${props => props.theme.mainPurple};
  font-size: 30px;

  @media ${props => props.theme.mobile} {
    display: block;
  }
`;

export default Header;
