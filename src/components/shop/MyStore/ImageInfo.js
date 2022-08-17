import React, { useState } from 'react';
import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

function ImageInfo() {
  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');
  const [img4, setImg4] = useState('');

  const onUploadClick = () => {
    console.log(img1);
  };

  return (
    <>
      <Box>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              console.log(e.target.files);
              setImg1(e.target.files[0]);
            }}
            style={{ display: 'none' }}
          />
          {img1 === '' ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <ProfileImg src={img1} />
          )}
        </ChangeImgBox>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              console.log(e.target.files);
              setImg2(e.target.files[0]);
            }}
            style={{ display: 'none' }}
          />
          {img2 === '' ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <ProfileImg src={img2} />
          )}
        </ChangeImgBox>
      </Box>
      <Box>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              console.log(e.target.files);
              setImg3(e.target.files[0]);
            }}
            style={{ display: 'none' }}
          />
          {img3 === '' ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <ProfileImg src={img3} />
          )}
        </ChangeImgBox>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              console.log(e.target.files);
              setImg4(e.target.files[0]);
            }}
            style={{ display: 'none' }}
          />
          {img4 === '' ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <ProfileImg src={img4} />
          )}
        </ChangeImgBox>
      </Box>
      <UploadButton onClick={onUploadClick}>업로드</UploadButton>
    </>
  );
}

const Box = styled.div`
  width: 100%;
  margin-top: 40px;

  display: flex;
  justify-content: space-between;
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

const ProfileImg = styled.img`
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

const UploadButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  background-color: ${props => props.theme.mainPurple};
  color: ${props => props.theme.bgColor};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;

export default ImageInfo;
