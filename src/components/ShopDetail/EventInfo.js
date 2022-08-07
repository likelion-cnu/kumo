import React from 'react';
import styled from 'styled-components';
import ShopEvent from '../ShopList/ShopEvent';

function Event() {
  const shopDetail = [
    {
      event: '스탬프 10번 적립 시 쿠폰 1장',
    },
  ];
  return (
    <EventBox>
      <Box>
        {shopDetail.map(item => (
          <ShopEvent event={item.event} />
        ))}
      </Box>
    </EventBox>
  );
}

const EventBox = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  border: ${props => props.theme.borderPurple};
  border-radius: ${props => props.theme.borderRadius};
  margin: auto;
  width: 90%;
  height: 80px;
  positon: relative;
  top: 300px;
  tes-align: center;
`;

export default Event;
