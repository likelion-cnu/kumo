import styled from 'styled-components';

const FormButton = styled.button`
  width: 100px;
  height: 40px;
  margin-top: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 20px;

  background-color: ${props => props.theme.mainPurple};
  color: ${props => props.theme.bgColor};
  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontRegular};
`;

export default FormButton;
