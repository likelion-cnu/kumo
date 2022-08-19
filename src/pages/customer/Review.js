import React from 'react';
import styled from 'styled-components';
import ReviewHeader from '../../components/customer/Review/ReviewHeader';
// import ReviewStar from '../../components/customer/Review/ReviewStar';
import ReviewCmt from '../../components/customer/Review/ReviewCmt';
import ReviewImg from '../../components/customer/Review/ReviewImg';

function Review() {
  return (
    <Body>
      <ReviewHeader />
      <Box>
        {/* <ReviewStar /> */}
        <ReviewImg />
        <ReviewCmt />
      </Box>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const Box = styled.div`
  width: 90%;

  margin: 20px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Review;
