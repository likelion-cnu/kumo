import React from 'react';
import styled from 'styled-components';

function ShopStamp({ title, field, src, coupon, stamp }) {
  return (
    <Box>
      <TitleBox>
        <Title>{title}</Title>
        <Field>{field}</Field>
      </TitleBox>
      <ImgCouponBox>
        <Img src={src} />
        <CouponBox>
          <Coupon>☕️ · {coupon}</Coupon>
          <Stamp>
            <StampTitle>스탬프 ·</StampTitle>
            <StampBarBox>
              <StampBar style={{ width: stamp }} />
              <StampText>{stamp}</StampText>
            </StampBarBox>
          </Stamp>
        </CouponBox>
      </ImgCouponBox>
    </Box>
  );
}

const Box = styled.div`
  width: 80%;
  height: 175px;

  padding: 0 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-bottom: ${props => props.theme.borderGray};
`;

const TitleBox = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  align-items: center;

  /* margin-bottom: 1vh; */
`;

const Title = styled.div`
  color: ${props => props.theme.fontBlack};

  font-size: ${props => props.theme.fontMedium};
  font-weight: ${props => props.theme.fontBold};

  margin-right: 2.5%;
`;

const Field = styled.div`
  color: ${props => props.theme.fontGray};

  font-size: ${props => props.theme.fontSmall};
  font-weight: ${props => props.theme.fontLight};
`;

const ImgCouponBox = styled.div`
  width: 100%;
  height: 75%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  width: 25vw;
  height: 25vw;

  max-width: 125px;
  max-height: 125px;

  padding: 2%;

  object-fit: cover;

  border-radius: 20px;
`;

const CouponBox = styled.div`
  width: 55%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Coupon = styled.div`
  width: 100%;
`;

const Stamp = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StampTitle = styled.div`
  width: 40%;
`;

const StampBarBox = styled.div`
  width: 60%;
  height: 100%;

  border: ${props => props.theme.grayBarBorder};
  border-radius: 10px;

  position: relative;
`;

const StampBar = styled.div`
  height: 100%;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background-color: #d6c5ff;
`;

const StampText = styled.div`
  width: 100%;

  text-align: center;
  font-size: 10px;

  position: absolute;
  top: 9%;
`;

export default ShopStamp;
