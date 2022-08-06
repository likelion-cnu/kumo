import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';

function UserInfoButton({ level, nickname }) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/user-info');
  };

  return (
    <UserInfoBox onClick={onClick}>
      <UserImg src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_311/3-2-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg" />
      <UserInfoTextBox>
        <LevelText>Lv. {level} 쿠린이</LevelText>
        <WelcomeText>안녕하세요 {nickname}님</WelcomeText>
      </UserInfoTextBox>
      <Icon>
        <FiChevronRight />
      </Icon>
    </UserInfoBox>
  );
}

const UserInfoBox = styled.button`
  width: 90%;

  margin: 20px;
  padding: 20px;

  border: ${props => props.theme.borderPurple};
  border-radius: 20px;

  background-color: ${props => props.theme.bgColor};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserImg = styled.img`
  width: 27vw;
  height: 27vw;

  max-width: 125px;
  max-height: 125px;

  border-radius: 50%;

  object-fit: contain;

  padding: 2%;
`;

const UserInfoTextBox = styled.div`
  margin-left: 10px;
`;

const LevelText = styled.div`
  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};
  color: ${props => props.theme.fontGray};
`;

const WelcomeText = styled.div`
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
  color: ${props => props.theme.fontBlack};
`;

const Icon = styled.div`
  font-size: 40px;
  color: ${props => props.theme.fontGray};
`;

export default UserInfoButton;
