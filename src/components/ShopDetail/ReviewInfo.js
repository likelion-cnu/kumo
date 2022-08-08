import React from 'react';
import styled from 'styled-components';
import ReviewListTitle from '../ReviewList/ReviewListTitle';
import ReviewListBox from '../ReviewList/ReviewListBox';

function ReviewInfo({ id, star, time, comment }) {
  return (
    <ReviewListBox>
      <ReviewListTitle id={id} star={star} time={time} />
      <ReviewTextBox>
        <Comment>{comment}</Comment>
      </ReviewTextBox>
    </ReviewListBox>
  );
}

const ReviewTextBox = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: ${props => props.theme.fontLight};
  font-size: ${props => props.theme.fontXSmall};
  color: ${props => props.theme.fontBlack};
`;

const Comment = styled.div`
  width: 100%;
  text-align: left;
`;

export default ReviewInfo;
