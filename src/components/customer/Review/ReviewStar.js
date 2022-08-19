import React, { useState } from 'react';
import styled from 'styled-components';

import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  1: '별로예요',
  2: '그저그래요',
  3: '괜찮아요',
  4: '좋아요',
  5: '최고예요',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function ReviewStar() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  // const goToFetch = e => {
  //   setClicked(e.target.id);
  //   fetch('http://10.58.3.24:8000/products/1', {
  //     // 사용할 http 메소드
  //     method: 'POST',
  //     // 토큰
  //     headers: {
  //       Authorization:
  //         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.loTjeBWZ9SeXV-BcIxqOtX37AN30ROvsZl0_udeeRJU',
  //     },
  //     // 서버에 보낼 데이터 (별점)
  //     body: JSON.stringify({
  //       rating: e.target.id,
  //     }),
  //   });
  // };
  return (
    <ReviewBox>
      <ReviewTextBox>
        <p>이 가게를 평가해주세요!</p>
      </ReviewTextBox>
      <Box
        sx={{
          width: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Rating
          size="large"
          name="hover-feedback"
          value={value}
          precision={1}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        {value !== null && (
          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </Box>
    </ReviewBox>
  );
}

export default ReviewStar;

const ReviewBox = styled.div`
  padding: 20px;
  color: #999;
  font-size: 20px;

  i {
    margin: 20px 10px 20px 0;
    opacity: 0.1;
    cursor: pointer;
    font-size: 50px;
  }

  .yellowStar {
    color: orange;
    opacity: 1;
  }
`;

const ReviewTextBox = styled.div`
  position: relative;
  text-align: center;
  padding-bottom: 10px;
`;
