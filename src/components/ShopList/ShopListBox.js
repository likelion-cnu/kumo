import styled from 'styled-components';

const ShopListBox = styled.button`
  width: 80%;
  height: 175px;

  padding: 0 5%;

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

export default ShopListBox;
