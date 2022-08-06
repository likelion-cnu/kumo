import React from 'react';
import styled from 'styled-components';

function Event() {
  return (
    <EventBox>
      <Box>
        <Text>즐겨찾기</Text>
      </Box>
    </EventBox>
  );
}

const EventBox = styled.div`
  width: 100%;
  padding: 2% 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  border: ${props => props.theme.borderPurple};
  border-radius: ${props => props.theme.borderRadius};
  margin: auto;
  width: 73%;
  height: 50px;
  positon: relative;
  top: 300px;
  tes-align: center;
`;

const Text = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  margin: 5% 8%;

  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

export default Event;
