import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function HomeAuth() {
  const navigate = useNavigate();

  const onClick = event => {
    navigate(event.target.value);
  };
  return (
    <Body>
      <Logo>
        쿠폰을
        <br />
        모으다.
      </Logo>
      <Introduce>
        QR 코드로
        <br />
        스탬프 적립을 간단하게!
      </Introduce>
      <LoginButton onClick={onClick} value="/login">
        로그인
      </LoginButton>
      <ExtraBox>
        <ExtraButton onClick={onClick} value="/join">
          <MdOutlineKeyboardArrowRight /> 회원가입
        </ExtraButton>
        <ExtraButton onClick={onClick} value="/find">
          <MdOutlineKeyboardArrowRight /> ID/PW 찾기
        </ExtraButton>
      </ExtraBox>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: radial-gradient(
    101.92% 71.09% at 11.03% 57.76%,
    #512da8 0%,
    #7f2b8c 100%
  );
`;

const Logo = styled.div`
  width: 90%;
  margin-top: 20vh;
  margin-left: 20px;

  color: ${props => props.theme.bgColor};
  font-size: 110px;

  font-family: 'PyeongChang Peace';
  font-style: normal;
  font-weight: 700;

  line-height: 120px;
  letter-spacing: -0.05em;
`;

const Introduce = styled.div`
  width: 90%;
  margin: 10px;
  padding: 0 10px;

  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.bgColor};
`;

const LoginButton = styled.button`
  width: 80%;
  height: 60px;
  margin-top: 100px;

  border-radius: 10px;
  border: none;

  background-color: ${props => props.theme.bgColor};
  color: ${props => props.theme.mainPurple};

  font-size: ${props => props.theme.fontXLarge};
  font-weight: ${props => props.theme.fontBold};
  text-align: center;
`;

const ExtraBox = styled.div`
  width: 80%;
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

const ExtraButton = styled.button`
  width: 50%;
  margin: 5px 0;

  display: flex;
  justify-content: end;
  align-items: center;

  border: none;
  background-color: rgba(255, 255, 255, 0);
  color: ${props => props.theme.bgColor};
  font-size: ${props => props.theme.fontMedium};
`;
export default HomeAuth;
