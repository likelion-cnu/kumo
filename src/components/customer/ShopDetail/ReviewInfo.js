import React from 'react';
import styled from 'styled-components';

import { Rating } from '@mui/material';

function ReviewInfo({ id, star, time, comment }) {
  return (
    <ReviewListBox>
      <TitleBox>
        <NameStarBox>
          <Name>{id}</Name>
          <Rating value={star} readOnly size="small" />
        </NameStarBox>
        <Time>{time}</Time>
      </TitleBox>
      <ReviewTextBox>
        <Comment>{comment}</Comment>
      </ReviewTextBox>
    </ReviewListBox>
  );
}

const ReviewListBox = styled.div`
  width: 90%;
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgColor};

  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: ${props => props.theme.borderGray};
`;

const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameStarBox = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};

  margin-right: 2.5%;
`;

const Time = styled.div`
  color: ${props => props.theme.fontGray};

  font-size: ${props => props.theme.fontXSmall};
  font-weight: ${props => props.theme.fontLight};
`;

const ReviewTextBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 10px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Comment = styled.div`
  width: 100%;
  text-align: left;

  font-weight: ${props => props.theme.fontLight};
  font-size: ${props => props.theme.fontXSmall};
  color: ${props => props.theme.fontBlack};
`;

export default ReviewInfo;
