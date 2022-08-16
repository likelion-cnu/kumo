import React from 'react';
import styled from 'styled-components';

function Event({ event }) {
  return <EventBox>{event}</EventBox>;
}

const EventBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.fontBlack};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};

  text-align: center;
`;

export default Event;
