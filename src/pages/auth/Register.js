import React, { useState } from 'react';
import styled from 'styled-components';
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
  const [reEnter, setReEnter] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isShop, setIsShop] = useState(null);

  const onIdChange = event => {
    setId(event.target.value);
  };

  const onPasswordChange = event => {
    setPassword(event.target.value);
  };

  const onReEnterChange = event => {
    if (password === event.target.value) {
      setReEnter(true);
    } else {
      setReEnter(false);
    }
  };

  const onNicknameChange = event => {
    setNickname(event.target.value);
  };

  const onPhoneNumberChange = event => {
    setPhoneNumber(event.target.value);
  };

  const onIsShopChange = event => {
    if (event.target.value === 'customer') {
      setIsShop(false);
    } else if (event.target.value === 'shop') {
      setIsShop(true);
    }
  };

  const onButtonClick = () => {
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
    }
    // post 보내기
  };

  return (
    <Body>
      <Header />
      <Box>
        <TitleBox title="회원가입" text="지금 당장 쿠모와 함께하세요!" />
        <Form>
          <Input type="text" placeholder="ID" required onChange={onIdChange} />
          <Input
            type="password"
            placeholder="PASSWORD"
            required
            onChange={onPasswordChange}
          />
          <Input
            type="password"
            placeholder="PASSWORD 확인"
            required
            onChange={onReEnterChange}
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
            onChange={onNicknameChange}
          />
          <Input
            type="tel"
            placeholder="PHONE: 000-0000-0000"
            pattern="010-[0-9]{4}-[0-9]{4}"
            required
            onChange={onPhoneNumberChange}
          />
          <IsShop>
            <IsShopTitle>USER TYPE</IsShopTitle>
            <IsShopInputs>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                required
                onChange={onIsShopChange}
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
