import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

function PageButton() {
  return (
    <PageButtonBodyBox>
      <Link to="/favorite">
        <Button>
          <Icon>📊</Icon>
          <Icon>
            <FiChevronRight />
          </Icon>
          <Text>가게 데이터</Text>
        </Button>
      </Link>
      <Link to="/sellerDetail">
        <Button>
          <Icon>🏠</Icon>
          <Icon>
            <FiChevronRight />
          </Icon>
          <Text>내 가게</Text>
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
  bottom: 100px;
`;

const Button = styled.button`
  width: 75vw;
  height: 110px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 0;

  /* background-color: ${props => props.theme.mainPurple}; */
  background: ${props => props.theme.bgColor};

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;
`;

const Icon = styled.div`
  font-size: 26px;
`;

const Text = styled.div`
  margin-left: 10px;

  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontLarge};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

export default PageButton;
