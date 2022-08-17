/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Form from '../../components/auth/Form/Form';
import FormButton from '../../components/auth/Form/FormButton';
import Input from '../../components/auth/Form/Input';
import TitleBox from '../../components/auth/Form/TitleBox';

import Header from '../../components/auth/Header/Header';

function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [reEnter, setReEnter] = useState(false);
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isShop, setIsShop] = useState(null);

  const CreateAccount = async () => {
    if (
      id === '' ||
      password === '' ||
      reEnter === false ||
      nickname === '' ||
      phoneNumber === '' ||
      isShop === null
    ) {
      alert('다시 입력하세요');
    } else {
      try {
        const response = await axios.post(
          process.env.REACT_APP_KUMO_API + '/accounts/signup/',
          {
            username: id,
            password: password,
            nickname: nickname,
            profile_img: null,
            phone_num: phoneNumber,
            is_shop: isShop,
          },
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }

    setId('');
    setPassword('');
    setReEnter(false);
    setNickname('');
    setPhoneNumber('');
    setIsShop(null);
  };

  const onButtonClick = async () => {
    if (
      id === '' &&
      password === '' &&
      reEnter === false &&
      nickname === '' &&
      phoneNumber === '' &&
      isShop === null
    ) {
      console.log('error');
    } else {
      console.log('post', id, password, nickname, phoneNumber, isShop);
      CreateAccount();
    }
  };

  return (
    <Body>
      <Header />
      <Box>
        <TitleBox title="회원가입" text="지금 당장 쿠모와 함께하세요!" />
        <Form>
          <Input
            type="text"
            placeholder="ID"
            required
            onChange={e => {
              e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
              setId(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="PASSWORD"
            required
            onChange={e => {
              e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
              setPassword(e.target.value);
            }}
          />
          <Input
            type="password"
            placeholder="PASSWORD 확인"
            required
            onChange={e => {
              e.target.value = e.target.value.replace(/[^A-Za-z0-9]/gi, '');
              if (password === e.target.value) {
                setReEnter(true);
              } else {
                setReEnter(false);
              }
            }}
          />
          <PasswordAlert reEnter={reEnter}>
            {reEnter === true
              ? '비밀번호가 일치합니다'
              : '비밀번호가 일치하지 않습니다'}
          </PasswordAlert>
          <Input
            type="text"
            placeholder="NICKNAME"
            required
            onChange={e => {
              setNickname(e.target.value);
            }}
          />
          <Input
            type="tel"
            placeholder="PHONE: 000-0000-0000"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            required
            onChange={e => {
              setPhoneNumber(e.target.value);
            }}
          />
          <IsShop>
            <IsShopTitle>USER TYPE</IsShopTitle>
            <IsShopInputs>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
                onChange={e => {
                  if (e.target.value === 'customer') {
                    setIsShop(false);
                  } else if (e.target.value === 'shop') {
                    setIsShop(true);
                  }
                }}
              >
                <FormControlLabel
                  value="shop"
                  control={<Radio />}
                  label="가게"
                  size="small"
                />
                <FormControlLabel
                  value="customer"
                  control={<Radio />}
                  label="소비자"
                  size="small"
                />
              </RadioGroup>
            </IsShopInputs>
          </IsShop>
          <FormButton onClick={onButtonClick}>가입하기</FormButton>
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

const PasswordAlert = styled.div`
  margin-bottom: 30px;

  font-size: ${props => props.theme.fontXSmall};
  font-weight: ${props => props.theme.fontLight};

  color: ${props =>
    props.reEnter ? props.theme.fontGray : props.theme.heartRed};
`;

const IsShop = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding-left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const IsShopTitle = styled.div`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.fontGray};
`;

const IsShopInputs = styled.div`
  width: 100%;
  margin: 10px 0;

  .MuiFormGroup-root {
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;

export default Register;
