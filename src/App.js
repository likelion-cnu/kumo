import React from 'react';
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from 'styled-components';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeCustomer from './pages/HomeCustomer';
import styledTheme from './styles/Theme';

function CustomerRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeCustomer />} />
        <Route path="/search/:keyword" element={<HomeCustomer />} />
        <Route path="/profile/:id" element={<HomeCustomer />} />
        <Route path="/mystamp/:id" element={<HomeCustomer />} />
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
