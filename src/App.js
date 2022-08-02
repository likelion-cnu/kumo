import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeCustomer from './pages/HomeCustomer';
import styledTheme from './styles/Theme';
import MyStamp from './pages/MyStamp';
import Search from './pages/Search';
import Profile from './pages/Profile';

function CustomerRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCustomer />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/my-stamp/:userId" element={<MyStamp />} />
        <Route path="/detail/:shopId" element={<HomeCustomer />} />
        <Route path="/favorite" element={<HomeCustomer />} />
        <Route path="/map" element={<HomeCustomer />} />
      </Routes>
    </Router>
  );
}

function AppRouter() {
  return <CustomerRoutes />;
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
