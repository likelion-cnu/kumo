import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeCustomer from './pages/customer/HomeCustomer';
import styledTheme from './styles/Theme';
import MyStamp from './pages/customer/MyStamp';
import Search from './pages/customer/Search';
import Profile from './pages/customer/Profile';

import HomeShop from './pages/shop/HomeShop';
import QrScan from './pages/shop/QrScan';

function CustomerRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCustomer />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-stamp" element={<MyStamp />} />
        <Route path="/detail/:shopId" element={<HomeCustomer />} />
        <Route path="/favorite" element={<HomeCustomer />} />
        <Route path="/map" element={<HomeCustomer />} />
      </Routes>
    </Router>
  );
}

function ShopRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeShop />} />
        <Route path="/qrscan" element={<QrScan />} />
      </Routes>
    </Router>
  );
}

function AppRouter() {
  return <ShopRoutes />;
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
