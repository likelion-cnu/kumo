import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

function PageButton() {
  return (
    <PageButtonBodyBox>
      <Link to="/premium">
        <Button>
          <Icon>📊</Icon>
          <Text>가게 데이터</Text>
        </Button>
      </Link>
      <Link to="/my-store">
        <Button>
          <Icon>🏠</Icon>
          <Text>내 가게</Text>
        </Button>
      </Link>
      <Link to="/review">
        <Button style={{ border: 'none' }}>
          <Icon>📄</Icon>
          <Text>내 가게 리뷰</Text>
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

  // margin: 5% 0;
  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.fontGray};

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
