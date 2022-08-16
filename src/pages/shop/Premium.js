import React from 'react';
import styled from 'styled-components';

import DarkHeader from '../../components/shop/Header/DarkHeader';
import DataImg from '../../images/DataImg.png';

function Premium() {
  return (
    <Body>
      <DarkHeader />
      <Box1>
        <Text>지금 프리미엄 서비스를 월 9900원에 가입하세요.</Text>
      </Box1>
      <Box2>
        <Text2>저렴한 가격</Text2>
        <Text2>고객 데이터 분석</Text2>
        <Text2>가게 홍보</Text2>
      </Box2>
      <TextLeft>
        <Text3>데이터 분석 기능</Text3>
        <Right />
      </TextLeft>
      <Data src={DataImg} />
      <TextLeft>
        <Text3>가입하기</Text3>
        <Right />
      </TextLeft>
      <Box3>
        <Text4>월 9900원</Text4>
      </Box3>
      <Box3>
        <Text4>연 99000원</Text4>
      </Box3>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgDColor};
`;

const Box1 = styled.div`
  width: 80vw;
  height: 5vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1% 0;
  margin-top: 3%;
  background-color: ${props => props.theme.bgColor};

  border: none;

  border-radius: 10px;
  background-color: #6b6b6b;
`;

const Text = styled.div`
  // margin-left: 10px;

  color: ${props => props.theme.fontWhite};

  font-size: ${props => props.theme.fontXSmall};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

const Box2 = styled.div`
  width: 80vw;
  height: 12vh;

  flex-direction: column;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1% 0;
  background-color: ${props => props.theme.bgColor};

  border: none;

  border-radius: 10px;
  background-color: #6b6b6b;
`;

const Text2 = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;

  color: ${props => props.theme.fontWhite};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;
const TextLeft = styled.div`
  width: 100%;
  height: 70px;

  margin-top: 10px;
  padding: 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text3 = styled.div`
  margin-top: 10%;
  margin-bottom: 5px;

  display: flex;
  text-align: left;

  color: ${props => props.theme.fontWhite};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;
const Right = styled.div`
  display: flex;
  list-style: none;
`;
const Data = styled.img`
  width: 80%;
  height: 430px;
  margin: 15px;
`;

const Box3 = styled.div`
  width: 80vw;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5%;

  border: none;

  border-radius: 10px;
  background-color: #6b6b6b;
`;

const Text4 = styled.div`
  color: ${props => props.theme.fontWhite};

  font-size: ${props => props.theme.fontLogo};
  letter-spacing: 1px;

  font-family: 'PyeongChangPeace-Bold';
  font-weight: 800;
  font-style: normal;

  text-align: center;
`;

export default Premium;
