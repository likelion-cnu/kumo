/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/auth/Header/Header';
import TitleBox from '../../components/auth/Form/TitleBox';
import Form from '../../components/auth/Form/Form';
import Input from '../../components/auth/Form/Input';
import FormButton from '../../components/auth/Form/FormButton';
import axios from 'axios';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onLoginClick = async () => {
    if (id === '' || password === '') {
      alert('다시 입력하세요');
    } else {
      // post 보내기
      console.log('post', id, password);
      try {
        const response = await axios.post(
          process.env.REACT_APP_KUMO_API + '/accounts/login/',
          {
            username: id,
            password: password,
          },
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
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
          <Input
            type="text"
            placeholder="ID"
            onChange={e => {
              e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
              setId(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="PASSWORD"
            onChange={e => {
              e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
              setPassword(e.target.value);
            }}
          />
          <FormButton onClick={onLoginClick}>로그인</FormButton>
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
