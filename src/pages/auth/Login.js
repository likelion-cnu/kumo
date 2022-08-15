import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/auth/Header/Header';
import TitleBox from '../../components/auth/Form/TitleBox';
import Form from '../../components/auth/Form/Form';
import Input from '../../components/auth/Form/Input';
import FormButton from '../../components/auth/Form/FormButton';

function Login() {
  const [id, setId] = useState(null);
  const [password, setPassword] = useState(null);

  const onIdChange = event => {
    setId(event.target.value);
  };

  const onPasswordChange = event => {
    setPassword(event.target.value);
  };

  const onButtonClick = () => {
    // post 보내기
    console.log('post', id, password);
  };

  return (
    <Body>
      <Header />
      <Box>
        <TitleBox
          title="Hi, Wecome! 👋"
          text="KUMO 서비스를 찾아주셔서 감사합니다."
        />
        <Form>
          <Input type="text" placeholder="ID" onChange={onIdChange} />
          <Input
            type="password"
            placeholder="PASSWORD"
            onChange={onPasswordChange}
          />
          <FormButton onClick={onButtonClick}>로그인</FormButton>
        </Form>
      </Box>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme.bgColor};
`;

const Box = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Login;
