import React from 'react';
import styled from 'styled-components';
import { TiStarFullOutline } from 'react-icons/ti';

function ReviewTitle({ id, star, time }) {
  return (
    <TitleBox>
      <Name>{id}</Name>
      <Icon>
        <TiStarFullOutline color="F9EF11" size={18} />
      </Icon>
      <Star>{star}</Star>
      <Time>{time}</Time>
    </TitleBox>
  );
}

const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;
`;

const Name = styled.div`
  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontBold};

  margin-right: 2.5%;
`;

const Icon = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 5px;
`;

const Star = styled.div`
  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontBold};
`;

const Time = styled.div`
  margin-left: 40%;
  color: ${props => props.theme.fontGray};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontLight};
`;

export default ReviewTitle;
