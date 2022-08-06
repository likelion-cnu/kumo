import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function PageButton() {
  return (
    <PageButtonBodyBox>
      <Link to="/favorite">
        <Button>
          <Icon>⭐️</Icon>
          <Text>즐겨찾기</Text>
        </Button>
      </Link>
      <Link to="/map">
        <Button>
          <Icon>📌</Icon>
          <Text>주변 가게</Text>
        </Button>
      </Link>
      <Link to="/my-stamp">
        <Button>
          <Icon>🎟</Icon>
          <Text>내 스탬프</Text>
        </Button>
      </Link>
    </PageButtonBodyBox>
  );
}

const PageButtonBodyBox = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 30px;
`;

const Button = styled.button`
  width: 75vw;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px 0;

  /* background-color: ${props => props.theme.mainPurple}; */
  background: radial-gradient(#7f2b8c 0%, #512da8 125%);

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;
`;

const Icon = styled.div`
  font-size: 26px;
`;

const Text = styled.div`
  margin-left: 10px;

  color: ${props => props.theme.bgColor};

  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

export default PageButton;
