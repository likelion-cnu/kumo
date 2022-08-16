import React from 'react';
import styled from 'styled-components';
import Header from '../../components/shop/Header/Header';

function MyStore() {
  return (
    <Body>
      <Header />
      <ShopDetailBox>
        <ChangeImgBox for="input-file">
          <input
            type="file"
            id="input-file"
            onChange={e => {
              console.log(e.target.files);
              setImg(e.target.files[0]);
            }}
            style={{ display: 'none' }}
          />
          <ProfileImg src={img} />
        </ChangeImgBox>
      </ShopDetailBox>
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

const ShopDetailBox = styled.div`
  width: 90%;

  margin: 20px;
  padding: 5px 10px;

  display: flex;
  flex-direction: column;
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
  border-radius: 50%;

  background-color: ${props => props.theme.bgColor};
`;

const ProfileImg = styled.img`
  width: 40vw;
  height: 40vw;
  max-width: 200px;
  max-height: 200px;

  object-fit: cover;
  border-radius: 50%;
`;

export default MyStore;
