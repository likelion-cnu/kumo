import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { BsTelephone } from 'react-icons/bs';
import { BiTime } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';

function DetailInfo() {
  const [img, setImg] = useState('');
  const [shopName, setShopName] = useState('');
  const [shopSector, setShopSector] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isOpen, setIsOpen] = useState('');
  const [address, setAddress] = useState('');

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

  useEffect(() => {
    setImg('https://i.ytimg.com/vi/PBCL7e02PZQ/maxresdefault.jpg');
    setShopName('푸들');
    setShopSector('강아지');
    setPhoneNumber('010-2342-0333');
    setIsOpen('영업 중');
    setAddress('광주');
  }, []);

  return (
    <DetailBox>
      <TopBox>
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
        <TitleBox>
          <Title
            value={shopName}
            onChange={e => {
              setShopName(e.target.value);
            }}
          />
          <Text
            value={shopSector}
            onChange={e => {
              setShopSector(e.target.value);
            }}
          />
        </TitleBox>
      </TopBox>
      <BottomBox>
        <Info>
          <Icon>
            <BsTelephone />
          </Icon>
          <Number
            pattern="010-[0-9]{4}-[0-9]{4}"
            value={phoneNumber}
            onChange={e => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Info>
        <Info>
          <Icon>
            <BiTime />
          </Icon>
          <IsOpen
            value={isOpen}
            onChange={e => {
              setIsOpen(e.target.value);
            }}
          />
        </Info>
        <Info>
          <Icon>
            <FiMapPin />
          </Icon>
          <Address type="button" value={address} onClick={handleClick} />
        </Info>
      </BottomBox>
    </DetailBox>
  );
}
const DetailBox = styled.div`
  width: 100%;

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

const TopBox = styled.div`
  width: 100%;

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
  border-radius: 20px;
`;

const TitleBox = styled.div`
  width: 55%;
  height: 100%;

  padding-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.input`
  width: 100%;
  margin-bottom: 15px;

  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
  text-align: center;

  border: none;
  border-bottom: ${props => props.theme.grayBarBorder};
`;

const Text = styled.input`
  width: 100%;

  color: ${props => props.theme.fontGray};
  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontLight};
  text-align: center;

  border: none;
  border-bottom: ${props => props.theme.grayBarBorder};
`;

const BottomBox = styled.div`
  width: 100%;
  margin: 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 100%;

  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${props => props.theme.fontMedium};
`;

const Icon = styled.div`
  width: 10%;
  height: 100%;
  margin-right: 5px;
`;

const Number = styled.input`
  width: 100%;
  text-align: center;
  padding: 0;

  border: none;
  border-bottom: ${props => props.theme.grayBarBorder};

  font-size: ${props => props.theme.fontMedium};
`;

const IsOpen = styled(Number)`
  font-weight: ${props => props.theme.fontBold};
`;

const Address = styled(Number)`
  padding: 0;
  background-color: ${props => props.theme.bgColor};
`;

export default DetailInfo;
