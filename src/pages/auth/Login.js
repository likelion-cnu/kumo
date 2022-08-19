/* eslint-disable */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../../components/auth/Header/Header';
import TitleBox from '../../components/auth/Form/TitleBox';
import Form from '../../components/auth/Form/Form';
import Input from '../../components/auth/Form/Input';
import FormButton from '../../components/auth/Form/FormButton';
import axios from 'axios';

import LOCAL from '../../CONSTANT/LOCAL';
import { useNavigate } from 'react-router-dom';
import LOCAL_KEY from '../../CONSTANT/LOCAL';

function Login({ logIn }) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  let localStorage = window.localStorage;
  const navigate = useNavigate();

  const onLoginClick = async () => {
    if (id === '' || password === '') {
      alert('다시 입력하세요');
    } else {
      try {
        const response = await axios.post(
          process.env.REACT_APP_KUMO_API + '/accounts/login/',
          {
            username: id.toString(),
            password: password.toString(),
          },
        );

        localStorage.setItem(LOCAL.IS_LOGGED_IN, 'true');
        localStorage.setItem(LOCAL.USER_NAME, response.data.serial_bo.username);
        localStorage.setItem(
          LOCAL.IS_SHOP,
          response.data.serial_bo.is_shop.toString(),
        );
        localStorage.setItem(LOCAL.TOKEN, response.data.token);

        logIn();
        navigate('/');
      } catch (err) {
        const message = err.response.data.error;
        alert(message);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem(LOCAL.IS_LOGGED_IN) === 'true') {
      navigate('/');
    }
  }, [localStorage.getItem(LOCAL.IS_LOGGED_IN)]);

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
