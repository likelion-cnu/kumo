import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

function ImageInfo() {
  const [id, setId] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);

  const ImgUpload = async () => {
    const newForm = new FormData();

    newForm.append('user', id);
    newForm.append('shop_image1', img1);
    newForm.append('shop_image2', img2);
    newForm.append('shop_image3', img3);
    newForm.append('shop_image4', img4);

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
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              setImg2(e.target.files[0]);
              ImgUpload();
            }}
            style={{ display: 'none' }}
          />
          {img2 === null ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <DetailImg src={img2} />
          )}
        </ChangeImgBox>
      </Box>
      <Box>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              setImg3(e.target.files[0]);
              ImgUpload();
            }}
            style={{ display: 'none' }}
          />
          {img3 === null ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <DetailImg src={img3} />
          )}
        </ChangeImgBox>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              setImg4(e.target.files[0]);
              ImgUpload();
            }}
            style={{ display: 'none' }}
          />
          {img4 === null ? (
            <EmptyImg>
              <BsPlusLg />
            </EmptyImg>
          ) : (
            <DetailImg src={img4} />
          )}
        </ChangeImgBox>
      </Box>
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
