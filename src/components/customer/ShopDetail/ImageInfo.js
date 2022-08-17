/*eslint-disable*/

import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

function ImageInfo({ img1, img2, img3, img4 }) {
  return (
    <ImageBox>
      <Box>
        <ChangeImgBox>
          {img1 === null ? <EmptyImg /> : <DetailImg src={img1} />}
        </ChangeImgBox>
        <ChangeImgBox>
          {img2 === null ? <EmptyImg /> : <DetailImg src={img2} />}
        </ChangeImgBox>
      </Box>
      <Box>
        <ChangeImgBox>
          {img3 === null ? <EmptyImg /> : <DetailImg src={img3} />}
        </ChangeImgBox>
        <ChangeImgBox>
          {img4 === null ? <EmptyImg /> : <DetailImg src={img4} />}
        </ChangeImgBox>
      </Box>
    </ImageBox>
  );
}

const ImageBox = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChangeImgBox = styled.div`
  width: 35vw;
  height: 35vw;
  max-width: 200px;
  max-height: 200px;

  padding: 0;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;

  background-color: ${props => props.theme.bgColor};
`;

const DetailImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  border-radius: 10px;
`;

const EmptyImg = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #d9d9d9;
  border-radius: 10px;

  font-size: ${props => props.theme.fontLarge};
`;

export default ImageInfo;
