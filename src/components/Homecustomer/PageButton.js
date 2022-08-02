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
    </PageButtonBodyBox>
  );
}

const PageButtonBodyBox = styled.div`
  width: 100%;

  padding: 0 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 30vw;
  height: 30vw;

  position: relative;

  background-color: ${props => props.theme.bgColor};

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;
`;

const Icon = styled.div`
  font-size: 35px;
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 5% 8%;

  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

export default PageButton;
