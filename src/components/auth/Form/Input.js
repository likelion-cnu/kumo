import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 40px;

  margin-bottom: 25px;
  padding-left: 20px;

  border: ${props => props.theme.grayBarBorder};
  border-radius: 20px;
`;

export default Input;
