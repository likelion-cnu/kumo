import React from 'react';
import styled from 'styled-components';

import Header from '../../components/shop/Header/Header';

import MyData1 from '../../images/MyData1.png';
import MyData2 from '../../images/MyData2.png';
import MyData3 from '../../images/MyData3.png';

function MyPremium() {
  return (
    <Body>
      <Header />
      <TextLeft>
        <Text>재구매율</Text>
        <Right />
      </TextLeft>
      <Data1 src={MyData1} />
      <TextLeft>
        <Text>구매자 성별</Text>
        <Right />
      </TextLeft>
      <Data2 src={MyData2} />
      <TextLeft>
        <Text>피크 타임</Text>
        <Right />
      </TextLeft>
      <Data3 src={MyData3} />
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
const TextLeft = styled.div`
  width: 80%;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  text-align: left;

  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};
`;
const Right = styled.div`
  display: flex;
  list-style: none;
`;

const Data1 = styled.img`
  width: 180px;
  height: 180px;
  margin: 10px;
`;

const Data2 = styled.img`
  width: 250px;
  height: 70px;
  margin: 10px;
`;

const Data3 = styled.img`
  width: 180px;
  height: 180px;
  margin: 10px;
`;

export default MyPremium;
