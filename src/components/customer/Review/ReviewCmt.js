import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { BsTelephone, BsPlusLg } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';

function ReviewCmt() {
  const [img, setImg] = useState('');
  const [address, setAddress] = useState('');
  const [event, setEvent] = useState('');

  const open = useDaumPostcodePopup(
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
  );

  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  const onSaveClick = () => {
    console.log('save');
  };

  useEffect(() => {
    setImg('https://i.ytimg.com/vi/PBCL7e02PZQ/maxresdefault.jpg');
    setAddress('광주');
    setEvent('쿠폰 한 장에 아메리카노 한 잔');
  }, []);

  return (
    <DetailBox>
      {/* <ChangeImgBox for="input-file">
        <input
          type="file"
          id="input-file"
          onChange={e => {
            console.log(e.target.files);
            setImg(e.target.files[0]);
          }}
          style={{ display: 'none' }}
        />
        {img === null ? (
          <EmptyImg>
            <BsPlusLg />
          </EmptyImg>
        ) : (
          <ProfileImg src={img} />
        )}
      </ChangeImgBox> */}
      <Text>어떤 점이 좋았나요?</Text>
      <EventBox
        // value={event}
        placeholder="이용 후기를 남겨주세요."
        onChange={e => {
          setEvent(e.target.value);
        }}
      />
      <SaveButton onClick={onSaveClick}>등록</SaveButton>
    </DetailBox>
  );
}
const DetailBox = styled.div`
  width: 100%;
  margin-top: 40px;

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

const Text = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.fontBlack};
  font-weight: ${props => props.theme.fontRegular};
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

const ProfileImg = styled.img`
  width: 40vw;
  height: 40vw;
  max-width: 200px;
  max-height: 200px;

  object-fit: cover;
  border-radius: 20px;
`;

const EventBox = styled.input`
  width: 100%;
  height: 180px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};
  text-align: center;

  border-radius: 10px;
  border: ${props => props.theme.borderPurple};

  ::placeholder {
    // color: green;
    font-size: ${props => props.theme.fontSmall};
  }
`;

const SaveButton = styled.button`
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

export default ReviewCmt;
