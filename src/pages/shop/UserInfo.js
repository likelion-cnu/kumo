import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/shop/Header/Header';

function UserInfo() {
  const [img, setImg] = useState(null);
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSaveClick = () => {
    console.log(img, nickname, phoneNumber); // axios 보내기
  };

  useEffect(() => {
    // axios 가져오기
    setImg('https://i.ytimg.com/vi/PBCL7e02PZQ/maxresdefault.jpg');
    setNickname('풀덤');
    setPhoneNumber('010-2343-9078');
  }, []);

  return (
    <Body>
      <Header />
      <ChangeProfilePage>
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
        <Level>프리미엄 멤버쉽</Level>
        <Nickname
          type="text"
          placeholder="NICKNAME"
          value={nickname}
          onChange={e => {
            setNickname(e.target.value);
          }}
          required
        />
        <PhoneNumber
          type="tel"
          placeholder="PHONE NUMBER"
          value={phoneNumber}
          onChange={e => {
            setPhoneNumber(e.target.value);
          }}
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          required
        />
        <SaveButton onClick={onSaveClick}>저장</SaveButton>
      </ChangeProfilePage>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: ${props => props.theme.bgColor};

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ChangeProfilePage = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30px;

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

const Level = styled.div`
  margin-top: 20px;

  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.fontGray};
`;

const Nickname = styled.input`
  width: 150px;
  height: 40px;
  margin: 20px 0;

  border: ${props => props.theme.grayBarBorder};
  border-radius: 10px;

  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.fontBlack};
  text-align: center;
`;

const PhoneNumber = styled.input`
  width: 200px;
  height: 40px;

  margin-top: 20px;

  border: none;
  border-bottom: ${props => props.theme.grayBarBorder};

  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.fontBlack};
  text-align: center;
`;

const SaveButton = styled.div`
  width: 100px;
  height: 40px;

  margin: 30px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: ${props => props.theme.mainPurple};
  color: ${props => props.theme.bgColor};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
  text-align: center;
`;

export default UserInfo;
