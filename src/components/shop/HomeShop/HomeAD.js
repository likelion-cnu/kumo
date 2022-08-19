import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function HomeAD() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/premium');
  };

  return (
    <Box>
      <ButtonBox onClick={onClick}>
        <Text>지금 프리미엄 서비스에 가입하고</Text>
        <Text>다양한 혜택을 누려보세요.</Text>
      </ButtonBox>
    </Box>
  );
}

const Box = styled.div`
  width: 80%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.button`
  width: 100%;
  height: 10vh;

  object-fit: contain;

  margin: 5%;

  border: ${props => props.theme.bgColor};
  border-radius: 10px;

  // background-color: ${props => props.theme.mainPurple};
  background: radial-gradient(
    101.92% 71.09% at 50.03% 57.76%,
    #512da8 0%,
    #7f2b8c 100%
  );
  color: ${props => props.theme.fontBlack};
`;

const Text = styled.div`
  width: 100%;

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};

  color: ${props => props.theme.bgColor};
`;

const Icon = styled.div`
  font-size: 50px;
`;

export default HomeAD;
