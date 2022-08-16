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
        <Button style={{ border: 'none' }}>
          <Icon>🎟</Icon>
          <Text>내 스탬프</Text>
        </Button>
      </Link>
    </PageButtonBodyBox>
  );
}

const PageButtonBodyBox = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 70vw;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgColor};

  border: none;
  border-bottom: ${props => props.theme.grayBarBorder};
`;

const Icon = styled.div`
  font-size: 26px;
`;

const Text = styled.div`
  margin-left: 10px;

  color: ${props => props.theme.fontGray};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

export default PageButton;
