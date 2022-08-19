import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

// import { Rating } from '@mui/material';

function ReviewImage() {
  const [id, setId] = useState(null);
  const [img1, setImg1] = useState(null);

  const ImgUpload = async () => {
    const newForm = new FormData();

    newForm.append('user', id);
    newForm.append('shop_image1', img1);

    // axios put
  };

  useEffect(() => {
    async function loadImgData() {
      setId(localStorage.getItem('username'));
      // id axios get
    }
    loadImgData();
  }, []);

  return (
    <>
      {/* <Text>별점을 남겨주세요.</Text>
      <Rating Controlled size="large" /> */}
      <ImgText>사진 첨부하기</ImgText>
      <Box>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              setImg1(e.target.files[0]);
              ImgUpload();
            }}
            style={{ display: 'none' }}
          />
          {img1 === null ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <DetailImg src={img1} />
          )}
        </ChangeImgBox>
      </Box>
    </>
  );
}

// const Text = styled.div`
//   width: 100%;
//   margin-top: 20px;
//   margin-bottom: 20px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   font-size: ${props => props.theme.fontMedium};
//   color: ${props => props.theme.fontBlack};
//   font-weight: ${props => props.theme.fontRegular};
// `;

const ImgText = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.fontBlack};
  font-weight: ${props => props.theme.fontRegular};
`;

const Box = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChangeImgBox = styled.label`
  width: 40vw;
  height: 40vw;
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
  width: 40vw;
  height: 40vw;
  max-width: 200px;
  max-height: 200px;

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

// const UploadButton = styled.button`
//   width: 100px;
//   height: 40px;
//   margin-top: 30px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   border: none;
//   border-radius: 10px;

//   background-color: ${props => props.theme.mainPurple};
//   color: ${props => props.theme.bgColor};
//   font-size: ${props => props.theme.fontMedium};
//   font-weight: ${props => props.theme.fontRegular};
// `;

export default ReviewImage;
