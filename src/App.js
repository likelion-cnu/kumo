/*eslint-disable*/

import React, { useState, useEffect } from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styledTheme from './styles/Theme';

import HomeCustomer from './pages/customer/HomeCustomer';
import MyStamp from './pages/customer/MyStamp';
import Search from './pages/customer/Search';
import Profile from './pages/customer/Profile';
import ShopDetail from './pages/customer/ShopDetail';
import Map from './pages/customer/Map';
import Review from './pages/customer/Review';

import HomeShop from './pages/shop/HomeShop';
import QrScan from './pages/shop/QrScan';
import MyStore from './pages/shop/MyStore';
import Preminum from './pages/shop/Premium';
import MyPreminum from './pages/shop/MyPremium';
import ShopProfile from './pages/shop/Profile';
import ShopUserInfo from './pages/shop/UserInfo';

import HomeAuth from './pages/auth/HomeAuth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import UserInfo from './pages/customer/UserInfo';

import LOCAL_KEY from './CONSTANT/LOCAL';

function CustomerRoutes({ logOut }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCustomer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-info" element={<UserInfo logOut={logOut} />} />
        <Route path="/my-stamp" element={<MyStamp />} />
        <Route path="/detail/:shopId" element={<ShopDetail />} />
        <Route path="/favorite" element={<HomeCustomer />} />
        <Route path="/map" element={<Map />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

function ShopRoutes({ logOut }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeShop />} />
        <Route path="/qrscan" element={<QrScan />} />
        <Route path="/my-store" element={<MyStore />} />
        <Route path="/review" element={<HomeShop />} />
        <Route path="/premium" element={<Preminum />} />
        <Route path="/mypremium" element={<MyPreminum />} />
        <Route path="/profile" element={<ShopProfile />} />
        <Route path="/user-info" element={<ShopUserInfo logOut={logOut} />} />
      </Routes>
    </Router>
  );
}

function AuthRoutes({ logIn }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeAuth />} />
        <Route path="login" element={<Login logIn={logIn} />} />
        <Route path="/join" element={<Register />} />
        <Route path="/find" element={<HomeAuth />} />
      </Routes>
    </Router>
  );
}

let localStorage = window.localStorage;

function AppRouter() {
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem(LOCAL_KEY.IS_LOGGED_IN),
  // );

  // const logIn = () => setIsLoggedIn(true);
  // const logOut = () => setIsLoggedIn(false);

  // useEffect(() => {
  //   console.log(isLoggedIn);
  // }, [isLoggedIn]);

  // if (localStorage.getItem(LOCAL_KEY.IS_LOGGED_IN) !== 'true') {
  //   return <AuthRoutes logIn={logIn} />;
  // }

  // if (localStorage.getItem(LOCAL_KEY.IS_LOGGED_IN) !== 'false') {
  //   if (localStorage.getItem(LOCAL_KEY.IS_SHOP) !== 'true') {
  //     return <CustomerRoutes logOut={logOut} />;
  //   }

  //   if (localStorage.getItem(LOCAL_KEY.IS_SHOP) !== 'false') {
  //     return <ShopRoutes logOut={logOut} />;
  //   }
  // }

  return <ShopRoutes />;
  // 로그인 없이 작업하려면 AppRouter() 코드 주석 처리한 후 기존처럼 상단의 코드 사용하면 됩니다!
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <StyledThemeProvider theme={styledTheme}>
      <GlobalStyle />
      <AppRouter />
    </StyledThemeProvider>
  );
}

export default App;
